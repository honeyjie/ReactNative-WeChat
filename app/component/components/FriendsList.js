import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import FriendsListItem from './FriendsListItem'

const FriendsList = ({ friends, navigation }) => {
  const friendsId = Object.keys(friends)

  return (
    <View style={styles.root}>
      <ScrollView>
        <View style={styles.content}>
          {Object.values(
            friends
          ).map(({ id, name, avatar, lastTime, lastMessage }, index) =>
            <FriendsListItem
              key={index}
              id={id}
              name={name}
              avatar={avatar}
              lastTime={lastTime}
              lastMessage={lastMessage}
              navigation={navigation}
            />
          )}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
  },
})

export default FriendsList
