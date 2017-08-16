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
import { toJS } from '../helper/toJS'
import { getChatLogs, addChatLog } from '../actions/contacts'
import { chatLogsSelector, friendsSelector } from '../selector/contacts'
import SimpleText from './SimpleText'
import Messages from '../components/Messages'

class ChatWith extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
  })

  constructor(props) {
    super(props)

    this.state = {
      text: '',
    }
  }

  componentWillMount() {
    const { navigation, getChatLogs } = this.props
    const id = navigation.state.params.id

    getChatLogs(id)
  }

  sendMessage = message => {
    if (!message) return

    const { chatLogs, navigation, addChatLog } = this.props
    const id = navigation.state.params.id

    const sendTime = Date.now()
    const isIdChanged = message.slice(0, 2) === '>c'
    const whoseId = isIdChanged ? id : 0
    const sendMessage = isIdChanged ? message.substring(2) : message

    sendMessage && addChatLog(id, sendMessage, sendTime, whoseId)

    this.setState({
      text: '',
    })
  }

  render() {
    const { friends, chatLogs, navigation } = this.props
    const id = navigation.state.params.id
    const friend = friends[id]
    const userInfo = friends['0']

    const chatMessages = chatLogs[id]
    return (
      <View style={styles.root}>
        <View style={styles.messageBox}>
          <ScrollView>
            {chatMessages &&
              chatMessages.map(({ lastTime, messages }, index) => {
                console.log(chatMessages[index - 1])
                return (
                  <Messages
                    key={index}
                    userInfo={userInfo}
                    friend={friend}
                    messages={messages}
                    lastSendTime={
                      (chatMessages[index - 1] &&
                        chatMessages[index - 1].lastTime) ||
                      0
                    }
                    lastTime={lastTime}
                  />
                )
              })}
          </ScrollView>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.textInput}
            placeholder="请输入..."
            onChangeText={text => {
              console.log(text)
              this.setState({
                text: text
              })
            }}
            value={this.state.text}
          />
          <TouchableOpacity
            onPress={() => this.sendMessage(this.state.text)}
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
    justifyContent: 'space-between',
  },
  messageBox: {
    flex: 1,
    height: 600,
  },
  inputBox: {
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
    paddingLeft: 10,
    paddingRight: 10,
  },
})

export default connect(
  (state, props) => ({
    friends: toJS(friendsSelector(state, props)),
    chatLogs: toJS(chatLogsSelector(state, props)),
  }),
  { getChatLogs, addChatLog }
)(ChatWith)
