import React from 'react';
import { View, Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
  
  
  export function CoreNavigator(setLoggedIn) {
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