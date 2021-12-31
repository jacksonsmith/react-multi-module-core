import React, { useState, createContext } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Initial Navigator Screen

function LoginScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Navigator</Text>
      <Button title='Login' onPress={() => {
        props.setLoggedIn(true)
      }}/>
    </View>
  );
}

function SignInScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SignIn Navigator</Text>
    </View>
  );
}


function MainNavigator(setLoggedIn) {
  console.log(setLoggedIn)

  const MainStack = createNativeStackNavigator();
  const LoginApp = () => LoginScreen(setLoggedIn)

  return (
           <MainStack.Navigator>
            <MainStack.Screen name="Login" component={LoginApp} />
            <MainStack.Screen name="SignIn" component={SignInScreen} />
          </MainStack.Navigator> 
  )
}

// Initial Navigator Screen


// Tabs

function HomeNavigator() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Navigator</Text>
    </View>
  );
}

function QuestionNavigator() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Question Navigator</Text>
    </View>
  );
}

function ProfileNavigator(props) {
  console.log(props)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Navigator</Text>
      <Button title='Logout' onPress={() => {
        props.setLoggedIn(false)
      }}></Button>
    </View>
  );
}

// Fim das Tabs

const Stack = createNativeStackNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs(setLoggedIn) {
  const ProfileNavigator2 = () => ProfileNavigator(setLoggedIn)

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Question" component={QuestionNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator2} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
      <NavigationContainer>
              {isLoggedIn ? <MyTabs setLoggedIn={setLoggedIn} /> : <MainNavigator setLoggedIn={setLoggedIn}/> }
      </NavigationContainer>
  );
}