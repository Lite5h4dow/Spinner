import withSurreal from 'lib/helpers/RequestWithSurreal';
import { NextApiRequest, NextApiResponse } from 'next';
import Surreal from 'surrealdb.js';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  db: Surreal
) => {
  const { compositionId } = req.query;
  const composition = await db.select(compositionId.toString());
};

withSurreal(handler);
