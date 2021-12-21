/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AddTaskBtn from '../../components/addTaskBtn/index'
import { Agenda } from 'react-native-calendars';
import { TasksList } from '../../context/index'
import Routes  from '../../navigation/routes';
const HomeScreen = () => {
  const navigation: any = useNavigation();
  const { taskList, setTaskList } = useContext(TasksList);

  const renderItem = (item: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Routes.DETAIL_TASK);
        }}
       style={styles.taskItemContainer}
      >
        <View
         style={styles.taskitemView}
        >
          <Text>{item.name}</Text>
          <Text>{item.time}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Agenda 
      items={taskList}
      renderItem={renderItem}
      
      />
      <View style={styles.addTaskBtn} >
        <AddTaskBtn  onPress={() => {
          navigation.navigate(Routes.CREATE_TASK);
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
    right: 10,
    bottom: 10,
  },
  taskItemContainer:{
    flex:1,
    backgroundColor: '#fff',
          margin:20,
          borderRadius: 20,
  },
  taskitemView:{
    padding:10,
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftColor:"#049a5b",
    borderLeftWidth:6
  }
});

export default HomeScreen;
