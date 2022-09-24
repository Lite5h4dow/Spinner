import Docker from "dockerode"
import { NextApiRequest, NextApiResponse } from "next"
import Surreal from "surrealdb.js";
import withSurreal from "../../../lib/RequestWithSurreal";
import {Host} from "../../../lib/interfaces/host";

const handler = async(req:NextApiRequest, res:NextApiResponse, db:Surreal) => {
  const hosts:Host[] = await db.select("host")
  console.log(hosts)
  const hostData = await Promise.all(hosts.map(async (i) => {
    const connection = new Docker({...i.connectionOptions})
    return await connection.info()
  }))

  res
    .status(200)
    .json(hostData)

}

export default withSurreal(handler)
