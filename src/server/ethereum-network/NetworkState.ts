import { GethAdapter } from './GethAdapter';
import { IBlock } from './IBlock';
import * as fs from 'fs';

export class NetworkState {
  private readonly NETWORK_NAME = 'rinkeby';
  private readonly STATE_FILENAME = this.NETWORK_NAME + '.json';

  private numberOfTransactions: number = 0;
  private numberOfUnkles: number = 0;
  private processedBlocks: number = 1713000;

  constructor(private gethAdapter: GethAdapter) {
  }

  public async syncWithNetwork() {
    await this.loadState();
    this.countBlocksAndTransactions();
  }

  private countBlocksAndTransactions() {
    const lastBlockNumber = this.gethAdapter.getBlockNumber();
    this.processBlocksUpTo(lastBlockNumber);
  }

  private async processBlocksUpTo(toBlockIdx: number) {
    const block: IBlock = await this.gethAdapter.getBlockAt(this.processedBlocks);
    this.numberOfTransactions += block.transactions.length;
    this.numberOfUnkles += block.uncles.length;
    console.log(`Block #${block.number} => Tx: ${block.transactions.length} [${this.numberOfTransactions}], Unkles ${block.uncles.length} [${this.numberOfUnkles}]`);

    this.processedBlocks++;
    if (this.processedBlocks <= toBlockIdx) {
      this.processBlocksUpTo(toBlockIdx);
    } else {
      await this.saveState();
    }
  }

  private saveState(): Promise<void> {
    return new Promise((resolve, reject) => {
      const data = {
        numberOfTransactions: this.numberOfTransactions,
        numberOfUnkles: this.numberOfUnkles,
        processedBlocks: this.processedBlocks
      };
      fs.writeFile(this.STATE_FILENAME, JSON.stringify(data, null, 2), err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  private loadState(): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.exists(this.STATE_FILENAME, exists => {
        if (exists) {
          fs.readFile(this.STATE_FILENAME, 'utf8', (err, data) => {
            if (err) {
              reject(err);
            } else {
              const { numberOfTransactions, numberOfUnkles, processedBlocks } = JSON.parse(data);
              this.numberOfTransactions = numberOfTransactions;
              this.numberOfUnkles = numberOfUnkles;
              this.processedBlocks = processedBlocks;
              resolve();
            }
          });
        } else {
          resolve();
        }
      });
  });
}
}