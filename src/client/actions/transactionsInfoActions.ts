import * as io from 'socket.io-client';
import { transactionsInfo, ITransactionsInfo } from '../reducers/transactionsInfoReducer';

export const simulationOutputActionsNames = {
  SET_TRANSACTIONS_COUNT: 'SET_TRANSACTIONS_COUNT'
};

const socket = io();

export function listenToTransactionsInfoAction() {
  return dispatch => {
    socket.on('transactions-info', (transactionsInfoDTO: ITransactionsInfo) => {
      dispatch(setTransactionsCountAction(transactionsInfoDTO.count));
    });
  };
}

export function setTransactionsCountAction(count: number) {
  return {
    type: simulationOutputActionsNames.SET_TRANSACTIONS_COUNT,
    count
  };
}
