import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function Home1() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 20 }}>
        Go anywhere with Uber
      </Text>

      {/* Pickup Input */}
      <View style={styles.inputWrapper}>
        <View style={styles.inputContainer}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios-filled/50/000000/marker.png',
            }}
            style={styles.leftIcon}
          />

          {/* Add flex: 1 here */}
          <TextInput
            placeholder="Pickup location"
            placeholderTextColor="#494545ff"
            style={styles.textInput}
          />
        </View>

        <Image
          source={{
            uri: 'https://img.icons8.com/ios-filled/50/000000/compass.png',
          }}
          style={styles.rightIcon}
        />
      </View>

      {/* Dropoff Input */}
      <View style={styles.inputContainer}>
        <Image
          source={{
            uri: 'https://img.icons8.com/ios-filled/50/000000/square.png',
          }}
          style={styles.leftIcon}
        />
        <TextInput
          placeholder="Dropoff location"
          placeholderTextColor="#494545ff"
          style={styles.textInput}
        />
      </View>

      {/* Button */}
      <View style={styles.button}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <Text style={{ textAlign: 'center', color: 'white' }}>See Prices</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Ride')}>
        <Text
          style={{
            textDecorationLine: 'underline',
            color: '#857d7dff',
            fontSize: 16,
          }}
        >
          Log in to see your recent activity
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f8ff',
    gap: 20,
    padding: 30,
  },
  button: {
    borderWidth: 3,
    width: '30%',
    padding: 10,
    borderRadius: 13,
    backgroundColor: 'black',
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d7d7d5ff',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
    width: '100%',
  },
  textInput: {
    flex: 1, // ✅ ensures TextInput takes remaining space and doesn’t overflow
    fontSize: 18,
    paddingRight: 30, // ✅ adds breathing room before compass icon
  },
  leftIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  rightIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 15,
    top: 15,
  },
});
