import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import SimpleText from './SimpleText'
import Icons from 'react-native-vector-icons/FontAwesome'
import { chatLogsSelector } from '../selector/contacts'
import { friendsSelector } from '../selector/contacts'
import FriendsList from '../components/FriendsList'
import { connect } from 'react-redux'
import { toJS } from 'immutable'
import { chooseChatFriends } from '../helper/chooseChatFriends'

class Chats extends Component {
  static navigationOptions = {
    title: 'Chats',
    tabBarLabel: 'Chats',
    tabBarIcon: ({ tintColor }) =>
      <Icons name="comment-o" size={20} color={tintColor} />,
  }

  render() {
    const { navigation, chatLogs, friends } = this.props
    const { navigate } = navigation
    const friendsChatLog = chooseChatFriends(friends, chatLogs)

    console.log(friendsChatLog)

    return <FriendsList navigation={navigation} friends={friendsChatLog} />
  }
}

export default connect((state, props) => ({
  chatLogs: chatLogsSelector(state, props).toJS(),
  friends: friendsSelector(state, props).toJS(),
}))(Chats)
