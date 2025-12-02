import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
const { width, height } = Dimensions.get('window');

export default function Home4() {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) setDate(selectedDate);
  };

  const onChangeTime = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) setTime(selectedTime);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Plan for Later</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Get your ride right with Uber Reserve</Text>
        <Text style={styles.subText}>Choose date and time</Text>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <TextInput
              style={styles.input}
              placeholder="Select Date"
              placeholderTextColor="#777"
              value={date.toDateString()}
              editable={false}
            />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={onChangeDate}
            />
          )}
          <TouchableOpacity onPress={() => setShowTimePicker(true)}>
            <TextInput
              style={styles.input}
              placeholder="Select Time"
              placeholderTextColor="#777"
              value={time.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
              editable={false}
            />
          </TouchableOpacity>

          {showTimePicker && (
            <DateTimePicker
              value={time}
              mode="time"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={onChangeTime}
            />
          )}
        </View>
        <TouchableOpacity style={styles.nextBtn}>
          <Text style={styles.nextBtnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f8ff',
    paddingHorizontal: width * 0.07,
    paddingTop: height * 0.05,        
  },
  heading: {
    fontSize: width * 0.08,         
    fontWeight: 'bold',
    marginBottom: height * 0.02,
  },
  card: {
    backgroundColor: '#89c6c1ff',
    padding: width * 0.05,         
    borderRadius: width * 0.04,
  },
  cardTitle: {
    fontSize: width * 0.065,
    fontWeight: '700',
    marginBottom: height * 0.02,
  },
  subText: {
    fontSize: width * 0.045,
    fontWeight: '500',
    marginBottom: height * 0.02,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: width * 0.04,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: width * 0.03,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
    fontSize: width * 0.04,
    backgroundColor: '#fff',
    width: width * 0.36,  
    textAlign:"center"             
  },
  nextBtn: {
    backgroundColor: 'black',
    marginTop: height * 0.03,
    paddingVertical: height * 0.02,
    borderRadius: width * 0.04,
  },
  nextBtnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: width * 0.045,
    fontWeight: '600',
  },
});
