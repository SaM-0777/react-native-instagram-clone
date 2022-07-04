import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import { UserInfo, UserPosts } from '../components';


const AddStoryHighLightsCircles = () => {
  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center'
    }} >
      <View
        style={{
          width: 65,
          height: 65,
          borderRadius: 100,
          borderWidth: 1,
          opacity: 0.7,
          marginHorizontal: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Entypo name="plus" style={{ fontSize: 35, color: 'black' }} />
      </View>
      <Text>New</Text>
    </View>
  )
}

const StoryHighlightsCircles = () => {
  return (
    <View
      style={{
        width: 65,
        height: 65,
        borderRadius: 100,
        backgroundColor: 'black',
        opacity: 0.1,
        marginHorizontal: 5,
      }}></View>
  )
}

const storyHighlightsData = [
  <AddStoryHighLightsCircles key={0} />,
  <StoryHighlightsCircles key={1} />,
  <StoryHighlightsCircles key={2} />,
  <StoryHighlightsCircles key={3} />,
  <StoryHighlightsCircles key={4} />,
]

const ProfileScreen = () => {
  const [isDropdown, setIsDropdown] = useState(true)

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
      <View style={{ width: '100%' }} >
        <UserInfo
          username='sam_7771111'
          name='SaM_'
          profileImage={require('../assets/images/post-4.jpg')}
          posts='128'
          followers='1.98M'
          following='102'
        />
        <View style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15
        }} >
          <TouchableOpacity style={{ width: '90%' }} >
            <View style={{
              width: '100%',
              height: 35,
              borderRadius: 5,
              borderColor: '#DEDEDE',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }} >
              <Text style={{
                textAlign: 'center',
                width: '100%',
                fontWeight: 'bold',
                fontSize: 14,
                letterSpacing: 0.6,
                opacity: 0.8,
              }} >Edit Profile</Text>
            </View>
          </TouchableOpacity>
          <View style={{ alignItems: 'center' }} >
            <Ionic name='person-add-sharp' style={{
              fontSize: 25,
              borderRadius: 5,
              padding: 2,
              marginLeft: 2,
              borderColor: '#DEDEDE',
              borderWidth: 1,
              backgroundColor: '#EFEFEF',
            }}  />
          </View>
        </View>
        <View style={{ marginTop: 20 }} >
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }} >
            <Text style={{ padding: 15, fontSize: 14, fontWeight: 'bold' }} >Story Highlights</Text>
            <Feather
              onPress={() => setIsDropdown((prevState) => !prevState)}
              name={isDropdown ? 'chevron-up' : 'chevron-down'}
              style={{ fontSize: 18, color: 'black', paddingHorizontal: 10 }} />
          </View>
          <View style={{ paddingHorizontal: 5, display: isDropdown ? 'flex' : 'none' }} >
            <Text style={{
              paddingHorizontal: 10,
              paddingBottom: 10
            }} >Keep your favourite stories on your profile</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            >
              {storyHighlightsData}
            </ScrollView>
          </View>
        </View>
      </View>
      {/*<UserPosts />*/}
    </View>
  )
}


export default ProfileScreen;
