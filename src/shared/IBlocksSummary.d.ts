export interface IBlockSummary {
    confirmationTime: number;
    timestamp: number;
    gasUsed: number;
    hash: string;
    number: number;
}

export interface IBlocksSummary {
    count: number;
    latestBlocksSummary: IBlockSummary[];
}