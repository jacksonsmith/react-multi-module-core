import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {MyTabs} from './tab'
import { CoreNavigator } from './coreNavigator';

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
      <NavigationContainer>
              {isLoggedIn ? <MyTabs setLoggedIn={setLoggedIn} /> : <CoreNavigator setLoggedIn={setLoggedIn}/> }
      </NavigationContainer>
  );
}