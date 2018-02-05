import { NetworkState } from '../ethereum-network/NetworkState';
import { WS } from '../ws/ws';
import { ITransactionsInfoDTO } from '../../shared/ITransactionsInfoDTO';
import { IBlocksInfoDTO } from '../../shared/IBlocksInfoDTO';

export class DataBroadcaster {
  constructor(private networkState: NetworkState, private ws: WS) {

  }

  public init() {
    this.listenToNetworkEvents();
  }

  private listenToNetworkEvents() {
    this.networkState.addListener('state-changed', () => {
      this.broadcastTransactionsInfo({ count: this.networkState.numberOfTransactions });
      this.broadcastBlocksInfo({ count: this.networkState.topBlockNumber });
    });
  }

  private broadcastTransactionsInfo(transactionsInfoDTO: ITransactionsInfoDTO) {
    this.ws.emit('transactions-info', transactionsInfoDTO);
  }

  private broadcastBlocksInfo(blocksInfoDTO: IBlocksInfoDTO) {
    this.ws.emit('blocks-info', blocksInfoDTO);
  }

}