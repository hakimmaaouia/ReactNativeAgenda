/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation: any = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
    </View>
  );
};
export default HomeScreen;
