import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = ({ title, price, description, image }) => {
  return (
    <View style={styles.cardContainer}>
        <Image 
        source={{uri: image}}
        style={styles.cardImage}
        resizeMode='contain'/>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardPrice}>${price}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardPrice: {
    fontSize: 16,
    color: 'green',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default Card;
