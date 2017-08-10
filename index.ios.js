/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './app/index.js'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SimpleApp extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
