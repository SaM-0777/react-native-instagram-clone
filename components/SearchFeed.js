import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';


const data = [
  require('../assets/images/post-1.jpg'),
  require('../assets/images/post-2.jpg'),
  require('../assets/images/post-3.jpg'),
  require('../assets/images/post-4.jpg'),
  require('../assets/images/post-5.jpg'),
  require('../assets/images/post-6.jpg'),
  require('../assets/images/post-7.jpg'),
  require('../assets/images/post-8.jpg'),
]

const SearchFeed = ({ getImage }) => {
  const { width, height } = Dimensions.get('window')

  return (
    <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap' }} >
      {data.map((image, index) => {
        return (
          <View key={index} style={{ padding: 1 }} >
            <TouchableOpacity style={{  }}
              onPressIn={() => getImage(image)}
              onPressOut={() => getImage(null)}
            >
              <Image source={image} style={{ width: width / 3 - 3, height: 150 }} />
            </TouchableOpacity>
          </View>
        )
      })}
    </View>
  )
}


export default SearchFeed;
