import * as express from 'express';
import { initServer } from './server';
import { NetworkState } from './ethereum-network/NetworkState';
import { GethAdapter } from './ethereum-network/GethAdapter';
import { DataBroadcaster } from './data-broadcaster/DataBroadcaster';
import { WS } from './ws/ws';

async function main() {
  // statics and api server
  const server = initServer();

  // ws for real-time data
  const ws = new WS(server);
  ws.init();

  // geth adapter
  const gethAdapter = new GethAdapter();
  await gethAdapter.init();
  console.log('Connected to geth');

  // network state
  const networkState = new NetworkState(gethAdapter);
  networkState.init();

  // data broadcaster
  const dataBroadcaster = new DataBroadcaster(networkState, ws);
  dataBroadcaster.init();
}

main()
  .then(() => console.log('running'))
  .catch(err => console.log(`error: ${err}`));