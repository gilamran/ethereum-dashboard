import * as express from 'express';
import { initServer } from './server';
import { NetworkState } from './ethereum-network/NetworkState';
import { GethAdapter } from './ethereum-network/GethAdapter';
import { initSocketIO } from './ws/ws';

async function main() {
  // statics and api server
  const server = initServer();

  // ws for real-time data
  initSocketIO(server);

  // geth adapter
  const gethAdapter = new GethAdapter();
  await gethAdapter.init();

  // network state
  const networkState: NetworkState = new NetworkState(gethAdapter);
  await networkState.init();
}

main();