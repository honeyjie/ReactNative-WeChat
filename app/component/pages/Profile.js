import React, { Component } from 'react'
import {
  View,
  Button,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import { friendsSelector } from '../selector/contacts'
import { toJS } from '../helper/toJS'
import SimpleText from './SimpleText'

class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}'s Profile`,
  })

  render() {
    const { navigation, friends } = this.props
    const id = navigation.state.params.id
    const { name, avatar } = friends[id]

    return (
      <View style={styles.root}>
        <View style={styles.info}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 5 }}
            source={{ uri: avatar }}
          />
          <View style={styles.content}>
            <Text>
              {name}
            </Text>
            <Text style={styles.weixinId}>
              微信号: {id}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChatWith', { name, id })}
        >
          <View style={styles.send}>
            <Text style={styles.text}>发消息</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  info: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 10
  },
  content: {
    paddingLeft: 10,
    flex: 1,
  },
  weixinId: {
    fontSize: 12,
    color: '#333',
    paddingTop: 10,
  },
  send: {
    backgroundColor: '#33cc33',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
})

export default connect((state, props) => ({
  friends: toJS(friendsSelector(state, props)),
}))(Profile)
