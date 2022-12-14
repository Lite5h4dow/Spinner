import HumanReadableHost from 'lib/helpers/HumanReadableHost';
import withSurreal from 'lib/helpers/RequestWithSurreal';
import { NextApiRequest, NextApiResponse } from 'next';
import Surreal from 'surrealdb.js';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  db: Surreal
) => {
  const { hostId } = req.query;
  const hostInfo = await HumanReadableHost(db, hostId.toString());
  res.status(200).json(hostInfo);
};

export default withSurreal(handler);
