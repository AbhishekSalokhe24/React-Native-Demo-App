import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import DetailsScreen from '../screens/DetailsScreen';
import { WatchlistProvider } from '../contex/WatchlistContext ';



const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <WatchlistProvider>
      <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Movie app"  component={BottomTabNavigator}  options={{ headerShown: false }}  />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </WatchlistProvider>
  );
}
