import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TasksList } from './../../context/index'


const timeToString = (time: string | number | Date) => {
  const date = new Date(time);

  return date.toISOString().split("T")[0];
};
const CreateTask = () => {
  const { taskList, setTaskList } = useContext(TasksList)
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  const [isDateValue, setDateValue] = useState();
  const [isTimeValue, setTimeValue] = useState();
  const [isNoteValue, setNoteValue] = useState();
  const showDateTimePicker = (setDateTimePickerVisible: any) => setDateTimePickerVisible(true);

  const hideDateTimePicker = (setDateTimePickerVisible: any) => setDateTimePickerVisible(false);

  const handleDatePicked = (date: any) => {
    setDatePickerVisible(false);
    setDateValue(timeToString(date));
  };
  const handleTimePicked = (date: any) => {
    setTimePickerVisible(false);
    setTimeValue("2021-12-21T16:25:10.534Z");
  };
  const addNewTask = () => {
    console.log("...taskList")
    var items: never[] = taskList;
    const strTime = timeToString(isDateValue);
    items[strTime] = [];
    items[strTime].push(
      {
        name: "test",
        height: 10,
        time:isTimeValue,
        note:"isNoteValue"

      }
    )
    const newItems = {};
    Object.keys(items).forEach((key) => {
      newItems[key] = items[key];
    });

    setTaskList(newItems)

  };

    const handleNotes=(data)=>{
      isNoteValue(data);
    }
  return (
    <View style={styles.container}>
      <Text style={styles.tite}> Demo Form </Text>
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



        <TextInput placeholder="notes" onChangeText={handleNotes}/>



        <TouchableOpacity
          onPress={() => showDateTimePicker(setTimePickerVisible)}
          style={{
            height: 25,
            marginTop: 3
          }}
        >
          <Text style={{ fontSize: 19 }}>
            test{isDateValue}
          </Text>
        </TouchableOpacity>




        <TouchableOpacity
          onPress={() => showDateTimePicker(setDatePickerVisible)}
          style={{
            height: 25,
            marginTop: 3
          }}
        >
          <Text style={{ fontSize: 19 }}>
            test{isDateValue}
          </Text>
        </TouchableOpacity>


      </View>
      <TouchableOpacity onPress={addNewTask}>
        <Text> ADD YOUR TASK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  tite: {
    height: 25,
    borderColor: '#5DD976',
    borderLeftWidth: 1,
    paddingLeft: 8,
    fontSize: 19
  },



});

export default CreateTask;
