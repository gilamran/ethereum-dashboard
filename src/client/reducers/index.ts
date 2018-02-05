import { combineReducers, Reducer } from 'redux';
import { IStore } from './../store/IStore';
import { transactionsSummary } from './transactionsSummaryReducer';
import { blocksSummary } from './blocksSummaryReducer';

export const rootReducer: Reducer<IStore> = combineReducers<IStore>({
  transactionsSummary,
  blocksSummary
});
