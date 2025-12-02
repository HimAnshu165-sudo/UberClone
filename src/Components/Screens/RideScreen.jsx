import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function RideScreen() {
  const [selectedValue, setSelectedValue] = useState('Ride');
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 70, width: 120, color: 'black'}}
        onValueChange={itemValue => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Ride" style={styles.title} value="ride" />
        <Picker.Item style={styles.title} label="Request a ride" value="rr" />
        <Picker.Item style={styles.title} label="Reserve a ride" value="rs" />
        <Picker.Item style={styles.title} label="See Prices" value="price" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
