import React, {Component} from 'react'
import { Text, StyleSheet } from 'react-native'
import SimpleText from './SimpleText'

class ChatWith extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.name
  })

  render() {
    return <SimpleText banner="ChatWith"/>
  }
 }

export default ChatWith
