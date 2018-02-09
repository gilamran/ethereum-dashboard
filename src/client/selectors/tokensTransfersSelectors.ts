import { IStore } from '../store/IStore';
import { ITokenTransfer } from '../reducers/tokensTransfersReducer';

export function getTokenTransfers(state: IStore, tokenName: string): ITokenTransfer[] {
  return state.tokensTransfers.transfers.filter(t => t.name === tokenName);
}