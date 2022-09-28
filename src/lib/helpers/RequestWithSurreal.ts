import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import Surreal from 'surrealdb.js';

const withSurreal =
  (
    handler: (
      req: NextApiRequest,
      res: NextApiResponse,
      db: Surreal
    ) => Promise<void>
  ): NextApiHandler =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const db = new Surreal(process.env.DB_HOST || 'http://localhost:8001/rpc');
    try {
      await db.signin({
        user: process.env.DB_USER || 'spinner',
        pass: process.env.DB_PASS || 'spinner',
      });

      await db.use('Spinner', process.env.DB_DATABASE || 'spinner');

      await handler(req, res, db);
    } catch (e) {
      console.error('caught an error: ', e);
      res.status(500).json({});
    } finally {
      db.close();
    }
  };

export default withSurreal;
