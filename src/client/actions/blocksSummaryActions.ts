import * as io from 'socket.io-client';

import { IBlocksSummary, IBlockSummary } from '../../shared/IBlocksSummary';

export const blocksSummaryActionsNames = {
  SET_BLOCKS_COUNT: 'SET_BLOCKS_COUNT',
  SET_LATEST_BLOCKS: 'SET_LATEST_BLOCKS'
};

const socket = io();

export function listenToBlocksSummaryAction() {
  return dispatch => {
    socket.on('blocks-summary', (blocksSummary: IBlocksSummary) => {
      dispatch(sesBlocksCountAction(blocksSummary.count, blocksSummary.numberOfUnkles));
      dispatch(sesLatestBlocksSummaryAction(blocksSummary.latestBlocksSummary));
    });
  };
}

export function sesBlocksCountAction(count: number, numberOfUnkles: number) {
  return {
    type: blocksSummaryActionsNames.SET_BLOCKS_COUNT,
    count,
    numberOfUnkles
  };
}

export function sesLatestBlocksSummaryAction(latestBlocksSummary: IBlockSummary[]) {
  return {
    type: blocksSummaryActionsNames.SET_LATEST_BLOCKS,
    latestBlocksSummary
  };
}
