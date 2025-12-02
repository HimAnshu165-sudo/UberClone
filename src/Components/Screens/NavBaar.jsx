import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const NavBar = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        paddingHorizontal: width * 0.07,
        paddingTop: height * 0.06,
        paddingBottom: height * 0.035,
      }}
    >
      <Text
        style={{
          color: '#f6f7f7ff',
          fontSize: width * 0.055,
          fontWeight: 'bold',
        }}
      >
        Uber
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: width * 0.05,
        }}
      >
        <TouchableOpacity>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: width * 0.035,
            }}
          >
            Log in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              borderWidth: 2,
              borderColor: 'white',
              paddingVertical: height * 0.01,
              paddingHorizontal: width * 0.02,
              borderRadius: width * 0.04,
              backgroundColor: 'white',
              fontSize: width * 0.035,
              color: 'black',
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text
            style={{
              color: 'white',
              fontSize: width * 0.035,
            }}
          >
            Menu
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavBar;
