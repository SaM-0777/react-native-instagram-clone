import React from "react";
import { View, Text } from "react-native";
import { ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

/*import { StatusScreen } from "../screens";*/


const Stories = () => {
  const navigation = useNavigation()

  const storiesInfo = [
    {
      id: 1,
      name: "Your Stories",
      image: require("../assets/images/story-img-1.jpg"),
    },
    {
      id: 2,
      name: "Friend 1",
      image: require("../assets/images/story-img-2.jpg"),
    },
    {
      id: 3,
      name: "Friend 2",
      image: require("../assets/images/story-img-3.jpg"),
    },
    {
      id: 4,
      name: "Friend 3",
      image: require("../assets/images/story-img-4.jpg"),
    },
    {
      id: 5,
      name: "Friend 4",
      image: require("../assets/images/story-img-5.jpg"),
    },
    {
      id: 6,
      name: "Friend 5",
      image: require("../assets/images/story-img-6.jpg"),
    },
    {
      id: 7,
      name: "Friend 6",
      image: require("../assets/images/story-img-7.jpg"),
    },
    {
      id: 8,
      name: "Friend 7",
      image: require("../assets/images/story-img-8.jpg"),
    },
  ]

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 20 }}
    >
      {storiesInfo.map((data, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => navigation.push('Status', {
            name: data.name,
            image: data.image
          })} >
            <View style={{ flexDirection: 'column', paddingHorizontal: 8, position: 'relative' }} >
              {
                data.id == 1 ? (
                  <View style={{ position: 'absolute', bottom: 15, right: 10, zIndex: 1 }} >
                    <Feather name="plus-circle" style={{ fontSize: 20, color: '#405de6', backgroundColor: 'white', borderRadius: 100 }} />
                  </View>
                ) : (null)
              }
              <View style={{ width: 68, height: 68, backgroundColor: 'white', borderWidth: 1.8, borderRadius: 100, borderColor: '#c13584', justifyContent: 'center', alignItems: 'center' }} >
                <Image source={data.image} style={{ resizeMode: 'cover', width: '90%', height: '90%', borderRadius: 100, backgroundColor: 'orange' }} />
              </View>
              <Text style={{ textAlign: 'center', fontSize: 10, opacity: data.id ? 1 : 0.5 }} >{data.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  )
};


export default Stories;