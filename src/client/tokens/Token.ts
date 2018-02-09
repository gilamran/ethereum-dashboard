import { EventEmitter } from 'events';
import Web3 from 'web3';

export abstract class Token extends EventEmitter {
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

  protected abstract valueToAmount(value): string;

  private listenToTransferEvents() {
    this.transferEvent = this.contract.Transfer();
    this.transferEvent.watch((error, data) => this.onTransfer(data));
  }

  private initContract() {
    const contract = this.web3.eth.contract(this.abi);
    this.contract = contract.at(this.address);
  }

  private onTransfer(transferObj) {
    const { from, to, value } = transferObj.args;
    const amount = this.valueToAmount(value);
    const data = {name: this.name, from, to, amount };
    this.emit('transfer', data);
  }

}