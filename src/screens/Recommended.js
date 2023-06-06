import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';


const RecommendedScreen = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    navigation.navigate('Restaurant', { category });
  };

  return (
    <View style={styles.container}>
  <View style={styles.headerContainer}>
    <TouchableOpacity style={styles.arrow} onPress={() => navigation.goBack()}>
      <Ionicons name="ios-arrow-back" size={24} color="black" />
    </TouchableOpacity>
    <Text style={styles.heading}>Recommended for You</Text>
  </View>

  {/* Tab Row */}
  <View style={styles.tabContainer}>
    <TouchableOpacity onPress={() => handleCategoryPress('restaurant')}>
      <Text style={styles.tabText}>Restaurant</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => handleCategoryPress('cafes')}>
      <Text style={styles.tabText}>Cafes</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => handleCategoryPress('food vendors')}>
      <Text style={styles.tabText}>Food Vendors</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => handleCategoryPress('meals')}>
      <Text style={styles.tabText}>Meals</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => handleCategoryPress('drinks')}>
      <Text style={styles.tabText}>Drinks</Text>
    </TouchableOpacity>
  </View>
</View>
  )

      {/* Restaurant Recommendations */}
      {'restaurant' && (
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
            <Image
              source={require('../assets/images/cass.png')}
              style={{ width: 88, height: 88, borderRadius: 100, marginRight: 10 }}
            />
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <Text style={{ fontWeight: '500', fontSize: 14, marginRight: 170, color: '#121212' }}>Mama Cass</Text>
                <Image
                  source={require('../assets/icons/favourite.png')}
                  style={{ width: 16, height: 16, marginRight: 10, tintColor: 'yellow' }}
                />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, marginRight: 5 }}>Location</Text>
                <Image
                  source={require('../assets/icons/star.png')}
                  style={{ width: 14, height: 14, tintColor: 'green', marginRight: 5, marginLeft: 170 }}
                />
                <Text style={{ fontSize: 14, color: 'green' }}>4.5</Text>
               
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
            <Image
              source={require('../assets/images/kfc.jpg')}
              style={{ width: 88, height: 88, borderRadius: 100, marginRight: 10 }}
            />
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <Text style={{ fontWeight: '500', fontSize: 14, marginRight: 220, color: '#121212' }}>KFC</Text>
                <Image
                  source={require('../assets/icons/favourite.png')}
                  style={{ width: 16, height: 16, marginRight: 17, tintColor: 'yellow' }}
                />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 14 }}>Location</Text>
                <Image
                  source={require('../assets/icons/star.png')}
                  style={{ width: 14, height: 14, tintColor: 'green', marginRight: 5, marginLeft: 170 }}
                />
                <Text style={{ fontSize: 14, color: 'green' }}>4.5</Text>
                
              </View>
            </View>
          </View>
        </View>
      )}
    
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 10,
    marginBottom: 8,
  },
  arrow: {
    marginRight: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  tabText: {
    fontSize: 16,
  },
});



export default RecommendedScreen;
