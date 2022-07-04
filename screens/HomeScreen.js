import React from 'react';
import { Text, View, StatusBar, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useFonts } from 'expo-font';

import { Posts, Stories } from '../components';


const HomeScreen = () => {
  const [fontLoaded] = useFonts({ 'Lobster-Regular': require('../assets/fonts/Lobster-Regular.ttf') })

  if (!fontLoaded) return null

  return (
    <View style={{ backgroundColor: 'white', height: '100%' }} >
      <StatusBar backgroundColor="white" barStyle="dark-content" animated={true} />
      <View style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        alignItems: 'center'
      }} >
        <Text style={{ fontFamily: 'Lobster-Regular', fontSize: 25, fontWeight: '500' }} >Instagram</Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <Feather name='plus-square' style={{ fontSize: 24, marginRight: 5 }} />
          <Feather name='send' style={{ fontSize: 24, marginLeft: 7 }} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} >
        <Stories />
        <Posts />
      </ScrollView>
    </View>
  )
}


export default HomeScreen;
