import { ITransactionsInfo } from './../reducers/transactionsInfoReducer';
import { IBlocksInfo } from './../reducers/blocksInfoReducer';

export interface IStore {
  transactionsInfo: ITransactionsInfo;
  blocksInfo: IBlocksInfo;
}
