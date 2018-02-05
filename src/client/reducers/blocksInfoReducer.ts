import { blocksInfoActionsNames } from './../actions/blocksInfoActions';

export interface IBlocksInfo {
  count: number;
  confirmationTimes: number[];
}

const initialState: IBlocksInfo = {
  count: 0,
  confirmationTimes: [15, 11, 8, 15, 19, 21, 15, 9, 11, 12]
};

export function blocksInfo(state: IBlocksInfo = initialState, action) {
  switch (action.type) {
    case blocksInfoActionsNames.SET_BLOCKS_COUNT:
      return {...state, count: action.count};

    default:
      return state;
  }
}
