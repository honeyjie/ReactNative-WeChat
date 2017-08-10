import React from 'react'
import { Text, View, Button, Image } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'

export default class FirstScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Screen1',
    drawerIcon: ({ tintColor }) => {
      return <Icons name="eercast" size={24} style={{ color: tintColor }} />
    },
  }

  render() {
    return (
      <View>
        <Text>Screen1</Text>
        <Button onPress={()=>this.props.navigation.navigate('DrawerOpen')} title="Open DrawNavigator" />
      </View>
    )
  }
}
