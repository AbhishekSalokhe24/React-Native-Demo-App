import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
// import { Button } from 'react-native-paper';

export default function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
      <Pressable mode="contained" onPress={() => navigation.goBack()}>
      <Text>Go Back</Text>  
      </Pressable>
    </View>
  );
}
