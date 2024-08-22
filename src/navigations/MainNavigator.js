import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';


const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Movie app"  component={BottomTabNavigator}  options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
