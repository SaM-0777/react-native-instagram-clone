import React, { useEffect, useRef } from "react";
import { Text, View, StatusBar, Image, TextInput, Animated, TouchableOpacity } from "react-native";
import Feather from 'react-native-vector-icons/Feather';


const StatusScreen = ({ route, navigation }) => {
  const { name, image } = route.params
  const statusProgress = useRef(new Animated.Value(0)).current
  
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Time out!!');
      navigation.goBack()
    }, 5000)
    
    Animated.timing(statusProgress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false
    }).start()
    
    return () => clearTimeout(timer)
  }, [])
  
  const animationProgress = statusProgress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%']
  })

  return (
    <View style={{
      backgroundColor: 'black',
      height: '100%',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center'
    }} >
      <StatusBar backgroundColor='black' barStyle='light-content' />
      <View style={{
        height: 3,
        width: '95%',
        borderWidth: 1,
        backgroundColor: 'gray',
        position: 'absolute',
        top: 18
      }} >
        <Animated.View style={{
          height: '100%',
          backgroundColor: 'white',
          width: animationProgress
        }} >
        </Animated.View>
      </View>
      <View style={{
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 12,
        left: 0,
        width: '90%'
      }} >
        <View style={{
          borderRadius: 100,
          width: 30,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center'
        }} >
          <Image source={image} style={{
            borderRadius: 100,
            backgroundColor: 'orange',
            resizeMode: 'cover',
            width: '90%',
            height: '90%'
          }} />
        </View>
        <View style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%'
        }} >
          <Text style={{ color: 'white', fontSize: 15, paddingLeft: 10 }} >{name}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <Feather name="x" style={{ fontSize: 20, color: 'white', opacity: 0.6 }} />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={image} style={{ position: 'absolute', width: '100%', height: 600 }} />
      <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 10,
        width: '100%'
      }} >
        <TextInput placeholder="Send message" placeholderTextColor='white' style={{
          borderColor: 'white',
          borderRadius: 25,
          width: '85%',
          height: 50,
          paddingLeft: 20,
          borderWidth: 1,
          fontSize: 20,
          color: 'white'
        }} />
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Feather name="send" style={{
            fontSize: 30,
            color: 'white'
          }} />
        </TouchableOpacity>
      </View>
    </View>
  )
};


export default StatusScreen;
