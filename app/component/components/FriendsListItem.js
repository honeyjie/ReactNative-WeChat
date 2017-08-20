import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { RecentTime } from '../helper/formateDate'

const FriendsListItem = ({ avatar, name, id, navigation, lastTime, lastMessage }) => {
  const isChats = navigation.state.routeName === 'Chats'
  const { navigate } = navigation

  const handlePress = (id, name) => {
    isChats
      ? navigate('ChatWith', { id, name })
      : navigate('Profile', { id, name })
  }

  const time = lastTime && RecentTime(lastTime)

  return (
    <TouchableOpacity style={styles.root} onPress={()=>handlePress(id, name)}>
        <Image
          style={{ width: 40, height: 40, borderRadius: 5 }}
          source={{ uri: avatar }}
        />
        <View style={styles.main}>
          <View style={styles.content}>
            <Text style={styles.name}>
              {name}
            </Text>
            {isChats && <Text style={styles.message}>{lastMessage}</Text>}
          </View>
          {isChats && <Text style={styles.time}>{time}</Text>}
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingTop: 10,
    paddingBottom: 10,
    height: 60,
  },
  main: {
    paddingLeft: 10,
    paddingTop: 2,
    paddingBottom: 2,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 14,
    flex: 1,
  },
  message: {
    fontSize: 12,
    color: '#333',
  },
  time: {
    fontSize: 10,
    textAlign: 'right',
    color: '#333',
  },
})

export default FriendsListItem
