import React from 'react'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'

import ChatWith from '../pages/ChatWith'
import Contacts from '../pages/Contacts'
import Discover from '../pages/Discover'
import Me from '../pages/Me'
import Moments from '../pages/Moments'
import Profile from '../pages/Profile'
import Chats from '../pages/Chats'
import Posts from '../pages/Posts'

const MyAppTab = TabNavigator(
  {
    Chats: {
      screen: Chats,
    },
    Contacts: {
      screen: Contacts,
    },
    Discover: {
      screen: Discover,
    },
    Me: {
      screen: Me,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#66cc00',
      labelStyle: {
        fontSize: 10,
        marginTop: -4
      },
      style: {
        height: 44
      }
    }
  }
)

const AppNavigator = StackNavigator(
  {
    MyAppTab: {
      screen: MyAppTab,
    },
    ChatWith: {
      screen: ChatWith,
    },
    Profile: {
      screen: Profile
    },
    Moments: {
      screen: Moments
    },
    Posts: {
      screen: Posts
    }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
      'lazy': true,
      tabBarOptions: {
        scrollEnabled: true
      }
    },
  }
)

export default AppNavigator
