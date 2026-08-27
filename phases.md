 
### Phase 1: Discovery & Pattern Matching

Before writing the script, analyze the conventions used by existing end-to-end network tests in the repository:

* **Inspect Reference Suites:** Study `e2e-network/docker/test-*.sh` (e.g., `test-01-*`, `test-02-*`) to mirror helper imports, assertions, exit code handling, and trap cleanup patterns.
* **Identify Global Helpers:** Locate standard utility functions like `assert_file_non_empty`, container status checkers (`docker inspect`), and CLI wrappers (`./fablo.sh`).
* **Pin Artifact Paths:** Confirm the exact relative target directories where `fablo.sh` writes Fabric-X cryptographic and configuration artifacts (e.g., `./fablo-target/` or `./crypto-config/`).

**Observations from `e2e-network/docker/test-01-v3-simple.sh`:**

- **Execution Context:** Creates isolated workspaces and dynamically sets up paths.
  ```bash
  TEST_TMP="$(rm -rf "$0.tmpdir" && mkdir -p "$0.tmpdir" && (cd "$0.tmpdir" && pwd))"
  TEST_LOGS="$(mkdir -p "$0.logs" && (cd "$0.logs" && pwd))"
  FABLO_HOME="$TEST_TMP/../../.."
  ```

- **Trap Cleanup & Error Handling:** Uses `set -e` alongside specific traps for robust teardown on exit or error.
  ```bash
  networkDown() {
    (for name in $(docker ps --format '{{.Names}}'); do dumpLogs "$name"; done)
    (cd "$TEST_TMP" && "$FABLO_HOME/fablo.sh" down)
  }
  
  trap networkDown EXIT
  trap 'networkDown ; echo "Test failed" ; exit 1' ERR SIGINT
  ```

- **Helper Scripts:** Frequently invokes external helpers located in the test directory.
  ```bash
  waitForContainer() {
    sh "$TEST_TMP/../wait-for-container.sh" "$1" "$2"
  }
  
  expectInvoke() {
    (cd "$TEST_TMP" && sh ../expect-invoke-cli.sh "$1" "$2" "$3" "$4" "$5" "$6")
  }
  ```

---

### Phase 2: Test Harness & Workspace Scaffolding

Create `e2e-network/docker/test-08-fabric-x.sh` and set up an isolated sandbox execution context.

* **Shell Rigor:** Start with `set -euo pipefail` to ensure fast-failure on unexpected errors.
* **Isolated Workspace:**
```bash
TEST_DIR="$(mktemp -d -t fabric-x-e2e-XXXXXX)"
trap 'rm -rf "$TEST_DIR"' EXIT
cd "$TEST_DIR"

```


* **Network Initialization:**
1. Run `fablo.sh init fabric-x` to scaffold the network profile.
2. Run `fablo.sh validate` and assert exit code `0`.
3. Execute `fablo.sh up` to generate artifacts and spin up Docker containers.

**Progress Report:**
- [x] Created `e2e-network/docker/test-08-fabric-x.sh` and set execution permissions (`chmod +x`).
- [x] Defined standard exit traps (`networkDown`) and logging helpers (`dumpLogs`) derived from `test-01-v3-simple.sh`.
- [x] Initialized workspace scaffolding using `TEST_TMP` temporary directory patterns.
- [x] Scripted sequence to run `fablo-build.sh`, followed by `init fabric-x`, `validate`, and `up`.

---

### Phase 3: Artifact Verification & Container Health Checks

Verify that generation produced valid, non-zero byte payloads and that services are operational.

* **Binary & TLS Artifact Assertions:**
* `config-block.pb.bin` exists and is non-empty (`[ -s "$path" ]`).
* `shared_config.binpb` exists and is non-empty.
* `client-tls-ca.pem` exists and is valid/non-empty.


* **Container Health Assertions:**
* Query running containers associated with the network label/compose project.
* Assert that all Fabric-X containers (orderers, peers, proxy services) have a status of `running` and a health state of `healthy` (if healthchecks are defined).

**Progress Report:**
- [x] Implemented `assert_non_empty` helper in `test-08-fabric-x.sh` to validate file paths and sizes.
- [x] Configured dynamic `find` searches for `config-block.pb.bin`, `shared_config.binpb`, and `client-tls-ca.pem` to assert they exist and are non-empty.
- [x] Added `docker ps` health assertions to verify `orderer` and `peer`/`committer` container presence.



---

### Phase 4: Namespace & Lifecycle Regression Validation

Structure the operational assertions in sequential sub-stages matching the issue requirements:

| Sub-Stage | Action | Expected Assertion |
| --- | --- | --- |
| **1. Zero State** | `fablo.sh namespace list` | Outputs 0 namespaces / empty list (exit `0`). |
| **2. Commit State** | `fablo.sh namespace init` | Commits default namespace (`mynamespace`). |
| **3. Post-Init Query** | `fablo.sh namespace list` | Confirms `mynamespace` is present. |
| **4. Idempotency** | Rerun `fablo.sh namespace init` | Exits `0` without error or duplicate mutation. |
| **5. Cache / Up Skip** | Rerun `fablo.sh up` | Skips artifact generation without mutating existing keys. |
| **6. Stop / Start** | `fablo.sh stop` then `fablo.sh start` | Network resumes; `mynamespace` remains accessible. |
| **7. Reset State** | `fablo.sh reset` | Clears state; running `namespace list` returns empty. |

**Progress Report:**
- [x] Implemented a `run_fablo()` helper to concisely invoke standard commands from the isolated workspace context.
- [x] Coded assertions for `namespace list` to ensure `mynamespace` is properly omitted in the zero state, present post-commit, and retained across restart/idempotency tests.
- [x] Encoded the full operational lifecycle sequentially: `init` -> query -> idempotency check (`init`) -> `up` skip -> `stop`/`start` -> `reset`.

---

### Phase 5: CI/CD Pipeline Wiring

Integrate the newly created test suite into the automated GitHub Actions / CI push pipeline.

* **examine:** examne `.github/workflows/`
* **Workflow Update:** Locate `.github/workflows/` (e.g., `test-e2e-docker.yml` or the push matrix workflow).
* **Matrix Addition:** Add `test-08-fabric-x` to the network test execution matrix or sequence.
* **Timeout & Resource Allocation:** Ensure adequate job timeout thresholds for container startup and Docker-in-Docker requirements.

**Progress Report:**
- [x] Examined the repository's action configurations and located `.github/workflows/test-on-push.yml`.
- [x] Spliced the `test-08-fabric-x` workflow job into the pipeline execution matrix.
- [x] Configured the workflow step to install dependencies, run the test script, and upload workflow artifacts (`tmpdir` and `logs`) for failure debugging.

---

### Phase 6: Local Validation, Documentation & PR Submission

* **Local End-to-End Run:** Execute `bash e2e-network/docker/test-08-fabric-x.sh` on a clean Docker daemon and confirm proper exit traps on both pass and artificial failure.
* **Pull Request Structure:**
* **Body:** Reference `#812`, summarize assertions added (file checks, health checks, namespace lifecycle, reset), and link local test logs / CI run artifacts.

**CI Troubleshooting & Bug Fixes:**
- **Issue**: Postgres container crashing with `FATAL: sorry, too many clients already` due to exhausted connections from the multiple sidecars and orderers.
  - **Resolution**: Updated `src/setup-docker/templates/fabric-x/docker-compose.yaml` to increase `max_connections=500` via command flag for the Postgres service.
- **Issue**: Second `fablo up` attempt in the cache test failing with `chmod: changing permissions of ... Operation not permitted` on CI runners because Postgres data files are generated as the `postgres` user, but the CI runner runs as `1001`.
  - **Resolution**: Switched from host bind-mounts to Docker named volumes (`committer-org1-db-data`) for the Postgres container in `src/setup-docker/templates/fabric-x/docker-compose.yaml`. This offloads permission management to Docker natively and eliminated the need for explicit `mkdir` and `chmod 777` steps in `src/setup-docker/templates/fabric-x/scripts/base-functions.sh`.
- **Issue**: Identifying silent failures in CI.
  - **Resolution**: Modified `e2e-network/docker/test-08-fabric-x.sh` to explicitly dump docker container logs on failure during CI execution to assist debugging.
- **Issue**: Archiving logs for reference.
  - **Resolution**: Appended comprehensive GitHub Action run logs to `logs.md`.