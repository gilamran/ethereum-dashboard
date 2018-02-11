export interface ITransaction {
  blockHash: string;
  blockNumber: number;
  hash: string;
  transactionIndex: number;
  from: string;
  to: string;
  gas: number;
  gasPrice: number;
  input: string;
  nonce: number;
  r: string;
  s: string;
  v: string;
  value: string;
}