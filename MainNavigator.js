import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// imports screens
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
const Stack = createNativeStackNavigator();
const Tab=createBottomTabNavigator();

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default function HomeScreen1(){
  return(
    <Tab.Navigator>
      <Tab.Screen name ="commu" component={commu} options={{headerShown:false,
      tabBarIcon:()=>{
        return <Icon name="home" size={20}/>
      }
    }}
      />
      <Tab.Screen name ="Notification" component={Notification} options={{headerShown:false,
        tabBarIcon:()=>{
          return <Icon name="bell" size={20}/>
        }
      }}/>
      <Tab.Screen name ="forum" component={forums} options={{ headerShown:false,
        tabBarIcon:()=>{
          return <Icon name="message" size={20}/>
        }
      }}/>
      <Tab.Screen name ="profile" component={Profile} options={{ headerShown:false,
        tabBarIcon:()=>{
          return <Icon name="account" size={20}/>
        }
      }}/>
    </Tab.Navigator>
  )
}