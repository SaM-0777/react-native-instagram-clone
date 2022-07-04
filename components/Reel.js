import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import ReelPage from './ReelPage';


const ReelData = [
  {
    video: require('../assets/videos/reel-1.mp4'),
    author: 'people_1',
    description: 'funny meme plz follow',
    likeCount: '25.8k',
    isLike: true
  },
  {
    video: require('../assets/videos/reel-5.mp4'),
    author: 'friend__2',
    description: 'This is funny as hell.',
    likeCount: '2.5m',
    isLike: false
  },
  {
    video: require('../assets/videos/reel-2.mp4'),
    author: 'people__3',
    description: 'This is a reel video',
    likeCount: '120k',
    isLike: true
  },
  {
    video: require('../assets/videos/reel-3.mp4'),
    author: 'people.ig.5',
    description: 'please follow',
    likeCount: '5.7k',
    isLike: false
  },
  {
    video: require('../assets/videos/reel-4.mp4'),
    author: 'people_1_meme',
    description: 'Lmao this is funny',
    likeCount: '200k',
    isLike: false
  },
]


const Reel = () => {
  const [reelIndex, setReelIndex] = useState(0)

  const handleChangeIndex = ({index}) => {
    setReelIndex(index)
  }

  return (
    <SwiperFlatList
      vertical={true}
      data={ReelData}
      onChangeIndex={handleChangeIndex}
      renderItem={(item, index) => <ReelPage item={item} index={index} reelIndex={reelIndex} />}
      keyExtractor={(item, index) => index}>

    </SwiperFlatList>
  )
}


export default Reel;
