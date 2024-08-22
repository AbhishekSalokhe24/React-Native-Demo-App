import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const Card = ({ title, description, genre, image }) => {
  return (
    <View style={styles.cardBox}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.genre}>{genre}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  textContainer: {
    paddingVertical: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'#000'
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  genre: {
    fontSize: 12,
    color: '#777',
  },
});

export default Card;
