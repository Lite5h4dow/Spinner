import Docker from "dockerode"
import Surreal from "surrealdb.js";
import { Host } from "../interfaces/host";

const withDocker = async (db:Surreal, id:string)=>{
  const host = (await db.select<Host>(id))[0];
  return {host: new Docker({...host.connectionOptions}), data: host};
}

export default withDocker
