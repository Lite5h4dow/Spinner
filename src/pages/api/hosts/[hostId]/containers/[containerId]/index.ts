import withSurreal from "lib/helpers/RequestWithSurreal";
import withDocker from "lib/helpers/withDockerConnection";
import { NextApiRequest, NextApiResponse } from "next";
import Surreal from "surrealdb.js";

const handler = async (req:NextApiRequest, res:NextApiResponse, db:Surreal)=>{
  const {hostId, containerId} = req.query;
  const {host} = await withDocker(db, hostId.toString());

  const container = (await host.listContainers()).find((i) => (i.Id == containerId.toString()))
  if (!container){
    res.status(404).json({})
    return
  }

  res.status(200).json(container)
}
export default withSurreal(handler)
