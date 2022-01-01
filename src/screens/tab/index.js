import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {QuestionNavigator} from 'questionsModule'
import {ProfileNavigator} from 'profileModule'
import { HomeNavigator } from '../home';

const Tab = createBottomTabNavigator();

export function TabNavigator(props) {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Question" component={QuestionNavigator} initialParams={props}/>
      <Tab.Screen name="Profile">
        {() => <ProfileNavigator {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
  