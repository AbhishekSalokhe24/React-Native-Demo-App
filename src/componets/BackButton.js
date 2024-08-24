import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
const BackButton = ({navigation}) => {
  return (
    <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
      <Icon name="chevron-left" size={15} color="#000" />
      <Text style={styles.backButtonText}>Go Back </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    backButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginTop: 15,
        marginLeft:10,
        borderRadius: 10,
        backgroundColor: '#4FCCA3',
        width: 100,
      },
      backButtonText: {
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 15,
      },
})

export default BackButton;
