import React from 'react';
import { View, StyleSheet } from 'react-native';

import Section from "../components/section";
import HeaderContent from "../components/HeaderContent";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderContent />
      
      <Section
        title="Trending Now"
        imageSource={require('../assets/images/one.png')}
        description="Delicious Food"
        price="$9.99"
      />
      
      <Section
        title="See All"
        imageSource={require('../assets/images/two.png')}
        description="Tasty Snacks"
        price="$4.99"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;
