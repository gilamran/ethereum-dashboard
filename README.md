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