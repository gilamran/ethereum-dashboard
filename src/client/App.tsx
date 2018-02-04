import * as React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from './store/store';
import { Home } from './components/Home/Home';
import { listenToTransactionsInfoAction } from './actions/transactionsInfoActions';

const store = configureStore();
store.dispatch(listenToTransactionsInfoAction());

export const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
