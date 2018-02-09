import { ITransactionsSummary } from '../../shared/ITransactionsSummary';
import { IBlocksSummary } from '../../shared/IBlocksSummary';
import { ITokensTransfers } from '../reducers/tokensTransfersReducer';

export interface IStore {
  transactionsSummary: ITransactionsSummary;
  blocksSummary: IBlocksSummary;
  tokensTransfers: ITokensTransfers;
}
