import React, { Component } from 'react'
import { View, Button } from 'react-native'
import SimpleText from './SimpleText'

class Moments extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.routeName,
  })

  render() {
    const {navigate, state} = this.props.navigation

    return (
      <View>
        <Button
          onPress={() => navigate('Profile', { name: 'Lime' })}
          title="查看个人页"
        />
        <SimpleText banner="Moments" />
      </View>
    )
  }
}

export default Moments
