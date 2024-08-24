import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ImageBackground,
  Button,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import coverimage from '../assets/Cover.jpg';
import Modal from 'react-native-modal';
import {WatchlistContext} from '../contex/WatchlistContext ';

const DetailsScreen = ({route, navigation}) => {
  // For managing modal state
  const [isModalVisible, setModalVisible] = useState(false);
  const [iconName, setIconName] = useState('bookmark-border');
  const [isAdded, setAdded] = useState(false);
  const {addToWatchlist, removeFromWatchlist, isMovieInWatchlist} =
    useContext(WatchlistContext);

  const {id, title, description, genre, image, rating, release_date} =
    route.params;

  const movieNew = {
    id: id,
    title: title,
    genre: genre,
    image: image,
    rating: rating,
    release_date: release_date,
  };
  const isInWatchlist = isMovieInWatchlist(movieNew.id);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toogleSaveIcon = () => {
    setIconName(prevIconName =>
      prevIconName === 'bookmark-border' ? 'bookmark' : 'bookmark-border',
    );
    setAdded(prevAdded => !prevAdded);

    if (isInWatchlist) {
      removeFromWatchlist(movieNew.id);
    } else {
      addToWatchlist(movieNew);
    }
  };

  const handleBookPress = () => {
    toggleModal();
    toogleSaveIcon();
  };
  return (
    <ScrollView style={styles.container}>
      <View>
        <ImageBackground source={coverimage} style={styles.coverImage}>
          {/* Overlay with reduced opacity */}

          <View style={styles.overlay} />
        </ImageBackground>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="chevron-left" size={15} color="#000" />
          <Text style={styles.backButtonText}>Go Back </Text>
        </Pressable>
      </View>
      <View style={styles.posterImgView}>
        <Image source={image} style={styles.image} />
        <Pressable style={styles.wishBtn} onPress={handleBookPress}>
          <Icon name={iconName} size={25} color="#000" />
        </Pressable>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titel}>{title}</Text>
        <Text style={styles.about}>About Movie</Text>
        <Text style={styles.textColor}>
          From DC Comics comes the Suicide Squad, an antihero team of
          incarcerated supervillains who act as deniable assets for the United
          States government, undertaking high-risk black ops missions in
          exchange for commuted prison sentences.
        </Text>
        <View style={styles.dataContainer}>
          <View style={styles.data}>
            <Text style={styles.head}>Released Date:</Text>
            <Text style={styles.textColor}>{release_date}</Text>
          </View>

          <View style={styles.data}>
            <Text style={styles.head}>Ratings</Text>
            <Text style={styles.textColor}>{rating}</Text>
          </View>

          <View style={styles.data}>
            <Text style={styles.head}>Genre</Text>
            <Text style={styles.textColor}>{genre}</Text>
          </View>

          <View style={styles.data}>
            <Text style={styles.head}>Locaton</Text>
            <Text style={styles.textColor}>Pune</Text>
          </View>
        </View>
      </View>

      {/* MODAL Here */}
      <Modal
        isVisible={isModalVisible}
        backdropColor="black"
        backdropTransitionInTiming={2000}>
        <View style={styles.modalContainer}>
          <Pressable
            onPress={() => navigation.navigate('Watchlist')}
            style={styles.backButton2}>
            <Icon name="close" size={20} color="#000" />
          </Pressable>
          <Text style={styles.modaltext}>
            {isAdded
              ? 'Hurray! Added to your watchlist'
              : 'Removed from your watchlist'}{' '}
            <Text>&#128512;</Text>
          </Text>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    display: 'flex',
  },
  coverImage: {
    width: '100%',
    height: 200,
    zIndex: -1,
    position: 'absolute',
  },
  posterImgView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wishBtn: {
    backgroundColor: '#4FCCA3',
    position: 'relative',
    left: 80,
    top: 130,
    padding: 10,
    borderRadius: 50,
  },
  wishBtnPrssed: {
    backgroundColor: '#0000',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginTop: 15,
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: '#4FCCA3',
    width: 100,
  },
  backButton2:{
    backgroundColor: '#4FCCA3',
    padding:5,
    borderRadius:50,
    marginLeft:250,
  },
  backButtonText: {
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 15,
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginTop: 55,
    marginLeft: 35,
  },
  textColor: {
    color: '#ffff',
  },
  titel: {
    fontSize: 35,
    color: '#4FCCA3',
    fontWeight: '900',
    marginTop: 10,
  },
  about: {
    borderRadius: 45,
    color: '#71717a',
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    color: '#ffff',
    textAlign: 'justify',
  },
  head: {
    color: '#71717a',
    fontWeight: 'bold',
    fontSize: 15,
  },
  textContainer: {
    paddingLeft: 35,
    paddingRight: 35,
  },
  dataContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
  },
  data: {
    display: 'flex',
    width: '50%',
    marginTop: 15,
  },

  // Modal Styling Here
  modalContainer: {
    backgroundColor: '#334155',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
  modalView: {
    backgroundColor: 'white',
    height: 140,
    width: 250,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  modaltext: {
    fontSize: 16,
    color: '#4FCCA3',
    margin:15
  },
  modalBtn: {
    margin: 20,
    width: 200,
  },
});

export default DetailsScreen;
