import { NetworkState } from '../ethereum-network/NetworkState';
import { WS } from '../ws/ws';
import { ITransactionsSummary } from '../../shared/ITransactionsSummary';
import { IBlocksSummary, IBlockSummary } from '../../shared/IBlocksSummary';
import { IBlock } from '../ethereum-network/IBlock';

export class DataBroadcaster {
  constructor(private networkState: NetworkState, private ws: WS) {

  }

  public init() {
    this.listenToNetworkEvents();
  }

  private listenToNetworkEvents() {
    this.networkState.addListener('state-changed', () => {
      this.broadcastTransactionsSummary({ count: this.networkState.numberOfTransactions });
      this.broadcastBlocksSummary({
        count: this.networkState.topBlockNumber,
        numberOfUnkles: this.networkState.numberOfUnkles,
        latestBlocksSummary: this.networkState.latestBlocksSummary
      });
    });
  }

  private broadcastTransactionsSummary(transactionsSummary: ITransactionsSummary) {
    this.ws.emit('transactions-summary', transactionsSummary);
  }

  private broadcastBlocksSummary(blocksSummary: IBlocksSummary) {
    this.ws.emit('blocks-summary', blocksSummary);
  }
}