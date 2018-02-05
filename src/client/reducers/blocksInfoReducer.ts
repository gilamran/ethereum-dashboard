import { blocksInfoActionsNames } from './../actions/blocksInfoActions';
import { IBlocksInfo } from './../../shared/IBlocksInfo';

const initialState: IBlocksInfo = {
  count: 0,
  latestBlocks: [
    { confirmationTime: 15, gasUsed: 100, hash: '0x7862145', number: 171009 },
    { confirmationTime: 11, gasUsed: 200, hash: '0x7862145', number: 171008 },
    { confirmationTime: 19, gasUsed: 130, hash: '0x7862145', number: 171007 },
    { confirmationTime: 15, gasUsed: 110, hash: '0x7862145', number: 171006 },
    { confirmationTime: 14, gasUsed: 101, hash: '0x7862145', number: 171005 },
    { confirmationTime: 13, gasUsed: 120, hash: '0x7862145', number: 171004 },
    { confirmationTime: 12, gasUsed: 105, hash: '0x7862145', number: 171003 },
    { confirmationTime: 13, gasUsed: 106, hash: '0x7862145', number: 171002 },
    { confirmationTime: 17, gasUsed: 170, hash: '0x7862145', number: 171001 }
  ]
};

export function blocksInfo(state: IBlocksInfo = initialState, action) {
  switch (action.type) {
    case blocksInfoActionsNames.SET_BLOCKS_COUNT:
      return { ...state, count: action.count };

    default:
      return state;
  }
}
