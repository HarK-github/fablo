
Skip to content

    HarK-github
    fablo

Repository navigation

    Code
    Pull requests3 (3)
    Agents
    Actions
    Projects
    Wiki

Tests
fix(test): increase postgres max_connections to fix 'too many clients… #149

    All jobs
    Run details

test-08-fabric-x
failed 39 minutes ago in 2m 24s
1s
1s
12s
40s
Run shellcheck --version && \
ShellCheck - shell script analysis tool
version: 0.9.0
license: GNU General Public License, version 3
website: https://www.shellcheck.net
yamllint 1.38.0
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated flatten@1.0.3: flatten is deprecated in favor of utility frameworks such as lodash.
npm warn deprecated @humanwhocodes/config-array@0.5.0: Use @eslint/config-array instead
npm warn deprecated @humanwhocodes/object-schema@1.2.1: Use @eslint/object-schema instead
npm warn deprecated eslint@7.32.0: This version is no longer supported. Please see https://eslint.org/version-support for other options.
added 1187 packages, and audited 1188 packages in 13s
188 packages are looking for funding
  run `npm fund` for details
7 vulnerabilities (2 low, 1 moderate, 4 high)
To address all issues, run:
  npm audit fix
Run `npm audit` for details.
allexport      	off
braceexpand    	on
emacs          	off
errexit        	on
errtrace       	off
functrace      	off
hashall        	on
histexpand     	off
history        	off
ignoreeof      	off
interactive-comments	on
keyword        	off
monitor        	off
noclobber      	off
noexec         	off
noglob         	off
nolog          	off
notify         	off
nounset        	on
onecmd         	off
physical       	off
pipefail       	off
posix          	off
privileged     	off
verbose        	off
vi             	off
xtrace         	off
Building new image...
   FABLO_HOME:    /home/runner/work/fablo/fablo
   FABLO_VERSION: 2.6.0
   VERSION_DETAILS: 2026-08-27-14:09:43-f2aa66b
Found '/home/runner/work/fablo/fablo/.nvmrc' with version <20>
Downloading and installing node v20.20.2...
Downloading https://nodejs.org/dist/v20.20.2/node-v20.20.2-linux-x64.tar.xz...
##                                                                         3.5%
################################################################          89.0%
######################################################################## 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v20.20.2 (npm v10.8.2)
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated flatten@1.0.3: flatten is deprecated in favor of utility frameworks such as lodash.
npm warn deprecated @humanwhocodes/config-array@0.5.0: Use @eslint/config-array instead
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated @humanwhocodes/object-schema@1.2.1: Use @eslint/object-schema instead
npm warn deprecated eslint@7.32.0: This version is no longer supported. Please see https://eslint.org/version-support for other options.
added 1187 packages, and audited 1188 packages in 9s
188 packages are looking for funding
  run `npm fund` for details
7 vulnerabilities (2 low, 1 moderate, 4 high)
To address all issues, run:
  npm audit fix
Run `npm audit` for details.
> fablo@2.6.0 build:dist
> npm run clean && tsc -p tsconfig-dist.json && npm run copydeps
> fablo@2.6.0 clean
> rimraf dist
> fablo@2.6.0 copydeps
> copyfiles --all --up 1 'src/*/templates/**' dist
#0 building with "default" instance using docker driver
#1 [internal] load build definition from Dockerfile
#1 transferring dockerfile: 873B done
#1 DONE 0.0s
#2 [auth] library/node:pull token for registry-1.docker.io
#2 DONE 0.0s
#3 [internal] load metadata for docker.io/library/node:20-alpine
#3 DONE 0.4s
#4 [internal] load .dockerignore
#4 transferring context: 339B done
#4 DONE 0.0s
#5 [ 1/18] FROM docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293
#5 resolve docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293 done
#5 sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293 7.67kB / 7.67kB done
#5 sha256:afdf98210b07b586eb71fa22ba2e432e058e4cd1304d31ed60888755b8c865fb 1.72kB / 1.72kB done
#5 sha256:11cedc39e663e7c5d5cb9cc77a461a0d2adc25537b94e6831a6108f09cb2001b 6.52kB / 6.52kB done
#5 sha256:6a0ac1617861a677b045b7ff88545213ec31c0ff08763195a70a4a5adda577bb 1.05MB / 3.86MB 0.1s
#5 sha256:4feea04c154301db6f4a496efa397b3db96603b1c009c797cfdde77bea8b3287 6.29MB / 43.23MB 0.1s
#5 sha256:b2cbbfe903b0821005780971ddc5892edcc4ce74c5a48d82e1d2b382edac3122 1.26MB / 1.26MB 0.1s done
#5 ...
#6 [internal] load build context
#6 transferring context: 19.85MB 0.1s done
#6 DONE 0.1s
#5 [ 1/18] FROM docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293
#5 sha256:6a0ac1617861a677b045b7ff88545213ec31c0ff08763195a70a4a5adda577bb 3.86MB / 3.86MB 0.1s done
#5 sha256:4feea04c154301db6f4a496efa397b3db96603b1c009c797cfdde77bea8b3287 43.23MB / 43.23MB 0.2s done
#5 extracting sha256:6a0ac1617861a677b045b7ff88545213ec31c0ff08763195a70a4a5adda577bb 0.1s
#5 sha256:fff4e2c1b189bf87d63ad8bd07f7f4eb288d6f2b6a07a8bb44c60e8c075d2096 445B / 445B 0.1s done
#5 extracting sha256:6a0ac1617861a677b045b7ff88545213ec31c0ff08763195a70a4a5adda577bb 0.1s done
#5 extracting sha256:4feea04c154301db6f4a496efa397b3db96603b1c009c797cfdde77bea8b3287 0.1s
#5 extracting sha256:4feea04c154301db6f4a496efa397b3db96603b1c009c797cfdde77bea8b3287 1.1s done
#5 extracting sha256:b2cbbfe903b0821005780971ddc5892edcc4ce74c5a48d82e1d2b382edac3122
#5 extracting sha256:b2cbbfe903b0821005780971ddc5892edcc4ce74c5a48d82e1d2b382edac3122 0.0s done
#5 extracting sha256:fff4e2c1b189bf87d63ad8bd07f7f4eb288d6f2b6a07a8bb44c60e8c075d2096 done
#5 DONE 3.4s
#7 [ 2/18] RUN apk add --no-cache sudo shfmt
#7 0.554 (1/2) Installing shfmt (3.11.0-r10)
#7 0.591 (2/2) Installing sudo (1.9.17_p2-r0)
#7 0.613 Executing busybox-1.37.0-r30.trigger
#7 0.621 OK: 15.8 MiB in 20 packages
#7 DONE 0.7s
#8 [ 3/18] COPY dist /fablo/dist
#8 DONE 0.0s
#9 [ 4/18] COPY package.json /fablo/package.json
#9 DONE 0.0s
#10 [ 5/18] COPY package-lock.json /fablo/package-lock.json
#10 DONE 0.0s
#11 [ 6/18] COPY samples/chaincodes/chaincode-kv-node /fablo/generators/init/templates/chaincodes/chaincode-kv-node
#11 DONE 0.0s
#12 [ 7/18] COPY samples/gateway/node /fablo/generators/init/templates/gateway/node
#12 DONE 0.0s
#13 [ 8/18] WORKDIR /fablo
#13 DONE 0.0s
#14 [ 9/18] RUN npm install --silent --only=prod
#14 DONE 3.2s
#15 [10/18] RUN npm link
#15 0.713 
#15 0.713 added 1 package, and audited 3 packages in 513ms
#15 0.713 
#15 0.713 found 0 vulnerabilities
#15 DONE 0.7s
#16 [11/18] COPY docker-entrypoint.sh /fablo/docker-entrypoint.sh
#16 DONE 0.0s
#17 [12/18] COPY bin /fablo/bin
#17 DONE 0.0s
#18 [13/18] COPY bin/run.mjs /fablo/bin/run.mjs
#18 DONE 0.0s
#19 [14/18] COPY docs /fablo/docs
#19 DONE 0.0s
#20 [15/18] COPY README.md /fablo/README.md
#20 DONE 0.0s
#21 [16/18] COPY samples /fablo/samples/
#21 DONE 0.0s
#22 [17/18] RUN echo "{ "buildInfo": "2026-08-27-14:09:43-f2aa66b" }" > /fablo/version.json
#22 DONE 0.1s
#23 [18/18] RUN cat /fablo/version.json
#23 0.131 { "buildInfo": "2026-08-27-14:09:43-f2aa66b" }
#23 DONE 0.1s
#24 exporting to image
#24 exporting layers
#24 exporting layers 1.7s done
#24 writing image sha256:9bf228f4d9c2a02ded085ae67267ad6b51f2fad81496e7e6fbeb2ced80345293 done
#24 naming to ghcr.io/fablo-io/fablo:2.6.0 done
#24 DONE 1.7s
 1 warning found (use docker --debug to expand):
 - JSONArgsRecommended: JSON arguments recommended for CMD to prevent unintended behavior related to OS signals (line 31)
1m 27s
Run e2e-network/docker/test-08-fabric-x.sh
++ rm -rf e2e-network/docker/test-08-fabric-x.sh.tmpdir
++ mkdir -p e2e-network/docker/test-08-fabric-x.sh.tmpdir
++ cd e2e-network/docker/test-08-fabric-x.sh.tmpdir
++ pwd
+ TEST_TMP=/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir
++ mkdir -p e2e-network/docker/test-08-fabric-x.sh.logs
++ cd e2e-network/docker/test-08-fabric-x.sh.logs
++ pwd
+ TEST_LOGS=/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs
+ FABLO_HOME=/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/../../..
+ export FABLO_HOME
+ trap networkDown EXIT SIGINT
+ echo 'Starting Fabric-X Network Initialization...'
+ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/../../../fablo-build.sh
Starting Fabric-X Network Initialization...
allexport      	off
braceexpand    	on
emacs          	off
errexit        	on
errtrace       	off
functrace      	off
hashall        	on
histexpand     	off
history        	off
ignoreeof      	off
interactive-comments	on
keyword        	off
monitor        	off
noclobber      	off
noexec         	off
noglob         	off
nolog          	off
notify         	off
nounset        	on
onecmd         	off
physical       	off
pipefail       	off
posix          	off
privileged     	off
verbose        	off
vi             	off
xtrace         	off
Building new image...
   FABLO_HOME:    /home/runner/work/fablo/fablo
   FABLO_VERSION: 2.6.0
   VERSION_DETAILS: 2026-08-27-14:10:10-f2aa66b
Found '/home/runner/work/fablo/fablo/.nvmrc' with version <20>
v20.20.2 is already installed.
Now using node v20.20.2 (npm v10.8.2)
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated flatten@1.0.3: flatten is deprecated in favor of utility frameworks such as lodash.
npm warn deprecated @humanwhocodes/config-array@0.5.0: Use @eslint/config-array instead
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated @humanwhocodes/object-schema@1.2.1: Use @eslint/object-schema instead
npm warn deprecated eslint@7.32.0: This version is no longer supported. Please see https://eslint.org/version-support for other options.
added 1187 packages, and audited 1188 packages in 9s
188 packages are looking for funding
  run `npm fund` for details
7 vulnerabilities (2 low, 1 moderate, 4 high)
To address all issues, run:
  npm audit fix
Run `npm audit` for details.
> fablo@2.6.0 build:dist
> npm run clean && tsc -p tsconfig-dist.json && npm run copydeps
> fablo@2.6.0 clean
> rimraf dist
> fablo@2.6.0 copydeps
> copyfiles --all --up 1 'src/*/templates/**' dist
#0 building with "default" instance using docker driver
#1 [internal] load build definition from Dockerfile
#1 transferring dockerfile: 873B done
#1 WARN: JSONArgsRecommended: JSON arguments recommended for CMD to prevent unintended behavior related to OS signals (line 31)
#1 DONE 0.0s
#2 [internal] load metadata for docker.io/library/node:20-alpine
#2 DONE 0.1s
#3 [internal] load .dockerignore
#3 transferring context: 339B done
#3 DONE 0.0s
#4 [ 1/18] FROM docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293
#4 DONE 0.0s
#5 [internal] load build context
#5 transferring context: 488.43kB 0.0s done
#5 DONE 0.0s
#6 [ 4/18] COPY package.json /fablo/package.json
#6 CACHED
#7 [ 8/18] WORKDIR /fablo
#7 CACHED
#8 [15/18] COPY README.md /fablo/README.md
#8 CACHED
#9 [ 5/18] COPY package-lock.json /fablo/package-lock.json
#9 CACHED
#10 [10/18] RUN npm link
#10 CACHED
#11 [11/18] COPY docker-entrypoint.sh /fablo/docker-entrypoint.sh
#11 CACHED
#12 [ 7/18] COPY samples/gateway/node /fablo/generators/init/templates/gateway/node
#12 CACHED
#13 [12/18] COPY bin /fablo/bin
#13 CACHED
#14 [13/18] COPY bin/run.mjs /fablo/bin/run.mjs
#14 CACHED
#15 [ 6/18] COPY samples/chaincodes/chaincode-kv-node /fablo/generators/init/templates/chaincodes/chaincode-kv-node
#15 CACHED
#16 [ 2/18] RUN apk add --no-cache sudo shfmt
#16 CACHED
#17 [ 3/18] COPY dist /fablo/dist
#17 CACHED
#18 [ 9/18] RUN npm install --silent --only=prod
#18 CACHED
#19 [14/18] COPY docs /fablo/docs
#19 CACHED
#20 [16/18] COPY samples /fablo/samples/
#20 CACHED
#21 [17/18] RUN echo "{ "buildInfo": "2026-08-27-14:10:10-f2aa66b" }" > /fablo/version.json
#21 DONE 1.4s
#22 [18/18] RUN cat /fablo/version.json
#22 0.116 { "buildInfo": "2026-08-27-14:10:10-f2aa66b" }
#22 DONE 0.1s
#23 exporting to image
#23 exporting layers
#23 exporting layers 0.4s done
#23 writing image sha256:c824f83d8db16531ade158724cd53d4a2f29957ec945a9b73c4760e15ea999f9 done
#23 naming to ghcr.io/fablo-io/fablo:2.6.0 done
#23 DONE 0.4s
 1 warning found (use docker --debug to expand):
 - JSONArgsRecommended: JSON arguments recommended for CMD to prevent unintended behavior related to OS signals (line 31)
+ cd /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir
+ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/../../../fablo.sh init fabric-x
┌──────      .─.       ┌─────.    ╷           .────.
│           /   \      │      │   │         ╱        ╲ 
├─────     /     \     ├─────:    │        │          │
│         /───────\    │      │   │         ╲        ╱ 
╵        /         \   └─────'    └──────     '────'                      v2.6.0
┌┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐
│ https://fablo.io | created at SoftwareMill | backed by Hyperledger Foundation│
└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘
Creating minimal Fabric-X starter config
===========================================================
Sample config file created! :)
You can start your network with 'fablo up' command
===========================================================
+ cd /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir
+ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/../../../fablo.sh validate
Validation errors count: 0
Validation warnings count: 0
===========================================================
+ UP_SUCCESS=false
+ for i in {1..5}
+ run_fablo up
+ cd /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir
+ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/../../../fablo.sh up
Network target directory is empty
┌──────      .─.       ┌─────.    ╷           .────.
│           /   \      │      │   │         ╱        ╲ 
├─────     /     \     ├─────:    │        │          │
│         /───────\    │      │   │         ╲        ╱ 
╵        /         \   └─────'    └──────     '────'                      v2.6.0
┌┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐
│ https://fablo.io | created at SoftwareMill | backed by Hyperledger Foundation│
└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘
Generating network config
    FABLO_VERSION:      2.6.0
    FABLO_CONFIG:       /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-config.json
    FABLO_NETWORK_ROOT: /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target
Setting up network based on config: fablo-config.json
fablo config is:  /network/workspace/fablo-config.json
Used network config: /network/workspace/fablo-config.json
Fabric version is: 3.1.0
Generating docker-compose network 'fablo_network_202608271410'...
Generating Fabric-X network files...
Fabric-X network files successfully generated under fabric-x/
Done & done !!! Try the network out: 
-> fablo up - to start network
-> fablo help - to view all commands
Formatting generated files
Executing post-generate hook
Executing Fablo Fabric-X command: up
Fixing permissions on data directories so container internal users can write to host bind mounts...
Generating Fabric-X crypto material...
Unable to find image 'ghcr.io/hyperledger/fabric-x-tools:1.0.0' locally
1.0.0: Pulling from hyperledger/fabric-x-tools
2920d84eafa0: Pulling fs layer
feeceb2a02c8: Pulling fs layer
5000d937b4da: Pulling fs layer
4f4fb700ef54: Pulling fs layer
4f4fb700ef54: Waiting
feeceb2a02c8: Download complete
4f4fb700ef54: Verifying Checksum
4f4fb700ef54: Download complete
2920d84eafa0: Verifying Checksum
2920d84eafa0: Download complete
5000d937b4da: Verifying Checksum
5000d937b4da: Download complete
2920d84eafa0: Pull complete
feeceb2a02c8: Pull complete
5000d937b4da: Pull complete
4f4fb700ef54: Pull complete
Digest: sha256:0795a9d807a5502d9a48686b56e3f83bfac85c0f7ec1cd6953de5c487104f78e
Status: Downloaded newer image for ghcr.io/hyperledger/fabric-x-tools:1.0.0
Generating Fabric-X shared config proto...
Unable to find image 'ghcr.io/hyperledger/fabric-x-orderer:1.0.0' locally
1.0.0: Pulling from hyperledger/fabric-x-orderer
2920d84eafa0: Already exists
b27122ed2cf4: Pulling fs layer
2566802e6aec: Pulling fs layer
54e4f559cd12: Pulling fs layer
4f4fb700ef54: Pulling fs layer
4f4fb700ef54: Waiting
b27122ed2cf4: Verifying Checksum
b27122ed2cf4: Download complete
b27122ed2cf4: Pull complete
4f4fb700ef54: Verifying Checksum
4f4fb700ef54: Download complete
54e4f559cd12: Verifying Checksum
54e4f559cd12: Download complete
2566802e6aec: Verifying Checksum
2566802e6aec: Download complete
2566802e6aec: Pull complete
54e4f559cd12: Pull complete
4f4fb700ef54: Pull complete
Digest: sha256:5c682a1a0f70396408816ae689545159872e393370f9e301e41bdac11605d7a2
Status: Downloaded newer image for ghcr.io/hyperledger/fabric-x-orderer:1.0.0
Generating Fabric-X genesis / config block...
2026-08-27 14:10:31.038 UTC 0001 INFO [common.tools.configtxgen] main -> Loading configuration
2026-08-27 14:10:31.043 UTC 0002 INFO [common.tools.configtxgen] completeInitialization -> orderer type: arma
2026-08-27 14:10:31.043 UTC 0003 INFO [common.tools.configtxgen] Load -> Loaded configuration: /config/configtx.yaml
2026-08-27 14:10:31.045 UTC 0004 INFO [common.tools.configtxgen] GetOutputBlock -> Generating genesis block
2026-08-27 14:10:31.045 UTC 0005 INFO [common.tools.configtxgen] GetOutputBlock -> Creating application channel genesis block
2026-08-27 14:10:31.045 UTC 0006 INFO [common.tools.configtxgen] DoOutputBlock -> Writing genesis block
Fixing permissions for crypto material to ensure containers can read TLS keys...
 committer-org1-coordinator Pulling 
 committer-org1-db Pulling 
 committer-org1-validator Pulling 
 committer-org1-query-service Pulling 
 committer-org1-verifier Pulling 
 committer-org1-sidecar Pulling 
 2920d84eafa0 Already exists 
 07a77966d1aa Pulling fs layer 
 3f8c1fc48a27 Pulling fs layer 
 0f07310805ef Pulling fs layer 
 4f4fb700ef54 Pulling fs layer 
 4f4fb700ef54 Waiting 
 2920d84eafa0 Already exists 
 07a77966d1aa Pulling fs layer 
 3f8c1fc48a27 Pulling fs layer 
 0f07310805ef Pulling fs layer 
 4f4fb700ef54 Pulling fs layer 
 4f4fb700ef54 Waiting 
 2920d84eafa0 Already exists 
 2920d84eafa0 Already exists 
 07a77966d1aa Pulling fs layer 
 3f8c1fc48a27 Pulling fs layer 
 0f07310805ef Pulling fs layer 
 4f4fb700ef54 Pulling fs layer 
 4f4fb700ef54 Waiting 
 07a77966d1aa Pulling fs layer 
 3f8c1fc48a27 Pulling fs layer 
 0f07310805ef Pulling fs layer 
 4f4fb700ef54 Pulling fs layer 
 4f4fb700ef54 Waiting 
 2920d84eafa0 Already exists 
 07a77966d1aa Pulling fs layer 
 3f8c1fc48a27 Pulling fs layer 
 0f07310805ef Pulling fs layer 
 4f4fb700ef54 Pulling fs layer 
 4f4fb700ef54 Waiting 
 6a0ac1617861 Already exists 
 2d60466be50c Pulling fs layer 
 6389c679d448 Pulling fs layer 
 561ed1490a5c Pulling fs layer 
 bad9a60af1cb Pulling fs layer 
 6964af6a9400 Pulling fs layer 
 2f94990e3c9b Pulling fs layer 
 6389c679d448 Waiting 
 5993a5f08046 Pulling fs layer 
 fe238b783bbd Pulling fs layer 
 561ed1490a5c Waiting 
 bad9a60af1cb Waiting 
 6964af6a9400 Waiting 
 2f94990e3c9b Waiting 
 5993a5f08046 Waiting 
 2d60466be50c Waiting 
 fe238b783bbd Waiting 
 0f07310805ef Verifying Checksum 
 0f07310805ef Download complete 
 0f07310805ef Verifying Checksum 
 0f07310805ef Download complete 
 0f07310805ef Downloading [==================================================>]     163B/163B
 0f07310805ef Verifying Checksum 
 0f07310805ef Verifying Checksum 
 0f07310805ef Download complete 
 0f07310805ef Download complete 
 0f07310805ef Downloading [==================================================>]     163B/163B
 0f07310805ef Verifying Checksum 
 0f07310805ef Download complete 
 07a77966d1aa Download complete 
 07a77966d1aa Download complete 
 07a77966d1aa Download complete 
 07a77966d1aa Download complete 
 07a77966d1aa Downloading [==================================================>]     645B/645B
 07a77966d1aa Verifying Checksum 
 07a77966d1aa Download complete 
 07a77966d1aa Extracting [==================================================>]     645B/645B
 07a77966d1aa Extracting [==================================================>]     645B/645B
 07a77966d1aa Extracting [==================================================>]     645B/645B
 07a77966d1aa Extracting [==================================================>]     645B/645B
 07a77966d1aa Extracting [==================================================>]     645B/645B
 07a77966d1aa Extracting [==================================================>]     645B/645B
 07a77966d1aa Extracting [==================================================>]     645B/645B
 07a77966d1aa Extracting [==================================================>]     645B/645B
 07a77966d1aa Extracting [==================================================>]     645B/645B
 07a77966d1aa Extracting [==================================================>]     645B/645B
 07a77966d1aa Pull complete 
 07a77966d1aa Pull complete 
 07a77966d1aa Pull complete 
 07a77966d1aa Pull complete 
 07a77966d1aa Pull complete 
 3f8c1fc48a27 Downloading [>                                                  ]  113.4kB/11.17MB
 3f8c1fc48a27 Downloading [>                                                  ]  113.4kB/11.17MB
 3f8c1fc48a27 Downloading [>                                                  ]  113.4kB/11.17MB
 3f8c1fc48a27 Downloading [>                                                  ]  113.4kB/11.17MB
 3f8c1fc48a27 Downloading [>                                                  ]  113.4kB/11.17MB
 2d60466be50c Downloading [==================================================>]     969B/969B
 2d60466be50c Verifying Checksum 
 2d60466be50c Download complete 
 2d60466be50c Extracting [==================================================>]     969B/969B
 2d60466be50c Extracting [==================================================>]     969B/969B
 4f4fb700ef54 Downloading [==================================================>]      32B/32B
 4f4fb700ef54 Downloading [==================================================>]      32B/32B
 4f4fb700ef54 Verifying Checksum 
 4f4fb700ef54 Downloading [==================================================>]      32B/32B
 4f4fb700ef54 Verifying Checksum 
 4f4fb700ef54 Downloading [==================================================>]      32B/32B
 4f4fb700ef54 Verifying Checksum 
 4f4fb700ef54 Download complete 
 4f4fb700ef54 Verifying Checksum 
 4f4fb700ef54 Download complete 
 4f4fb700ef54 Download complete 
 4f4fb700ef54 Download complete 
 4f4fb700ef54 Downloading [==================================================>]      32B/32B
 4f4fb700ef54 Verifying Checksum 
 4f4fb700ef54 Download complete 
 2d60466be50c Pull complete 
 6389c679d448 Downloading [>                                                  ]  15.74kB/919.1kB
 561ed1490a5c Downloading [==================================================>]     116B/116B
 561ed1490a5c Verifying Checksum 
 561ed1490a5c Download complete 
 6389c679d448 Verifying Checksum 
 6389c679d448 Download complete 
 6389c679d448 Extracting [=>                                                 ]  32.77kB/919.1kB
 3f8c1fc48a27 Downloading [===============================================>   ]   10.6MB/11.17MB
 3f8c1fc48a27 Downloading [===============================================>   ]   10.6MB/11.17MB
 3f8c1fc48a27 Downloading [===============================================>   ]   10.6MB/11.17MB
 3f8c1fc48a27 Downloading [===============================================>   ]   10.6MB/11.17MB
 3f8c1fc48a27 Downloading [===============================================>   ]   10.6MB/11.17MB
 3f8c1fc48a27 Downloading [==================================================>]  11.17MB/11.17MB
 3f8c1fc48a27 Verifying Checksum 
 3f8c1fc48a27 Download complete 
 3f8c1fc48a27 Download complete 
 3f8c1fc48a27 Download complete 
 3f8c1fc48a27 Download complete 
 3f8c1fc48a27 Download complete 
 3f8c1fc48a27 Extracting [>                                                  ]  131.1kB/11.17MB
 3f8c1fc48a27 Extracting [>                                                  ]  131.1kB/11.17MB
 3f8c1fc48a27 Extracting [>                                                  ]  131.1kB/11.17MB
 3f8c1fc48a27 Extracting [>                                                  ]  131.1kB/11.17MB
 3f8c1fc48a27 Extracting [>                                                  ]  131.1kB/11.17MB
 6389c679d448 Extracting [==================================================>]  919.1kB/919.1kB
 6389c679d448 Pull complete 
 561ed1490a5c Extracting [==================================================>]     116B/116B
 561ed1490a5c Extracting [==================================================>]     116B/116B
 561ed1490a5c Pull complete 
 6964af6a9400 Downloading [=========>                                         ]    3.5kB/18.92kB
 6964af6a9400 Downloading [==================================================>]  18.92kB/18.92kB
 6964af6a9400 Verifying Checksum 
 6964af6a9400 Download complete 
 bad9a60af1cb Downloading [>                                                  ]  527.8kB/109.2MB
 2f94990e3c9b Downloading [==================================================>]     128B/128B
 2f94990e3c9b Download complete 
 5993a5f08046 Downloading [============================>                      ]  3.501kB/6.097kB
 5993a5f08046 Downloading [==================================================>]  6.097kB/6.097kB
 5993a5f08046 Verifying Checksum 
 5993a5f08046 Download complete 
 3f8c1fc48a27 Extracting [=============================>                     ]  6.554MB/11.17MB
 3f8c1fc48a27 Extracting [=============================>                     ]  6.554MB/11.17MB
 3f8c1fc48a27 Extracting [=============================>                     ]  6.554MB/11.17MB
 3f8c1fc48a27 Extracting [=============================>                     ]  6.554MB/11.17MB
 3f8c1fc48a27 Extracting [=============================>                     ]  6.554MB/11.17MB
 fe238b783bbd Downloading [==================================================>]     185B/185B
 fe238b783bbd Verifying Checksum 
 fe238b783bbd Download complete 
 bad9a60af1cb Downloading [==>                                                ]  5.269MB/109.2MB
 3f8c1fc48a27 Extracting [==================================================>]  11.17MB/11.17MB
 3f8c1fc48a27 Extracting [==================================================>]  11.17MB/11.17MB
 3f8c1fc48a27 Extracting [==================================================>]  11.17MB/11.17MB
 3f8c1fc48a27 Extracting [==================================================>]  11.17MB/11.17MB
 3f8c1fc48a27 Extracting [==================================================>]  11.17MB/11.17MB
 3f8c1fc48a27 Pull complete 
 3f8c1fc48a27 Pull complete 
 3f8c1fc48a27 Pull complete 
 3f8c1fc48a27 Pull complete 
 3f8c1fc48a27 Pull complete 
 0f07310805ef Extracting [==================================================>]     163B/163B
 0f07310805ef Extracting [==================================================>]     163B/163B
 0f07310805ef Extracting [==================================================>]     163B/163B
 0f07310805ef Extracting [==================================================>]     163B/163B
 0f07310805ef Extracting [==================================================>]     163B/163B
 0f07310805ef Extracting [==================================================>]     163B/163B
 0f07310805ef Extracting [==================================================>]     163B/163B
 0f07310805ef Extracting [==================================================>]     163B/163B
 0f07310805ef Extracting [==================================================>]     163B/163B
 0f07310805ef Extracting [==================================================>]     163B/163B
 0f07310805ef Pull complete 
 0f07310805ef Pull complete 
 0f07310805ef Pull complete 
 0f07310805ef Pull complete 
 0f07310805ef Pull complete 
 4f4fb700ef54 Extracting [==================================================>]      32B/32B
 4f4fb700ef54 Extracting [==================================================>]      32B/32B
 4f4fb700ef54 Extracting [==================================================>]      32B/32B
 4f4fb700ef54 Extracting [==================================================>]      32B/32B
 4f4fb700ef54 Extracting [==================================================>]      32B/32B
 4f4fb700ef54 Extracting [==================================================>]      32B/32B
 4f4fb700ef54 Extracting [==================================================>]      32B/32B
 4f4fb700ef54 Extracting [==================================================>]      32B/32B
 4f4fb700ef54 Extracting [==================================================>]      32B/32B
 4f4fb700ef54 Extracting [==================================================>]      32B/32B
 4f4fb700ef54 Pull complete 
 4f4fb700ef54 Pull complete 
 4f4fb700ef54 Pull complete 
 4f4fb700ef54 Pull complete 
 4f4fb700ef54 Pull complete 
 committer-org1-coordinator Pulled 
 committer-org1-sidecar Pulled 
 committer-org1-validator Pulled 
 committer-org1-query-service Pulled 
 committer-org1-verifier Pulled 
 bad9a60af1cb Downloading [=======>                                           ]  15.91MB/109.2MB
 bad9a60af1cb Downloading [================>                                  ]  36.24MB/109.2MB
 bad9a60af1cb Downloading [=========================>                         ]  56.02MB/109.2MB
 bad9a60af1cb Downloading [=======================================>           ]  86.43MB/109.2MB
 bad9a60af1cb Verifying Checksum 
 bad9a60af1cb Download complete 
 bad9a60af1cb Extracting [>                                                  ]  557.1kB/109.2MB
 bad9a60af1cb Extracting [==>                                                ]  5.014MB/109.2MB
 bad9a60af1cb Extracting [======>                                            ]  14.48MB/109.2MB
 bad9a60af1cb Extracting [==========>                                        ]  23.95MB/109.2MB
 bad9a60af1cb Extracting [===============>                                   ]  32.87MB/109.2MB
 bad9a60af1cb Extracting [===================>                               ]  41.78MB/109.2MB
 bad9a60af1cb Extracting [======================>                            ]  50.14MB/109.2MB
 bad9a60af1cb Extracting [=========================>                         ]  55.71MB/109.2MB
 bad9a60af1cb Extracting [=============================>                     ]   63.5MB/109.2MB
 bad9a60af1cb Extracting [=================================>                 ]  72.42MB/109.2MB
 bad9a60af1cb Extracting [===================================>               ]  77.99MB/109.2MB
 bad9a60af1cb Extracting [====================================>              ]   79.1MB/109.2MB
 bad9a60af1cb Extracting [=====================================>             ]  82.44MB/109.2MB
 bad9a60af1cb Extracting [=======================================>           ]  86.34MB/109.2MB
 bad9a60af1cb Extracting [=========================================>         ]   90.8MB/109.2MB
 bad9a60af1cb Extracting [============================================>      ]  96.37MB/109.2MB
 bad9a60af1cb Extracting [================================================>  ]    107MB/109.2MB
 bad9a60af1cb Extracting [==================================================>]  109.2MB/109.2MB
 bad9a60af1cb Pull complete 
 6964af6a9400 Extracting [==================================================>]  18.92kB/18.92kB
 6964af6a9400 Extracting [==================================================>]  18.92kB/18.92kB
 6964af6a9400 Pull complete 
 2f94990e3c9b Extracting [==================================================>]     128B/128B
 2f94990e3c9b Extracting [==================================================>]     128B/128B
 2f94990e3c9b Pull complete 
 5993a5f08046 Extracting [==================================================>]  6.097kB/6.097kB
 5993a5f08046 Extracting [==================================================>]  6.097kB/6.097kB
 5993a5f08046 Pull complete 
 fe238b783bbd Extracting [==================================================>]     185B/185B
 fe238b783bbd Extracting [==================================================>]     185B/185B
 fe238b783bbd Pull complete 
 committer-org1-db Pulled 
 Network fabric-x  Creating
 Network fabric-x  Created
 Container orderer-consenter  Creating
 Container fabric-x-committer-org1-verifier-1  Creating
 Container fabric-x-committer-org1-db-1  Creating
 Container fabric-x-committer-org1-verifier-1  Created
 Container fabric-x-committer-org1-db-1  Created
 Container fabric-x-committer-org1-validator-1  Creating
 Container fabric-x-committer-org1-query-service-1  Creating
 Container orderer-consenter  Created
 Container orderer-batcher  Creating
 Container fabric-x-committer-org1-query-service-1  Created
 Container fabric-x-committer-org1-validator-1  Created
 Container fabric-x-committer-org1-coordinator-1  Creating
 Container orderer-batcher  Created
 Container orderer-assembler  Creating
 Container fabric-x-committer-org1-coordinator-1  Created
 Container orderer-assembler  Created
 Container orderer-router  Creating
 Container orderer-router  Created
 Container fabric-x-committer-org1-sidecar-1  Creating
 Container fabric-x-committer-org1-sidecar-1  Created
 Container fabric-x-committer-org1-verifier-1  Starting
 Container fabric-x-committer-org1-db-1  Starting
 Container orderer-consenter  Starting
 Container fabric-x-committer-org1-verifier-1  Started
 Container fabric-x-committer-org1-db-1  Started
 Container fabric-x-committer-org1-db-1  Waiting
 Container fabric-x-committer-org1-db-1  Waiting
 Container orderer-consenter  Started
 Container orderer-consenter  Waiting
 Container fabric-x-committer-org1-db-1  Healthy
 Container fabric-x-committer-org1-query-service-1  Starting
 Container fabric-x-committer-org1-db-1  Healthy
 Container fabric-x-committer-org1-validator-1  Starting
 Container orderer-consenter  Healthy
 Container orderer-batcher  Starting
 Container fabric-x-committer-org1-validator-1  Started
 Container fabric-x-committer-org1-verifier-1  Waiting
 Container fabric-x-committer-org1-validator-1  Waiting
 Container fabric-x-committer-org1-query-service-1  Started
 Container orderer-batcher  Started
 Container orderer-batcher  Waiting
 Container fabric-x-committer-org1-verifier-1  Healthy
 Container fabric-x-committer-org1-validator-1  Healthy
 Container fabric-x-committer-org1-coordinator-1  Starting
 Container fabric-x-committer-org1-coordinator-1  Started
 Container orderer-batcher  Healthy
 Container orderer-assembler  Starting
 Container orderer-assembler  Started
 Container orderer-assembler  Waiting
 Container orderer-assembler  Healthy
 Container orderer-router  Starting
 Container orderer-router  Started
 Container orderer-router  Waiting
 Container fabric-x-committer-org1-coordinator-1  Waiting
 Container fabric-x-committer-org1-coordinator-1  Healthy
 Container orderer-router  Healthy
 Container fabric-x-committer-org1-sidecar-1  Starting
 Container fabric-x-committer-org1-sidecar-1  Started
 Container fabric-x-committer-org1-verifier-1  Waiting
 Container orderer-router  Waiting
 Container orderer-consenter  Waiting
 Container orderer-batcher  Waiting
 Container fabric-x-committer-org1-db-1  Waiting
 Container orderer-assembler  Waiting
 Container fabric-x-committer-org1-coordinator-1  Waiting
 Container fabric-x-committer-org1-sidecar-1  Waiting
 Container fabric-x-committer-org1-validator-1  Waiting
 Container fabric-x-committer-org1-query-service-1  Waiting
 Container fabric-x-committer-org1-db-1  Healthy
 Container orderer-assembler  Healthy
 Container orderer-consenter  Healthy
 Container fabric-x-committer-org1-validator-1  Healthy
 Container orderer-router  Healthy
 Container fabric-x-committer-org1-query-service-1  Healthy
 Container orderer-batcher  Healthy
 Container fabric-x-committer-org1-coordinator-1  Healthy
 Container fabric-x-committer-org1-verifier-1  Healthy
 Container fabric-x-committer-org1-sidecar-1  Healthy
============ 🦄 Done!! Fabric-X network is up 🦄 ==============
App-level submit/query calls need a namespace.
Run './fabric-x-docker.sh namespace init' to create the default namespace if needed.
Executing post-start hook
+ UP_SUCCESS=true
+ break
+ '[' true = false ']'
+ echo 'Network started successfully.'
+ echo 'Running Artifact Verification...'
Network started successfully.
Running Artifact Verification...
++ find /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target -name config-block.pb.bin
++ head -n 1
find: ‘/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/wal’: Permission denied
find: ‘/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-router/wal’: Permission denied
find: ‘/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/wal’: Permission denied
find: ‘/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/db’: Permission denied
++ true
+ CONFIG_BLOCK=/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/config-block.pb.bin
++ find /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target -name shared_config.binpb
++ head -n 1
find: ‘/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/wal’: Permission denied
find: ‘/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-router/wal’: Permission denied
find: ‘/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/wal’: Permission denied
find: ‘/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/db’: Permission denied
++ true
+ SHARED_CONFIG=/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/shared_config.binpb
++ find /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target -name client-tls-ca.pem
++ head -n 1
find: ‘/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/wal’: Permission denied
find: ‘/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-router/wal’: Permission denied
find: ‘/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/wal’: Permission denied
find: ‘/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/db’: Permission denied
++ true
+ CLIENT_TLS=/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/client-tls-ca.pem
+ assert_non_empty /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/config-block.pb.bin
+ local file=/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/config-block.pb.bin
+ '[' -z /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/config-block.pb.bin ']'
+ '[' '!' -s /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/config-block.pb.bin ']'
+ echo 'Verified artifact exists and is non-empty: /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/config-block.pb.bin'
+ assert_non_empty /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/shared_config.binpb
+ local file=/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/shared_config.binpb
+ '[' -z /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/shared_config.binpb ']'
+ '[' '!' -s /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/shared_config.binpb ']'
+ echo 'Verified artifact exists and is non-empty: /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/shared_config.binpb'
+ assert_non_empty /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/client-tls-ca.pem
+ local file=/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/client-tls-ca.pem
+ '[' -z /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/client-tls-ca.pem ']'
+ '[' '!' -s /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/client-tls-ca.pem ']'
+ echo 'Verified artifact exists and is non-empty: /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/client-tls-ca.pem'
+ echo 'Running Container Health Checks...'
++ docker ps --filter label=com.docker.compose.project=fabric-x --format '{{.Names}}'
Verified artifact exists and is non-empty: /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/config-block.pb.bin
Verified artifact exists and is non-empty: /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/shared_config.binpb
Verified artifact exists and is non-empty: /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/client-tls-ca.pem
Running Container Health Checks...
+ RUNNING_CONTAINERS='fabric-x-committer-org1-sidecar-1
orderer-router
orderer-assembler
fabric-x-committer-org1-coordinator-1
orderer-batcher
fabric-x-committer-org1-query-service-1
fabric-x-committer-org1-validator-1
orderer-consenter
fabric-x-committer-org1-verifier-1
fabric-x-committer-org1-db-1'
+ echo 'fabric-x-committer-org1-sidecar-1
orderer-router
orderer-assembler
fabric-x-committer-org1-coordinator-1
orderer-batcher
fabric-x-committer-org1-query-service-1
fabric-x-committer-org1-validator-1
orderer-consenter
fabric-x-committer-org1-verifier-1
fabric-x-committer-org1-db-1'
+ grep -q orderer
+ echo 'fabric-x-committer-org1-sidecar-1
orderer-router
orderer-assembler
fabric-x-committer-org1-coordinator-1
orderer-batcher
fabric-x-committer-org1-query-service-1
fabric-x-committer-org1-validator-1
orderer-consenter
fabric-x-committer-org1-verifier-1
fabric-x-committer-org1-db-1'
+ grep -q committer
+ echo 'All required Fabric-X containers are running.'
All required Fabric-X containers are running.
+ echo 'Running Namespace & Lifecycle Regression Validation...'
+ echo '1. Zero State'
Running Namespace & Lifecycle Regression Validation...
1. Zero State
++ run_fablo namespace list
+ NS_LIST='++ cd /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir
++ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/../../../fablo.sh namespace list
Executing Fablo Fabric-X command: namespace
2026-08-27 14:11:03.875 UTC 0001 WARN [grpc] Warningf -> [core] Adjusting keepalive ping interval to minimum period of 10s
2026-08-27 14:11:03.875 UTC 0002 INFO [grpc] Infof -> [core] original dial target is: "committer-org1-query-service:7001"
2026-08-27 14:11:03.876 UTC 0003 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel created for target "committer-org1-query-service:7001"
2026-08-27 14:11:03.876 UTC 0004 INFO [grpc] AddTraceEvent -> [core] [Channel #1] parsed dial target is: resolver.Target{URL:url.URL{Scheme:"passthrough", Opaque:"", User:(*url.Userinfo)(nil), Host:"", Path:"/committer-org1-query-service:7001", Fragment:"", RawQuery:"", RawPath:"", RawFragment:"", ForceQuery:false, OmitHost:false}}
2026-08-27 14:11:03.876 UTC 0005 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel authority set to "committer-org1-query-service:7001"
2026-08-27 14:11:03.876 UTC 0006 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to CONNECTING
2026-08-27 14:11:03.876 UTC 0007 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Resolver state updated: {
  "Addresses": [
    {
      "Addr": "committer-org1-query-service:7001",
      "ServerName": "",
      "Attributes": null,
      "BalancerAttributes": null,
      "Metadata": null
    }
  ],
  "Endpoints": [
    {
      "Addresses": [
        {
          "Addr": "committer-org1-query-service:7001",
          "ServerName": "",
          "Attributes": null,
          "BalancerAttributes": null,
          "Metadata": null
        }
      ],
      "Attributes": null
    }
  ],
  "ServiceConfig": null,
  "Attributes": null
} (resolver returned new addresses)
2026-08-27 14:11:03.876 UTC 0008 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel switches to new LB policy "pick_first"
2026-08-27 14:11:03.876 UTC 0009 INFO [grpc] Infof -> [pick-first-leaf-lb] [pick-first-leaf-lb 0x757cf5e6cf0] Received new config {
  "shuffleAddressList": false
}, resolver state {
  "Addresses": [
    {
      "Addr": "committer-org1-query-service:7001",
      "ServerName": "",
      "Attributes": null,
      "BalancerAttributes": null,
      "Metadata": null
    }
  ],
  "Endpoints": [
    {
      "Addresses": [
        {
          "Addr": "committer-org1-query-service:7001",
          "ServerName": "",
          "Attributes": null,
          "BalancerAttributes": null,
          "Metadata": null
        }
      ],
      "Attributes": null
    }
  ],
  "ServiceConfig": null,
  "Attributes": null
}
2026-08-27 14:11:03.876 UTC 000a INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel created
2026-08-27 14:11:03.876 UTC 000b INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel exiting idle mode
2026-08-27 14:11:03.877 UTC 000c INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to CONNECTING
2026-08-27 14:11:03.877 UTC 000d INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel picks a new address "committer-org1-query-service:7001" to connect
2026-08-27 14:11:03.879 UTC 000e INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to READY
2026-08-27 14:11:03.880 UTC 000f INFO [grpc] Infof -> [pick-first-leaf-lb] [pick-first-leaf-lb 0x757cf5e6cf0] SubConn 0x757cf6a09b0 reported connectivity state READY and the health listener is disabled. Transitioning SubConn to READY.
2026-08-27 14:11:03.880 UTC 0010 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to READY
2026-08-27 14:11:03.882 UTC 0011 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to SHUTDOWN
2026-08-27 14:11:03.882 UTC 0012 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Closing the name resolver
2026-08-27 14:11:03.882 UTC 0013 INFO [grpc] AddTraceEvent -> [core] [Channel #1] ccBalancerWrapper: closing
2026-08-27 14:11:03.882 UTC 0014 INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to SHUTDOWN
2026-08-27 14:11:03.882 UTC 0015 INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel deleted
2026-08-27 14:11:03.883 UTC 0016 INFO [grpc] Infof -> [transport] [client-transport 0x757cf5e4b48] Closing: rpc error: code = Canceled desc = grpc: the client connection is closing
2026-08-27 14:11:03.883 UTC 0017 INFO [grpc] Infof -> [transport] [client-transport 0x757cf5e4b48] loopyWriter exiting with error: rpc error: code = Canceled desc = grpc: the client connection is closing
2026-08-27 14:11:03.883 UTC 0018 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel deleted
Installed namespaces (0 total):'
+ echo '++ cd /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir
++ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/../../../fablo.sh namespace list
Executing Fablo Fabric-X command: namespace
2026-08-27 14:11:03.875 UTC 0001 WARN [grpc] Warningf -> [core] Adjusting keepalive ping interval to minimum period of 10s
2026-08-27 14:11:03.875 UTC 0002 INFO [grpc] Infof -> [core] original dial target is: "committer-org1-query-service:7001"
2026-08-27 14:11:03.876 UTC 0003 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel created for target "committer-org1-query-service:7001"
2026-08-27 14:11:03.876 UTC 0004 INFO [grpc] AddTraceEvent -> [core] [Channel #1] parsed dial target is: resolver.Target{URL:url.URL{Scheme:"passthrough", Opaque:"", User:(*url.Userinfo)(nil), Host:"", Path:"/committer-org1-query-service:7001", Fragment:"", RawQuery:"", RawPath:"", RawFragment:"", ForceQuery:false, OmitHost:false}}
2026-08-27 14:11:03.876 UTC 0005 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel authority set to "committer-org1-query-service:7001"
2026-08-27 14:11:03.876 UTC 0006 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to CONNECTING
2026-08-27 14:11:03.876 UTC 0007 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Resolver state updated: {
  "Addresses": [
    {
      "Addr": "committer-org1-query-service:7001",
      "ServerName": "",
      "Attributes": null,
      "BalancerAttributes": null,
      "Metadata": null
    }
  ],
  "Endpoints": [
    {
      "Addresses": [
        {
          "Addr": "committer-org1-query-service:7001",
          "ServerName": "",
          "Attributes": null,
          "BalancerAttributes": null,
          "Metadata": null
        }
      ],
      "Attributes": null
    }
  ],
  "ServiceConfig": null,
  "Attributes": null
} (resolver returned new addresses)
2026-08-27 14:11:03.876 UTC 0008 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel switches to new LB policy "pick_first"
2026-08-27 14:11:03.876 UTC 0009 INFO [grpc] Infof -> [pick-first-leaf-lb] [pick-first-leaf-lb 0x757cf5e6cf0] Received new config {
  "shuffleAddressList": false
}, resolver state {
  "Addresses": [
    {
      "Addr": "committer-org1-query-service:7001",
      "ServerName": "",
      "Attributes": null,
      "BalancerAttributes": null,
      "Metadata": null
    }
  ],
  "Endpoints": [
    {
      "Addresses": [
        {
          "Addr": "committer-org1-query-service:7001",
          "ServerName": "",
          "Attributes": null,
          "BalancerAttributes": null,
          "Metadata": null
        }
      ],
      "Attributes": null
    }
  ],
  "ServiceConfig": null,
  "Attributes": null
}
2026-08-27 14:11:03.876 UTC 000a INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel created
2026-08-27 14:11:03.876 UTC 000b INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel exiting idle mode
2026-08-27 14:11:03.877 UTC 000c INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to CONNECTING
2026-08-27 14:11:03.877 UTC 000d INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel picks a new address "committer-org1-query-service:7001" to connect
2026-08-27 14:11:03.879 UTC 000e INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to READY
2026-08-27 14:11:03.880 UTC 000f INFO [grpc] Infof -> [pick-first-leaf-lb] [pick-first-leaf-lb 0x757cf5e6cf0] SubConn 0x757cf6a09b0 reported connectivity state READY and the health listener is disabled. Transitioning SubConn to READY.
2026-08-27 14:11:03.880 UTC 0010 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to READY
2026-08-27 14:11:03.882 UTC 0011 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to SHUTDOWN
2026-08-27 14:11:03.882 UTC 0012 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Closing the name resolver
2026-08-27 14:11:03.882 UTC 0013 INFO [grpc] AddTraceEvent -> [core] [Channel #1] ccBalancerWrapper: closing
2026-08-27 14:11:03.882 UTC 0014 INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to SHUTDOWN
2026-08-27 14:11:03.882 UTC 0015 INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel deleted
2026-08-27 14:11:03.883 UTC 0016 INFO [grpc] Infof -> [transport] [client-transport 0x757cf5e4b48] Closing: rpc error: code = Canceled desc = grpc: the client connection is closing
2026-08-27 14:11:03.883 UTC 0017 INFO [grpc] Infof -> [transport] [client-transport 0x757cf5e4b48] loopyWriter exiting with error: rpc error: code = Canceled desc = grpc: the client connection is closing
2026-08-27 14:11:03.883 UTC 0018 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel deleted
Installed namespaces (0 total):'
+ grep -q mynamespace
+ echo '2. Commit State'
+ run_fablo namespace init
+ cd /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir
+ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/../../../fablo.sh namespace init
2. Commit State
Executing Fablo Fabric-X command: namespace
2026-08-27 14:11:04.189 UTC 0001 WARN [grpc] Warningf -> [core] Adjusting keepalive ping interval to minimum period of 10s
2026-08-27 14:11:04.189 UTC 0002 INFO [grpc] Infof -> [core] original dial target is: "orderer-router:7050"
2026-08-27 14:11:04.189 UTC 0003 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel created for target "orderer-router:7050"
2026-08-27 14:11:04.189 UTC 0004 INFO [grpc] AddTraceEvent -> [core] [Channel #1] parsed dial target is: resolver.Target{URL:url.URL{Scheme:"passthrough", Opaque:"", User:(*url.Userinfo)(nil), Host:"", Path:"/orderer-router:7050", Fragment:"", RawQuery:"", RawPath:"", RawFragment:"", ForceQuery:false, OmitHost:false}}
2026-08-27 14:11:04.189 UTC 0005 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel authority set to "orderer-router:7050"
2026-08-27 14:11:04.189 UTC 0006 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to CONNECTING
2026-08-27 14:11:04.189 UTC 0007 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Resolver state updated: {
  "Addresses": [
    {
      "Addr": "orderer-router:7050",
      "ServerName": "",
      "Attributes": null,
      "BalancerAttributes": null,
      "Metadata": null
    }
  ],
  "Endpoints": [
    {
      "Addresses": [
        {
          "Addr": "orderer-router:7050",
          "ServerName": "",
          "Attributes": null,
          "BalancerAttributes": null,
          "Metadata": null
        }
      ],
      "Attributes": null
    }
  ],
  "ServiceConfig": null,
  "Attributes": null
} (resolver returned new addresses)
2026-08-27 14:11:04.189 UTC 0008 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel switches to new LB policy "pick_first"
2026-08-27 14:11:04.190 UTC 0009 INFO [grpc] Infof -> [pick-first-leaf-lb] [pick-first-leaf-lb 0x77efb712090] Received new config {
  "shuffleAddressList": false
}, resolver state {
  "Addresses": [
    {
      "Addr": "orderer-router:7050",
      "ServerName": "",
      "Attributes": null,
      "BalancerAttributes": null,
      "Metadata": null
    }
  ],
  "Endpoints": [
    {
      "Addresses": [
        {
          "Addr": "orderer-router:7050",
          "ServerName": "",
          "Attributes": null,
          "BalancerAttributes": null,
          "Metadata": null
        }
      ],
      "Attributes": null
    }
  ],
  "ServiceConfig": null,
  "Attributes": null
}
2026-08-27 14:11:04.190 UTC 000a INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel created
2026-08-27 14:11:04.190 UTC 000b INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel exiting idle mode
2026-08-27 14:11:04.190 UTC 000c INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to CONNECTING
2026-08-27 14:11:04.190 UTC 000d INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel picks a new address "orderer-router:7050" to connect
2026-08-27 14:11:04.194 UTC 000e INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to READY
2026-08-27 14:11:04.194 UTC 000f INFO [grpc] Infof -> [pick-first-leaf-lb] [pick-first-leaf-lb 0x77efb712090] SubConn 0x77efb72a140 reported connectivity state READY and the health listener is disabled. Transitioning SubConn to READY.
2026-08-27 14:11:04.194 UTC 0010 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to READY
2026-08-27 14:11:04.195 UTC 0011 WARN [grpc] Warningf -> [core] Adjusting keepalive ping interval to minimum period of 10s
2026-08-27 14:11:04.195 UTC 0012 INFO [grpc] Infof -> [core] original dial target is: "committer-org1-sidecar:4001"
2026-08-27 14:11:04.195 UTC 0013 INFO [grpc] AddTraceEvent -> [core] [Channel #4] Channel created for target "committer-org1-sidecar:4001"
2026-08-27 14:11:04.195 UTC 0014 INFO [grpc] AddTraceEvent -> [core] [Channel #4] parsed dial target is: resolver.Target{URL:url.URL{Scheme:"passthrough", Opaque:"", User:(*url.Userinfo)(nil), Host:"", Path:"/committer-org1-sidecar:4001", Fragment:"", RawQuery:"", RawPath:"", RawFragment:"", ForceQuery:false, OmitHost:false}}
2026-08-27 14:11:04.195 UTC 0015 INFO [grpc] AddTraceEvent -> [core] [Channel #4] Channel authority set to "committer-org1-sidecar:4001"
2026-08-27 14:11:04.195 UTC 0016 INFO [grpc] AddTraceEvent -> [core] [Channel #4] Channel Connectivity change to CONNECTING
2026-08-27 14:11:04.195 UTC 0017 INFO [grpc] AddTraceEvent -> [core] [Channel #4] Resolver state updated: {
  "Addresses": [
    {
      "Addr": "committer-org1-sidecar:4001",
      "ServerName": "",
      "Attributes": null,
      "BalancerAttributes": null,
      "Metadata": null
    }
  ],
  "Endpoints": [
    {
      "Addresses": [
        {
          "Addr": "committer-org1-sidecar:4001",
          "ServerName": "",
          "Attributes": null,
          "BalancerAttributes": null,
          "Metadata": null
        }
      ],
      "Attributes": null
    }
  ],
  "ServiceConfig": null,
  "Attributes": null
} (resolver returned new addresses)
2026-08-27 14:11:04.195 UTC 0018 INFO [grpc] AddTraceEvent -> [core] [Channel #4] Channel switches to new LB policy "pick_first"
2026-08-27 14:11:04.195 UTC 0019 INFO [grpc] Infof -> [pick-first-leaf-lb] [pick-first-leaf-lb 0x77efb880360] Received new config {
  "shuffleAddressList": false
}, resolver state {
  "Addresses": [
    {
      "Addr": "committer-org1-sidecar:4001",
      "ServerName": "",
      "Attributes": null,
      "BalancerAttributes": null,
      "Metadata": null
    }
  ],
  "Endpoints": [
    {
      "Addresses": [
        {
          "Addr": "committer-org1-sidecar:4001",
          "ServerName": "",
          "Attributes": null,
          "BalancerAttributes": null,
          "Metadata": null
        }
      ],
      "Attributes": null
    }
  ],
  "ServiceConfig": null,
  "Attributes": null
}
2026-08-27 14:11:04.195 UTC 001a INFO [grpc] AddTraceEvent -> [core] [Channel #4 SubChannel #5] Subchannel created
2026-08-27 14:11:04.195 UTC 001b INFO [grpc] AddTraceEvent -> [core] [Channel #4] Channel exiting idle mode
2026-08-27 14:11:04.195 UTC 001c INFO [grpc] AddTraceEvent -> [core] [Channel #4 SubChannel #5] Subchannel Connectivity change to CONNECTING
2026-08-27 14:11:04.196 UTC 001d INFO [grpc] AddTraceEvent -> [core] [Channel #4 SubChannel #5] Subchannel picks a new address "committer-org1-sidecar:4001" to connect
2026-08-27 14:11:04.198 UTC 001e INFO [grpc] AddTraceEvent -> [core] [Channel #4 SubChannel #5] Subchannel Connectivity change to READY
2026-08-27 14:11:04.199 UTC 001f INFO [grpc] Infof -> [pick-first-leaf-lb] [pick-first-leaf-lb 0x77efb880360] SubConn 0x77efba40960 reported connectivity state READY and the health listener is disabled. Transitioning SubConn to READY.
2026-08-27 14:11:04.199 UTC 0020 INFO [grpc] AddTraceEvent -> [core] [Channel #4] Channel Connectivity change to READY
2026-08-27 14:11:04.776 UTC 0021 INFO [grpc] AddTraceEvent -> [core] [Channel #4] Channel Connectivity change to SHUTDOWN
2026-08-27 14:11:04.777 UTC 0022 INFO [grpc] AddTraceEvent -> [core] [Channel #4] Closing the name resolver
2026-08-27 14:11:04.777 UTC 0023 INFO [grpc] AddTraceEvent -> [core] [Channel #4] ccBalancerWrapper: closing
2026-08-27 14:11:04.777 UTC 0024 INFO [grpc] AddTraceEvent -> [core] [Channel #4 SubChannel #5] Subchannel Connectivity change to SHUTDOWN
2026-08-27 14:11:04.777 UTC 0025 INFO [grpc] AddTraceEvent -> [core] [Channel #4 SubChannel #5] Subchannel deleted
2026-08-27 14:11:04.777 UTC 0026 INFO [grpc] Infof -> [transport] [client-transport 0x77efb968008] Closing: rpc error: code = Canceled desc = grpc: the client connection is closing
2026-08-27 14:11:04.777 UTC 0027 INFO [grpc] Infof -> [transport] [client-transport 0x77efb968008] loopyWriter exiting with error: rpc error: code = Canceled desc = grpc: the client connection is closing
2026-08-27 14:11:04.777 UTC 0028 INFO [grpc] AddTraceEvent -> [core] [Channel #4] Channel deleted
2026-08-27 14:11:04.777 UTC 0029 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to SHUTDOWN
2026-08-27 14:11:04.777 UTC 002a INFO [grpc] AddTraceEvent -> [core] [Channel #1] Closing the name resolver
2026-08-27 14:11:04.777 UTC 002b INFO [grpc] AddTraceEvent -> [core] [Channel #1] ccBalancerWrapper: closing
2026-08-27 14:11:04.777 UTC 002c INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to SHUTDOWN
2026-08-27 14:11:04.777 UTC 002d INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel deleted
2026-08-27 14:11:04.777 UTC 002e INFO [grpc] Infof -> [transport] [client-transport 0x77efb882008] Closing: rpc error: code = Canceled desc = grpc: the client connection is closing
2026-08-27 14:11:04.777 UTC 002f INFO [grpc] Infof -> [transport] [client-transport 0x77efb882008] loopyWriter exiting with error: rpc error: code = Canceled desc = grpc: the client connection is closing
2026-08-27 14:11:04.778 UTC 0030 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel deleted
+ echo '3. Post-Init Query'
Transaction status: COMMITTED3. Post-Init Query
++ run_fablo namespace list
+ NS_LIST='++ cd /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir
++ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/../../../fablo.sh namespace list
Executing Fablo Fabric-X command: namespace
2026-08-27 14:11:05.048 UTC 0001 WARN [grpc] Warningf -> [core] Adjusting keepalive ping interval to minimum period of 10s
2026-08-27 14:11:05.048 UTC 0002 INFO [grpc] Infof -> [core] original dial target is: "committer-org1-query-service:7001"
2026-08-27 14:11:05.048 UTC 0003 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel created for target "committer-org1-query-service:7001"
2026-08-27 14:11:05.048 UTC 0004 INFO [grpc] AddTraceEvent -> [core] [Channel #1] parsed dial target is: resolver.Target{URL:url.URL{Scheme:"passthrough", Opaque:"", User:(*url.Userinfo)(nil), Host:"", Path:"/committer-org1-query-service:7001", Fragment:"", RawQuery:"", RawPath:"", RawFragment:"", ForceQuery:false, OmitHost:false}}
2026-08-27 14:11:05.048 UTC 0005 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel authority set to "committer-org1-query-service:7001"
2026-08-27 14:11:05.048 UTC 0006 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to CONNECTING
2026-08-27 14:11:05.048 UTC 0007 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Resolver state updated: {
  "Addresses": [
    {
      "Addr": "committer-org1-query-service:7001",
      "ServerName": "",
      "Attributes": null,
      "BalancerAttributes": null,
      "Metadata": null
    }
  ],
  "Endpoints": [
    {
      "Addresses": [
        {
          "Addr": "committer-org1-query-service:7001",
          "ServerName": "",
          "Attributes": null,
          "BalancerAttributes": null,
          "Metadata": null
        }
      ],
      "Attributes": null
    }
  ],
  "ServiceConfig": null,
  "Attributes": null
} (resolver returned new addresses)
2026-08-27 14:11:05.048 UTC 0008 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel switches to new LB policy "pick_first"
2026-08-27 14:11:05.048 UTC 0009 INFO [grpc] Infof -> [pick-first-leaf-lb] [pick-first-leaf-lb 0x18e765aa510] Received new config {
  "shuffleAddressList": false
}, resolver state {
  "Addresses": [
    {
      "Addr": "committer-org1-query-service:7001",
      "ServerName": "",
      "Attributes": null,
      "BalancerAttributes": null,
      "Metadata": null
    }
  ],
  "Endpoints": [
    {
      "Addresses": [
        {
          "Addr": "committer-org1-query-service:7001",
          "ServerName": "",
          "Attributes": null,
          "BalancerAttributes": null,
          "Metadata": null
        }
      ],
      "Attributes": null
    }
  ],
  "ServiceConfig": null,
  "Attributes": null
}
2026-08-27 14:11:05.049 UTC 000a INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel created
2026-08-27 14:11:05.049 UTC 000b INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel exiting idle mode
2026-08-27 14:11:05.049 UTC 000c INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to CONNECTING
2026-08-27 14:11:05.049 UTC 000d INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel picks a new address "committer-org1-query-service:7001" to connect
2026-08-27 14:11:05.052 UTC 000e INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to READY
2026-08-27 14:11:05.052 UTC 000f INFO [grpc] Infof -> [pick-first-leaf-lb] [pick-first-leaf-lb 0x18e765aa510] SubConn 0x18e765d4690 reported connectivity state READY and the health listener is disabled. Transitioning SubConn to READY.
2026-08-27 14:11:05.052 UTC 0010 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to READY
2026-08-27 14:11:05.053 UTC 0011 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to SHUTDOWN
2026-08-27 14:11:05.053 UTC 0012 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Closing the name resolver
2026-08-27 14:11:05.053 UTC 0013 INFO [grpc] AddTraceEvent -> [core] [Channel #1] ccBalancerWrapper: closing
2026-08-27 14:11:05.053 UTC 0014 INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to SHUTDOWN
2026-08-27 14:11:05.053 UTC 0015 INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel deleted
2026-08-27 14:11:05.053 UTC 0016 INFO [grpc] Infof -> [transport] [client-transport 0x18e7640ab48] Closing: rpc error: code = Canceled desc = grpc: the client connection is closing
2026-08-27 14:11:05.054 UTC 0017 INFO [grpc] Infof -> [transport] [client-transport 0x18e7640ab48] loopyWriter exiting with error: rpc error: code = Canceled desc = grpc: the client connection is closing
2026-08-27 14:11:05.054 UTC 0018 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel deleted
Installed namespaces (1 total):
0) mynamespace: version 0 policy: 1217120812060801120208001a0b12090a074f7267314d5350'
+ grep -q mynamespace
+ echo '++ cd /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir
++ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/../../../fablo.sh namespace list
Executing Fablo Fabric-X command: namespace
2026-08-27 14:11:05.048 UTC 0001 WARN [grpc] Warningf -> [core] Adjusting keepalive ping interval to minimum period of 10s
2026-08-27 14:11:05.048 UTC 0002 INFO [grpc] Infof -> [core] original dial target is: "committer-org1-query-service:7001"
2026-08-27 14:11:05.048 UTC 0003 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel created for target "committer-org1-query-service:7001"
2026-08-27 14:11:05.048 UTC 0004 INFO [grpc] AddTraceEvent -> [core] [Channel #1] parsed dial target is: resolver.Target{URL:url.URL{Scheme:"passthrough", Opaque:"", User:(*url.Userinfo)(nil), Host:"", Path:"/committer-org1-query-service:7001", Fragment:"", RawQuery:"", RawPath:"", RawFragment:"", ForceQuery:false, OmitHost:false}}
2026-08-27 14:11:05.048 UTC 0005 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel authority set to "committer-org1-query-service:7001"
2026-08-27 14:11:05.048 UTC 0006 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to CONNECTING
2026-08-27 14:11:05.048 UTC 0007 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Resolver state updated: {
  "Addresses": [
    {
      "Addr": "committer-org1-query-service:7001",
      "ServerName": "",
      "Attributes": null,
      "BalancerAttributes": null,
      "Metadata": null
    }
  ],
  "Endpoints": [
    {
      "Addresses": [
        {
          "Addr": "committer-org1-query-service:7001",
          "ServerName": "",
          "Attributes": null,
          "BalancerAttributes": null,
          "Metadata": null
        }
      ],
      "Attributes": null
    }
  ],
  "ServiceConfig": null,
  "Attributes": null
} (resolver returned new addresses)
2026-08-27 14:11:05.048 UTC 0008 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel switches to new LB policy "pick_first"
2026-08-27 14:11:05.048 UTC 0009 INFO [grpc] Infof -> [pick-first-leaf-lb] [pick-first-leaf-lb 0x18e765aa510] Received new config {
  "shuffleAddressList": false
}, resolver state {
  "Addresses": [
    {
      "Addr": "committer-org1-query-service:7001",
      "ServerName": "",
      "Attributes": null,
      "BalancerAttributes": null,
      "Metadata": null
    }
  ],
  "Endpoints": [
    {
      "Addresses": [
        {
          "Addr": "committer-org1-query-service:7001",
          "ServerName": "",
          "Attributes": null,
          "BalancerAttributes": null,
          "Metadata": null
        }
      ],
      "Attributes": null
    }
  ],
  "ServiceConfig": null,
  "Attributes": null
}
2026-08-27 14:11:05.049 UTC 000a INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel created
2026-08-27 14:11:05.049 UTC 000b INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel exiting idle mode
2026-08-27 14:11:05.049 UTC 000c INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to CONNECTING
2026-08-27 14:11:05.049 UTC 000d INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel picks a new address "committer-org1-query-service:7001" to connect
2026-08-27 14:11:05.052 UTC 000e INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to READY
2026-08-27 14:11:05.052 UTC 000f INFO [grpc] Infof -> [pick-first-leaf-lb] [pick-first-leaf-lb 0x18e765aa510] SubConn 0x18e765d4690 reported connectivity state READY and the health listener is disabled. Transitioning SubConn to READY.
2026-08-27 14:11:05.052 UTC 0010 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to READY
2026-08-27 14:11:05.053 UTC 0011 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to SHUTDOWN
2026-08-27 14:11:05.053 UTC 0012 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Closing the name resolver
2026-08-27 14:11:05.053 UTC 0013 INFO [grpc] AddTraceEvent -> [core] [Channel #1] ccBalancerWrapper: closing
2026-08-27 14:11:05.053 UTC 0014 INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to SHUTDOWN
2026-08-27 14:11:05.053 UTC 0015 INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel deleted
2026-08-27 14:11:05.053 UTC 0016 INFO [grpc] Infof -> [transport] [client-transport 0x18e7640ab48] Closing: rpc error: code = Canceled desc = grpc: the client connection is closing
2026-08-27 14:11:05.054 UTC 0017 INFO [grpc] Infof -> [transport] [client-transport 0x18e7640ab48] loopyWriter exiting with error: rpc error: code = Canceled desc = grpc: the client connection is closing
2026-08-27 14:11:05.054 UTC 0018 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel deleted
Installed namespaces (1 total):
0) mynamespace: version 0 policy: 1217120812060801120208001a0b12090a074f7267314d5350'
+ echo '4. Idempotency'
+ run_fablo namespace init
+ cd /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir
+ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/../../../fablo.sh namespace init
4. Idempotency
Executing Fablo Fabric-X command: namespace
++ run_fablo namespace list
+ NS_LIST_IDEMPOTENT='++ cd /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir
++ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/../../../fablo.sh namespace list
Executing Fablo Fabric-X command: namespace
2026-08-27 14:11:05.570 UTC 0001 WARN [grpc] Warningf -> [core] Adjusting keepalive ping interval to minimum period of 10s
2026-08-27 14:11:05.570 UTC 0002 INFO [grpc] Infof -> [core] original dial target is: "committer-org1-query-service:7001"
2026-08-27 14:11:05.571 UTC 0003 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel created for target "committer-org1-query-service:7001"
2026-08-27 14:11:05.571 UTC 0004 INFO [grpc] AddTraceEvent -> [core] [Channel #1] parsed dial target is: resolver.Target{URL:url.URL{Scheme:"passthrough", Opaque:"", User:(*url.Userinfo)(nil), Host:"", Path:"/committer-org1-query-service:7001", Fragment:"", RawQuery:"", RawPath:"", RawFragment:"", ForceQuery:false, OmitHost:false}}
2026-08-27 14:11:05.571 UTC 0005 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel authority set to "committer-org1-query-service:7001"
2026-08-27 14:11:05.571 UTC 0006 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to CONNECTING
2026-08-27 14:11:05.571 UTC 0007 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Resolver state updated: {
  "Addresses": [
    {
      "Addr": "committer-org1-query-service:7001",
5. Cache / Up Skip
      "ServerName": "",
      "Attributes": null,
      "BalancerAttributes": null,
      "Metadata": null
    }
  ],
  "Endpoints": [
    {
      "Addresses": [
        {
          "Addr": "committer-org1-query-service:7001",
          "ServerName": "",
          "Attributes": null,
          "BalancerAttributes": null,
          "Metadata": null
        }
      ],
      "Attributes": null
    }
  ],
  "ServiceConfig": null,
  "Attributes": null
} (resolver returned new addresses)
2026-08-27 14:11:05.571 UTC 0008 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel switches to new LB policy "pick_first"
2026-08-27 14:11:05.571 UTC 0009 INFO [grpc] Infof -> [pick-first-leaf-lb] [pick-first-leaf-lb 0x1cdcb6f3a090] Received new config {
  "shuffleAddressList": false
}, resolver state {
  "Addresses": [
    {
      "Addr": "committer-org1-query-service:7001",
      "ServerName": "",
      "Attributes": null,
      "BalancerAttributes": null,
      "Metadata": null
    }
  ],
  "Endpoints": [
    {
      "Addresses": [
        {
          "Addr": "committer-org1-query-service:7001",
          "ServerName": "",
          "Attributes": null,
          "BalancerAttributes": null,
          "Metadata": null
        }
      ],
      "Attributes": null
    }
  ],
  "ServiceConfig": null,
  "Attributes": null
}
2026-08-27 14:11:05.571 UTC 000a INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel created
2026-08-27 14:11:05.571 UTC 000b INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel exiting idle mode
2026-08-27 14:11:05.571 UTC 000c INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to CONNECTING
2026-08-27 14:11:05.571 UTC 000d INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel picks a new address "committer-org1-query-service:7001" to connect
2026-08-27 14:11:05.574 UTC 000e INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to READY
2026-08-27 14:11:05.574 UTC 000f INFO [grpc] Infof -> [pick-first-leaf-lb] [pick-first-leaf-lb 0x1cdcb6f3a090] SubConn 0x1cdcb6f76140 reported connectivity state READY and the health listener is disabled. Transitioning SubConn to READY.
2026-08-27 14:11:05.574 UTC 0010 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to READY
2026-08-27 14:11:05.575 UTC 0011 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to SHUTDOWN
2026-08-27 14:11:05.575 UTC 0012 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Closing the name resolver
2026-08-27 14:11:05.575 UTC 0013 INFO [grpc] AddTraceEvent -> [core] [Channel #1] ccBalancerWrapper: closing
2026-08-27 14:11:05.575 UTC 0014 INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to SHUTDOWN
2026-08-27 14:11:05.575 UTC 0015 INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel deleted
2026-08-27 14:11:05.576 UTC 0016 INFO [grpc] Infof -> [transport] [client-transport 0x1cdcb6e56008] Closing: rpc error: code = Canceled desc = grpc: the client connection is closing
2026-08-27 14:11:05.576 UTC 0017 INFO [grpc] Infof -> [transport] [client-transport 0x1cdcb6e56008] loopyWriter exiting with error: rpc error: code = Canceled desc = grpc: the client connection is closing
Installed namespaces (1 total):
0) mynamespace: version 0 policy: 1217120812060801120208001a0b12090a074f7267314d5350
2026-08-27 14:11:05.576 UTC 0018 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel deleted'
++ grep -c mynamespace
++ echo '++ cd /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir
++ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/../../../fablo.sh namespace list
Executing Fablo Fabric-X command: namespace
2026-08-27 14:11:05.570 UTC 0001 WARN [grpc] Warningf -> [core] Adjusting keepalive ping interval to minimum period of 10s
2026-08-27 14:11:05.570 UTC 0002 INFO [grpc] Infof -> [core] original dial target is: "committer-org1-query-service:7001"
2026-08-27 14:11:05.571 UTC 0003 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel created for target "committer-org1-query-service:7001"
2026-08-27 14:11:05.571 UTC 0004 INFO [grpc] AddTraceEvent -> [core] [Channel #1] parsed dial target is: resolver.Target{URL:url.URL{Scheme:"passthrough", Opaque:"", User:(*url.Userinfo)(nil), Host:"", Path:"/committer-org1-query-service:7001", Fragment:"", RawQuery:"", RawPath:"", RawFragment:"", ForceQuery:false, OmitHost:false}}
2026-08-27 14:11:05.571 UTC 0005 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel authority set to "committer-org1-query-service:7001"
2026-08-27 14:11:05.571 UTC 0006 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to CONNECTING
2026-08-27 14:11:05.571 UTC 0007 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Resolver state updated: {
  "Addresses": [
    {
      "Addr": "committer-org1-query-service:7001",
      "ServerName": "",
      "Attributes": null,
      "BalancerAttributes": null,
      "Metadata": null
    }
  ],
  "Endpoints": [
    {
      "Addresses": [
        {
          "Addr": "committer-org1-query-service:7001",
          "ServerName": "",
          "Attributes": null,
          "BalancerAttributes": null,
          "Metadata": null
        }
      ],
      "Attributes": null
    }
  ],
  "ServiceConfig": null,
  "Attributes": null
} (resolver returned new addresses)
2026-08-27 14:11:05.571 UTC 0008 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel switches to new LB policy "pick_first"
2026-08-27 14:11:05.571 UTC 0009 INFO [grpc] Infof -> [pick-first-leaf-lb] [pick-first-leaf-lb 0x1cdcb6f3a090] Received new config {
  "shuffleAddressList": false
}, resolver state {
  "Addresses": [
    {
      "Addr": "committer-org1-query-service:7001",
      "ServerName": "",
      "Attributes": null,
      "BalancerAttributes": null,
      "Metadata": null
    }
  ],
  "Endpoints": [
    {
      "Addresses": [
        {
          "Addr": "committer-org1-query-service:7001",
          "ServerName": "",
          "Attributes": null,
          "BalancerAttributes": null,
          "Metadata": null
        }
      ],
      "Attributes": null
    }
  ],
  "ServiceConfig": null,
  "Attributes": null
}
2026-08-27 14:11:05.571 UTC 000a INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel created
2026-08-27 14:11:05.571 UTC 000b INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel exiting idle mode
2026-08-27 14:11:05.571 UTC 000c INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to CONNECTING
2026-08-27 14:11:05.571 UTC 000d INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel picks a new address "committer-org1-query-service:7001" to connect
2026-08-27 14:11:05.574 UTC 000e INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to READY
2026-08-27 14:11:05.574 UTC 000f INFO [grpc] Infof -> [pick-first-leaf-lb] [pick-first-leaf-lb 0x1cdcb6f3a090] SubConn 0x1cdcb6f76140 reported connectivity state READY and the health listener is disabled. Transitioning SubConn to READY.
2026-08-27 14:11:05.574 UTC 0010 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to READY
2026-08-27 14:11:05.575 UTC 0011 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to SHUTDOWN
2026-08-27 14:11:05.575 UTC 0012 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Closing the name resolver
2026-08-27 14:11:05.575 UTC 0013 INFO [grpc] AddTraceEvent -> [core] [Channel #1] ccBalancerWrapper: closing
2026-08-27 14:11:05.575 UTC 0014 INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel Connectivity change to SHUTDOWN
2026-08-27 14:11:05.575 UTC 0015 INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #2] Subchannel deleted
2026-08-27 14:11:05.576 UTC 0016 INFO [grpc] Infof -> [transport] [client-transport 0x1cdcb6e56008] Closing: rpc error: code = Canceled desc = grpc: the client connection is closing
2026-08-27 14:11:05.576 UTC 0017 INFO [grpc] Infof -> [transport] [client-transport 0x1cdcb6e56008] loopyWriter exiting with error: rpc error: code = Canceled desc = grpc: the client connection is closing
Installed namespaces (1 total):
0) mynamespace: version 0 policy: 1217120812060801120208001a0b12090a074f7267314d5350
2026-08-27 14:11:05.576 UTC 0018 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel deleted'
+ MYNAMESPACE_COUNT=1
+ '[' 1 -ne 1 ']'
+ echo '5. Cache / Up Skip'
++ stat -c %Y /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/crypto/config-block.pb.bin
+ CONFIG_MTIME_BEFORE=1787839831
+ UP_SUCCESS=false
+ for i in {1..3}
+ run_fablo up
+ cd /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir
+ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/../../../fablo.sh up
Executing Fablo Fabric-X command: up
Fixing permissions on data directories so container internal users can write to host bind mounts...
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/chains': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/chains/arma': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/chains/arma/blockfile_000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/000002.ldb': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/MANIFEST-000004': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/000003.log': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/CURRENT.bak': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/LOG': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/LOCK': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/CURRENT': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/batchDB': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/batchDB/LOG': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/batchDB/LOCK': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/batchDB/000001.log': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/batchDB/CURRENT': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/batchDB/MANIFEST-000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/wal': Operation not permitted
chmod: cannot read directory '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/wal': Permission denied
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/chains': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/chains/consensus': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/chains/consensus/blockfile_000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/000002.ldb': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/MANIFEST-000004': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/000003.log': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/CURRENT.bak': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/LOG': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/LOCK': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/CURRENT': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-router/wal': Operation not permitted
chmod: cannot read directory '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-router/wal': Permission denied
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-router/config.pb.bin': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-router/config.pb.bin/block-0.config.pb.bin': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/wal': Operation not permitted
chmod: cannot read directory '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/wal': Permission denied
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/chains': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/chains/shard1party1': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/chains/shard1party1/blockfile_000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/index': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/index/LOG': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/index/LOCK': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/index/000001.log': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/index/CURRENT': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/index/MANIFEST-000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/config.pb.bin': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/config.pb.bin/block-0.config.pb.bin': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/chains': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/chains/fabric-x-committer': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/chains/fabric-x-committer/blockfile_000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/index': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/index/LOG': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/index/LOCK': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/index/000001.log': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/index/CURRENT': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/index/MANIFEST-000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/db': Operation not permitted
chmod: cannot read directory '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/db': Permission denied
+ echo 'fablo up failed (attempt 1). Retrying in 10s...'
+ sleep 10
fablo up failed (attempt 1). Retrying in 10s...
+ for i in {1..3}
+ run_fablo up
+ cd /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir
+ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/../../../fablo.sh up
Executing Fablo Fabric-X command: up
Fixing permissions on data directories so container internal users can write to host bind mounts...
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/chains': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/chains/arma': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/chains/arma/blockfile_000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/000002.ldb': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/MANIFEST-000004': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/000003.log': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/CURRENT.bak': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/LOG': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/LOCK': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/CURRENT': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/batchDB': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/batchDB/LOG': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/batchDB/LOCK': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/batchDB/000001.log': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/batchDB/CURRENT': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/batchDB/MANIFEST-000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/wal': Operation not permitted
chmod: cannot read directory '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/wal': Permission denied
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/chains': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/chains/consensus': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/chains/consensus/blockfile_000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/000002.ldb': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/MANIFEST-000004': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/000003.log': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/CURRENT.bak': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/LOG': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/LOCK': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/CURRENT': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-router/wal': Operation not permitted
chmod: cannot read directory '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-router/wal': Permission denied
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-router/config.pb.bin': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-router/config.pb.bin/block-0.config.pb.bin': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/wal': Operation not permitted
chmod: cannot read directory '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/wal': Permission denied
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/chains': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/chains/shard1party1': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/chains/shard1party1/blockfile_000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/index': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/index/LOG': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/index/LOCK': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/index/000001.log': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/index/CURRENT': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/index/MANIFEST-000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/config.pb.bin': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/config.pb.bin/block-0.config.pb.bin': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/chains': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/chains/fabric-x-committer': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/chains/fabric-x-committer/blockfile_000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/index': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/index/LOG': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/index/LOCK': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/index/000001.log': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/index/CURRENT': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/index/MANIFEST-000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/db': Operation not permitted
chmod: cannot read directory '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/db': Permission denied
+ echo 'fablo up failed (attempt 2). Retrying in 10s...'
+ sleep 10
fablo up failed (attempt 2). Retrying in 10s...
+ for i in {1..3}
+ run_fablo up
+ cd /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir
+ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/../../../fablo.sh up
Executing Fablo Fabric-X command: up
Fixing permissions on data directories so container internal users can write to host bind mounts...
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/chains': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/chains/arma': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/chains/arma/blockfile_000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/000002.ldb': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/MANIFEST-000004': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/000003.log': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/CURRENT.bak': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/LOG': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/LOCK': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-assembler/index/CURRENT': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/batchDB': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/batchDB/LOG': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/batchDB/LOCK': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/batchDB/000001.log': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/batchDB/CURRENT': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/batchDB/MANIFEST-000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/wal': Operation not permitted
chmod: cannot read directory '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/wal': Permission denied
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/chains': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/chains/consensus': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/chains/consensus/blockfile_000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/000002.ldb': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/MANIFEST-000004': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/000003.log': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/CURRENT.bak': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/LOG': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/LOCK': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-consenter/index/CURRENT': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-router/wal': Operation not permitted
chmod: cannot read directory '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-router/wal': Permission denied
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-router/config.pb.bin': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-router/config.pb.bin/block-0.config.pb.bin': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/wal': Operation not permitted
chmod: cannot read directory '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/wal': Permission denied
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/chains': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/chains/shard1party1': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/chains/shard1party1/blockfile_000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/index': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/index/LOG': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/index/LOCK': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/index/000001.log': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/index/CURRENT': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/index/MANIFEST-000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/config.pb.bin': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/orderers/party1-batcher/config.pb.bin/block-0.config.pb.bin': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/chains': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/chains/fabric-x-committer': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/chains/fabric-x-committer/blockfile_000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/index': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/index/LOG': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/index/LOCK': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/index/000001.log': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/index/CURRENT': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/sidecar-ledger/index/MANIFEST-000000': Operation not permitted
chmod: changing permissions of '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/db': Operation not permitted
chmod: cannot read directory '/home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/fablo-target/fabric-x/data/committer-org1/db': Permission denied
+ echo 'fablo up failed (attempt 3). Retrying in 10s...'
+ sleep 10
fablo up failed (attempt 3). Retrying in 10s...
+ '[' false = false ']'
Error: fablo up failed after cached up attempts.
+ echo 'Error: fablo up failed after cached up attempts.'
Executing teardown. Capturing container logs...
+ exit 1
+ networkDown
+ local exit_code=1
+ set +e
+ echo 'Executing teardown. Capturing container logs...'
+ docker ps -a --filter label=com.docker.compose.project=fabric-x --format '{{.Names}}'
+ read -r name
Saving logs of fabric-x-committer-org1-sidecar-1 to /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-sidecar-1.log
+ '[' -n fabric-x-committer-org1-sidecar-1 ']'
+ dumpLogs fabric-x-committer-org1-sidecar-1
+ echo 'Saving logs of fabric-x-committer-org1-sidecar-1 to /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-sidecar-1.log'
+ mkdir -p /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs
+ docker logs fabric-x-committer-org1-sidecar-1
+ read -r name
+ '[' -n orderer-router ']'
+ dumpLogs orderer-router
+ echo 'Saving logs of orderer-router to /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-router.log'
+ mkdir -p /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs
Saving logs of orderer-router to /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-router.log
+ docker logs orderer-router
+ read -r name
+ '[' -n orderer-assembler ']'
Saving logs of orderer-assembler to /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-assembler.log
+ dumpLogs orderer-assembler
+ echo 'Saving logs of orderer-assembler to /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-assembler.log'
+ mkdir -p /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs
+ docker logs orderer-assembler
+ read -r name
+ '[' -n fabric-x-committer-org1-coordinator-1 ']'
+ dumpLogs fabric-x-committer-org1-coordinator-1
+ echo 'Saving logs of fabric-x-committer-org1-coordinator-1 to /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-coordinator-1.log'
+ mkdir -p /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs
Saving logs of fabric-x-committer-org1-coordinator-1 to /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-coordinator-1.log
+ docker logs fabric-x-committer-org1-coordinator-1
+ read -r name
+ '[' -n orderer-batcher ']'
+ dumpLogs orderer-batcher
+ echo 'Saving logs of orderer-batcher to /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-batcher.log'
+ mkdir -p /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs
Saving logs of orderer-batcher to /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-batcher.log
+ docker logs orderer-batcher
+ read -r name
Saving logs of fabric-x-committer-org1-query-service-1 to /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-query-service-1.log
+ '[' -n fabric-x-committer-org1-query-service-1 ']'
+ dumpLogs fabric-x-committer-org1-query-service-1
+ echo 'Saving logs of fabric-x-committer-org1-query-service-1 to /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-query-service-1.log'
+ mkdir -p /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs
+ docker logs fabric-x-committer-org1-query-service-1
+ read -r name
+ '[' -n fabric-x-committer-org1-validator-1 ']'
+ dumpLogs fabric-x-committer-org1-validator-1
+ echo 'Saving logs of fabric-x-committer-org1-validator-1 to /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-validator-1.log'
+ mkdir -p /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs
Saving logs of fabric-x-committer-org1-validator-1 to /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-validator-1.log
+ docker logs fabric-x-committer-org1-validator-1
+ read -r name
+ '[' -n orderer-consenter ']'
+ dumpLogs orderer-consenter
+ echo 'Saving logs of orderer-consenter to /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-consenter.log'
+ mkdir -p /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs
Saving logs of orderer-consenter to /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-consenter.log
+ docker logs orderer-consenter
+ read -r name
+ '[' -n fabric-x-committer-org1-verifier-1 ']'
+ dumpLogs fabric-x-committer-org1-verifier-1
+ echo 'Saving logs of fabric-x-committer-org1-verifier-1 to /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-verifier-1.log'
+ mkdir -p /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs
Saving logs of fabric-x-committer-org1-verifier-1 to /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-verifier-1.log
+ docker logs fabric-x-committer-org1-verifier-1
+ read -r name
+ '[' -n fabric-x-committer-org1-db-1 ']'
+ dumpLogs fabric-x-committer-org1-db-1
+ echo 'Saving logs of fabric-x-committer-org1-db-1 to /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-db-1.log'
+ mkdir -p /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs
Saving logs of fabric-x-committer-org1-db-1 to /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-db-1.log
+ docker logs fabric-x-committer-org1-db-1
+ read -r name
+ cd /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir
+ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.tmpdir/../../../fablo.sh down
Executing Fablo Fabric-X command: down
 Container fabric-x-committer-org1-sidecar-1  Stopping
 Container fabric-x-committer-org1-query-service-1  Stopping
 Container fabric-x-committer-org1-sidecar-1  Stopped
 Container fabric-x-committer-org1-sidecar-1  Removing
 Container fabric-x-committer-org1-sidecar-1  Removed
 Container fabric-x-committer-org1-coordinator-1  Stopping
 Container orderer-router  Stopping
 Container fabric-x-committer-org1-query-service-1  Stopped
 Container fabric-x-committer-org1-query-service-1  Removing
 Container fabric-x-committer-org1-query-service-1  Removed
 Container fabric-x-committer-org1-coordinator-1  Stopped
 Container fabric-x-committer-org1-coordinator-1  Removing
 Container fabric-x-committer-org1-coordinator-1  Removed
 Container fabric-x-committer-org1-verifier-1  Stopping
 Container fabric-x-committer-org1-validator-1  Stopping
 Container orderer-router  Stopped
 Container orderer-router  Removing
 Container orderer-router  Removed
 Container orderer-assembler  Stopping
 Container fabric-x-committer-org1-validator-1  Stopped
 Container fabric-x-committer-org1-validator-1  Removing
 Container fabric-x-committer-org1-validator-1  Removed
 Container fabric-x-committer-org1-db-1  Stopping
 Container fabric-x-committer-org1-verifier-1  Stopped
 Container fabric-x-committer-org1-verifier-1  Removing
 Container fabric-x-committer-org1-verifier-1  Removed
 Container orderer-assembler  Stopped
 Container orderer-assembler  Removing
 Container orderer-assembler  Removed
 Container orderer-batcher  Stopping
 Container fabric-x-committer-org1-db-1  Stopped
 Container fabric-x-committer-org1-db-1  Removing
 Container fabric-x-committer-org1-db-1  Removed
 Container orderer-batcher  Stopped
 Container orderer-batcher  Removing
 Container orderer-batcher  Removed
 Container orderer-consenter  Stopping
 Container orderer-consenter  Stopped
 Container orderer-consenter  Removing
 Container orderer-consenter  Removed
 Network fabric-x  Removing
 Network fabric-x  Removed
Unable to find image 'alpine:latest' locally
latest: Pulling from library/alpine
55afa1ecc21d: Already exists
Digest: sha256:28bd5fe8b56d1bd048e5babf5b10710ebe0bae67db86916198a6eec434943f8b
Status: Downloaded newer image for alpine:latest
+ '[' 1 -ne 0 ']'
+ echo '❌ Test failed with exit code 1'
+ '[' true = true ']'
+ echo '--- DUMPING CONTAINER LOGS TO CONSOLE FOR DEBUGGING ---'
❌ Test failed with exit code 1
+ for log_file in "$TEST_LOGS"/*.log
--- DUMPING CONTAINER LOGS TO CONSOLE FOR DEBUGGING ---
+ '[' -f /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-coordinator-1.log ']'
+ [[ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-coordinator-1.log == *\q\u\e\r\y\-\s\e\r\v\i\c\e* ]]
++ basename /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-coordinator-1.log
+ echo '>>> LOGS FOR: fabric-x-committer-org1-coordinator-1.log <<<'
>>> LOGS FOR: fabric-x-committer-org1-coordinator-1.log <<<
+ cat /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-coordinator-1.log
Starting Coordinator
2026-08-27 14:10:46.691 UTC 0001 INFO [dependencygraph] newLocalDependencyConstructor -> Initializing new localDependencyConstructor
2026-08-27 14:10:46.691 UTC 0002 INFO [dependencygraph] newGlobalDependencyManager -> Initializing newGlobalDependencyManager
2026-08-27 14:10:46.691 UTC 0003 INFO [coordinator] newSignatureVerifierManager -> Initializing newSignatureVerifierManager
2026-08-27 14:10:46.691 UTC 0004 INFO [coordinator] newValidatorCommitterManager -> Initializing new ValidatorCommitterManager
2026-08-27 14:10:46.691 UTC 0006 INFO [coordinator] func2 -> Starting dependency graph manager
2026-08-27 14:10:46.691 UTC 0005 INFO [coordinator] func4 -> Starting validator committer manager
2026-08-27 14:10:46.691 UTC 0008 INFO [dependencygraph] run -> Starting localDependencyConstructor with 1 workers
2026-08-27 14:10:46.691 UTC 0009 INFO [coordinator] run -> Connections to 1 vc's will be opened from vc manager
2026-08-27 14:10:46.691 UTC 0007 INFO [coordinator] func3 -> Starting signature verifier manager
2026-08-27 14:10:46.691 UTC 000a INFO [coordinator] run -> Connections to 1 sv's will be opened from sv manager
2026-08-27 14:10:46.692 UTC 000b INFO [coordinator] newSignatureVerifier -> Initializing new SignatureVerifier
2026-08-27 14:10:46.692 UTC 000c INFO [coordinator] run -> Client [0] successfully created and connected to sv at dns:///committer-org1-verifier:5001
2026-08-27 14:10:46.740 UTC 000d INFO [coordinator] run -> Client [0] successfully created and connected to vc at dns:///committer-org1-validator:6001
2026-08-27 14:10:46.743 UTC 000e INFO [serve] Listener -> Listening on: tcp://:9001
2026-08-27 14:10:46.743 UTC 000f INFO [serve] Listener -> Listening on: tcp://:2119
2026-08-27 14:10:46.743 UTC 0011 INFO [serve] func2 -> Serving HTTP on [::]:2119...
2026-08-27 14:10:46.743 UTC 0010 INFO [serve] func1 -> Serving gRPC on [::]:9001...
2026-08-27 14:10:58.214 UTC 0012 INFO [coordinator] BlockProcessing -> Start validate and commit stream
2026-08-27 14:10:58.214 UTC 0014 INFO [coordinator] func1 -> Started a goroutine to receive block and forward it to the dependency graph manager
2026-08-27 14:10:58.214 UTC 0013 INFO [coordinator] func2 -> Started a goroutine to receive transaction status from validator committer manager and forward the status to client
+ echo ------------------------------------------------------
+ for log_file in "$TEST_LOGS"/*.log
+ '[' -f /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-db-1.log ']'
+ [[ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-db-1.log == *\q\u\e\r\y\-\s\e\r\v\i\c\e* ]]
++ basename /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-db-1.log
+ echo '>>> LOGS FOR: fabric-x-committer-org1-db-1.log <<<'
+ cat /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-db-1.log
+ echo ------------------------------------------------------
+ for log_file in "$TEST_LOGS"/*.log
+ '[' -f /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-query-service-1.log ']'
+ [[ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-query-service-1.log == *\q\u\e\r\y\-\s\e\r\v\i\c\e* ]]
+ continue
+ for log_file in "$TEST_LOGS"/*.log
+ '[' -f /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-sidecar-1.log ']'
+ [[ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-sidecar-1.log == *\q\u\e\r\y\-\s\e\r\v\i\c\e* ]]
++ basename /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-sidecar-1.log
------------------------------------------------------
>>> LOGS FOR: fabric-x-committer-org1-db-1.log <<<
The files belonging to this database system will be owned by user "postgres".
This user must also own the server process.
The database cluster will be initialized with locale "en_US.utf8".
The default database encoding has accordingly been set to "UTF8".
The default text search configuration will be set to "english".
Data page checksums are enabled.
fixing permissions on existing directory /var/lib/postgresql/data ... ok
creating subdirectories ... ok
selecting dynamic shared memory implementation ... posix
selecting default "max_connections" ... 100
selecting default "shared_buffers" ... 128MB
selecting default time zone ... UTC
creating configuration files ... ok
running bootstrap script ... ok
sh: locale: not found
2026-08-27 14:10:35.884 UTC [36] WARNING:  no usable system locales were found
performing post-bootstrap initialization ... ok
syncing data to disk ... ok
initdb: warning: enabling "trust" authentication for local connections
initdb: hint: You can change this by editing pg_hba.conf or using the option -A, or --auth-local and --auth-host, the next time you run initdb.
Success. You can now start the database server using:
    pg_ctl -D /var/lib/postgresql/data -l logfile start
waiting for server to start....2026-08-27 14:10:36.438 UTC [42] LOG:  starting PostgreSQL 18.3 on x86_64-pc-linux-musl, compiled by gcc (Alpine 15.2.0) 15.2.0, 64-bit
2026-08-27 14:10:36.439 UTC [42] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2026-08-27 14:10:36.442 UTC [48] LOG:  database system was shut down at 2026-08-27 14:10:36 UTC
2026-08-27 14:10:36.446 UTC [42] LOG:  database system is ready to accept connections
 done
server started
CREATE DATABASE
/usr/local/bin/docker-entrypoint.sh: ignoring /docker-entrypoint-initdb.d/*
waiting for server to shut down....2026-08-27 14:10:36.591 UTC [42] LOG:  received fast shutdown request
2026-08-27 14:10:36.591 UTC [42] LOG:  aborting any active transactions
2026-08-27 14:10:36.595 UTC [42] LOG:  background worker "logical replication launcher" (PID 51) exited with exit code 1
2026-08-27 14:10:36.595 UTC [46] LOG:  shutting down
2026-08-27 14:10:36.596 UTC [46] LOG:  checkpoint starting: shutdown immediate
2026-08-27 14:10:36.612 UTC [46] LOG:  checkpoint complete: wrote 943 buffers (5.8%), wrote 3 SLRU buffers; 0 WAL file(s) added, 0 removed, 0 recycled; write=0.013 s, sync=0.002 s, total=0.017 s; sync files=303, longest=0.001 s, average=0.001 s; distance=4352 kB, estimate=4352 kB; lsn=0/1B9F370, redo lsn=0/1B9F370
2026-08-27 14:10:36.626 UTC [42] LOG:  database system is shut down
 done
server stopped
PostgreSQL init process complete; ready for start up.
2026-08-27 14:10:36.728 UTC [1] LOG:  starting PostgreSQL 18.3 on x86_64-pc-linux-musl, compiled by gcc (Alpine 15.2.0) 15.2.0, 64-bit
2026-08-27 14:10:36.728 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
2026-08-27 14:10:36.728 UTC [1] LOG:  listening on IPv6 address "::", port 5432
2026-08-27 14:10:36.729 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2026-08-27 14:10:36.733 UTC [64] LOG:  database system was shut down at 2026-08-27 14:10:36 UTC
2026-08-27 14:10:36.738 UTC [1] LOG:  database system is ready to accept connections
2026-08-27 14:10:41.284 UTC [148] ERROR:  relation "ns__config" does not exist at character 33
2026-08-27 14:10:41.284 UTC [148] STATEMENT:  SELECT key, value, version from ns__config;
------------------------------------------------------
+ echo '>>> LOGS FOR: fabric-x-committer-org1-sidecar-1.log <<<'
+ cat /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-sidecar-1.log
+ echo ------------------------------------------------------
+ for log_file in "$TEST_LOGS"/*.log
+ '[' -f /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-validator-1.log ']'
+ [[ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-validator-1.log == *\q\u\e\r\y\-\s\e\r\v\i\c\e* ]]
++ basename /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-validator-1.log
+ echo '>>> LOGS FOR: fabric-x-committer-org1-validator-1.log <<<'
+ cat /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-validator-1.log
>>> LOGS FOR: fabric-x-committer-org1-sidecar-1.log <<<
Starting Sidecar
2026-08-27 14:10:58.160 UTC 0001 INFO [sidecar] New -> Initializing new sidecar
2026-08-27 14:10:58.162 UTC 0002 INFO [sidecar] newRelay -> Initializing new relay
2026-08-27 14:10:58.162 UTC 0003 INFO [sidecar] newBlockStore -> Create block store under /ledger
2026-08-27 14:10:58.164 UTC 0004 INFO [leveldbhelper] openDBAndCheckFormat -> DB is empty Setting db format as 2.0
2026-08-27 14:10:58.165 UTC 0005 INFO [blkstorage] NewProvider -> Creating new file ledger directory at /ledger/chains
2026-08-27 14:10:58.165 UTC 0006 INFO [blkstorage] newBlockfileMgr -> Getting block information from block storage
2026-08-27 14:10:58.166 UTC 0007 INFO [sidecar] Run -> Create coordinator client and connect to committer-org1-coordinator:9001
2026-08-27 14:10:58.166 UTC 0008 INFO [grpc] Infof -> [core] original dial target is: "committer-org1-coordinator:9001"
2026-08-27 14:10:58.166 UTC 0009 INFO [serve] newGRPCServer -> Stream concurrency limit enabled: 10 max concurrent streams
2026-08-27 14:10:58.166 UTC 000b INFO [grpc] AddTraceEvent -> [core] [Server #2] Server created
2026-08-27 14:10:58.166 UTC 000a INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel created for target "committer-org1-coordinator:9001"
2026-08-27 14:10:58.166 UTC 000c INFO [grpc] AddTraceEvent -> [core] [Channel #1] parsed dial target is: resolver.Target{URL:url.URL{Scheme:"dns", Opaque:"", User:(*url.Userinfo)(nil), Host:"", Path:"/committer-org1-coordinator:9001", Fragment:"", RawQuery:"", RawPath:"", RawFragment:"", ForceQuery:false, OmitHost:false}}
2026-08-27 14:10:58.166 UTC 000d INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel authority set to "committer-org1-coordinator:9001"
2026-08-27 14:10:58.166 UTC 000e INFO [sidecar] Run -> sidecar connected to coordinator at committer-org1-coordinator:9001
2026-08-27 14:10:58.166 UTC 000f INFO [sidecar] recover -> recovering sidecar
2026-08-27 14:10:58.166 UTC 0010 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to CONNECTING
2026-08-27 14:10:58.167 UTC 0011 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel exiting idle mode
2026-08-27 14:10:58.167 UTC 0012 INFO [serve] Listener -> Listening on: tcp://:4001
2026-08-27 14:10:58.167 UTC 0013 INFO [serve] Listener -> Listening on: tcp://:2114
2026-08-27 14:10:58.167 UTC 0014 INFO [serve] func2 -> Serving HTTP on [::]:2114...
2026-08-27 14:10:58.167 UTC 0015 INFO [serve] func1 -> Serving gRPC on [::]:4001...
2026-08-27 14:10:58.167 UTC 0016 INFO [grpc] AddTraceEvent -> [core] [Server #2 ListenSocket #3] ListenSocket created
2026-08-27 14:10:58.209 UTC 0017 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Resolver state updated: {
  "Addresses": [
    {
      "Addr": "172.18.0.8:9001",
      "ServerName": "",
      "Attributes": null,
      "BalancerAttributes": null,
      "Metadata": null
    }
  ],
  "Endpoints": [
    {
      "Addresses": [
        {
          "Addr": "172.18.0.8:9001",
          "ServerName": "",
          "Attributes": null,
          "BalancerAttributes": null,
          "Metadata": null
        }
      ],
      "Attributes": null
    }
  ],
  "ServiceConfig": null,
  "Attributes": null
} (resolver returned new addresses)
2026-08-27 14:10:58.209 UTC 0018 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel switches to new LB policy "round_robin"
2026-08-27 14:10:58.209 UTC 0019 INFO [grpc] Infof -> [roundrobin] [0x5e7eadacc00] Created
2026-08-27 14:10:58.209 UTC 001a INFO [grpc] Infof -> [pick-first-leaf-lb] [pick-first-leaf-lb 0x5e7eac0c630] Received new config {
  "shuffleAddressList": false
}, resolver state {
  "Addresses": null,
  "Endpoints": [
    {
      "Addresses": [
        {
          "Addr": "172.18.0.8:9001",
          "ServerName": "",
          "Attributes": null,
          "BalancerAttributes": null,
          "Metadata": null
        }
      ],
      "Attributes": null
    }
  ],
  "ServiceConfig": null,
  "Attributes": {
    "\u003c%!p(pickfirst.enableHealthListenerKeyType={})\u003e": "\u003c%!p(bool=true)\u003e"
  }
}
2026-08-27 14:10:58.209 UTC 001b INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #4] Subchannel created
2026-08-27 14:10:58.209 UTC 001c INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #4] Subchannel Connectivity change to CONNECTING
2026-08-27 14:10:58.209 UTC 001d INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #4] Subchannel picks a new address "172.18.0.8:9001" to connect
2026-08-27 14:10:58.211 UTC 001e INFO [grpc] AddTraceEvent -> [core] [Channel #1 SubChannel #4] Subchannel Connectivity change to READY
2026-08-27 14:10:58.211 UTC 001f INFO [grpc] Infof -> [pick-first-leaf-lb] [pick-first-leaf-lb 0x5e7eac0c630] SubConn 0x5e7eaf29090 reported connectivity state READY. Registering health listener.
2026-08-27 14:10:58.211 UTC 0020 INFO [grpc] AddTraceEvent -> [core] [Channel #1] Channel Connectivity change to READY
2026-08-27 14:10:58.214 UTC 0021 INFO [sidecar] recover -> Next expected block number by coordinator is 0
2026-08-27 14:10:58.214 UTC 0022 INFO [sidecar] func3 -> Relay the blocks to committer (from s.blockToBeCommitted) and receive the transaction status.
2026-08-27 14:10:58.214 UTC 0023 INFO [sidecar] run -> Starting coordinator sender and receiver
2026-08-27 14:10:58.214 UTC 0024 INFO [sidecar] startDelivery -> Staring delivery from block [0]
2026-08-27 14:10:58.218 UTC 0025 INFO [deliverorderer] initStreams -> Using party ID [0] as the data block source
2026-08-27 14:10:58.218 UTC 0026 INFO [grpc] Infof -> [core] original dial target is: "orderer-assembler:7053"
2026-08-27 14:10:58.218 UTC 0027 INFO [grpc] AddTraceEvent -> [core] [Channel #6] Channel created for target "orderer-assembler:7053"
2026-08-27 14:10:58.218 UTC 0028 INFO [grpc] AddTraceEvent -> [core] [Channel #6] parsed dial target is: resolver.Target{URL:url.URL{Scheme:"dns", Opaque:"", User:(*url.Userinfo)(nil), Host:"", Path:"/orderer-assembler:7053", Fragment:"", RawQuery:"", RawPath:"", RawFragment:"", ForceQuery:false, OmitHost:false}}
2026-08-27 14:10:58.218 UTC 0029 INFO [grpc] AddTraceEvent -> [core] [Channel #6] Channel authority set to "orderer-assembler:7053"
2026-08-27 14:10:58.218 UTC 002a INFO [grpc] AddTraceEvent -> [core] [Channel #6] Channel Connectivity change to CONNECTING
2026-08-27 14:10:58.218 UTC 002b INFO [grpc] AddTraceEvent -> [core] [Channel #6] Channel exiting idle mode
2026-08-27 14:10:58.247 UTC 002c INFO [grpc] AddTraceEvent -> [core] [Channel #6] Resolver state updated: {
  "Addresses": [
    {
      "Addr": "172.18.0.9:7053",
      "ServerName": "",
      "Attributes": null,
      "BalancerAttributes": null,
      "Metadata": null
    }
  ],
  "Endpoints": [
    {
      "Addresses": [
        {
          "Addr": "172.18.0.9:7053",
          "ServerName": "",
          "Attributes": null,
          "BalancerAttributes": null,
          "Metadata": null
        }
      ],
      "Attributes": null
    }
  ],
  "ServiceConfig": null,
  "Attributes": null
} (resolver returned new addresses)
2026-08-27 14:10:58.247 UTC 002d INFO [grpc] AddTraceEvent -> [core] [Channel #6] Channel switches to new LB policy "round_robin"
2026-08-27 14:10:58.247 UTC 002e INFO [grpc] Infof -> [roundrobin] [0x5e7eb14c450] Created
2026-08-27 14:10:58.247 UTC 002f INFO [grpc] Infof -> [pick-first-leaf-lb] [pick-first-leaf-lb 0x5e7eb5a8000] Received new config {
  "shuffleAddressList": false
}, resolver state {
  "Addresses": null,
  "Endpoints": [
    {
      "Addresses": [
        {
          "Addr": "172.18.0.9:7053",
          "ServerName": "",
          "Attributes": null,
          "BalancerAttributes": null,
          "Metadata": null
        }
      ],
      "Attributes": null
    }
  ],
  "ServiceConfig": null,
  "Attributes": {
    "\u003c%!p(pickfirst.enableHealthListenerKeyType={})\u003e": "\u003c%!p(bool=true)\u003e"
  }
}
2026-08-27 14:10:58.247 UTC 0030 INFO [grpc] AddTraceEvent -> [core] [Channel #6 SubChannel #7] Subchannel created
2026-08-27 14:10:58.247 UTC 0031 INFO [grpc] AddTraceEvent -> [core] [Channel #6 SubChannel #7] Subchannel Connectivity change to CONNECTING
2026-08-27 14:10:58.247 UTC 0032 INFO [grpc] AddTraceEvent -> [core] [Channel #6 SubChannel #7] Subchannel picks a new address "172.18.0.9:7053" to connect
2026-08-27 14:10:58.249 UTC 0033 INFO [grpc] AddTraceEvent -> [core] [Channel #6 SubChannel #7] Subchannel Connectivity change to READY
2026-08-27 14:10:58.249 UTC 0034 INFO [grpc] Infof -> [pick-first-leaf-lb] [pick-first-leaf-lb 0x5e7eb5a8000] SubConn 0x5e7eb594550 reported connectivity state READY. Registering health listener.
2026-08-27 14:10:58.249 UTC 0035 INFO [grpc] AddTraceEvent -> [core] [Channel #6] Channel Connectivity change to READY
2026-08-27 14:10:58.249 UTC 0036 INFO [deliver] toQueueWithoutReconnect -> Deliver connected to 172.18.0.9:7053
2026-08-27 14:10:58.249 UTC 0037 INFO [deliver] toQueueWithoutReconnect -> Sending seek request from block 0 on channel mychannel.
2026-08-27 14:10:58.260 UTC 0038 INFO [sidecar] updateDynamicTLS -> Updated dynamic TLS with 1 CA certificates
2026-08-27 14:11:04.777 UTC 0039 INFO [grpc] Infof -> [transport] [server-transport 0x5e7eaf8e820] Closing: EOF
2026-08-27 14:11:04.777 UTC 003a INFO [grpc] Infof -> [transport] [server-transport 0x5e7eaf8e820] loopyWriter exiting with error: transport closed by client
------------------------------------------------------
>>> LOGS FOR: fabric-x-committer-org1-validator-1.log <<<
+ echo ------------------------------------------------------
+ for log_file in "$TEST_LOGS"/*.log
+ '[' -f /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-verifier-1.log ']'
+ [[ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-verifier-1.log == *\q\u\e\r\y\-\s\e\r\v\i\c\e* ]]
++ basename /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-verifier-1.log
+ echo '>>> LOGS FOR: fabric-x-committer-org1-verifier-1.log <<<'
+ cat /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/fabric-x-committer-org1-verifier-1.log
+ echo ------------------------------------------------------
+ for log_file in "$TEST_LOGS"/*.log
+ '[' -f /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-assembler.log ']'
+ [[ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-assembler.log == *\q\u\e\r\y\-\s\e\r\v\i\c\e* ]]
++ basename /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-assembler.log
+ echo '>>> LOGS FOR: orderer-assembler.log <<<'
+ cat /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-assembler.log
+ echo ------------------------------------------------------
+ for log_file in "$TEST_LOGS"/*.log
+ '[' -f /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-batcher.log ']'
+ [[ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-batcher.log == *\q\u\e\r\y\-\s\e\r\v\i\c\e* ]]
++ basename /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-batcher.log
+ echo '>>> LOGS FOR: orderer-batcher.log <<<'
+ cat /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-batcher.log
+ echo ------------------------------------------------------
+ for log_file in "$TEST_LOGS"/*.log
+ '[' -f /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-consenter.log ']'
+ [[ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-consenter.log == *\q\u\e\r\y\-\s\e\r\v\i\c\e* ]]
++ basename /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-consenter.log
+ echo '>>> LOGS FOR: orderer-consenter.log <<<'
+ cat /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-consenter.log
Starting Validator-Committer
2026-08-27 14:10:41.100 UTC 0001 INFO [validator-committer] NewValidatorCommitterService -> Initializing new validator committer service.
2026-08-27 14:10:41.100 UTC 0002 INFO [validator-committer] newPreparer -> Initializing new preparer
2026-08-27 14:10:41.100 UTC 0003 INFO [validator-committer] newValidator -> Initializing new validator
2026-08-27 14:10:41.100 UTC 0004 INFO [validator-committer] newCommitter -> Initializing new committer
2026-08-27 14:10:41.100 UTC 0005 INFO [validator-committer] Run -> Starting ValidatorCommitterService
2026-08-27 14:10:41.100 UTC 0006 INFO [validator-committer] NewDatabasePool -> DB source: db=fabricx, endpoints=committer-org1-db:5432, load_balance=false, tls_mode=none
2026-08-27 14:10:41.146 UTC 0007 INFO [validator-committer] newDatabase -> validator persister connected to database at [committer-org1-db:5432]
2026-08-27 14:10:41.147 UTC 0008 INFO [validator-committer] Run -> Starting 3 workers for the transaction preparer
2026-08-27 14:10:41.148 UTC 000b INFO [validator-committer] Run -> Starting 3 workers for the transaction validator
2026-08-27 14:10:41.148 UTC 000c INFO [validator-committer] Run -> Starting 3 workers for the transaction committer
2026-08-27 14:10:41.148 UTC 000d INFO [validator-committer] run -> Starting transactionCommitter with 3 workers
2026-08-27 14:10:41.148 UTC 000e INFO [validator-committer] run -> Starting transaction preparer with 3 workers
2026-08-27 14:10:41.148 UTC 000a INFO [validator-committer] func2 -> Starting transaction batching and forwarding process
2026-08-27 14:10:41.148 UTC 0009 INFO [serve] Listener -> Listening on: tcp://:6001
2026-08-27 14:10:41.149 UTC 0010 INFO [serve] Listener -> Listening on: tcp://:2116
2026-08-27 14:10:41.148 UTC 000f INFO [validator-committer] run -> Starting Validator with 3 workers
2026-08-27 14:10:41.150 UTC 0011 INFO [serve] func2 -> Serving HTTP on [::]:2116...
2026-08-27 14:10:41.150 UTC 0012 INFO [serve] func1 -> Serving gRPC on [::]:6001...
2026-08-27 14:10:46.707 UTC 0013 INFO [validator-committer] setupSystemTablesAndNamespaces -> Created tx status table, metadata table, and its methods.
2026-08-27 14:10:46.734 UTC 0014 INFO [validator-committer] setupSystemTablesAndNamespaces -> namespace _meta: created table and its methods.
2026-08-27 14:10:46.739 UTC 0015 INFO [validator-committer] setupSystemTablesAndNamespaces -> namespace _config: created table and its methods.
2026-08-27 14:10:46.771 UTC 0016 INFO [validator-committer] func2 -> Started a goroutine to send transaction status to the submitter
2026-08-27 14:10:46.771 UTC 0017 INFO [validator-committer] func1 -> Started a goroutine to receive and process transactions
2026-08-27 14:10:46.771 UTC 0018 INFO [validator-committer] sendTransactionStatus -> Send transaction status
2026-08-27 14:11:04.771 UTC 0019 INFO [validator-committer] createTablesAndFunctionsForNamespaces -> Creating table [ns_mynamespace] and required functions for namespace [mynamespace]
------------------------------------------------------
>>> LOGS FOR: fabric-x-committer-org1-verifier-1.log <<<
Starting Verifier
2026-08-27 14:10:35.425 UTC 0001 INFO [serve] Listener -> Listening on: tcp://:5001
2026-08-27 14:10:35.425 UTC 0002 INFO [serve] Listener -> Listening on: tcp://:2115
2026-08-27 14:10:35.425 UTC 0004 INFO [serve] func2 -> Serving HTTP on [::]:2115...
2026-08-27 14:10:35.425 UTC 0003 INFO [serve] func1 -> Serving gRPC on [::]:5001...
2026-08-27 14:10:46.711 UTC 0005 INFO [verifier] newVerifier -> Initializing new verifier
2026-08-27 14:11:04.272 UTC 0006 INFO [verifier] updatePolicies -> New verification policies for namespaces [_meta]
------------------------------------------------------
>>> LOGS FOR: orderer-assembler.log <<<
2026-08-27 14:10:46.875 UTC 0001 INFO [ReadConfigAssembler] ReadConfig -> reading shared config from block for Assembler node
2026-08-27 14:10:46.877 UTC 0002 INFO [blkstorage] NewProvider -> Creating new file ledger directory at /data/chains
2026-08-27 14:10:46.878 UTC 0003 INFO [blkstorage] newBlockfileMgr -> Getting block information from block storage
2026-08-27 14:10:46.878 UTC 0004 INFO [ReadConfigAssembler] NewAssemblerLedger -> Assembler ledger opened block store: path: /data, ledger-ID: arma
2026-08-27 14:10:46.885 UTC 0005 INFO [Assembler1] NewDefaultAssembler -> Creating assembler, party: 1, address: 0.0.0.0:7053
2026-08-27 14:10:46.892 UTC 0006 INFO [Assembler1] NewAssemblerLedger -> Assembler ledger opened block store: path: /data, ledger-ID: arma
2026-08-27 14:10:46.892 UTC 0007 INFO [Assembler1] initLedger -> Starting with ledger height: 0
2026-08-27 14:10:46.893 UTC 0008 INFO [Assembler1] func1 -> Appended config block 0, decision 0, in 875.59µs
2026-08-27 14:10:46.893 UTC 0009 INFO [Assembler1] initLedger -> Appended genesis block, header digest: b43aa314d925671013ba2e1c22eca3a216b7857f21217a09573157c5f67d119f
2026-08-27 14:10:46.893 UTC 000a INFO [Assembler1] initFromConfig -> Initializing assembler with config sequence number: 0, assembler ledger height: 1
2026-08-27 14:10:46.893 UTC 000b INFO [Assembler1] initFromConfig -> Starting with BatchFrontier: {}
2026-08-27 14:10:46.893 UTC 000c INFO [Assembler1] NewBatchFetcher -> Creating new Batch Fetcher using batch frontier with assembler: endpoint 0.0.0.0:7053 partyID 1 
2026-08-27 14:10:46.893 UTC 000d INFO [Assembler1] initFromConfig -> Assembler initialized successfully with config sequence number: 0
2026-08-27 14:10:46.893 UTC 000e INFO [assembler_1.monitoring] Start -> Creating monitoring service: 0.0.0.0:9443
2026-08-27 14:10:46.893 UTC 000f INFO [Assembler1] Replicate -> Assembler 1 Replicate from shard 1
2026-08-27 14:10:46.893 UTC 0010 INFO [Assembler1] Replicate -> Assembler 1 Replicate from shard 1, batcher endpoint: orderer-batcher:7051, batcher party: 1
2026-08-27 14:10:46.893 UTC 0011 INFO [Assembler1] pullFromParty -> Assembler replicating from channel shard1party1 
2026-08-27 14:10:46.893 UTC 0013 INFO [Assembler1] pullFromParty -> Started pulling from: shard1party1, sqn=0
2026-08-27 14:10:46.893 UTC 0012 INFO [Assembler1] processOrderedBatchAttestations -> Starting to process incoming OrderedBatchAttestations from consensus
2026-08-27 14:10:46.893 UTC 0014 INFO [Assembler1] Pull -> Started pulling from: shard1party1
2026-08-27 14:10:46.893 UTC 0015 INFO [Assembler1] Pull -> Endpoint to pull from is orderer-batcher:7051
2026-08-27 14:10:46.893 UTC 0016 INFO [Assembler1] Replicate -> Initial OrderingInfo: DecisionNum: 0, BatchIndex: 0, BatchCount: 1; No. Sigs: 0, Common Block: Number: 0, PreviousHash: , DataHash: a8c0b01b1ca8c3a658463ff25be9c422eada5cf32a9785bf44fc91527f25291f; Initial AssemblerConsensusPosition: {DecisionNum:1 BatchIndex:0}
2026-08-27 14:10:46.893 UTC 0017 INFO [Assembler1] Replicate -> Starting to replicate from consenter
2026-08-27 14:10:46.894 UTC 0018 INFO [assembler_1.monitoring] Listener -> Listening on: tcp://0.0.0.0:9443
2026-08-27 14:10:46.894 UTC 0019 INFO [Assembler1] Pull -> Started pulling from: consensus-ba-replicate
2026-08-27 14:10:46.894 UTC 001a INFO [Assembler1] Pull -> Endpoint to pull from is orderer-consenter:7052
2026-08-27 14:10:46.894 UTC 001b INFO [assembler_1.monitoring] func1 -> Prometheus serving on URL: http://[::]:9443/metrics
2026-08-27 14:10:46.894 UTC 001c INFO [Assembler1] func1 -> Assembler network service is starting on [::]:7053
2026-08-27 14:10:46.894 UTC 001d INFO [Assembler1] func2 -> Assembler listening on [::]:7053
2026-08-27 14:10:46.897 UTC 001e INFO [Assembler1] func2 -> Last OrderingInfo: DecisionNum: 0, BatchIndex: 0, BatchCount: 1; No. Sigs: 0, Common Block: Number: 0, PreviousHash: , DataHash: a8c0b01b1ca8c3a658463ff25be9c422eada5cf32a9785bf44fc91527f25291f; Last AssemblerConsensusPosition: {DecisionNum:1 BatchIndex:0}
2026-08-27 14:10:46.898 UTC 001f INFO [Assembler1] pullBlocks -> Started pulling blocks from: consensus-ba-replicate
2026-08-27 14:10:46.898 UTC 0020 INFO [Assembler1] pullBlocks -> Started pulling blocks from: shard1party1
2026-08-27 14:10:58.250 UTC 0021 INFO [Assembler1] Deliver -> Received new deliver request from client 172.18.0.11:58288
2026-08-27 14:11:04.217 UTC 0022 INFO [Assembler1] func3 -> Assembler pulled from orderer-batcher:7051 batch Sh,Pr,Sq,Dg: <1,1,0,62e100ab2eba4fbbd212626d69e7dfc0bf43ee3729b0409990a9bd9a3ac1a511>
2026-08-27 14:11:04.264 UTC 0023 INFO [Assembler1] func3 -> Decision 1, with 1 AvailableCommonBlocks
2026-08-27 14:11:04.264 UTC 0024 INFO [Assembler1] func3 -> BA index: 0; BatchID: Sh,Pr,Sq,Dg: <1,1,0,62e100ab2eba4fbbd212626d69e7dfc0bf43ee3729b0409990a9bd9a3ac1a511>; Common Block: Number: 1, PreviousHash: b43aa314d925671013ba2e1c22eca3a216b7857f21217a09573157c5f67d119f, DataHash: 62e100ab2eba4fbbd212626d69e7dfc0bf43ee3729b0409990a9bd9a3ac1a511; BA block signers: [1]
2026-08-27 14:11:04.267 UTC 0025 INFO [Assembler1] func1 -> Appended block 1 of 1 requests to ledger in 3.123672ms
------------------------------------------------------
>>> LOGS FOR: orderer-batcher.log <<<
2026-08-27 14:10:41.265 UTC 0001 INFO [ReadConfigBatcher] ReadConfig -> reading shared config from block for Batcher node
2026-08-27 14:10:41.266 UTC 0002 INFO [ReadConfigBatcher] ReadConfig -> Append genesis block to the Batcher config store
2026-08-27 14:10:41.281 UTC 0003 INFO [Batcher1Shard1] InitializeAndReadAll -> Trying to creating a Write-Ahead-Log at dir: /data/wal
2026-08-27 14:10:41.282 UTC 0004 INFO [Batcher1Shard1] Create -> Write-Ahead-Log created successfully, mode: WRITE, dir: /data/wal
2026-08-27 14:10:41.282 UTC 0005 INFO [Batcher1Shard1] InitializeAndReadAll -> Write-Ahead-Log initialized successfully, initial state contains 0 entries
2026-08-27 14:10:41.282 UTC 0006 INFO [Batcher1Shard1] getLastKnownDecisionNumFromConfigStore -> Checking config store for last known decision number
2026-08-27 14:10:41.283 UTC 0007 INFO [Batcher1Shard1] getLastKnownDecisionNumFromConfigStore -> Returning 0 as last known decision number from config store
2026-08-27 14:10:41.283 UTC 0008 INFO [Batcher1Shard1] NewBatchLedgerArray -> Creating batch ledger array for shard=1, party=1, parties=[1], dir=/data
2026-08-27 14:10:41.287 UTC 0009 INFO [blkstorage] NewProvider -> Creating new file ledger directory at /data/chains
2026-08-27 14:10:41.288 UTC 000a INFO [blkstorage] newBlockfileMgr -> Getting block information from block storage
2026-08-27 14:10:41.289 UTC 000b INFO [Batcher1Shard1] Run -> Starting batcher
2026-08-27 14:10:41.289 UTC 000c INFO [batcher_1_1.monitoring] Start -> Creating monitoring service: 0.0.0.0:9443
2026-08-27 14:10:41.289 UTC 000d INFO [Batcher1Shard1] func1 -> Batcher network service is starting on [::]:7051
2026-08-27 14:10:41.289 UTC 000e INFO [batcher_1_1.monitoring] Listener -> Listening on: tcp://0.0.0.0:9443
2026-08-27 14:10:41.289 UTC 000f INFO [Batcher1Shard1] replicateDecision -> Started replicating state
2026-08-27 14:10:41.289 UTC 0010 INFO [Batcher1Shard1] func3 -> Batcher listening on [::]:7051
2026-08-27 14:10:41.289 UTC 0011 INFO [Batcher1Shard1] Pull -> Started pulling from: consensus-decision-replicate
2026-08-27 14:10:41.289 UTC 0012 INFO [Batcher1Shard1] run -> ID: 1, shard: 1, primary id: 1, term: 0, seq: 0
2026-08-27 14:10:41.289 UTC 0013 INFO [Batcher1Shard1] Pull -> Endpoint to pull from is orderer-consenter:7052
2026-08-27 14:10:41.289 UTC 0014 INFO [Batcher1Shard1] runPrimary -> Batcher 1 acting as primary (shard 1)
2026-08-27 14:10:41.289 UTC 0015 INFO [Batcher1Shard1] run -> Stopped - waiting for reset or close
2026-08-27 14:10:41.290 UTC 0016 INFO [batcher_1_1.monitoring] func1 -> Prometheus serving on URL: http://[::]:9443/metrics
2026-08-27 14:10:41.312 UTC 0017 INFO [Batcher1Shard1] pullBlocks -> Started pulling blocks from: consensus-decision-replicate
2026-08-27 14:11:04.215 UTC 0018 INFO [Batcher1Shard1] runPrimary -> Batcher batched a total of 1 requests for sequence 0
2026-08-27 14:11:04.216 UTC 0019 INFO [Batcher1Shard1] SendBAF -> Sending batch attestation fragment for seq 0 with digest 62e100ab2eba4fbbd212626d69e7dfc0bf43ee3729b0409990a9bd9a3ac1a511
2026-08-27 14:11:04.219 UTC 001a INFO [Batcher1Shard1] func1 -> Sending control event took 2.830115ms
2026-08-27 14:11:04.219 UTC 001b INFO [Batcher1Shard1] BroadcastControlEvent -> Control event sent to quorum (1 out of 1)
------------------------------------------------------
>>> LOGS FOR: orderer-consenter.log <<<
+ echo ------------------------------------------------------
+ for log_file in "$TEST_LOGS"/*.log
+ '[' -f /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-router.log ']'
+ [[ /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-router.log == *\q\u\e\r\y\-\s\e\r\v\i\c\e* ]]
++ basename /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-router.log
+ echo '>>> LOGS FOR: orderer-router.log <<<'
+ cat /home/runner/work/fablo/fablo/e2e-network/docker/test-08-fabric-x.sh.logs/orderer-router.log
+ echo ------------------------------------------------------
+ exit 1
2026-08-27 14:10:35.459 UTC 0001 INFO [ReadConfigConsensus] ReadConfig -> reading shared config from block for Consensus node
2026-08-27 14:10:35.462 UTC 0002 INFO [blkstorage] NewProvider -> Creating new file ledger directory at /data/chains
2026-08-27 14:10:35.462 UTC 0003 INFO [blkstorage] newBlockfileMgr -> Getting block information from block storage
2026-08-27 14:10:35.463 UTC 0004 INFO [ReadConfigConsensus] GetLastConfigBlockFromConsensusLedger -> Consensus ledger height is 0
2026-08-27 14:10:35.471 UTC 0005 INFO [Consensus1] configureConsensus -> Creating consensus, party: 1, address: 0.0.0.0:7052, with last config block number: 0
2026-08-27 14:10:35.476 UTC 0006 INFO [Consensus1] getInitialStateAndMetadata -> Initial consenter ledger height is: 0
2026-08-27 14:10:35.476 UTC 0007 INFO [Consensus1] getInitialStateAndMetadata -> Starting from genesis block
2026-08-27 14:10:35.480 UTC 0008 INFO [Consensus1] InitializeAndReadAll -> Trying to creating a Write-Ahead-Log at dir: /data/wal
2026-08-27 14:10:35.480 UTC 0009 INFO [Consensus1] Create -> Write-Ahead-Log created successfully, mode: WRITE, dir: /data/wal
2026-08-27 14:10:35.480 UTC 000a INFO [Consensus1] InitializeAndReadAll -> Write-Ahead-Log initialized successfully, initial state contains 0 entries
2026-08-27 14:10:35.480 UTC 000b INFO [Consensus1] ConfigureNodeCerts -> Updating nodes identity, nodes: [id:1 identity:"-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEZN9v21dG3aZeZCyr9U1v31gCIanE\nQpP1k4vMXPeFcWXf7iNk//30zChbEGDYOoy9Y0w+3S53kylWbtTDPiTeAw==\n-----END PUBLIC KEY-----\n"]
2026-08-27 14:10:35.481 UTC 000c INFO [Consensus1] Configure -> Configuring communication module with nodes:[ID: 1,
Endpoint: orderer-consenter:7052,
ServerTLSCert:-----BEGIN CERTIFICATE-----
-----END CERTIFICATE-----
,
ClientTLSCert:-----BEGIN CERTIFICATE-----
-----END CERTIFICATE-----
, ServerRootCA: [-----BEGIN CERTIFICATE-----
MIICYjCCAgmgAwIBAgIQN5jyc02yZIYw5uaMWworzTAKBggqhkjOPQQDAjB8MQsw
CQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMNU2FuIEZy
YW5jaXNjbzEcMBoGA1UEChMTb3JkZXJlci5leGFtcGxlLmNvbTEiMCAGA1UEAxMZ
dGxzY2Eub3JkZXJlci5leGFtcGxlLmNvbTAeFw0yNjA4MjcxNDA1MDBaFw0zNjA4
MjQxNDA1MDBaMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpDYWxpZm9ybmlhMRYw
FAYDVQQHEw1TYW4gRnJhbmNpc2NvMRwwGgYDVQQKExNvcmRlcmVyLmV4YW1wbGUu
Y29tMSIwIAYDVQQDExl0bHNjYS5vcmRlcmVyLmV4YW1wbGUuY29tMFkwEwYHKoZI
zj0CAQYIKoZIzj0DAQcDQgAEgJSKYPu+A/V/SqtaZQg9kQHYircldeGiFTRPXxX1
buAwghvGB3axhcvobaVu8E/SIlqaFvoxQWOhZKRrNbuJ2aNtMGswDgYDVR0PAQH/
BAQDAgGmMB0GA1UdJQQWMBQGCCsGAQUFBwMCBggrBgEFBQcDATAPBgNVHRMBAf8E
BTADAQH/MCkGA1UdDgQiBCAoV/o/3ITYR3U07YyJN2ANam5KTkbLxCP561VJKDob
PzAKBggqhkjOPQQDAgNHADBEAiAF1DrSSwU/TvG9EzV97bCUUUXxIvod5sBr3stb
umpg7QIgQl6Os8jsDQBfLYnUb6FEskBZtRgRB+9QM4vJpOUJt9c=
-----END CERTIFICATE-----
]]
2026-08-27 14:10:35.481 UTC 000d INFO [Consensus1] updateStubInMapping -> Allocating a new stub for node 1 with endpoint orderer-consenter:7052
2026-08-27 14:10:35.481 UTC 000e INFO [Consensus1] func1 -> Node with ID 1 exists in new membership
2026-08-27 14:10:35.481 UTC 000f INFO [Consensus1] configureConsensus -> Created a BFT Synchronizer
2026-08-27 14:10:35.483 UTC 0010 INFO [consensus_1.monitoring] Start -> Creating monitoring service: 0.0.0.0:9443
2026-08-27 14:10:35.483 UTC 0011 INFO [Consensus1] func1 -> Consensus network service is starting on [::]:7052
2026-08-27 14:10:35.483 UTC 0012 INFO [consensus_1.monitoring] Listener -> Listening on: tcp://0.0.0.0:9443
2026-08-27 14:10:35.483 UTC 0013 INFO [Consensus1] LoadViewChangeIfApplicable -> Nothing to restore
2026-08-27 14:10:35.483 UTC 0014 INFO [Consensus1] LoadNewViewIfApplicable -> Nothing to restore
2026-08-27 14:10:35.484 UTC 0015 INFO [consensus_1.monitoring] func1 -> Prometheus serving on URL: http://[::]:9443/metrics
2026-08-27 14:10:35.484 UTC 0016 INFO [Consensus1] Restore -> Nothing to restore
2026-08-27 14:10:35.484 UTC 0017 INFO [Consensus1] ChangeRole -> Changing to leader role, current view: 0, current leader: 1
2026-08-27 14:10:35.484 UTC 0018 INFO [Consensus1] startView -> Starting view with number 0, sequence 1, and decisions 0
2026-08-27 14:10:35.484 UTC 0019 INFO [Consensus1] func4 -> Consensus listening on [::]:7052
2026-08-27 14:11:04.261 UTC 001a INFO [Consensus1] AssembleProposal -> Creating proposal with 1 attestations and new state: State{N: 1, Quorum: 1, Threshold: 1, ShardCount: 1, 
Pending: none, 
Complaints: none}
2026-08-27 14:11:04.261 UTC 001b INFO [Consensus1] AssembleProposal -> Proposing available common data block: number=1, prevHash=b43aa314d925671013ba2e1c22eca3a216b7857f21217a09573157c5f67d119f, dataHash=62e100ab2eba4fbbd212626d69e7dfc0bf43ee3729b0409990a9bd9a3ac1a511, numOfReqs=1, decisionNum=1, blockIndex=0/1, lastConfigBlockNum=0
2026-08-27 14:11:04.262 UTC 001c INFO [Consensus1] processProposal -> Processed proposal with seq 1
2026-08-27 14:11:04.262 UTC 001d INFO [Consensus1] processPrepares -> 1 collected 0 prepares from []
2026-08-27 14:11:04.262 UTC 001e INFO [Consensus1] processPrepares -> Processed prepares for proposal with seq 1
2026-08-27 14:11:04.263 UTC 001f INFO [Consensus1] processCommits -> 1 collected 0 commits from []
2026-08-27 14:11:04.263 UTC 0020 INFO [Consensus1] prepared -> 1 processed commits for proposal with seq 1
2026-08-27 14:11:04.263 UTC 0021 INFO [Consensus1] decide -> Deciding on seq 1
2026-08-27 14:11:04.263 UTC 0022 INFO [Consensus1] startNextSeq -> Sequence: 1-->2
------------------------------------------------------
>>> LOGS FOR: orderer-router.log <<<
2026-08-27 14:10:52.516 UTC 0001 INFO [ReadConfigRouter] ReadConfig -> reading shared config from block for Router node
2026-08-27 14:10:52.517 UTC 0002 INFO [ReadConfigRouter] ReadConfig -> Append genesis block to the Router config store
2026-08-27 14:10:52.525 UTC 0003 INFO [Router1] NewRouter -> Creating new router with PartyID: 1
2026-08-27 14:10:52.526 UTC 0004 INFO [Router1] InitializeAndReadAll -> Trying to creating a Write-Ahead-Log at dir: /data/wal
2026-08-27 14:10:52.527 UTC 0005 INFO [Router1] Create -> Write-Ahead-Log created successfully, mode: WRITE, dir: /data/wal
2026-08-27 14:10:52.527 UTC 0006 INFO [Router1] InitializeAndReadAll -> Write-Ahead-Log initialized successfully, initial state contains 0 entries
2026-08-27 14:10:52.527 UTC 0007 INFO [Router1] getNextDecisionNumber -> No entries in router's WAL
2026-08-27 14:10:52.527 UTC 0008 INFO [Router1] getNextDecisionNumber -> Last config block is genesis block. Router will start pulling consensus decisions from decision number 1
2026-08-27 14:10:52.527 UTC 0009 INFO [Router1] initFromConfig -> Initializing router with PartyID: 1 from config with sequence: 0
2026-08-27 14:10:52.554 UTC 000a INFO [router_1.monitoring] Start -> Creating monitoring service: 0.0.0.0:9443
2026-08-27 14:10:52.554 UTC 000b INFO [router_1.monitoring] Listener -> Listening on: tcp://0.0.0.0:9443
2026-08-27 14:10:52.554 UTC 000c INFO [Router1] initFromConfig -> Router with PartyID: 1 has been initialized from config with sequence: 0
2026-08-27 14:10:52.554 UTC 000d INFO [Router1] Start -> config submitter is starting
2026-08-27 14:10:52.554 UTC 000e INFO [Router1] func1 -> Router network service is starting on [::]:7050
2026-08-27 14:10:52.554 UTC 000f INFO [Router1] readConfigRequests -> config submitter start listening for requests
2026-08-27 14:10:52.555 UTC 0010 INFO [router_1.monitoring] func1 -> Prometheus serving on URL: http://[::]:9443/metrics
2026-08-27 14:10:52.555 UTC 0012 INFO [Router1] func1 -> Router listening on [::]:7050, PartyID: 1
2026-08-27 14:10:52.554 UTC 0011 INFO [Router1] Pull -> Started pulling from: consensus-decision-replicate
2026-08-27 14:10:52.555 UTC 0013 INFO [Router1] Pull -> Endpoint to pull from is orderer-consenter:7052
2026-08-27 14:10:52.557 UTC 0014 INFO [Router1] pullBlocks -> Started pulling blocks from: consensus-decision-replicate
2026-08-27 14:11:04.200 UTC 0015 INFO [Router1] Broadcast -> Client connected: 172.18.0.12:46176
2026-08-27 14:11:04.200 UTC 0016 INFO [Router1] Broadcast -> Client's certificate: 
Certificate:
    Version: 3
    Serial Number: 100870219451721594804745723780223804538
    Signature Algorithm: ECDSA-SHA256
    Issuer: CN=tlsca.org1.example.com,O=org1.example.com,L=San Francisco,ST=California,C=US
    Validity:
        Not Before: 2026-08-27 14:05:00 +0000 UTC
        Not After : 2036-08-24 14:05:00 +0000 UTC
    Subject: CN=fxconfig.org1.example.com,L=San Francisco,ST=California,C=US
    Public Key Algorithm: ECDSA
    DNS Names: [fxconfig.org1.example.com fxconfig host.docker.internal localhost]
    IP Addresses: [0.0.0.0 127.0.0.1 ::1]
2026-08-27 14:11:04.202 UTC 0017 INFO [Router1] Broadcast -> Received error from stream: rpc error: code = Canceled desc = context canceled, closing broadcastfrom client 172.18.0.12:46176
------------------------------------------------------
Error: Process completed with exit code 1.
1s
Node 20 is being deprecated. This workflow is running with Node 24 by default. If you need to temporarily use Node 20, you can set the ACTIONS_ALLOW_USE_UNSECURE_NODE_VERSION=true environment variable. For more information see: https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/
Run actions/upload-artifact@v4
(node:11721) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Multiple search paths detected. Calculating the least common ancestor of all paths
The least common ancestor is /home/runner/work/fablo/fablo/e2e-network/docker. This will be the root directory of the artifact
With the provided path, there will be 30 files uploaded
Artifact name is valid!
Root directory input is valid!
Beginning upload of artifact content to blob storage
(node:11721) [DEP0169] DeprecationWarning: `url.parse()` behavior is not standardized and prone to errors that have security implications. Use the WHATWG URL API instead. CVEs are not issued for `url.parse()` vulnerabilities.
0s
Node 20 is being deprecated. This workflow is running with Node 24 by default. If you need to temporarily use Node 20, you can set the ACTIONS_ALLOW_USE_UNSECURE_NODE_VERSION=true environment variable. For more information see: https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/
Post job cleanup.
(node:11733) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
/usr/bin/git version
git version 2.55.0
Temporarily overriding HOME='/home/runner/work/_temp/71d7241e-35fa-452e-8ace-0ca1725764e3' before making global git config changes
Adding repository directory to the temporary git global config as a safe directory
/usr/bin/git config --global --add safe.directory /home/runner/work/fablo/fablo
/usr/bin/git config --local --name-only --get-regexp core\.sshCommand
/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :"
/usr/bin/git config --local --name-only --get-regexp http\.https\:\/\/github\.com\/\.extraheader
http.https://github.com/.extraheader
/usr/bin/git config --local --unset-all http.https://github.com/.extraheader
/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'http\.https\:\/\/github\.com\/\.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :"
0s
