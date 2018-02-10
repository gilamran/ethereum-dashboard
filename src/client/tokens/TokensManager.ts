declare const Web3;
declare let web3;

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider('/tunnle'));
}

import { EOSToken } from './EOSToken';
import { TronToken } from './TronToken';
import { VeChainToken } from './VeChainToken';
import { OmiseGOToken } from './OmiseGOToken';
import { Token } from './Token';
import { EventEmitter } from 'events';

class TokensManager extends EventEmitter {
  private tokens: Token[];

  constructor() {
    super();
  }

  public init() {
    this.initTokens();
    this.propegateTokensTransferEvents();
  }

  private initTokens() {
    this.tokens = [
      new EOSToken(web3),
      new TronToken(web3),
      new VeChainToken(web3),
      new OmiseGOToken(web3),
    ];
  }

  private propegateTokensTransferEvents() {
    this.tokens.forEach(token => token.on('transfer', data => this.emit('transfer', data)));
  }
}

export const tokensManager = new TokensManager();
