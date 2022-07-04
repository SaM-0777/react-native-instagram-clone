import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';


const PostTab = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{
      width: '100%',
      height: '100%'
    }}
      
    >
      <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingVertical: 5,
        justifyContent: 'space-between'
      }} >

      </View>
    </ScrollView>
  )
}

const ReelsTab = () => {
  return (
    <View>
      <Text>ReelsTab</Text>
    </View>
  )
}

const TagsTab = () => {
  return (
    <View>
      <Text>TagsTab</Text>
    </View>
  )
}


const UserPosts = () => {
  const ProfileTab = createMaterialTopTabNavigator()
  const ProfileTabs = () => {
    return (
      <ProfileTab.Navigator initialRouteName='UserPosts' screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: 'black',
          height: 1.5
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Posts') {
            iconName = 'ios-apps-sharp'
          } else if (route.name === 'Reels') {
            iconName = focused ? 'ios-play-circle' : 'ios-play-circle-outline'
          } else if (route.name === 'Tags') {
            iconName = focused ? 'ios-person' : 'ios-person-outline'
          }
          color = focused ? 'black' : 'gray'

          return <Ionic name={iconName} color={color} size={22} />
        }
      })} >
        <ProfileTab.Screen name='UserPosts' component={PostTab} />
        <ProfileTab.Screen name='UserReels' component={ReelsTab} />
        <ProfileTab.Screen name='UserTags' component={TagsTab} />
      </ProfileTab.Navigator>
    )
  }
  
  return (
    <View style={{ marginTop: 10 }} >
      <ProfileTabs />
    </View>
  )
}


export default UserPosts;
