import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import userImage from '../assets/images/post-1.jpg';


const Posts = () => {
  
  const postsInfo = [
    {
      title: 'This is a great pic!!',
      author: 'friend 1',
      authorProfileImage: require('../assets/images/post-1.jpg'),
      post: require('../assets/images/story-img-1.jpg'),
      likeCount: '1,207',
      isLiked: true,
      isSaved: false
    },
    {
      title: '',
      author: 'friend 2',
      authorProfileImage: require('../assets/images/post-2.jpg'),
      post: require('../assets/images/story-img-2.jpg'),
      likeCount: '74.5k',
      isLiked: false,
      isSaved: false
    },
    {
      title: 'This is a great pic!!',
      author: 'friend 3',
      authorProfileImage: require('../assets/images/post-3.jpg'),
      post: require('../assets/images/story-img-3.jpg'),
      likeCount: '5,008',
      isLiked: true,
      isSaved: true
    },
    {
      title: 'This is a great pic!!',
      author: 'friend 4',
      authorProfileImage: require('../assets/images/post-4.jpg'),
      post: require('../assets/images/story-img-4.jpg'),
      likeCount: '700',
      isLiked: true,
      isSaved: false
    },
    {
      title: 'This is a great pic!!',
      author: 'friend 5',
      authorProfileImage: require('../assets/images/post-5.jpg'),
      post: require('../assets/images/story-img-5.jpg'),
      likeCount: '1,000',
      isLiked: false,
      isSaved: true
    },
  ]
  
  return (
    <View>
      {
        postsInfo.map((post, index) => {
          const [isLiked, setIsLiked] = useState(post.isLiked)
          const [isSaved, setIsSaved] = useState(post.isSaved)
          {/*const [likeCount, setLikeCount] = useState(post.likeCount)*/}
          return (
            <View key={index} style={{
              paddingBottom: 10
            }} >
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 15
              }} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                  <Image source={post.authorProfileImage} style={{
                    width: 25,
                    height: 25,
                    borderRadius: 100
                  }} />
                  <View style={{ paddingLeft: 5 }} >
                    <Text style={{ fontSize: 15, fontWeight: '700' }} >{post.author}</Text>
                  </View>
                </View>
                <Feather name='more-vertical' style={{ fontSize: 20 }} />
              </View>
              <View style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center'
              }} >
                <Image source={post.post} style={{ width: '100%', height: 400 }} />
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                paddingVertical: 15
              }} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                  <TouchableOpacity onPress={() => { setIsLiked(prevState => !prevState) }} >
                    <AntDesign name={isLiked ? 'heart' : 'hearto'} style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: isLiked ? 'red' : 'black'
                    }} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Ionic name='ios-chatbubble-outline' style={{
                      fontSize: 20,
                      paddingLeft: 10
                    }} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Feather name='send' style={{ fontSize: 18, paddingLeft: 15 }} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => setIsSaved(prevState => !prevState)} >
                  <FontAwesome name={isSaved ? 'bookmark' : 'bookmark-o'} style={{ fontSize: 20 }} />
                </TouchableOpacity>
              </View>
              <View style={{
                paddingHorizontal: 15
              }} >
                <Text style={{ fontWeight: '700', fontSize: 14 }} >
                  {post.likeCount} likes
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingVertical: 2 }} >
                  <Text style={{ fontWeight: '700', fontSize: 14, marginRight: 5 }} >{post.author}</Text>
                  <Text>{post.title}</Text>
                </View>
                <Text style={{ opacity: 0.4, paddingVertical: 2 }} >view all comments</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 7 }} >
                  <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <Image source={userImage} style={{
                      width: 25,
                      height: 25,
                      borderRadius: 100,
                      backgroundColor: 'white',
                      marginRight: 10
                    }} />
                    <TextInput placeholder='Add a comment' style={{ opacity: 0.5 }} />
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <AntDesign name='heart' style={{ fontSize: 15, color: 'red', paddingHorizontal: 5 }} />
                    <Text style={{ fontSize: 15, paddingHorizontal: 5 }} >🙌</Text>
                    <Feather name='plus-circle' style={{ fontSize: 15, paddingHorizontal: 5 }} />
                  </View>
                </View>
              </View>
            </View>
          )
        })
      }
    </View>
  )
}


export default Posts;
