import withSurreal from "lib/helpers/RequestWithSurreal";
import withDocker from "lib/helpers/withDockerConnection";
import { NextApiRequest, NextApiResponse } from "next";
import Surreal from "surrealdb.js";

const handler = async (req:NextApiRequest, res:NextApiResponse, db:Surreal) => {
  const {hostId} = req.query;
  const {host} = await withDocker(db, hostId.toString())
  const containers = await host.listContainers()
  res.status(200).json(containers)
}

export default withSurreal(handler)
