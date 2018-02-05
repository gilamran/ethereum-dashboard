import { ITransactionsSummary } from './../../shared/ITransactionsSummary';
import * as bodyParser from 'body-parser';
import { Router } from 'express';

export function apiRouter() {
  const router = Router();
  router.use(bodyParser.json());

  router.get('/api/transations', (req, res) => {
    const transactionsSummary: ITransactionsSummary = { count: 5 };
    res.json(transactionsSummary);
  });

  return router;
}
