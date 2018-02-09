import { Token } from './Token';
import { ITokenTransfer } from '../reducers/tokensTransfersReducer';

export class TronToken extends Token {
  protected readonly name;
  protected readonly abi;
  protected readonly address;

  constructor(web3) {
    super(web3);
    this.name = 'Tron';
    this.abi = [{ constant: true, inputs: [], name: 'name', outputs: [{ name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [], name: 'stop', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ 'name': '_spender', 'type': 'address' }, { 'name': '_value', 'type': 'uint256' }], name: 'approve', outputs: [{ 'name': 'success', 'type': 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'totalSupply', outputs: [{ 'name': '', 'type': 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ 'name': '_from', 'type': 'address' }, { 'name': '_to', 'type': 'address' }, { 'name': '_value', 'type': 'uint256' }], name: 'transferFrom', outputs: [{ 'name': 'success', 'type': 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'decimals', outputs: [{ 'name': '', 'type': 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ 'name': '_value', 'type': 'uint256' }], name: 'burn', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [{ 'name': '', 'type': 'address' }], name: 'balanceOf', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'stopped', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'symbol', outputs: [{ name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_to', type: 'address' }, { name: '_value', type: 'uint256' }], name: 'transfer', outputs: [{ name: 'success', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [], name: 'start', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ name: '_name', type: 'string' }], name: 'setName', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [{ name: '', type: 'address' }, { name: '', type: 'address' }], name: 'allowance', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { inputs: [{ name: '_addressFounder', type: 'address' }], payable: false, stateMutability: 'nonpayable', type: 'constructor' }, { anonymous: false, inputs: [{ indexed: true, name: '_from', type: 'address' }, { indexed: true, name: '_to', type: 'address' }, { indexed: false, name: '_value', type: 'uint256' }], name: 'Transfer', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: '_owner', type: 'address' }, { indexed: true, name: '_spender', type: 'address' }, { indexed: false, name: '_value', type: 'uint256' }], name: 'Approval', type: 'event' }];
    this.address = '0xf230b790E05390FC8295F4d3F60332c93BEd42e2';
    this.init();
  }

  protected ProcessTransfer(transferObj: any): { from: string, to: string, amount: string } {
    const { _from, _to, _value } = transferObj.args;
    const amount = this.valueToAmount(_value);
    return { from: _from, to: _to, amount };
  }

  protected valueToAmount(value): string {
    return value.s;
  }
}