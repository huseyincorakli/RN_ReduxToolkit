import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Button, StyleSheet, Text, View } from 'react-native';
import { decrement } from '../redux/counterSlice';


const FirstComponent: FC = (props) => {
     const count = useSelector((state:any) => state.counter.value)
     const dispatch  = useDispatch()

     const decrementAc = ()=>{dispatch(decrement())}
  return (
      <View style={[styles.container]}>
        <Text> {count}</Text>
        <Button title='decrement' onPress={decrementAc}/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:`gray`
  },
});

export default FirstComponent;