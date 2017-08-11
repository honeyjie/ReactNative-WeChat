import React, { Component } from 'react'
import { View, Button } from 'react-native'
import SimpleText from './SimpleText'

class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}'s Profile`,
  })

  render() {
    const { state, navigate } = this.props.navigation
    return (
      <View>
        <Button
          onPress={() => navigate('ChatWith', { name: state.params.name })}
          title="进入聊天"
        />
        <SimpleText banner="Profile" />
      </View>
    )
  }
}

export default Profile
