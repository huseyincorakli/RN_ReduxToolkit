import React, { FC, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setEmail, setLogin, setPassword } from '../redux/userSlice';

const LoginPage: FC = (props) => {
const dispatch= useDispatch()
  return (
      <View style={styles.container}>
        <Text> You will see this page if you are not logged in or you are logout</Text>
        <TextInput placeholder='set email' style={styles.input} onChangeText={(text)=>{dispatch(setEmail(text))}} />
        <TextInput placeholder='set password' style={styles.input} onChangeText={(text)=>{dispatch(setPassword(text))}} />
        <Button title='Login' onPress={()=>{dispatch(setLogin())}}/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin:50
  },
  input:{
     borderWidth:1,
     padding:5,
     margin:5
  }
});

export default LoginPage;