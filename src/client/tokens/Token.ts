import { EventEmitter } from 'events';
import Web3 from 'web3';
import { ITokenTransfer } from '../reducers/tokensTransfersReducer';

export abstract class Token extends EventEmitter {
  private static transferIdx: number = 100;

  protected readonly name: string;
  protected readonly abi: any[];
  protected readonly address: string;

  private contract;
  private transferEvent;

  constructor(private web3) {
    super();
  }

  public init() {
    this.initContract();
    this.listenToTransferEvents();
  }

  protected abstract ProcessTransfer(transferObj: any): { from: string, to: string, amount: string };

  protected getNextId(): number {
    return Token.transferIdx++;
  }

  private listenToTransferEvents() {
    this.transferEvent = this.contract.Transfer();
    this.transferEvent.watch((error, data) => this.onTransfer(data));
  }

  private initContract() {
    const contract = this.web3.eth.contract(this.abi);
    this.contract = contract.at(this.address);
  }

  private onTransfer(transferObj) {
    const fromToAmount = this.ProcessTransfer(transferObj);
    const data: ITokenTransfer = { name: this.name, id: this.getNextId(), ...fromToAmount };
    this.emit('transfer', data);
  }

}