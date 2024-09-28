import React, { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import HomePage from './home';
import LoginPage from './login';

const MainPage: FC = (props) => {
const {isAuth,email} = useSelector((state:any)=>state.user)
console.log(isAuth);

  return (
      <View style={styles.container}>
       {isAuth?<HomePage/>:<LoginPage/>}
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

export default MainPage;