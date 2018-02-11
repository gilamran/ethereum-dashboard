# Ethereum Dashboard
![alt text](https://raw.githubusercontent.com/gilamran/ethereum-dashboard/master/assets/images/demo.jpg)

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
 * Start `geth`, make that json-rpc is active at `http://localhost:8545` (Default).
 * Start the server using `npm start`
 * Navigate to [http://localhost:3000](http://localhost:3000)
 
 ## Important notes
  * Make sure your `geth` is fully synced with the network.
  * Make sure that `geth` has at least one peer connected, ([Issue](https://github.com/ethereumjs/ethrpc/issues/47))
  * In order to calculate all the transactions, I am querying the entire blockchain. At first, thing might take some time.
  * A json file is saved locally with the latest data, to prevent re-querying the blockchain.
 
 ## To do
 - [ ] The client opens with some dummy data, it should load the initial state from the server.
 - [ ] Graph of the gas prices required to get into blocks
 - [ ] Visualize real time ERC20 token transfers
  
