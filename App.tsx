/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React,{useState} from 'react';
import RootNavigation from './src/navigation/index'
import {TasksList} from './src/context/index'
const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const [taskList, setTaskList] = useState({});
  return (
    <NavigationContainer>
      <TasksList.Provider value={{taskList,setTaskList}}>
      <RootNavigation />
      </TasksList.Provider>
    </NavigationContainer>
  );
};

export default App;
