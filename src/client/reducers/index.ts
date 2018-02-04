import { combineReducers, Reducer } from 'redux';
import { IStore } from './../store/IStore';
import { transactionsInfo } from './transactionsInfoReducer';
import { blocksInfo } from './blocksInfoReducer';

export const rootReducer: Reducer<IStore> = combineReducers<IStore>({
  transactionsInfo,
  blocksInfo
});
