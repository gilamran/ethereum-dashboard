import { transactionsSummaryActionsNames } from '../actions/transactionsSummaryActions';
import { ITransactionsSummary } from '../../shared/ITransactionsSummary';

const initialState: ITransactionsSummary = {
  count: 3157614
};

export function transactionsSummary(state: ITransactionsSummary = initialState, action) {
  switch (action.type) {
    case transactionsSummaryActionsNames.SET_TRANSACTIONS_COUNT:
      return {...state, count: action.count};

    default:
      return state;
  }
}
