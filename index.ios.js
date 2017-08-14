/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import App from './app/index'
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// export default class SimpleApp extends Component {
//   render() {
//     return (
//       <App />
//     );
//   }
// }

import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import AppReducer from './app/component/reducers'
import AppNavigator from './app/component/navigators/AppNavigator'

class SimpleApp extends React.Component {
  store = createStore(
    AppReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  render() {
    return (
      <Provider store={this.store}>
        <AppNavigator />
      </Provider>
    )
  }
}

// AppRegistry.registerComponent('ReduxExample', () => ReduxExampleApp);

// export default ReduxExampleApp;

AppRegistry.registerComponent('SimpleApp', () => SimpleApp)

export default SimpleApp
