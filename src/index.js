import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import 'firebase/database';
// import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
// import {createFirestoreInstance} from 'redux-firestore';
// import configureStore from './store/store';
// import {
//   firebase as fbConfig,
//   reduxFirebase as rfConfig,
// } from './config/fbConfig';

import {applyMiddleware, createStore, compose} from 'redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App';
import 'materialize-css/dist/css/materialize.min.css';

import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import fbConfig from './config/fbConfig';
import rootReducer from './store/reducers';
import thunk from 'redux-thunk';

// const initialState = window && window.__INITIAL_STATE__; // set initial state here
// const store = configureStore (initialState);
// // Initialize Firebase instance
// firebase.initializeApp (fbConfig);

// const composeEnhancesrs =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (
  rootReducer,
  compose (
    applyMiddleware (
      // logger,
      thunk.withExtraArgument ({getFirebase, getFirestore})
    ),
    reduxFirestore (fbConfig),
    reactReduxFirebase (fbConfig, {
      useFirestoreForProfile: true,
      userProfile: 'schools',
      attachAuthIsReady: true,
    }),
    typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined'
      ? () => window.__REDUX_DEVTOOLS_EXTENSION__
      : f => f
  )
);
ReactDOM.render (
  <Provider store={store}>
    {/* <ReactReduxFirebaseProvider
      firebase={firebase}
      config={rfConfig}
      dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}
    > */}
    <App />
    {/* </ReactReduxFirebaseProvider> */}

  </Provider>,
  document.getElementById ('root')
);
