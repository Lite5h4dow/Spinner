import withSurreal from 'lib/helpers/RequestWithSurreal';
import { NextApiRequest, NextApiResponse } from 'next';
import Surreal from 'surrealdb.js';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  db: Surreal
) => {
  const { hostId } = req.query;

  const found = await db.select(hostId.toString());

  if (!found) {
    res.status(404).json({});
    return;
  }

  await db.delete(hostId.toString());
  res.status(200).json({});
};

export default withSurreal(handler);
