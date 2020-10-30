/**
 * @format
 */

import React from 'react';


import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


// Redux Begin
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
// Redux End

// AppRegistry.registerComponent(appName, () => App);

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(logger, thunk)),
  );
  
  // HOC
  const ReduxApp = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );
  
  AppRegistry.registerComponent(appName, () => ReduxApp);
  
