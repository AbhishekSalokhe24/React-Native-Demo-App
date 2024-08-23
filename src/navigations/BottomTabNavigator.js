import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import WatchListScreen from '../screens/WatchListScreen';


const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'cog';
          } else if(route.name === 'Watchlist'){
            iconName = 'muffin';
          }

          // Return the appropriate icon component
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}  
        options={{ headerShown: false }}
      />
       <Tab.Screen 
        name="Watchlist" 
        component={WatchListScreen} 
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ headerShown: false }}
      />
      
    </Tab.Navigator>
  );
}
