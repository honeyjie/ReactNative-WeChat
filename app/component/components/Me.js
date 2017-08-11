import React, {Component} from 'react'
import { Text, StyleSheet } from 'react-native'
import SimpleText from './SimpleText'
import Icons from 'react-native-vector-icons/FontAwesome'

class Me extends Component {
  static navigationOptions = {
    title: 'Me',
    tabBarLabel: 'Me',
    tabBarIcon: ({ tintColor }) => (
      <Icons name="user-o" size={24} color={tintColor} />
    )
  }

  render() {
    return <SimpleText banner="Me" />
  }
}

export default Me
