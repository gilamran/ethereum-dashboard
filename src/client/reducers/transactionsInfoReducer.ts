import { simulationOutputActionsNames } from './../actions/transactionsInfoActions';

export interface ITransactionsInfo {
  count: number;
}

const initialState: ITransactionsInfo = {
  count: 0
};

export function transactionsInfo(state: ITransactionsInfo = initialState, action) {
  switch (action.type) {
    case simulationOutputActionsNames.SET_TRANSACTIONS_COUNT:
      return {...state, count: action.count};

    default:
      return state;
  }
}
