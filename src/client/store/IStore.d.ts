import { ITransactionsSummary } from '../../shared/ITransactionsSummary';
import { IBlocksSummary } from '../../shared/IBlocksSummary';

export interface IStore {
  transactionsSummary: ITransactionsSummary;
  blocksSummary: IBlocksSummary;
}
