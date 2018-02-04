import * as io from 'socket.io-client';
import { transactionsInfo, ITransactionsInfo } from '../reducers/transactionsInfoReducer';

export const blocksInfoActionsNames = {
  SET_BLOCKS_COUNT: 'SET_BLOCKS_COUNT'
};

const socket = io();

export function listenToBlocksInfoAction() {
  return dispatch => {
    socket.on('blocks-info', (blocksInfoDTO: ITransactionsInfo) => {
      dispatch(seBlocksCountAction(blocksInfoDTO.count));
    });
  };
}

export function seBlocksCountAction(count: number) {
  return {
    type: blocksInfoActionsNames.SET_BLOCKS_COUNT,
    count
  };
}
