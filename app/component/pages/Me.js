import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'
import { OneRow } from '../components/OneRow'

class Me extends Component {
  static navigationOptions = {
    title: 'Me',
    tabBarLabel: 'Me',
    tabBarIcon: ({ tintColor }) =>
      <Icons name="user-o" size={20} color={tintColor} />,
  }

  render() {
    const { avatar, name, id } = {
      id: 0,
      avatar:
        'https://avatars2.githubusercontent.com/u/16475074?v=4&u=8fca28cc5ff7d0078db87c9b4961b976e5a8f355&s=400',
      name: 'Amanda_jiejie',
    }

    const { navigate } = this.props.navigation

    return (
      <View style={styles.root}>
        <View style={styles.info}>
          <View style={styles.left}>
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
          <View style={styles.right}>
            <Icons name="qrcode" size={20} color="#ccc" style={styles.qrcode} />
            <Icons name="angle-right" size={20} color="#ccc" />
          </View>
        </View>
<View style={styles.posts}>
        <OneRow
          iconName="photo"
          text="My Posts"
          handlePress={() => {
            navigate('Posts', { name, id })
          }}
        />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 12
  },
  left: {
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  posts: {
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  qrcode: {
    marginRight: 6,
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
})

export default Me
