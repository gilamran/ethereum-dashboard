import { IBlock } from './IBlock';
import { ITransaction } from './ITransaction';
const rpc = require('ethrpc');
const connectionConfiguration = {
  httpAddresses: ['http://localhost:8545'],
  wsAddresses: [],
  ipcAddresses: []
};

export type TNetworkName = 'mainnet' | 'morden' | 'ropsten' | 'rinkeby' | 'kovan' | 'unknown';

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

  public subscribeToOnBlockAdded(onBlock: (block: IBlock) => void): number {
    return this.blockStream.subscribeToOnBlockAdded(block => onBlock(this.convertBlock(block)));
  }

  public unsubscribeToOnBlockAdded(subscriptionToken): void {
    this.blockStream.unsubscribeToOnBlockAdded(subscriptionToken);
  }

  public getBlockNumber(): number {
    return parseInt(rpc.eth.blockNumber(), 16);
  }

  public getTransactionByHash(hash: string): Promise<ITransaction> {
    return new Promise((resolve, reject) => {
      rpc.eth.getTransactionByHash([hash], transaction => {
        const convertedTransaction = this.convertTransaction(transaction);
        resolve(convertedTransaction);
      });
    });
  }

  public getTransactionByBlockNumberAndIndex(blockIdx: number, transactionIdx: number): Promise<ITransaction> {
    return new Promise((resolve, reject) => {
      rpc.eth.getTransactionByBlockNumberAndIndex([blockIdx, transactionIdx], transaction => {
        const convertedTransaction = this.convertTransaction(transaction);
        resolve(convertedTransaction);
      });
    });
  }

  public getBlockAt(idx: number): Promise<IBlock> {
    return new Promise((resolve, reject) => {
      rpc.eth.getBlockByNumber([idx, false], block => {
        const convertedBlock: IBlock = this.convertBlock(block);
        resolve(convertedBlock);
      });
    });
  }

  public getNetworkName(): Promise<TNetworkName> {
    return new Promise((resolve, reject) => {
      rpc.net.version([], networkNumber => {
        let networkName: TNetworkName;
        switch (networkNumber) {
          case '1': networkName = 'mainnet'; break;
          case '2': networkName = 'morden'; break;
          case '3': networkName = 'ropsten'; break;
          case '4': networkName = 'rinkeby'; break;
          case '42': networkName = 'kovan'; break;
          default: networkName = 'unknown';
        }
        resolve(networkName);
      });
    });
  }

  private convertBlock(block): IBlock {
    return {
      timestamp: parseInt(block.timestamp, 16),
      difficulty: parseInt(block.difficulty, 16),
      gasLimit: parseInt(block.gasLimit, 16),
      gasUsed: parseInt(block.gasUsed, 16),
      hash: block.hash,
      number: parseInt(block.number, 16),
      parentHash: block.parentHash,
      size: parseInt(block.size, 16),
      transactions: block.transactions,
      transactionsRoot: block.transactionsRoot,
      uncles: block.uncles
    };
  }

  private convertTransaction(tx): ITransaction {
    return {
      blockHash: tx.blockHash,
      blockNumber: parseInt(tx.blockNumber, 16),
      hash: tx.hash,
      transactionIndex: parseInt(tx.transactionIndex, 16),
      from: tx.from,
      to: tx.to,
      gas: parseInt(tx.gas, 16),
      gasPrice: parseInt(tx.gasPrice, 16),
      input: tx.input,
      nonce: tx.nonce,
      r: tx.r,
      s: tx.s,
      v: tx.v,
      value: tx.value
    };
  }
}
