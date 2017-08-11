import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import SimpleText from './SimpleText'
import Icons from 'react-native-vector-icons/FontAwesome'

class Chats extends Component {
  static navigationOptions = {
    title: 'Chats',
    tabBarLabel: 'Chats',
    tabBarIcon: ({ tintColor }) =>
      <Icons name="comment-o" size={24} color={tintColor} />,
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Button
          onPress={() => navigate('ChatWith', { name: 'Lime' })}
          title="进入聊天"
        />
        <SimpleText banner="Chats" />
      </View>
    )
  }
}

export default Chats
