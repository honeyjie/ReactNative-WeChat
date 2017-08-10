import React from 'react'
import { Text, View, Button } from 'react-native'

export default class RecentsChatsScreen extends React.Component {
  static navigationOptions = {
    title: 'RecentsChatsScreen',
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>Hello, AllContactsScreen!</Text>
        <Button
          onPress={() => navigate('Profile', { user: 'Amanda' })}
          title="Come to ProfileScreen"
        />
      </View>
    )
  }
}
