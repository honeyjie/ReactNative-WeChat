import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import SimpleText from './SimpleText'
import Icons from 'react-native-vector-icons/FontAwesome'

class Contacts extends Component {
  static navigationOptions = {
    title: 'Contacts',
    tabBarLabel: 'Contacts',
    tabBarIcon: ({ tintColor }) =>
      <Icons name="address-book-o" size={24} color={tintColor} />,
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Button
          onPress={() => navigate('Profile', { name: 'Lime' })}
          title="查看个人页"
        />
        <SimpleText banner="Contacts" />
      </View>
    )
  }
}

export default Contacts
