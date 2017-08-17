import React, { Component } from 'react'
import { View, Button } from 'react-native'

class Posts extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.routeName,
  })

  render() {
    const { navigate, state } = this.props.navigation
    const { name, id } = state.params

    return (
      <View>
        <Button
          onPress={() => navigate('Profile', { name, id })}
          title="查看个人页"
        />
      </View>
    )
  }
}

export default Posts
