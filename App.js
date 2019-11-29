import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import MealsNavigator from "./navigation/MealsNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

const App = () => {
  const [areFontsLoaded, setAreFontsLoaded] = useState(false)

  if (areFontsLoaded) {
    <AppLoading startAsync={fetchFonts} onFinish={() => setAreFontsLoaded(true)} />
  }

  return (
    <MealsNavigator />
  );
}

export default App