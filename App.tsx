// App.js
import React, { useState } from 'react';
// import SplashScreen from './src/SplashScreen'; // Import your SplashScreen component
import MainNavigator from './src/navigations/MainNavigator';
import SplashScreen from './src/screens/SplashScreen';

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  const handleSplashFinish = () => {
    setSplashVisible(false);
  };

  if (isSplashVisible) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  return <MainNavigator />;
}
