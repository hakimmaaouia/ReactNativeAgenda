/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const AddTaskBtn = ({onPress}:any) => {
  return (
    <View style={styles.container}>
        <Pressable  onPress={onPress}>
      <Text style={styles.text}>+</Text>
       </Pressable>
    </View>
  );
};
export default AddTaskBtn;


const styles = StyleSheet.create({
    container: {
      height: 50,
      width :50,
      backgroundColor:"#049a5b",
      borderRadius: 50,
      overflow:'hidden',
      display:'flex',
      justifyContent:'center',
      alignContent:'center',
      alignItems:"center"

    },
    text:{
      fontWeigh:"900",
      color:"#ffffff",
      fontSize:20
    }

  });
