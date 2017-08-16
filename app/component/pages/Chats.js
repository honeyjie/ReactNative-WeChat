import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import SimpleText from './SimpleText'
import Icons from 'react-native-vector-icons/FontAwesome'
import { is } from 'immutable'
import { toJS } from '../helper/toJS'
import { getRecentChatLogs, getFriends } from '../actions/contacts'
import { recentChatLogsSelector, friendsSelector } from '../selector/contacts'
import FriendsList from '../components/FriendsList'
import { connect } from 'react-redux'
import { chooseChatFriends } from '../helper/chooseChatFriends'

class Chats extends Component {
  static navigationOptions = {
    title: 'Chats',
    tabBarLabel: 'Chats',
    tabBarIcon: ({ tintColor }) =>
      <Icons name="comment-o" size={20} color={tintColor} />,
  }

  componentWillMount() {
    const { getRecentChatLogs, getFriends } = this.props

    getRecentChatLogs()
    getFriends()
  }

  componentWillReceiveProps(nextProps) {
    const { recentProps, getRecentChatLogs } = this.props
    if (!is(nextProps.recentChatLogs, this.props.recentChatLogs)) {
      getRecentChatLogs()
    }
  }


  render() {
    console.log(this.props)
    const { navigation, recentChatLogs, friends } = this.props
    const friendsChatLog = chooseChatFriends(friends, recentChatLogs)
    return <FriendsList navigation={navigation} friends={friendsChatLog} />
  }
}

export default connect(
  (state, props) => ({
    recentChatLogs: toJS(recentChatLogsSelector(state, props)),
    friends:
      friendsSelector(state, props) && friendsSelector(state, props).toJS(),
  }),
  {
    getRecentChatLogs,
    getFriends,
  }
)(Chats)
