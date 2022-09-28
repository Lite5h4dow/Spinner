import withSurreal from 'lib/helpers/RequestWithSurreal';
import { HostData } from 'lib/interfaces/host';
import { NextApiRequest, NextApiResponse } from 'next';
import Surreal from 'surrealdb.js';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  db: Surreal
) => {
  const {
    name,
    location,
    type,
    socketPath,
    protocol,
    host,
    port,
    version,
  }: HostData = req.body;
  const created = await db.create('host', {
    name,
    location,
    type,
    connectionOptions: {
      socketPath,
      protocol,
      host,
      port,
      version,
    },
  });

  res.status(200).json(created);
};

export default withSurreal(handler);
