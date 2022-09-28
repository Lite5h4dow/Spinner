import HumanReadableContainer from 'lib/helpers/HumanReadableContainer';
import withSurreal from 'lib/helpers/RequestWithSurreal';
import withDocker from 'lib/helpers/WithDockerConnection';
import { NextApiRequest, NextApiResponse } from 'next';
import Surreal from 'surrealdb.js';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  db: Surreal
) => {
  const { hostId, containerId } = req.query;
  const { host } = await withDocker(db, hostId.toString());
  const container = await HumanReadableContainer(host, containerId.toString());

  res.status(200).json(container);
};
export default withSurreal(handler);
