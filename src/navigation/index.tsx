import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen/index';
import CreateTask from '../screens/createTask/index';
import DetailTask from '../screens/detailTask/index';
import Routes from './routes'
export type RootStackParamList = {
  Home: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();
const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.HOME} component={HomeScreen} />
      <Stack.Screen name={Routes.DETAIL_TASK} component={DetailTask} />
      <Stack.Screen name={Routes.CREATE_TASK} component={CreateTask} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
