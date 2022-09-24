export interface HostData{
  name:string,
  location:"local"|"remote",
  type:"socket"|"network",
  socketPath?:string, 
  protocol?:"http"|"https"|"ssh", 
  host?:string, 
  port?:number, 
  version?:string
}
export interface Host{
  name:string,
  location:"local"|"remote",
  type:"socket"|"network",
  connectionOptions:{
    socketPath?:string, 
    protocol?:"http"|"https"|"ssh", 
    host?:string, 
    port?:number, 
    version?:string
  }
}
