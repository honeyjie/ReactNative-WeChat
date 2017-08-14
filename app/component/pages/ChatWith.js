import React, { Component } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native'
import { connect } from 'react-redux'
import {
  userInfoSelector,
  friendSelector,
  friendChatLogSelector,
} from '../selector/contacts'
import { getCurrentFriendId, addChatLog } from '../actions/contacts'
import { is } from 'immutable'
import SimpleText from './SimpleText'
import OneMessage from '../components/OneMessage'

const messageId = 0

class ChatWith extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
  })

  constructor(props) {
    super(props)

    this.state = {
      textInput: '',
    }
  }

  componentWillMount() {
    console.log('---')
    const { navigation, getCurrentFriendId } = this.props
    const id = navigation.state.params.id
    console.log(id)
    id && getCurrentFriendId(navigation.state.params.id)
  }

  sendMessage = message => {
    const { friendChatLog, navigation, addChatLog } = this.props
    const id = navigation.state.params.id
    console.log(friendChatLog)
    this.setState({
      textInput: '',
    })

    const lastSendTime = addChatLog.lastTime || 0
    const now = Date.now()

    const sendTime = now - lastSendTime > 60 * 1000 ? now : lastSendTime
    console.log(sendTime)

    addChatLog(id, message, sendTime)
  }

  getMessages = friendChatLog => {
    if (is(friendChatLog) === is({})) {
      return []
    }

    const messageTimes = Object.keys(friendChatLog.messages)
    const messageSections = Object.values(friendChatLog.messages)
    const messages = []
    messageTimes.map((messageTime, index) => {
      messageSections[index].map(message => {
        messages.push({
          time: parseInt(messageTime, 10),
          message: message,
        })
      })
    })

    return messages
  }

  render() {
    const { userInfo, friend, friendChatLog } = this.props
    console.log(this.props)
    const lastSendTime = friendChatLog
      ? parseInt(friendChatLog.lastTime, 10)
      : 0
    const messages = this.getMessages(friendChatLog)
    console.log(messages)

    return (
      <View style={styles.root}>
        <View style={styles.messageBox}>
          <ScrollView>
            {messages.map(({ time, message }, index) => {
              return (
                <OneMessage
                  key={index}
                  userInfo={userInfo}
                  message={message}
                  lastSendTime={lastSendTime}
                  sendTime={time}
                />
              )
            })}
          </ScrollView>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.textInput}
            value={this.state.textInput}
            onChangeText={text => {
              this.setState({
                textInput: text,
              })
            }}
            placeholder="请输入..."
          />
          <TouchableOpacity
            onPress={() => this.sendMessage(this.state.textInput)}
            style={styles.send}
          >
            <Text>发送</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    // justifyContent: 'space-between'
  },
  messageBox: {
    flex: 1,
    height: 600,
  },
  inputBox: {
    position: 'absolute',
    bottom: 0,
    left: 10,
    right: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  textInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 1,
    padding: 10,
    fontSize: 14,
  },
  send: {
    marginLeft: 10,
  },
})

export default connect(
  (state, props) => {
    return {
      friend: () =>
      friendSelector(state, props) ? friendSelector(state, props).toJS() : {},
      userInfo: () =>
        userInfoSelector(state, props)
          ? userInfoSelector(state, props).toJS()
          : {},
      friendChatLog: () =>
        friendChatLogSelector(state, props)
          ? friendChatLogSelector(state, props).toJS()
          : {},
    }
  },
  { getCurrentFriendId, addChatLog }
)(ChatWith)
