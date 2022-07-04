import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';


const LoginScreen = ({ navigation }) => {
  const [loginData, setLoginData] = useState({ username: '', password: '' })

  const handleInputChange = (identifier, value) => {
    setLoginData(prevState => {
      return { ...prevState, [identifier]: value }
    })
  }

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder='Username' value={loginData.username}
        onChangeText={handleInputChange.bind(this, 'username')} />
      <TextInput placeholder='Password' value={loginData.password}
        onChangeText={handleInputChange.bind(this, 'password')} />
      <Button title='Login' onPress={() => {
        console.log(loginData);
        navigation.navigate("Login")
      }} />
      <Button title='Register' onPress={() => navigation.navigate("Register")} />
    </View>
  )
}

export default LoginScreen