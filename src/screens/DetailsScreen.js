import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ImageBackground,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import coverimage from '../assets/Cover.jpg';
import Modal from 'react-native-modal';

const DetailsScreen = ({route, navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const {title, description, genre, image, rating, release_date} = route.params;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
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
        <Pressable style={styles.wishBtn} onPress={toggleModal}>
          <Icon name="muffin" size={25} color="#000" />
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
      <View styles={{flex: 1}}>
        <Modal isVisible={isModalVisible} backdropColor="gray" style={{height:500}}>
          <View style={{flex: 1, height: 100}}>
            <Text>Hello!</Text>

            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
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
    left: 105,
    top: 130,
    padding: 10,
    borderRadius: 50,
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
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#4FCCA3',
    width: 100,
  },
  backButtonText: {
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 15,
  },

  textColor: {
    color: '#ffff',
  },
  titel: {
    fontSize: 35,
    color: '#4FCCA3',
    fontWeight: '900',
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
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginTop: 85,
    marginLeft: 35,
  },
});

export default DetailsScreen;
