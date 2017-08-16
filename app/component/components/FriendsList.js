import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import FriendsListItem from './FriendsListItem'

const FriendsList = ({ friends, navigation }) => {
  const friendsId = Object.keys(friends)
  console.log(friends)
  return (
    <View style={styles.root}>
      <ScrollView>
        {Object.values(
          friends
        ).map(({ id, name, avatar, time, message }, index) =>
          <FriendsListItem
            key={index}
            id={id}
            name={name}
            avatar={avatar}
            time={time}
            message={message}
            navigation={navigation}
          />
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
})

export default FriendsList
