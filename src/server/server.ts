import * as express from 'express';
import { apiRouter } from './routes/api-router';
import { staticsRouter } from './routes/statics-router';
import { staticsDevRouter } from './routes/statics-dev-router';
import { tunnleRouter } from './routes/tunnle-router';
import * as config from './config';

export function initServer() {
  const app = express();

  app.use(tunnleRouter());
  app.use(apiRouter());
  app.use(config.IS_PRODUCTION ? staticsRouter() : staticsDevRouter());

  const server = app.listen(config.SERVER_PORT, () => {
    console.log(`App listening on port ${config.SERVER_PORT}!`);
  });
  return server;
}
