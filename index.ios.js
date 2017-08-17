import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
import createLogger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import AppReducer from './app/component/reducers'
import AppNavigator from './app/component/navigators/AppNavigator'

class SimpleApp extends React.Component {
  store = createStore(
    AppReducer,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )

  render() {
    return (
      <Provider store={this.store}>
        <AppNavigator />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('SimpleApp', () => SimpleApp)

export default SimpleApp
