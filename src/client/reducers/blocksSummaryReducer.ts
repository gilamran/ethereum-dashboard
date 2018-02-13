import { blocksSummaryActionsNames } from './../actions/blocksSummaryActions';
import { IBlocksSummary } from './../../shared/IBlocksSummary';

const initialState: IBlocksSummary = {
  count: 1719318,
  numberOfUnkles: 1234,
  latestBlocksSummary: [
    { confirmationTime: 15, totalTransactions: 5, gasPriceToSendEther: 3, timestamp: 0, gasUsed: 100, hash: '0x7862145', number: 171009 },
    { confirmationTime: 11, totalTransactions: 6, gasPriceToSendEther: 2, timestamp: 0, gasUsed: 200, hash: '0x7862145', number: 171008 },
    { confirmationTime: 19, totalTransactions: 7, gasPriceToSendEther: 7, timestamp: 0, gasUsed: 130, hash: '0x7862145', number: 171007 },
    { confirmationTime: 15, totalTransactions: 8, gasPriceToSendEther: 6, timestamp: 0, gasUsed: 110, hash: '0x7862145', number: 171006 },
    { confirmationTime: 14, totalTransactions: 9, gasPriceToSendEther: 7, timestamp: 0, gasUsed: 101, hash: '0x7862145', number: 171005 },
    { confirmationTime: 13, totalTransactions: 8, gasPriceToSendEther: 9, timestamp: 0, gasUsed: 120, hash: '0x7862145', number: 171004 },
    { confirmationTime: 12, totalTransactions: 7, gasPriceToSendEther: 9, timestamp: 0, gasUsed: 105, hash: '0x7862145', number: 171003 },
    { confirmationTime: 13, totalTransactions: 6, gasPriceToSendEther: 8, timestamp: 0, gasUsed: 106, hash: '0x7862145', number: 171002 },
    { confirmationTime: 17, totalTransactions: 4, gasPriceToSendEther: 7, timestamp: 0, gasUsed: 170, hash: '0x7862145', number: 171001 }
  ]
};

export function blocksSummary(state: IBlocksSummary = initialState, action) {
  switch (action.type) {
    case blocksSummaryActionsNames.SET_BLOCKS_COUNT:
      return { ...state, count: action.count, numberOfUnkles: action.numberOfUnkles };

    case blocksSummaryActionsNames.SET_LATEST_BLOCKS:
      return { ...state, latestBlocksSummary: action.latestBlocksSummary };

    default:
      return state;
  }
}
