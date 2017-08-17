import React from 'react'
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'

export const OneRow = ({ iconName, text, handlePress }) => {
  return (
    <TouchableHighlight
      onPress={handlePress}
      style={styles.root}
      underlayColor="#ccc"
    >
      <View style={styles.content}>
        <View style={styles.left}>
          <Icons
            name={iconName}
            size={30}
            style={styles.icon}
            color="#00d500"
          />
          <Text style={styles.text}>
            {text}
          </Text>
        </View>
        <View style={styles.right}>
          <Icons name="angle-right" size={20} color="#ccc" />
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    display: 'flex',
    backgroundColor: '#fff',
    height: 50,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    textAlign: 'center',
  },
})
