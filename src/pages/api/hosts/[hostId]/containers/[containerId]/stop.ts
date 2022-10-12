import withSurreal from 'lib/helpers/RequestWithSurreal';
import withDocker from 'lib/helpers/WithDockerConnection';
import { NextApiRequest, NextApiResponse } from 'next';
import Surreal from 'surrealdb.js';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  db: Surreal
) => {
  const { containerId, hostId } = req.query;
  const { host, data: hostData } = await withDocker(db, hostId.toString());
  const container = host.getContainer(containerId.toString());

  const result = await container.stop({ t: hostData.killDelay || undefined });

  res.status(200).json(result);
};

export default withSurreal(handler);
