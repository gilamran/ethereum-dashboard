export interface IBlock {
  difficulty: number;
  gasLimit: number;
  gasUsed: number;
  hash: string;
  number: number;
  parentHash: string;
  size: number;
  transactions: any[];
  transactionsRoot: string;
  uncles: any[];
}