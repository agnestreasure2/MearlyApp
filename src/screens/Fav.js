import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Favourite = () => {
  return (
    <View>
      <Text>My Favourite</Text>
      <View>
        <Image source={require('../assets/icons/search.png')}/>
      </View>
    </View>
    
  )
}
const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  
})

export default Favourite;