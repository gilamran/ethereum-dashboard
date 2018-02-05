import { ITransactionsInfo } from './../reducers/transactionsInfoReducer';
import { IBlocksInfo } from './../../shared/IBlocksInfo';

export interface IStore {
  transactionsInfo: ITransactionsInfo;
  blocksInfo: IBlocksInfo;
}
