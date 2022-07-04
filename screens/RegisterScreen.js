import React, { useState } from 'react';
import { Text, Button, View, TextInput } from 'react-native';


const RegisterScreen = ({ navigation }) => {
  const [registerData, setRegisterData] = useState({ username: '', email: '', password: '' })

  const handleInputChange = (identifier, value) => {
    setRegisterData(prevState => {
      return { ...prevState, [identifier]: value }
    })
  }

  return (
    <View>
      <Text>Register</Text>
      <TextInput placeholder='Username' value={registerData.username} onChangeText={handleInputChange.bind(this, 'username')} />
      <TextInput placeholder='Email' value={registerData.email} onChangeText={handleInputChange.bind(this, 'email')} />
      <TextInput placeholder='Password' value={registerData.password} onChangeText={handleInputChange.bind(this, 'password')} />
      <Button title='Register' onPress={() => navigation.navigate("Register")} />
      <Button title='Login' onPress={() => navigation.navigate("Login")} />
    </View>
  )
}


export default RegisterScreen;
