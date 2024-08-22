import * as React from 'react';
import { View, Text, Pressable, StyleSheet, FlatList, ScrollView  } from 'react-native';

import Card from '../componets/card';

const DATA = [
  {
    id: '1',
    data: 'Action',
  },
  {
    id: '2',
    data: 'Popular',
  },
  {
    id: '3', 
    data: 'Comedy',
  },
  {
    id: '4', 
    data: 'Horror',
  },
  {
    id:'5',
    data: 'Romance'
  }
];

const movieArr = [
  {
    id: '1',
    title: 'The Avengers',
    description:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://i.etsystatic.com/37166133/r/il/60f034/4087791906/il_570xN.4087791906_jcbj.jpg',
  },
  {
    id: '2',
    title: 'The Avengers Endgame',
    description:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://images-cdn.ubuy.co.in/634ffe4b05d16a708944a5ec-avengers-endgame-movie-poster-2-sided.jpg',
  },
  {
    id: '3',
    title: 'Age of Altron',
    description:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0kKhmIk1mXU-wiW18Z4xe_GZavy_iOZf5A&s',
  },
  {
    id: '4',
    title: 'Captain America',
    description:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://images-cdn.ubuy.co.in/634ffe4b05d16a708944a5ec-avengers-endgame-movie-poster-2-sided.jpg',
  },
];


const Item = ({ data }) => (
  <Pressable style={styles.btn}>
    <Text style={styles.btnText}>{data}</Text>
  </Pressable>
);

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView  style={styles.container}>
      <View>
      <Text style={styles.title}>Movies App</Text>
      <Text style={styles.subtitle}>Find your movies</Text>
      <Text style={styles.subtitle}>Categories</Text>

      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={({ item }) => <Item data={item.data} />} 
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.flatListContainer} 
      />
      </View>
      <View>
        {movieArr.map(movie => (
          <Card
            key={movie.id}
            title={movie.title}
            description={movie.description}
            genre={movie.genre}
            image={movie.image}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'left',
    paddingBottom: 15,
    color: '#fff', 
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#fff', 
  },
  btn: {
    borderRadius: 25,
    backgroundColor: '#4FCCA3',
    width: 106,
    paddingVertical: 10, 
    marginRight: 10, 
  },
  btnText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '600', 
  },
  flatListContainer: {
    paddingBottom: 10, 
    height:50,   
  },
});
