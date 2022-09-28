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
  const { hostId } = req.query;
  const { host } = await withDocker(db, hostId.toString());
  const containers = await Promise.all(
    (
      await host.listContainers()
    ).map(async ({ Id }) => {
      return await HumanReadableContainer(host, Id);
    })
  );
  res.status(200).json(containers);
};

export default withSurreal(handler);
