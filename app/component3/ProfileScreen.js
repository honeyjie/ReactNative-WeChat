import React from 'react'
import { AppRegistry, Text, View, Button } from 'react-native'

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation
    const isInfo = state.params.mode === 'info'
    const {user} = state.params

    return {
      title: isInfo ?  `${user}'s Contact Info`: `Chat with ${state.params.user}`,
      headerRight: (
        <Button title={isInfo ? 'Done': `${user}'s info`}
        onPress={()=> setParams({mode: isInfo ? 'none': 'info'})} />
      )
    }
  }

  render() {
    const { params } = this.props.navigation.state
    return (
      <View>
        <Text>
          Hello, This is {params.user}'s Profile!
        </Text>
      </View>
    )
  }
}
