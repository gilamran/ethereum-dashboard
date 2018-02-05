import { GethAdapter } from './GethAdapter';
import { IBlock } from './IBlock';
import { loadJsonFile, saveJsonFile } from '../utils/file-utils';

export class NetworkState {
  private stateFileName;

  private numberOfTransactions: number;
  private numberOfUnkles: number;
  private topBlockNumber: number;
  private toBlockIdx: number;
  private isProcessing: boolean = false;

  constructor(private gethAdapter: GethAdapter) {
  }

  public async init() {
    const networkName = await this.gethAdapter.getNetworkName();
    this.stateFileName = networkName + '.json';
    await this.loadState();
    this.toBlockIdx = 0;
    this.processBlocksUpTo(this.gethAdapter.getBlockNumber());
    this.listenToNewBlocks();
  }

  private listenToNewBlocks() {
    this.gethAdapter.subscribeToOnBlockAdded(block => {
      this.processBlocksUpTo(block.number);
    });
  }

  private async processBlocksUpTo(targetBlockNumber: number) {
    this.toBlockIdx = Math.max(this.toBlockIdx, targetBlockNumber);
    if (this.isProcessing) {
      return;
    }
    this.isProcessing = true;
    while (this.topBlockNumber <= this.toBlockIdx) {
      await this.processBlock(this.topBlockNumber);
      this.topBlockNumber++;
    }
    await this.saveState();
    this.isProcessing = false;
  }

  private async processBlock(blockNumber: number) {
    const block: IBlock = await this.gethAdapter.getBlockAt(blockNumber);
    this.numberOfTransactions += block.transactions.length;
    this.numberOfUnkles += block.uncles.length;
    console.log(`Block #${block.number} => Tx: ${block.transactions.length} [${this.numberOfTransactions}], Unkles ${block.uncles.length} [${this.numberOfUnkles}]`);
    if (this.numberOfUnkles > 0) {
      console.log(this.numberOfUnkles);
    }
  }

  private async saveState(): Promise<void> {
    const data = this.serialize();
    await saveJsonFile(this.stateFileName, data);
  }

  private async loadState(): Promise<void> {
    const data = await loadJsonFile(this.stateFileName);
    this.deserialize(data || {});
  }

  private serialize() {
    return {
      numberOfTransactions: this.numberOfTransactions,
      numberOfUnkles: this.numberOfUnkles,
      processedBlocks: this.topBlockNumber
    };
  }

  private deserialize(data) {
    this.numberOfTransactions = data.numberOfTransactions || 0;
    this.numberOfUnkles = data.numberOfUnkles || 0;
    this.topBlockNumber = data.processedBlocks || 0;
  }
}