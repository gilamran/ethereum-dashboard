import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';
import { IStore } from './IStore';

export function configureStore(preloadedState?: IStore) {
  const middleware = [thunk];
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const result = createStore<IStore>(rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(...middleware)
  ));

  return result;
}
