import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
/*import Video from 'react-native-video';*/
/*import VideoPlayer from 'react-native-video-player';*/


const ReelPage = ({ item, index, reelIndex }) => {
  const { width, height } = Dimensions.get('window')
  const videoRef = useRef(null)

  const onBuffer = (buffer) => {
    console.log('buffering', buffer);
  }

  const onError = (error) => {
    console.log("Error", error);
  }

  return (
    <View>
      <TouchableOpacity>
        <Video
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode='cover'
          paused={false}
          source={item.video}
          style={{
            width: width,
            height: height,
            position: 'absolute'
          }}
         />
      </TouchableOpacity>
    </View>
  )
}


export default ReelPage;
