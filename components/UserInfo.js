import React from 'react'
import { View, Text, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


const UserInfo = ({ username, name, profileImage, posts, followers, following }) => {
  return (
    <View>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginVertical: 7
      }} >
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <Text style={{ fontSize: 18, fontWeight: 'bold' }} >{username}</Text>
          <Feather name='chevron-down' style={{ fontSize: 20, color: 'black', paddingHorizontal: 5, opacity: 0.5 }} />
        </View>
        <View style={{ 
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <Feather name='plus-square' style={{ fontSize: 24, marginRight: 5 }} />
          <Feather name='menu' style={{ fontSize: 24, marginLeft: 7 }} />
        </View>
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 20,
      }}>
        <View style={{ alignItems: 'flex-start' }}>
          <Image source={profileImage} style={{
            resizeMode: 'cover',
            width: 80,
            height: 80,
            borderRadius: 100,
          }}
          />
          <Text style={{ paddingVertical: 5, fontWeight: '500' }}> {name} </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{posts}</Text>
          <Text>Posts</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{followers}</Text>
          <Text>Followers</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{following}</Text>
          <Text>Following</Text>
        </View>
      </View>
    </View>
  )
}

export default UserInfo