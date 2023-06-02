import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const RecommendedScreen = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    navigation.navigate('Restaurant', { category });
  };

  return (
    <View>
      {/* Heading */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 25, marginLeft: 10 }}>
        Recommended for You
      </Text>

      {/* Tab Row */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
        <TouchableOpacity onPress={() => handleCategoryPress('restaurant')}>
          <Text style={{ fontSize: 16 }}>Restaurant</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCategoryPress('cafes')}>
          <Text style={{ fontSize: 16 }}>Cafes</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCategoryPress('food vendors')}>
          <Text style={{ fontSize: 16 }}>Food Vendors</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCategoryPress('meals')}>
          <Text style={{ fontSize: 16 }}>Meals</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCategoryPress('drinks')}>
          <Text style={{ fontSize: 16 }}>Drinks</Text>
        </TouchableOpacity>
      </View>

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
                <Text style={{ fontWeight: 'bold', fontSize: 16, marginRight: 170 }}>Mama Cass</Text>
                <Image
                  source={require('../assets/icons/favourite.png')}
                  style={{ width: 16, height: 16, marginRight: 10 }}
                />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, marginRight: 5 }}>Location</Text>
                <Image
                  source={require('../assets/icons/star.png')}
                  style={{ width: 14, height: 14, tintColor: 'green', marginRight: 5, marginLeft: 170 }}
                />
                <Text style={{ fontSize: 14 }}>4.5</Text>
               
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
                <Text style={{ fontWeight: 'bold', fontSize: 16, marginRight: 220 }}>KFC</Text>
                <Image
                  source={require('../assets/icons/favourite.png')}
                  style={{ width: 16, height: 16, marginRight: 17 }}
                />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 14 }}>Location</Text>
                <Image
                  source={require('../assets/icons/star.png')}
                  style={{ width: 14, height: 14, tintColor: 'green', marginRight: 5, marginLeft: 170 }}
                />
                <Text style={{ fontSize: 14 }}>4.5</Text>
                
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default RecommendedScreen;
