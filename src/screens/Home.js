import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderContent from '../components/HeaderContent';


const HomeScreen = ({ navigation }) => {
  const handleTrendingNowPress = () => {
    // Navigation logic to another page goes here
    // For example:
    navigation.navigate('TrendingNow');
  };


  return (
    <View style={styles.container}>
      <HeaderContent />
     
      

      <View style={styles.trendingContainer}>
        <View style={styles.trendingHeader}>
          <TouchableOpacity onPress={handleTrendingNowPress}>
          <Text style={styles.trendingText}>Trending Now</Text>
          </TouchableOpacity>
          
          <Text style={styles.seeAllText}>See All</Text>
        </View>
        <View style={styles.imagesContainer}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../assets/images/one.png')}
              style={styles.image}
            />
            
            <Text style={styles.imageText}>Jollof Rice and Beef</Text>
            <Text style={styles.imageText}>₦750</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>4.5</Text>
              <Image
                  source={require('../assets/icons/star.png')}
                  style={{ width: 14, height: 14, tintColor: 'green' }}
                />
            </View>
          </View>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../assets/images/pyam.jpg')}
              style={styles.image}
            />
            
            <Text style={styles.imageText}>Pounded Yam and Egusi</Text>
            <Text style={styles.imageText}>₦2,200</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>4.</Text>
              <Image
                  source={require('../assets/icons/star.png')}
                  style={{ width: 14, height: 14, tintColor: 'green' }}
                />
            </View>
          </View>
          {/* Add more image wrappers for additional items */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  trendingContainer: {
    padding: 20,
  },
  trendingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  trendingText: {
    fontSize: 18,
    fontWeight: '700',
    color:  '#121212',
    
  },
  seeAllText: {
    fontSize: 12,
    fontWeight: 700,
    color: 'green',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageWrapper: {
    alignItems: 'center',
  },
  image: {
    width: 88,
    height: 88,
    borderRadius: 100,
  },
  imageText: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  ratingText: {
    marginLeft: 2,
  },
});

export default HomeScreen;
