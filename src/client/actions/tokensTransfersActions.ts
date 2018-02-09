import { tokensManager } from '../tokens/TokensManager';
import { ITokenTransfer } from '../reducers/tokensTransfersReducer';

export const tokensTransfersActionsNames = {
  REGISTER_TOKEN_TRANSFER: 'REGISTER_TOKEN_TRANSFER'
};

export function listenToTokensTransfersAction() {
  return dispatch => {
    tokensManager.init();
    tokensManager.on('transfer', data => dispatch(registerTokenTransferAction(data)));
  };
}

export function registerTokenTransferAction(data: ITokenTransfer) {
  return {
    type: tokensTransfersActionsNames.REGISTER_TOKEN_TRANSFER,
    data
  };
}
