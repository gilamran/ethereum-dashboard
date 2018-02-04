import * as express from 'express';
import { apiRouter } from './routes/api-router';
import { staticsRouter } from './routes/statics-router';
import { staticsDevRouter } from './routes/statics-dev-router';
import * as config from './config';
import { NetworkState } from './ethereum-network/NetworkState';
import { GethAdapter } from './ethereum-network/GethAdapter';
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

async function main() {
  const server = startServer();
  initSocketIO(server);

  // geth adapter
  const gethAdapter = new GethAdapter();
  await gethAdapter.init();
  console.log(`geth adapter connected to geth`);
  gethAdapter.subscribeToOnBlockAdded(block => {
    broadcastBlocksInfo({
      count: gethAdapter.getBlockNumber()
    });
  });

  // network state
  const networkState: NetworkState = new NetworkState(gethAdapter);
  await networkState.syncWithNetwork();
}

main();