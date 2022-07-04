import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';


const suggestions = [
  {
    image: require('../assets/images/post-1.jpg'),
    username: 'rosesandra4104',
  },
  {
    image: require('../assets/images/post-2.jpg'),
    username: 'glorylaya',
  },
  {
    image: require('../assets/images/post-3.jpg'),
    username: 'johncena',
  },
  {
    image: require('../assets/images/post-4.jpg'),
    username: 'nasakennedy',
  },
  {
    image: require('../assets/images/post-5.jpg'),
    username: 'dudeperfect',
  },
  {
    image: require('../assets/images/post-6.jpg'),
    username: 'natgeo',
  },
]

const ActivitySuggestions = () => {
  return (
    <View style={{ width: '100%', backgroundColor: 'white', marginTop: 50 }} >
      <Text style={{ fontWeight: '500' }} >Suggestions for you</Text>
      <View style={{ paddingTop: 10 }} >
        {suggestions.map((sugg, index) => {
          return (
            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, flex: 1 }} >
                <Image source={sugg.image} style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100
                }} />
                <View style={{ marginLeft: 10 }} >
                  <Text>{sugg.username}</Text>
                  <Text style={{ opacity: 0.5, fontSize: 10 }} >Suggested for you</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 10 }} >
                <TouchableOpacity style={{
                  backgroundColor: '#0195F7',
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderRadius: 4
                }} >
                  <Text style={{ color: 'white', fontSize: 12 }} >Follow</Text>
                </TouchableOpacity>
                <Feather name='x' style={{ marginLeft: 12 }} />
              </View>
              <View>

              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}


export default ActivitySuggestions;
