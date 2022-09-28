import withSurreal from 'lib/helpers/RequestWithSurreal';
import withDocker from 'lib/helpers/WithDockerConnection';
import { Container } from 'lib/interfaces/container';
import { NextApiRequest, NextApiResponse } from 'next';
import Surreal from 'surrealdb.js';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  db: Surreal
) => {
  const { hostId } = req.query;
  const { host } = await withDocker(db, hostId.toString());

  const defaultOptions: Container = {
    AttachStdin: false,
    AttachStdout: false,
    AttachStderr: false,
    Tty: true,
    OpenStdin: false,
    StdinOnce: false,
  };

  const containerOptions: Container = { ...defaultOptions, ...req.body };

  const container = await host.createContainer(containerOptions);

  res.status(200).json(container);
};

export default withSurreal(handler);
