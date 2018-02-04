import { ITransactionsInfoDTO } from './../../shared/ITransactionsInfoDTO.d';
import * as bodyParser from 'body-parser';
import { Router } from 'express';

export function apiRouter() {
  const router = Router();
  router.use(bodyParser.json());

  router.get('/api/transations', (req, res) => {
    const transactionsInfoDTO: ITransactionsInfoDTO = { count: 5 };
    res.json(transactionsInfoDTO);
  });

  return router;
}
