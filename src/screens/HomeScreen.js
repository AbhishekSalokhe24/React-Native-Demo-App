import * as React from 'react';
import { View, Text, Pressable, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useState } from 'react';
import movies from '../data/movies';
import Card from '../componets/card';

// Genre of Movies
const DATA = [
  { id: '1', data: 'Action' },
  { id: '2', data: 'Popular' },
  { id: '3', data: 'Comedy' },
  { id: '4', data: 'Horror' },
  { id: '5', data: 'Romance' },
];

export default function HomeScreen({ navigation }) {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [selectedGenre, setSelectedGenre] = useState();

  const filterGenre = (genre) => {
    setSelectedGenre(genre); // Update selected genre state
    const filtered = movies.filter(movie => movie.genre.includes(genre));
    setFilteredMovies(filtered);
  };

  const Item = ({ data }) => (
    <Pressable
      onPress={() => filterGenre(data)}
      style={[styles.btn, selectedGenre === data && styles.selectedBtn]} // Apply selected style conditionally
    >
      <Text style={[styles.btnText, selectedGenre === data && styles.selectedBtnText]}>{data}</Text>
    </Pressable>
  );

  return (
    <ScrollView style={styles.container}>
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
        {filteredMovies.map(movie => (
          <Pressable
            key={movie.id}
            onPress={() =>
              navigation.navigate('Details', {
                id: movie.id,
                title: movie.title,
                description: movie.description,
                genre: movie.genre,
                image: movie.image,
                rating: movie.rating,
                release_date: movie.release_date,
              })
            }
          >
            <Card
              title={movie.title}
              description={movie.description}
              genre={movie.genre}
              image={movie.image}
              rating={movie.rating}
              release_date={movie.release_date}
            />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
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
    backgroundColor:'#a3a3a3',
    width: 106,
    paddingVertical: 10,
    marginRight: 5,
  },
  selectedBtn: {
    backgroundColor: '#4FCCA3', 
  },
  btnText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  selectedBtnText: {
    color: '#000', 
  },
  flatListContainer: {
    paddingBottom: 10,
    height: 50,
  },
});
