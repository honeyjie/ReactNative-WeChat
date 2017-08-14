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
// import { friendSelector } from '../selector/contacts'
// import { userInfoSelector } from '../selector/contacts'
// import { currentFriendInfo } from '../actions/contacts'
import { friendSelector } from '../selector/contacts'
import { getCurrentFriendId } from '../actions/contacts'
import { toJS } from 'immutable'
import SimpleText from './SimpleText'

class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}'s Profile`,
  })

  componentDidMount() {
    const { getCurrentFriendId, navigation } = this.props
    getCurrentFriendId(navigation.state.params.id)
  }

  render() {
    const { navigation, friend } = this.props

    // const { navigaiton, { friend: {name, avatar}}} = this.props
    console.log(this.props)

    return (
      <View style={styles.root}>
        <View style={styles.info}>
          <Image
            style={{ width: 76, height: 76, borderRadius: 5 }}
            source={{ uri: friend.avatar }}
          />
          <View style={styles.content}>
            <Text>
              {friend.name}
            </Text>
            <Text style={styles.weixinId}>
              微信号: {friend.id}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChatWith', { name: friend.name })}
        >
          <Text style={styles.send}>发消息</Text>
        </TouchableOpacity>
      </View>
    )
    // return (
    //   <View>
    //     <Button
    //       onPress={() => navigate('ChatWith', { name: friend.name })}
    //       title="与 Ta 聊天"
    //     />
    //     <SimpleText banner="Profile" />
    //   </View>
    // )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: '#ccc',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: '5%',
  },
  content: {
    paddingLeft: 10,
    flex: 1,
    display: 'flex',
  },
  weixinId: {
    fontSize: 12,
    color: '#333',
    paddingTop: 10,
  },
  send: {
    color: '#fff',
    fontSize: 16,
    backgroundColor: 'green',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
  },
})

export default connect(
  (state, props) => ({
    friend: () =>
      friendSelector(state, props) ? friendSelector(state, props).toJS() : {},
  }),
  { getCurrentFriendId }
)(Profile)
