import React, { FC, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/counterSlice';

const SecondComponent: FC = (props) => {
  const count = useSelector((state:any)=>state.counter.value)
  const dispatch = useDispatch()
  const incrementAc=()=>{(dispatch(increment()))}
  return (
      <View style={styles.container}>
        <Text> {count}</Text>
        <Button title='Increment' onPress={incrementAc}/>
       </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'yellow'
  },
});

export default SecondComponent;