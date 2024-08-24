import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../componets/card';
import { WatchlistContext } from '../contex/WatchlistContext ';
  

const WatchListScreen = () => {
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);

  // Define a render function for the FlatList items
  const renderItem = ({ item }) => (
    <View>
      <Card
        title={item.title}
        description={item.description}
        genre={item.genre}
        image={item.image}
        rating={item.rating}
        release_date={item.release_date}
      />
      <Pressable
        style={styles.deleteBtn}
       onPress={() => removeFromWatchlist(item.id)}
       title="Remove from Watchlist">
        <Icon name="delete-outline" size={25} color="#000" />
       </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Your Watchlist <Icon name="movie-open-star" size={45} color="#4FCCA3" />
      </Text>
      {watchlist.length > 0 ? (
        <FlatList
          data={watchlist}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      ) : (
        <Text style={styles.text}>No movies in your watchlist</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  title: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    padding: 10,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
  deleteBtn:{
    backgroundColor:'#4FCCA3',
    padding:10,
    width:50,
    display:'flex',
    alignItems:'center',
    borderRadius:10,
    position:'absolute',
    top:135,
    left:270,
  }
});

export default WatchListScreen;
