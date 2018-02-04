# Ethereum Dashboard

## What is this?
A simple dashboard to view (real-time) metics about the ethereum network.

## What are the metrics
 * The total number of transactions
 * The total number of blocks
 * more...

## How does it work?
### Server
NodeJS that serves the client static files, an api layer, and web-sockets for real-time data.

The server communicates with a [geth](https://github.com/ethereum/go-ethereum/wiki/Management-APIs) server using JSON-RPC.

### Client
React with redux, with web-sockets for the real-time data.

## How to run
 * Install packages using `npm install`
 * Build using `npm run build`
 * Start `geth`, make that it's synced and json-rpc is active at `http://localhost:8545` (Default).
 * Start the server using `npm start`
 * Navigate to [http://localhost:8080](http://localhost:8080)