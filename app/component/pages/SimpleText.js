import React from 'react'
import { Text, StyleSheet } from 'react-native'

const SimpleText = ({ banner }) =>
  <Text style={styles.text}>
    {banner}
  </Text>

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    paddingTop: 20
  }
})
export default SimpleText
