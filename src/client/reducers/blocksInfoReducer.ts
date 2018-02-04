import { blocksInfoActionsNames } from './../actions/blocksInfoActions';

export interface IBlocksInfo {
  count: number;
}

const initialState: IBlocksInfo = {
  count: 0
};

export function blocksInfo(state: IBlocksInfo = initialState, action) {
  switch (action.type) {
    case blocksInfoActionsNames.SET_BLOCKS_COUNT:
      return {...state, count: action.count};

    default:
      return state;
  }
}
