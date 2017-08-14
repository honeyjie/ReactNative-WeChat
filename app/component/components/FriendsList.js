import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import FriendsListItem from './FriendsListItem'

export default FriendsList = ({ friends, navigation }) => {
  console.log(friends)
  const friendsId = Object.keys(friends)
  return (
    <View style={styles.root}>
      <ScrollView>
        {Object.values(friends).map(({name, avatar, time, message}, index) =>
          <FriendsListItem
            key={index}
            id={friendsId[index]}
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
    paddingRight: 10
  }
})
