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
const MAX_TOKEN_TRANSFER_HISTORY = 5;

const initialState: ITokensTransfers = {
  transfers: [
    {name: 'EOS', id: 1, from: '0xe93381fb4c4f14bda253907b18fad305d799241a', to: '0x03f242ca9d16530f8f537d4cd74c1cdd182ac98f', amount: '1'},
    {name: 'EOS', id: 2, from: '0xe93381fb4c4f14bda253907b18fad305d799241a', to: '0x03f242ca9d16530f8f537d4cd74c1cdd182ac98f', amount: '2'},
    {name: 'EOS', id: 3, from: '0xe93381fb4c4f14bda253907b18fad305d799241a', to: '0x03f242ca9d16530f8f537d4cd74c1cdd182ac98f', amount: '3'},
    {name: 'EOS', id: 4, from: '0xe93381fb4c4f14bda253907b18fad305d799241a', to: '0x03f242ca9d16530f8f537d4cd74c1cdd182ac98f', amount: '4'},
    {name: 'EOS', id: 5, from: '0xe93381fb4c4f14bda253907b18fad305d799241a', to: '0x03f242ca9d16530f8f537d4cd74c1cdd182ac98f', amount: '5'}
  ]
};

export function tokensTransfers(state: ITokensTransfers = initialState, action) {
  switch (action.type) {
    case tokensTransfersActionsNames.REGISTER_TOKEN_TRANSFER:
      const transfers = [...state.transfers, action.data];
      while (transfers.length > MAX_TOKEN_TRANSFER_HISTORY) {
        transfers.shift();
      }
      return { ...state, transfers };

    default:
      return state;
  }
}