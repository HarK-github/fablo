export interface FabricXNodeJson {
  id: string;
  type: "issuer" | "endorser" | "owner";
  apiPort: number;
  p2pPort: number;
  wallets?: string[];
}

export interface FabricXOrgJson {
  nodes: FabricXNodeJson[];
}

export interface FabricXInfrastructureJson {
  image: string;
  ports: {
    sidecar: number;
    query: number;
    orderer: number;
    database: number;
  };
}

export interface FabricXJson {
  channelId: string;
  namespace: string;
  infrastructure: FabricXInfrastructureJson;
}
