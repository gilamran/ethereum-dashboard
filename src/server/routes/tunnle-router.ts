import * as proxy from 'http-proxy-middleware';
import { Router } from 'express';

export function tunnleRouter() {
  const router = Router();

  router.use('/tunnle', proxy(
    {
      target: 'http://localhost:8545/'
    }));

  return router;
}
