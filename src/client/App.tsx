import * as React from 'react';
import { Provider } from 'react-redux';
import Reboot from 'material-ui/Reboot';

import { configureStore } from './store/store';
import { Home } from './components/Home/Home';
import { listenToTransactionsInfoAction } from './actions/transactionsInfoActions';
import { listenToBlocksInfoAction } from './actions/blocksInfoActions';

const store = configureStore();
store.dispatch(listenToTransactionsInfoAction());
store.dispatch(listenToBlocksInfoAction());

export const App = () => (
  <Provider store={store}>
    <div>
      <Reboot />
      <Home />
    </div>
  </Provider>
);
