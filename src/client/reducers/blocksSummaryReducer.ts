import { blocksSummaryActionsNames } from './../actions/blocksSummaryActions';
import { IBlocksSummary } from './../../shared/IBlocksSummary';

const initialState: IBlocksSummary = {
  count: 0,
  latestBlocksSummary: [
    { confirmationTime: 15, timestamp: 0, gasUsed: 100, hash: '0x7862145', number: 171009 },
    { confirmationTime: 11, timestamp: 0, gasUsed: 200, hash: '0x7862145', number: 171008 },
    { confirmationTime: 19, timestamp: 0, gasUsed: 130, hash: '0x7862145', number: 171007 },
    { confirmationTime: 15, timestamp: 0, gasUsed: 110, hash: '0x7862145', number: 171006 },
    { confirmationTime: 14, timestamp: 0, gasUsed: 101, hash: '0x7862145', number: 171005 },
    { confirmationTime: 13, timestamp: 0, gasUsed: 120, hash: '0x7862145', number: 171004 },
    { confirmationTime: 12, timestamp: 0, gasUsed: 105, hash: '0x7862145', number: 171003 },
    { confirmationTime: 13, timestamp: 0, gasUsed: 106, hash: '0x7862145', number: 171002 },
    { confirmationTime: 17, timestamp: 0, gasUsed: 170, hash: '0x7862145', number: 171001 }
  ]
};

export function blocksSummary(state: IBlocksSummary = initialState, action) {
  switch (action.type) {
    case blocksSummaryActionsNames.SET_BLOCKS_COUNT:
      return { ...state, count: action.count };

    case blocksSummaryActionsNames.SET_LATEST_BLOCKS:
      return { ...state, latestBlocksSummary: action.latestBlocksSummary };

    default:
      return state;
  }
}
