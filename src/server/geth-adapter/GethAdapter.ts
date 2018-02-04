const rpc = require('ethrpc');
const connectionConfiguration = {
    httpAddresses: ['http://localhost:8545'],
    wsAddresses: [],
    ipcAddresses: []
  };

export class GethAdapter {
  private blockStream;

  public init(): Promise<void> {
    return new Promise((resolve, reject) => {
      rpc.connect(connectionConfiguration, err => {
        if (err) {
          reject('Failed to connect to Ethereum node.');
        } else {
          this.blockStream = rpc.getBlockStream();
          resolve();
        }
      });
    });
  }

  public subscribeToOnBlockAdded(onBlock): number {
    return this.blockStream.subscribeToOnBlockAdded(onBlock);
  }

  public unsubscribeToOnBlockAdded(subscriptionToken): void {
    this.blockStream.unsubscribeToOnBlockAdded(subscriptionToken);
  }

  public getBlockNumber(): number {
    return parseInt(rpc.eth.blockNumber(), 16);
  }
}
