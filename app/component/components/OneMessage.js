import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { formateDate } from '../helper/formateDate'

export default class OneMessage extends Component {
  render() {
    const { message, userInfo, lastSendTime, sendTime } = this.props

    console.log(lastSendTime)
    const timeStamp = formateDate(parseInt(sendTime, 10), parseInt(lastSendTime, 10))

    return (
      <View style={styles.root}>
        {timeStamp &&
          <View style={styles.time}>
            <Text style={{ color: '#fff', fontSize: 8 }}>
              {timeStamp}
            </Text>
          </View>}
        <View style={styles.message}>
          <View style={styles.text}>
            <Text>
              {message}
            </Text>
          </View>
          <Image
            source={{ uri: userInfo.avatar }}
            style={{ width: 40, height: 40 }}
          />
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
  text: {
    padding: 10,
    backgroundColor: '#00d500',
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
})
