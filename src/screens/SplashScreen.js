// src/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import logo from '../assets/GMS_newLogo.jpg'
const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    // Simulate a splash screen delay
    const timer = setTimeout(() => {
      onFinish(); // Callback to transition to the main content
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000" />
      <Image source={logo}   style={{width: 300, height: 200,  resizeMode: 'cover',}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

export default SplashScreen;
