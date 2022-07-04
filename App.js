import React from 'react';
import { StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import {
  HomeScreen,
  SearchScreen,
  ReelsScreen,
  ActivityScreen,
  ProfileScreen,
  StatusScreen
} from './screens';

import profileImage from './assets/images/post-4.jpg';


export default function App() {
  const Stack = createNativeStackNavigator()

  const BottomTab = () => {
    const Tab = createBottomTabNavigator()

    return (
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 50
        },
        tabBarIcon: ({ focused, size, color }) => {
          color = 'black'
          let iconName
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
            size = focused ? size + 8 : size + 2
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'ios-search-outline'
          } else if (route.name === 'Reels') {
            iconName = focused ? 'caret-up-circle-sharp' : 'caret-up-circle-outline'
          } else if (route.name === 'Activity') {
            iconName = focused ? 'ios-heart' : 'ios-heart-outline'
          } else if (route.name === 'Profile') {
            return <Image source={profileImage} style={{ width: 25, height: 25, borderRadius: 100 }} />
          }
          return <Ionicons name={iconName} size={25} color={color} />
        }
      })} >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Search' component={SearchScreen} />
        <Tab.Screen name='Reels' component={ReelsScreen} />
        <Tab.Screen name='Activity' component={ActivityScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
      </Tab.Navigator>
    )
  }
  
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Register' >
        <Stack.Screen name='Bottom' component={BottomTab} />
        <Stack.Screen name='Status' component={StatusScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

