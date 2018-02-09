import * as React from 'react';
import { Provider } from 'react-redux';
import Reboot from 'material-ui/Reboot';

import { configureStore } from './store/store';
import { Home } from './components/Home/Home';
import { listenToTransactionsSummaryAction } from './actions/transactionsSummaryActions';
import { listenToBlocksSummaryAction } from './actions/blocksSummaryActions';
import { listenToTokensTransfersAction } from './actions/tokensTransfersActions';

const store = configureStore();
store.dispatch(listenToTransactionsSummaryAction());
store.dispatch(listenToBlocksSummaryAction());
store.dispatch(listenToTokensTransfersAction());

export const App = () => (
  <Provider store={store}>
    <div>
      <Reboot />
      <Home />
    </div>
  </Provider>
);
