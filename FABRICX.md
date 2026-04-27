# Fabric-X (Engine)

Fablo supports an engine-based workflow. Fabric-X is selected **only** by `$schema` suffix matching:

- Fabric-X config: `$schema` ends with `fabricx-schema-v1.json`
- Classic Fabric config: anything else

## Quickstart

From the Fablo repository root:

```bash
npx fablo init --fabricx
npx fablo generate fablo-config-fabricx.json fablo-target/fabricx
npx fablo up fablo-config-fabricx.json fablo-target/fabricx
npx fablo status fablo-config-fabricx.json fablo-target/fabricx
npx fablo down fablo-config-fabricx.json fablo-target/fabricx
```

## Config Schema

The Fabric-X schema lives at:

- `src/engines/fabricx/schema/fabricx-schema-v1.json`

Your config must set:

- `$schema`: `https://fablo.io/schemas/fabricx-schema-v1.json`

## Target Directory

- FabricX engine default: `fablo-target/fabricx`
- Classic engine default: `fablo-target`

All CLI commands pass an explicit `targetDir` to engines for determinism. You can override via the 2nd CLI arg.

## Known Limitations (MVP)

- Crypto material is copied from a pre-generated Fabric-X sample directory.
  - Override source via `FABLO_FABRICX_CRYPTO_SOURCE=/abs/path/to/crypto`
- Orderer identity defaults are currently sample-based.
  - Override via `FABLO_FABRICX_ORDERER_MSP_ID`
  - Override via `FABLO_FABRICX_ORDERER_MSP_DIR_REL`

