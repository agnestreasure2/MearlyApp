import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.scheduleText}>Schedule Orders</Text>
        <Text style={styles.descriptionText}>And have it delivered at a later time</Text>
        <View style={styles.formContainer}>
          <View style={styles.formContent}>
            <Text style={styles.orderNowText}>Order Now</Text>
            <Image source={require('../assets/icons/calender.png')} style={styles.calendarImage} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'yellow',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  cardContent: {
    alignItems: 'center',
  },
  scheduleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
  },
  formContainer: {
    backgroundColor: 'green',
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
  },
  formContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orderNowText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  calendarImage: {
    width: 20,
    height: 20,
  },
});

export default Card;
