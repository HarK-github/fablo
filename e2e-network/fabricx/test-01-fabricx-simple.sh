#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
WORKDIR="$ROOT_DIR/e2e-network/__tmp__/fabricx-test-01"

rm -rf "$WORKDIR"
mkdir -p "$WORKDIR"

cd "$WORKDIR"

echo "== Build =="
(cd "$ROOT_DIR" && npm run build >/dev/null)

echo "== Init =="
npx fablo init --fabricx

CONFIG_FILE="$WORKDIR/fablo-config-fabricx.json"
TARGET_DIR="$WORKDIR/fablo-target/fabricx"

test -f "$CONFIG_FILE"

echo "== Generate =="
npx fablo generate "$CONFIG_FILE" "$TARGET_DIR"

test -f "$TARGET_DIR/docker-compose.xdev.yaml"
test -f "$TARGET_DIR/conf/routing-config.yaml"
test -f "$TARGET_DIR/conf/issuer1/core.yaml"
test -f "$TARGET_DIR/conf/endorser1/core.yaml"
test -f "$TARGET_DIR/conf/owner1/core.yaml"

echo "== Up =="
FABLO_LOCAL=true npx fablo up "$CONFIG_FILE" "$TARGET_DIR"

echo "== Wait For Ports =="
wait_for_port() {
  local port="$1"
  local name="$2"
  local retries=60
  local i=0
  while [ $i -lt $retries ]; do
    if nc -z 127.0.0.1 "$port" >/dev/null 2>&1; then
      echo "✓ $name ($port) ready"
      return 0
    fi
    i=$((i + 1))
    sleep 1
  done
  echo "✗ $name ($port) not ready after ${retries}s"
  return 1
}

wait_for_port 7050 "Orderer"
wait_for_port 7001 "Query"

echo "== Containers =="
docker ps --filter name=committer --format '{{.Names}}' | rg -q '^committer$'

echo "== Status =="
npx fablo status "$CONFIG_FILE" "$TARGET_DIR" | rg -q 'committer'

echo "== Down =="
npx fablo down "$CONFIG_FILE" "$TARGET_DIR"

echo "== Verify Down =="
if docker ps --filter name=committer --format '{{.Names}}' | rg -q '^committer$'; then
  echo "✗ committer container still running"
  exit 1
fi

echo "✅ Fabric-X e2e test passed"

