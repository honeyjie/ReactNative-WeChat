import React from 'react'
import { AppRegistry, Text, View } from 'react-native'

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.user,
  })

  render() {
    const { params } = this.props.navigation.state
    return (
      <View>
      <Text>
        Hello, This is {params.user} Profile!
      </Text>
      </View>
    )
  }
}
