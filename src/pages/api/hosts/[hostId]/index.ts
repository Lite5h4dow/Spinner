import { NextApiRequest, NextApiResponse } from "next";
import Surreal from "surrealdb.js";
import withSurreal from "../../../lib/RequestWithSurreal";

const handler = async (req:NextApiRequest, res:NextApiResponse, db:Surreal) => {
  const {hostId} = req.query;
  const hostData = await db.select(`select:${hostId}`);

  console.log(hostId);

  res.status(200).json(hostData);


}

export default withSurreal(handler);
