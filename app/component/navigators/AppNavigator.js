import React from 'react'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'

import ChatWith from '../components/ChatWith'
import Contacts from '../components/Contacts'
import Discover from '../components/Discover'
import Me from '../components/Me'
// import Moments from '../components/Moments'
import Profile from '../components/Profile'
import Chats from '../components/Chats'

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
      },
    },
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
    },
  }
)

const MyApp = StackNavigator(
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
    // Moments: {
    //   screen: Moments
    // }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
    },
  }
)

export default MyApp
// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { addNavigationHelpers, StackNavigator } from 'react-navigation';

// import LoginScreen from '../components/LoginScreen';
// import MainScreen from '../components/MainScreen';
// import ProfileScreen from '../components/ProfileScreen';

// export const AppNavigator = StackNavigator({
//   Login: { screen: LoginScreen },
//   Main: { screen: MainScreen },
//   Profile: { screen: ProfileScreen },
// });

// const AppWithNavigationState = ({ dispatch, nav }) => {
//   console.log(addNavigationHelpers({ dispatch, state: nav }))
//   return (
//   <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
// )};

// AppWithNavigationState.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   nav: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => ({
//   nav: state.nav,
// });

// export default connect(mapStateToProps)(AppWithNavigationState);
// // export default AppWithNavigationState
