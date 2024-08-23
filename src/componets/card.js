import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';


const Card = ({ title, genre, image, rating, release_date }) => {
  return (
    <View style={styles.cardBox}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.genre}>{genre}</Text>
        <Text style={styles.release_date}>{release_date}</Text>
        <Text style={styles.rating}>
          <Icon name="star" size={15} color="#22c55e" style={styles.starLogo} /> {rating}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    flexDirection: 'row',
    backgroundColor: '#4b5563',
    height:'auto',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 5,

  },
  image: {
    width: 100, 
    height: 150,
    borderRadius: 10,
    marginRight: 15, 
  },
  textContainer: {
    flex: 1, 
  
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ffffff',
  },
  genre: {
    fontSize: 14,
    color: '#6ee7b7',
    marginBottom: 5,
  },
  release_date: {
    color: '#ffffff',
    fontWeight: '600',
    marginBottom: 5,
  },
  rating: {
    color: '#22c55e',
    fontWeight: 'bold',
    fontSize: 15,
  },
  starLogo: {
    paddingRight: 2,
  },
});

export default Card;
