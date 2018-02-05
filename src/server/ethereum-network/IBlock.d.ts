export interface IBlock {
  timestamp: number;
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