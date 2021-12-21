import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TasksList } from './../../context/index'
import Routes from '../../navigation/routes'

const timeToString = (time: string | number | Date) => {
  const date = new Date(time);
  return date.toISOString().split("T")[1];
};

const DateToString = (time: string | number | Date) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const CreateTask = () => {
  const { taskList, setTaskList } = useContext(TasksList)
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  const [isDateValue, setDateValue] = useState(DateToString(new Date));
  const [isTimeValue, setTimeValue] = useState(timeToString(new Date));
  const [isNoteValue, setNoteValue] = useState();
  const [isNameValue, setNameValue] = useState();
  const showDateTimePicker = (setDateTimePickerVisible: any) => setDateTimePickerVisible(true);

  const hideDateTimePicker = (setDateTimePickerVisible: any) => setDateTimePickerVisible(false);

  const navigation: any = useNavigation();

  const handleDatePicked = (date: any) => {
    setDateValue(DateToString(date));
    setDatePickerVisible(false);
  };

  const handleTimePicked = (date: any) => {
    setTimeValue(timeToString(date));
    setTimePickerVisible(false);
  };

  const addNewTask = () => {
    var items: never[] = taskList;
    const strTime = DateToString(isDateValue);
    items[strTime] = [];
    items[strTime].push(
      {
        name: isNameValue,
        height: 10,
        time: isTimeValue,
        note: isNoteValue

      }
    )
    const newItems = {};
    Object.keys(items).forEach((key) => {
      newItems[key] = items[key];
    });

    setTaskList(newItems)
    navigation.navigate(Routes.HOME)
  }
    ;

  const handleNotes = (data) => {
    setNoteValue(data)
  }

  const handleName = (data) => {
    setNameValue(data)
  }
  return (
    <View style={styles.container}>
      <View style={styles.centre}>
      <Text style={styles.tite}> Add task </Text>
      </View>
      <View >
        <DateTimePickerModal
          onCancel={() => setDatePickerVisible(false)}
          isVisible={isTimePickerVisible}
          onConfirm={handleTimePicked}
          mode="time"
        />
        <DateTimePickerModal
          onCancel={() => setTimePickerVisible(false)}
          isVisible={isDatePickerVisible}
          onConfirm={handleDatePicked}
          mode="date"
        />
        <TextInput placeholder="Name" style={styles.input} onChangeText={handleName} />
        <TextInput placeholder="notes"  style={styles.input} onChangeText={handleNotes} />
        <TouchableOpacity
        
          onPress={() => showDateTimePicker(setTimePickerVisible)}
          style={styles.inputDate}
        >
          <Text style={{ fontSize: 19 }}>
            {isTimeValue}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.inputDate}
          onPress={() => showDateTimePicker(setDatePickerVisible)}
          
        >
          <Text style={{ fontSize: 19 }}>
            {isDateValue}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.centre}>
      <TouchableOpacity style={styles.btn} onPress={addNewTask}>
        <Text style={{color:"#ffffff",fontSize:12}}> ADD YOUR TASK</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius:20,
    padding:20,
    margin:50,
    backgroundColor: '#ffffff',
  },
  tite: {
    height: 25,
    borderColor: '#5DD976',
    borderLeftWidth: 1,
    paddingLeft: 8,
    fontSize: 19,
    fontWeight:"800"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
inputDate:{
  padding: 10,
},
btn:{
  width:"50%",
  backgroundColor:"#049a5b",
  color:"#ffffff",
  fontSize:10,
  display:"flex",
  justifyContent:"center",
  alignContent:"center",
  alignItems:"center",
  padding:10,
  borderRadius : 12,
  
},
centre:{
  display:"flex",
  justifyContent:"center",
  alignContent:"center",
  alignItems:"center",
}

});

export default CreateTask;
