/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AddTaskBtn from '../../components/addTaskBtn/index'
const HomeScreen = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CreateTask');
        }}
        style={{
          backgroundColor: '#fff',
          padding: 30,
          margin: 30,
          borderRadius: 20,
        }}
      >
        <Text>HomeScreen</Text>
      </TouchableOpacity>
      <Text>HomeScreen</Text>


      <View style={styles.addTaskBtn} >
        <AddTaskBtn  onPress={() => {
          navigation.navigate('CreateTask');
        }}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  addTaskBtn: {
    position: "absolute",
    right: 0,
    bottom: 0,
  }

});

export default HomeScreen;
