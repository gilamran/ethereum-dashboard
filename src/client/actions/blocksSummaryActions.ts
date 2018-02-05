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
      dispatch(seBlocksCountAction(blocksSummary.count));
      dispatch(seLatestBlocksSummaryAction(blocksSummary.latestBlocksSummary));
    });
  };
}

export function seBlocksCountAction(count: number) {
  return {
    type: blocksSummaryActionsNames.SET_BLOCKS_COUNT,
    count
  };
}

export function seLatestBlocksSummaryAction(latestBlocksSummary: IBlockSummary[]) {
  return {
    type: blocksSummaryActionsNames.SET_LATEST_BLOCKS,
    latestBlocksSummary
  };
}
