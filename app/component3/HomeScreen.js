import React from 'react'
import { AppRegistry, Text, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View>
        <Text>Hello, HomePage!</Text>
        <Button
          onPress={() => navigate('Profile', { user: 'Amanda' })}
          title="Come to ProfileScreen"
        />
      </View>
    )
  }
}
