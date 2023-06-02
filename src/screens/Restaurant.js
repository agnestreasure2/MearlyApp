import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Restaurant = ({ route }) => {
  const { category } = route.params;

  // Define the food images and ratings based on the selected category
  let foodImages = [];

  switch (category) {
    case 'restaurant':
      foodImages = [
        { image: require('../assets/images/cass.png'), title1: 'Mama Cass', title2: 'location', rating: 4.5 },
        { image: require('../assets/images/kfc.jpg'), title1: 'KFC', title2: 'location', rating: 4.5 },
       
      ];
      break;
    case 'cafes':
      foodImages = [
        { image: require('../assets/images/cafe1.jpg'), title1: 'Pause Cafe', title2: 'Plocation', rating: 4.5 },
        { image: require('../assets/images/cafe2.jpg'), title1: 'D Cafe', title2: 'location', rating: 4.5 },
       
      ];
      break;
    case 'food vendors':
      foodImages = [
        { image: require('../assets/images/sharwama.jpg'), title1: 'Food Vendor 1', title2: 'Price 1', rating: 4.5 },
        { image: require('../assets/images/sharwama.jpg'), title1: 'Food Vendor 2', title2: 'Price 2', rating: 4.5 },
        
      ];
      break;
    case 'meals':
      foodImages = [
        { image: require('../assets/images/friedchicken.jpg'), title1: 'Fried Chicken', title2: '₦1000', rating: 4.5 },
        { image: require('../assets/images/perfait.jpg'), title1: 'Chocolate Parfait', title2: '₦1500', rating: 4.5 },
        
      ];
      break;
    case 'drinks':
      foodImages = [
        { image: require('../assets/images/drink1.jpg'), title1: 'StrawBerry', title2: '₦900', rating: 4.5 },
        { image: require('../assets/images/drink2.jpg'), title1: 'MockTails', title2: '₦1000', rating: 4.5 },
       
      ];
      break;
    default:
      break;
  }

  return (
    <View>
      {/* Render the heading */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 40, marginBottom: 10, marginLeft: 15}}>{category}</Text>

      {/* Render food images */}
      {foodImages.map((item, index) => (
        <TouchableOpacity key={index} style={{ alignItems: 'center', marginVertical: 10, flexDirection: 'row' }} onPress={() => handleImageClick(item)}>
          {/* Image */}
          <Image source={item.image} style={{ width: 100, height: 100, borderRadius: 100 }} />

          {/* Title 1 and Icon */}
          <View style={{ flexDirection: 'column', marginLeft: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title1}</Text>
              <Image source={require('../assets/icons/favourite.png')} style={{ width: 20, height: 20, marginLeft: 100 }} />
            </View>

            {/* Title 2 (Price) and Rating */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
              <Text style={{ fontSize: 14 }}>{item.title2}</Text>
              <Image source={require('../assets/icons/star.png')} style={{ width: 14, height: 14, marginLeft: 167, tintColor: 'green' }} />
              <Text style={{ fontSize: 14, marginLeft: 5 }}>{item.rating}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Restaurant;
