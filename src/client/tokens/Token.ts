import { EventEmitter } from 'events';
import { ITokenTransfer } from '../reducers/tokensTransfersReducer';

export abstract class Token extends EventEmitter {
  private static transferIdx: number = 100;

  protected readonly name: string;
  protected readonly tokenDecimals: number;
  protected readonly abi: any[];
  protected readonly address: string;

  private contract;
  private transferEvent;
  private divider: string;

  constructor(private web3) {
    super();
  }

  public init() {
    this.initDivider();
    this.initContract();
    this.listenToTransferEvents();
  }

  protected abstract ProcessTransfer(transferObj: any): { from: string, to: string, amount: string };

  protected getNextId(): number {
    return Token.transferIdx++;
  }

  protected amountToStr(amount): string {
    return amount.dividedBy(this.divider).toString();
  }

  private initDivider(): void {
    this.divider = '1';
    for (let i = 0; i < this.tokenDecimals; i++) {
      this.divider = this.divider + '0';
    }
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