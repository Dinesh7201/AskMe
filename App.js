import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import first from './src/first';
import Login_SignUp from './src/Home';
import login from './src/SignInScreen/Login';
import SignupScreen from './src/signUpScreen/Signup';
import Home from './src/homess/homee';
import Profile from './src/Profile/profile';
import edit from './src/Profile/editprofile';
import board from './src/OnBordingScreen/OnBordingScreen';
import medium from './src/homess/medium';
import commu from './src/commu';
import forums from './src/homess/messages';
import Ask from './src/Ask';
import git from './src/git';
import Notification from './src/homess/Notification';
import MainNavigator from '../AskMe/MainNavigator';
import onbording from './src/OnBordingScreen/OnBordingScreen';
const Stack = createNativeStackNavigator();

const YourApp = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator style={{flex: 1, backgroundColor: 'brown'}}>
        <Stack.Screen
            name="onbording"
            component={board}
            options={{headerShown: false}}
          />
          
          <Stack.Screen
            name="start"
            component={first}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login_SignUp"
            component={Login_SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="login"
            component={login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="profile"
            component={Profile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="edit"
            component={edit}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="commu"
            component={commu}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="forums"
            component={forums}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="medium"
            component={medium}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="git"
            component={git}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Ask"
            component={Ask}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MainNavigator"
            component={MainNavigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default YourApp;