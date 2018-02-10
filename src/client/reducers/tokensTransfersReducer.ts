import { tokensTransfersActionsNames } from '../actions/tokensTransfersActions';
import { IStore } from '../store/IStore';

export interface ITokenTransfer {
  id: number;
  name: string;
  from: string;
  to: string;
  amount: string;
}

export interface ITokensTransfers {
  transfers: ITokenTransfer[];
}

const initialState: ITokensTransfers = {
  transfers: []
};

export function tokensTransfers(state: ITokensTransfers = initialState, action) {
  switch (action.type) {
    case tokensTransfersActionsNames.REGISTER_TOKEN_TRANSFER:
      const transfers = [...state.transfers, action.data];
      return { ...state, transfers };

    default:
      return state;
  }
}