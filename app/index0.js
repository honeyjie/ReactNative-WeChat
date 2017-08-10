import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import HomeScreen from './component/HomeScreen'
import ProfileScreen from './component/ProfileScreen'
import AllContactsScreen from './component/AllContactsScreen'
import RecentChatsScreen from './component/RecentChatsScreen'

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen }
})

const App = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Profile: { screen: ProfileScreen, path: 'people/:name' },
})

export default App
