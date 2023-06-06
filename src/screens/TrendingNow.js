import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const TrendingNow = () => {
    const navigation = useNavigation();

    const handleRecommendedPress = () => {
        navigation.navigate('Recommended');
      };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleRecommendedPress}>
      <View style={styles.container}></View>
  <View style={styles.headerContainer}>
    <TouchableOpacity style={styles.arrow} onPress={() => navigation.goBack()}>
      <Ionicons name="ios-arrow-back" size={24} color="black" />
    </TouchableOpacity>
    <Text style={styles.heading}>Trending Today</Text>
  </View>
          </TouchableOpacity>
      <View style={styles.imagesContainer}>
        <View style={styles.row}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/one.png')}
              style={styles.image}
            />
            <Text style={styles.imageText}>Jollof Rice and Beef</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.priceText}>₦750</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>4.5</Text>
                <Image
                  source={require('../assets/icons/star.png')}
                  style={styles.icon}
                />
              </View>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/pyam.jpg')}
              style={styles.image}
            />
            <Text style={styles.imageText}>Poundo Yam & Egusi</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.priceText}>₦2,200</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>4.5</Text>
                <Image
                  source={require('../assets/icons/star.png')}
                  style={styles.icon}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/sharwama.jpg')}
              style={styles.image}
            />
            <Text style={styles.imageText}>Sharwama</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.priceText}>₦1500</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>4.5</Text>
                <Image
                  source={require('../assets/icons/star.png')}
                  style={styles.icon}
                />
              </View>
            </View>
          </View>
          <View>
            
          </View>
          
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/smokyrice.jpg')}
              style={styles.image}
            />
            <Text style={styles.imageText}>Bbq Smoky Rice</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.priceText}>₦1,700</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>4.5</Text>
                <Image
                  source={require('../assets/icons/star.png')}
                  style={styles.icon}
                />
              </View>
            </View>
          </View>
          
        </View>
        <View style={styles.row}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/friedrice.jpg')}
              style={styles.image}
            />
            <Text style={styles.imageText}>9ja Frice Jollof Rice</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.priceText}>₦1,500</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>4.5</Text>
                <Image
                  source={require('../assets/icons/star.png')}
                  style={styles.icon}
                />
              </View>
            </View>
          </View>
          <View>
            
          </View>
          
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/spag.jpg')}
              style={styles.image}
            />
            <Text style={styles.imageText}>Stir-fry Spaghetti</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.priceText}>₦1,200</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>4.5</Text>
                <Image
                  source={require('../assets/icons/star.png')}
                  style={styles.icon}
                />
              </View>
            </View>
          </View>
          
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
    marginLeft: 4,
    marginBottom: 8,
  },
  arrow: {
    marginRight: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  tabText: {
    fontSize: 16,
  },
  imagesContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 88,
    height: 88,
    borderRadius: 100,
  },
  imageText: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 10,
    fontStyle: 'normal',
    lineHeight: 20,
    olor: '#3D4040',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  priceText: {
    fontSize: 12,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 20,
    
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  ratingText: {
    fontSize: 14,
    marginRight: 5,
    fontWeight: '500',
    color: 'green',
  },
  icon: {
    width: 12,
    height: 12,
    tintColor: 'green',
    
  },
});

export default TrendingNow;
