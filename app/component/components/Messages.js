import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { formateDate } from '../helper/formateDate'

const OneMessage = ({ message, whoseId, userInfo, friend }) => {
  const isMe = whoseId === 0
  const avatar = isMe ? userInfo.avatar : friend.avatar

  return (
    <View style={isMe ? styles.message : styles.others}>
      <View style={[styles.text, !isMe && { backgroundColor: '#fff' }]}>
        <Text>
          {message}
        </Text>
      </View>
      <Image source={{ uri: avatar }} style={{ width: 40, height: 40 }} />
    </View>
  )
}

export default class Messages extends Component {
  render() {
    const { messages, userInfo, friend, lastTime, lastSendTime } = this.props
    const timeStamp = formateDate(lastTime, lastSendTime)

    return (
      <View style={styles.root}>
        {timeStamp &&
          <View style={styles.time}>
            <Text style={{ color: '#fff', fontSize: 8 }}>
              {timeStamp}
            </Text>
          </View>}
        <View>
          {messages.map(({ message, whoseId }, index) =>
            <OneMessage
              key={index}
              message={message}
              whoseId={whoseId}
              userInfo={userInfo}
              friend={friend}
            />
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    padding: 10,
  },
  time: {
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: '#ccc',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    paddingBottom: 3,
  },
  message: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
    paddingLeft: 20,
  },
  others: {
    flexDirection: 'row-reverse',
    marginTop: 16,
    paddingLeft: 20,
    justifyContent: 'flex-end',
  },
  text: {
    padding: 10,
    backgroundColor: '#00d500',
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  trangle: {
    position: 'absolute',
    width: 5,
    height: 5,
    backgroundColor: 'orange',
  },
})
