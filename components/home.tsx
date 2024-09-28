import React, { FC, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setLogOut } from '../redux/userSlice';

const HomePage: FC = (props) => {
const {isAuth,email} =useSelector((state:any)=>state.user)

const dispatch = useDispatch()

  return (
      <View style={styles.container}>
          <Text>Your email : {email}</Text>
        <Text> You will see this page if you are logged in </Text>
        <Text> HomePage works!</Text>
        <Button title='Log out' onPress={()=>{dispatch(setLogOut())}}/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomePage;