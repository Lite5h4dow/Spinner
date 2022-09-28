import HumanReadableHost from 'lib/helpers/HumanReadableHost';
import withSurreal from 'lib/helpers/RequestWithSurreal';
import { Host } from 'lib/interfaces/host';
import { NextApiRequest, NextApiResponse } from 'next';
import Surreal from 'surrealdb.js';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  db: Surreal
) => {
  const hosts: Host[] = await db.select<Host>('host');
  const hostData = await Promise.all(
    hosts.map(async i => {
      return await HumanReadableHost(db, i.id);
    })
  );

  res.status(200).json(hostData);
};

export default withSurreal(handler);
