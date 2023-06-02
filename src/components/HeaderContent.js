import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const HeaderContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Image source={require('../assets/icons/location.png')} style={styles.icon} />
        <View style={styles.rightIcons}>
        <Image source={require('../assets/icons/bell.png')} marginRight={25}  style={styles.icon} />
        <Image source={require('../assets/icons/cart.png')} marginRight={20} style={styles.icon} />
       
        </View>
      </View>
      <Text style={styles.headerText}>What would you like to have today?</Text>
      <View style={styles.searchBar}>
        <Image source={require('../assets/icons/search.png')} style={styles.searchIcon} />
        <Text style={styles.searchText}>Search here</Text>
      </View>
      <View style={styles.scheduleBox}>
        <Text style={styles.scheduleText}>Schedule Orders</Text>
        <Text style={styles.scheduleDescription}>and have it delivered</Text>
        <Text style={styles.scheduleDescription}>at a later time today!</Text>
        <Image source={require('../assets/icons/calender.png')}  style={styles.scheduleImage} />
        <View style={styles.form}>
        <TouchableOpacity>
        <Text style={styles.orderNowText}>Order Now</Text>
        </TouchableOpacity>
      </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    justifyContent: 'space-between',
    
  },
  rightIcons: {
    flexDirection: 'row',
   
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 8,
    
  },
  searchIcon: {
    marginRight: 10,
    width: 25,
    height: 11.98,
    justifyContent: "center",
    tintColor: "#6B6C6C",
  },
  searchText: {
    fontSize: 16,
    color: "black",
    paddingLeft: 1,
    justifyContent: "center",
    borderRadius: 7,
  },
  scheduleBox: {
    backgroundColor: '#F2C14E',
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
  },
  scheduleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    height: 20,
     
  },
  scheduleDescription: {
    fontSize: 16,
  },
  scheduleImage: {
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  form: {
    backgroundColor: 'green',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    width: 150,
  },
  orderNowText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default HeaderContent;
