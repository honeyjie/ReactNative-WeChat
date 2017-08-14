import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native'
import SimpleText from './SimpleText'
import Icons from 'react-native-vector-icons/FontAwesome'
import faker from 'faker'
import { connect } from 'react-redux'
import { friendsSelector } from '../selector/contacts'
import { addFriend, deleteFriend } from '../actions/contacts'
import { toJS } from 'immutable'
import FriendsList from '../components/FriendsList'

class Contacts extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state: { params } } = navigation
    return {
      title: 'Contacts',
      headerRight:
        params && params.renderHeaderRight && params.renderHeaderRight(),
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ tintColor }) =>
        <Icons name="address-book-o" size={20} color={tintColor} />,
    }
  }

  componentWillMount() {
    const { addFriend, navigation: { setParams } } = this.props

    setParams({
      renderHeaderRight: () =>
        <Icons
          name="plus"
          size={16}
          color="#fff"
          style={{ paddingRight: 12 }}
          onPress={() => {
            addFriend()
          }}
        />,
    })
  }

  componentDidMount() {
    console.log('DidMount')
  }

  componentReceiveProps() {
    console.log('ReceiveProps')
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    const { navigation, friends } = this.props
    const { navigate } = navigation

    // return <FriendsList navigation={navigation} friends={friends} />
    return (
    <View style={{height: 600}}>
      <ScrollView style={{flex: 1, display: 'flex'}}>
        <Text style={{ height: 300, backgroundColor: 'orange' }}>orange</Text>
        <Text style={{ height: 300, backgroundColor: 'yellow' }}>yellow</Text>
        <Text style={{ height: 300, backgroundColor: 'purple' }}>purple</Text>
      </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({})

export default connect(
  (state, props) => ({
    friends: friendsSelector(state, props).toJS(),
  }),
  { addFriend, deleteFriend }
)(Contacts)
