import React from 'react'
import { Text, Image, Button, StyleSheet } from 'react-native'
import { DrawerNavigator } from 'react-navigation'

import FirstScreen from './screen1'
import SecondScreen from './screen2'

const MyApp = DrawerNavigator(
  {
    First: {
      path: '/',
      screen: FirstScreen,
    },
    Second: {
      path: '/sent',
      screen: SecondScreen,
    },
  },
  {
    initialRouteName: 'First',
    drawerPosition: 'left',
    drawerWidth: 200,
    contentOptions: {
      activeTintColor: 'red'
    }
  }
)

export default MyApp
