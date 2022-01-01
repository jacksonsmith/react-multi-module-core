import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {TabNavigator} from './src/screens/tab'
import { LoginNavigator } from 'loginModule';
export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
      <NavigationContainer>
              {isLoggedIn ? <TabNavigator setLoggedIn={setLoggedIn} /> : <LoginNavigator setLoggedIn={setLoggedIn}/> }
      </NavigationContainer>
  );
}