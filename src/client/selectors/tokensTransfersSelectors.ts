import { IStore } from '../store/IStore';
import { ITokenTransfer } from '../reducers/tokensTransfersReducer';

const MAX_TOKEN_TRANSFER_HISTORY = 5;

export function getTokenTransfers(state: IStore, tokenName: string): ITokenTransfer[] {
  const tokenTransfers = state.tokensTransfers.transfers.filter(t => t.name === tokenName);
  const smallHistory = tokenTransfers.slice(tokenTransfers.length - MAX_TOKEN_TRANSFER_HISTORY, tokenTransfers.length);
  return smallHistory.reverse();
}