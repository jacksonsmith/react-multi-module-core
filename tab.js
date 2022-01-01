import React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Import Modules

function HomeNavigator(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Navigator</Text>
    </View>
  );
}

function QuestionNavigator(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Question Navigator</Text>
    </View>
  );
}

function ProfileNavigator(props) {  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Navigator</Text>
      <Button title='Logout' onPress={() => {
        props.setLoggedIn(false)
      }}></Button>
    </View>
  );
}

// Fim Import Modules

const Tab = createBottomTabNavigator();

export function CoreNavigator(props) {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={() => HomeNavigator(props)} />
      <Tab.Screen name="Question" component={() => QuestionNavigator(props)} />
      <Tab.Screen name="Profile" component={() => ProfileNavigator(props)} />
    </Tab.Navigator>
  );
}
  