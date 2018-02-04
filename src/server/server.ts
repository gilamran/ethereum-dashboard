import * as express from 'express';
import { apiRouter } from './routes/api-router';
import { staticsRouter } from './routes/statics-router';
import { staticsDevRouter } from './routes/statics-dev-router';
import * as config from './config';
import { initSocketIO, broadcastTransactionsInfo, broadcastBlocksInfo } from './ws/ws';
import { setInterval } from 'timers';

const app = express();

app.use(apiRouter());
app.use(config.IS_PRODUCTION ? staticsRouter() : staticsDevRouter());

const server = app.listen(config.SERVER_PORT, () => {
  console.log(`App listening on port ${config.SERVER_PORT}!`);
});

initSocketIO(server);
setInterval(() => {
  broadcastTransactionsInfo({
    count: Math.random()
  });
  broadcastBlocksInfo({
    count: Math.random()
  });
}, 1000);