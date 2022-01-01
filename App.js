import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {CoreNavigator} from './tab'
import { LoginNavigator } from 'loginModule';
export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
      <NavigationContainer>
              {isLoggedIn ? <CoreNavigator setLoggedIn={setLoggedIn} /> : <LoginNavigator setLoggedIn={setLoggedIn}/> }
      </NavigationContainer>
  );
}