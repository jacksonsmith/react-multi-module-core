import React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

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


export function MyTabs(setLoggedIn) {
  const ProfileNavigator2 = () => ProfileNavigator(setLoggedIn)

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Question" component={QuestionNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator2} />
    </Tab.Navigator>
  );
}
  