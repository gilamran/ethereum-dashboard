import * as io from 'socket.io-client';

import { IBlocksSummary } from '../../shared/IBlocksSummary';

export const blocksSummaryActionsNames = {
  SET_BLOCKS_COUNT: 'SET_BLOCKS_COUNT'
};

const socket = io();

export function listenToBlocksSummaryAction() {
  return dispatch => {
    socket.on('blocks-summary', (blocksSummary: IBlocksSummary) => {
      dispatch(seBlocksCountAction(blocksSummary.count));
    });
  };
}

export function seBlocksCountAction(count: number) {
  return {
    type: blocksSummaryActionsNames.SET_BLOCKS_COUNT,
    count
  };
}
