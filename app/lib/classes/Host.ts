import Docker from "dockerode";
export enum HostConnectionMethod{
  Default,
  Socket,
  Network
}

export class Host{
  connectionMethod:HostConnectionMethod;
  name:string;
  host?:string;
  port?:number;
  protocol?:"ssh"|"https"|"http";
  socketPath?:string;

  constructor(name:string, connectionMethod: HostConnectionMethod, config:{host?:string, protocol?:"ssh"|"https"|"http", port?:number, socketPath?:string}){
    this.name = name;
    this.connectionMethod = connectionMethod;
    this.host = config.host;
    this.protocol = config.protocol;
    this.port = config.port;
    this.socketPath = config.socketPath;
  }

  DockerConnector():Docker{
    switch (this.connectionMethod) {
      case HostConnectionMethod.Default:
	return new Docker();
      case HostConnectionMethod.Network:
	return new Docker({protocol: this.protocol, host: this.host, port: this.port})
      case HostConnectionMethod.Socket:
	return new Docker({socketPath: this.socketPath});
    }
  }
}
