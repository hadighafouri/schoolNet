import {applyMiddleware, createStore, compose} from 'redux';
import rootReducer from './reducers';

import thunk from 'redux-thunk';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import fbConfig from '../config/fbConfig';

export default function configureStore (initialState, history) {
  const middleware = [thunk.withExtraArgument ({getFirebase, getFirestore})];
  const createStoreWithMiddleware = compose (
    applyMiddleware (...middleware),
    reduxFirestore (fbConfig),
    reactReduxFirebase (fbConfig),
    typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined'
      ? () => window.__REDUX_DEVTOOLS_EXTENSION__
      : f => f
  ) (createStore);

  const store = createStoreWithMiddleware (rootReducer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept ('./reducers', () => {
      const nextRootReducer = require ('./reducers');
      store.replaceReducer (nextRootReducer);
    });
  }

  return store;
}
