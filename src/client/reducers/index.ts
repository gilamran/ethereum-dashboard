import { combineReducers, Reducer } from 'redux';
import { IStore } from './../store/IStore';
import { transactionsSummary } from './transactionsSummaryReducer';
import { blocksSummary } from './blocksSummaryReducer';
import { tokensTransfers } from './tokensTransfersReducer';

export const rootReducer: Reducer<IStore> = combineReducers<IStore>({
  transactionsSummary,
  blocksSummary,
  tokensTransfers
});
