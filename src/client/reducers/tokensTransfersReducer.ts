import { tokensTransfersActionsNames } from '../actions/tokensTransfersActions';
import { IStore } from '../store/IStore';

export interface ITokenTransfer {
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

export function getTokenTransfers(state: IStore, tokenName: string): ITokenTransfer[] {
  return state.tokensTransfers.transfers.filter(t => t.name === tokenName);
}