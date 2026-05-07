#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
WORKDIR="$ROOT_DIR/e2e-network/__tmp__/fabricx-test-01"
 
mkdir -p "$WORKDIR"

cd "$WORKDIR"

# Track results
declare -A RESULTS
PASSED=0
FAILED=0

pass() {
  RESULTS["$1"]="✓ PASS"
  PASSED=$((PASSED + 1))
}

fail() {
  RESULTS["$1"]="❌ FAIL"
  FAILED=$((FAILED + 1))
}

# ---- Wait helper ----
wait_for_port() {
  local port="$1"
  local name="$2"
  local retries=60
  local i=0
  while [ $i -lt $retries ]; do
    if nc -z 127.0.0.1 "$port" >/dev/null 2>&1; then
      echo "  ✓ $name ($port) ready"
      return 0
    fi
    i=$((i + 1))
    sleep 1
  done
  echo "  ✗ $name ($port) not ready after ${retries}s"
  return 1
}

echo "========================================="
echo "  Fablo Fabric‑X E2E Test Suite"
echo "========================================="
echo ""

# ---- Build ----
echo "== Build =="
if (cd "$ROOT_DIR" && npm run build >/dev/null 2>&1); then
  pass "Build"
else
  fail "Build"
fi

# ---- Init ----
echo "== Init =="
npx fablo init --fabricx >/dev/null 2>&1

CONFIG_FILE="$WORKDIR/fablo-config-fabricx.json"
TARGET_DIR="$WORKDIR/fablo-target/fabricx"

if [ -f "$CONFIG_FILE" ]; then
  pass "Init: config file created"
else
  fail "Init: config file created"
fi

# ---- Generate ----
echo "== Generate =="
if npx fablo generate "$CONFIG_FILE" "$TARGET_DIR" >/dev/null 2>&1; then
  pass "Generate: command succeeded"
else
  fail "Generate: command succeeded"
fi

# Check generated files exist
for file in \
  "$TARGET_DIR/docker-compose.xdev.yaml" \
  "$TARGET_DIR/fabricx-engine-state.json" \
  "$TARGET_DIR/fxconfig/configtx.yaml" \
  "$TARGET_DIR/fxconfig/crypto-config.yaml"; do
  fname=$(basename "$file")
  if [ -f "$file" ]; then
    pass "Generate: $fname exists"
  else
    fail "Generate: $fname exists"
  fi
done

# Check crypto directory exists and has content
CRYPTO_DIR="$TARGET_DIR/crypto"
if [ -d "$CRYPTO_DIR" ] && [ "$(ls -A "$CRYPTO_DIR" 2>/dev/null)" ]; then
  pass "Generate: crypto material generated"
else
  fail "Generate: crypto material generated"
fi

# ---- Up ----
echo "== Up =="
if FABLO_LOCAL=true npx fablo up "$CONFIG_FILE" "$TARGET_DIR" >/dev/null 2>&1; then
  pass "Up: command succeeded"
else
  fail "Up: command succeeded"
fi

# ---- Port Checks ----
echo "== Port Checks =="

check_port() {
  local port="$1"
  local label="$2"
  if wait_for_port "$port" "$label"; then
    pass "Port: $label ($port)"
  else
    fail "Port: $label ($port)"
  fi
}

check_port 7050 "Orderer"
check_port 7001 "Query"
check_port 4001 "Sidecar"
check_port 5433 "Database"

# ---- Container Check ----
echo "== Container Check =="
if docker ps --filter name=fabricx-infra --filter status=running --format '{{.Names}}' 2>/dev/null | grep -q '^fabricx-infra$'; then
  pass "Container: fabricx-infra running"
else
  fail "Container: fabricx-infra running"
fi

# ---- Status Command ----
echo "== Status =="
STATUS_OUTPUT=$(npx fablo status "$CONFIG_FILE" "$TARGET_DIR" 2>/dev/null || true)
if echo "$STATUS_OUTPUT" | grep -qE 'fabricx-infra'; then
  pass "Status: reports fabricx-infra"
else
  fail "Status: reports fabricx-infra"
fi

# Check tick marks in status output
if echo "$STATUS_OUTPUT" | grep -q '✓.*reachable'; then
  pass "Status: shows reachable indicators"
else
  fail "Status: shows reachable indicators"
fi

# ---- Namespace Check ----
echo "== Namespace Check =="
NS_CHECK=$(docker run --rm --network container:fabricx-infra \
  -v "$(pwd)/$TARGET_DIR/crypto:/root/artifacts/crypto" \
  -e FXCONFIG_QUERIES_ADDRESS=127.0.0.1:7001 \
  ghcr.io/hyperledger/fabric-x-tools:latest \
  fxconfig namespace list 2>/dev/null || true)

if echo "$NS_CHECK" | grep -q 'token_namespace'; then
  pass "Namespace: token_namespace visible"
else
  fail "Namespace: token_namespace visible"
fi

# ---- Down ----
echo "== Down =="
if npx fablo down "$CONFIG_FILE" "$TARGET_DIR" >/dev/null 2>&1; then
  pass "Down: command succeeded"
else
  fail "Down: command succeeded"
fi

# ---- Verify Down ----
echo "== Verify Down =="
sleep 2
if docker ps --filter name=fabricx-infra --format '{{.Names}}' 2>/dev/null | grep -q '^fabricx-infra$'; then
  fail "Down: container removed"
else
  pass "Down: container removed"
fi

# ---- Summary Table ----
echo ""
echo "========================================="
echo "           TEST RESULTS SUMMARY"
echo "========================================="
printf "  %-45s %s\n" "CHECK" "RESULT"
printf "  %-45s %s\n" "---------------------------------------------" "------"

# Print results in a consistent order
ORDERED_CHECKS=(
  "Build"
  "Init: config file created"
  "Generate: command succeeded"
  "Generate: docker-compose.xdev.yaml exists"
  "Generate: fabricx-engine-state.json exists"
  "Generate: configtx.yaml exists"
  "Generate: crypto-config.yaml exists"
  "Generate: crypto material generated"
  "Up: command succeeded"
  "Port: Orderer (7050)"
  "Port: Query (7001)"
  "Port: Sidecar (4001)"
  "Port: Database (5433)"
  "Container: fabricx-infra running"
  "Status: reports fabricx-infra"
  "Status: shows reachable indicators"
  "Namespace: token_namespace visible"
  "Down: command succeeded"
  "Down: container removed"
)

for check in "${ORDERED_CHECKS[@]}"; do
  result="${RESULTS[$check]:-⚠️  SKIP}"
  printf "  %-45s %s\n" "$check" "$result"
done

echo "========================================="
printf "  TOTAL: %d  |  " "$((PASSED + FAILED))"
printf "✓ PASSED: %d  |  " "$PASSED"
printf "❌ FAILED: %d\n" "$FAILED"
echo "========================================="
echo ""

if [ "$FAILED" -gt 0 ]; then
  echo "❌ E2E test completed with failures."
  exit 1
else
  echo "✓ Fabric-X e2e test passed"
fi