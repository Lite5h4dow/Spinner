import withSurreal from 'lib/helpers/RequestWithSurreal';
import { Composition } from 'lib/interfaces/composition';
import { NextApiRequest, NextApiResponse } from 'next';
import Surreal from 'surrealdb.js';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  db: Surreal
) => {
  const compositions = await db.select<Composition>('compositions');
  res.status(200).json(compositions);
};

withSurreal(handler);
