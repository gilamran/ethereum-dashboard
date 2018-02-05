export interface IBlockInfo {
    confirmationTime: number;
    gasUsed: number;
    hash: string;
    number: number;
}

export interface IBlocksInfo {
    count: number;
    latestBlocks: IBlockInfo[];
}