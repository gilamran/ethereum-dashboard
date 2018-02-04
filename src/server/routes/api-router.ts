import { ITransactionsDTO } from './../../shared/ITransactionsDTO.d';
import * as bodyParser from 'body-parser';
import { Router } from 'express';

export function apiRouter() {
  const router = Router();
  router.use(bodyParser.json());

  router.get('/api/transations', (req, res) => {
    const transactionsDTO: ITransactionsDTO = { count: 5 };
    res.json(transactionsDTO);
  });

  return router;
}
