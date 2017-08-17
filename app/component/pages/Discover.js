import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  Image
} from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'
import { OneRow } from '../components/OneRow'

class Discover extends Component {
  static navigationOptions = {
    title: 'Discover',
    tabBarLabel: 'Discover',
    tabBarIcon: ({ tintColor }) =>
      <Icons name="eercast" size={20} color={tintColor} />,
  }

  render() {
    const { state, navigate } = this.props.navigation

    return (
      <View style={styles.root}>
      <View style={styles.moments}>
        <OneRow
          iconName="chrome"
          text="Moments"
          handlePress={()=>navigate('Moments')}
         style={styles.row}
        />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 10
  },
  moments: {
    flex: 1,
    flexDirection: 'row'
  }
})
export default Discover
