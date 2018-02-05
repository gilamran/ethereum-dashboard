import * as io from 'socket.io-client';

import { ITransactionsSummary } from '../../shared/ITransactionsSummary';

export const transactionsSummaryActionsNames = {
  SET_TRANSACTIONS_COUNT: 'SET_TRANSACTIONS_COUNT'
};

const socket = io();

export function listenToTransactionsSummaryAction() {
  return dispatch => {
    socket.on('transactions-summary', (transactionsSummary: ITransactionsSummary) => {
      dispatch(setTransactionsCountAction(transactionsSummary.count));
    });
  };
}

export function setTransactionsCountAction(count: number) {
  return {
    type: transactionsSummaryActionsNames.SET_TRANSACTIONS_COUNT,
    count
  };
}
