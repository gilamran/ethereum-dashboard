import { GethAdapter } from './GethAdapter';
import { IBlock } from './IBlock';
import { loadJsonFile, saveJsonFile } from '../utils/file-utils';
import { EventEmitter } from 'events';
import { IBlockSummary } from '../../shared/IBlocksSummary';

const MAX_BLOCK_HISTORY = 20;
export class NetworkState extends EventEmitter {
  public numberOfTransactions: number;
  public numberOfUnkles: number;
  public topBlockNumber: number;
  public latestBlocksSummary: IBlockSummary[];

  private stateFileName;
  private processingNewState: boolean = false;

  constructor(private gethAdapter: GethAdapter) {
    super();
  }

  public async init() {
    const networkName = await this.gethAdapter.getNetworkName();
    this.stateFileName = networkName + '.json';
    await this.bootstrap();
  }

  private async bootstrap() {
    await this.loadState();
    await this.processNewState();
    this.listenToNewBlocks();
  }

  private listenToNewBlocks() {
    this.gethAdapter.subscribeToOnBlockAdded(block => {
      this.processNewState();
    });
  }

  private async processNewState() {
    if (this.processingNewState) {
      return;
    }
    this.processingNewState = true;
    await this.processNewBlocks();
    await this.saveState();
    this.emit('state-changed');
    this.processingNewState = false;
  }

  private async processNewBlocks() {
    const targetBlockNumber = this.gethAdapter.getBlockNumber();
    if (this.topBlockNumber <= targetBlockNumber) {
      while (this.topBlockNumber <= targetBlockNumber) {
        await this.processBlock(this.topBlockNumber);
        this.topBlockNumber++;
      }
      await this.processNewBlocks();
    }
  }

  private async processBlock(blockNumber: number) {
    const block: IBlock = await this.gethAdapter.getBlockAt(blockNumber);
    this.trackLastestBlocks(block);
    this.numberOfTransactions += block.transactions.length;
    this.numberOfUnkles += block.uncles.length;
  }

  private trackLastestBlocks(block: IBlock): void {
    const prevBlockSummary: IBlockSummary = this.latestBlocksSummary[this.latestBlocksSummary.length - 1];
    const blockSummary: IBlockSummary = this.blockToBlockSummary(block, prevBlockSummary);
    this.latestBlocksSummary.push(blockSummary);
    if (this.latestBlocksSummary.length > MAX_BLOCK_HISTORY) {
      this.latestBlocksSummary.shift();
    }
  }

  private blockToBlockSummary(block: IBlock, prevBlockSummary: IBlockSummary): IBlockSummary {
    const confirmationTime: number = prevBlockSummary ? block.timestamp - prevBlockSummary.timestamp : 0;
    return {
      confirmationTime,
      timestamp: block.timestamp,
      gasUsed: block.gasUsed,
      hash: block.hash,
      number: block.number
    };
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
      topBlockNumber: this.topBlockNumber,
      latestBlocks: this.latestBlocksSummary
    };
  }

  private deserialize(data) {
    this.numberOfTransactions = data.numberOfTransactions || 0;
    this.numberOfUnkles = data.numberOfUnkles || 0;
    this.topBlockNumber = data.topBlockNumber || 0;
    this.latestBlocksSummary = data.latestBlocks || [];
  }
}