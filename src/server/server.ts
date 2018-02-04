import * as express from 'express';
import { apiRouter } from './routes/api-router';
import { staticsRouter } from './routes/statics-router';
import { staticsDevRouter } from './routes/statics-dev-router';
import * as config from './config';
import { GethAdapter } from './geth-adapter/GethAdapter';
import { initSocketIO, broadcastTransactionsInfo, broadcastBlocksInfo } from './ws/ws';
import { setInterval } from 'timers';

function startServer() {
  const app = express();

  app.use(apiRouter());
  app.use(config.IS_PRODUCTION ? staticsRouter() : staticsDevRouter());

  const server = app.listen(config.SERVER_PORT, () => {
    console.log(`App listening on port ${config.SERVER_PORT}!`);
  });
  return server;
}

function fireDummyData(gethAdapter: GethAdapter) {
  setInterval(() => {
    broadcastTransactionsInfo({
      count: Math.random()
    });
  }, 1000);
}

async function main() {
  const server = startServer();
  initSocketIO(server);
  const gethAdapter = new GethAdapter();
  await gethAdapter.init();
  gethAdapter.subscribeToOnBlockAdded(block => {
    broadcastBlocksInfo({
      count: gethAdapter.getBlockNumber()
    });
  });
  console.log(`geth adapter connected to geth`);
  fireDummyData(gethAdapter);
}

main();