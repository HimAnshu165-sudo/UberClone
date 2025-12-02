import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';

export default function Home3() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 20 }}>
        Log in to see your account details
      </Text>
      <Text>
        View past trips, tailored suggestions, support resources, and more.
      </Text>
      <TouchableOpacity style={{backgroundColor:"black",width:"70%",paddingVertical:18,borderRadius:14}}>
        <Text style={{color:"white",textAlign:"center",fontSize:18,fontWeight:"500"}}>
            Log in to your account
        </Text>
      </TouchableOpacity>
      <Pressable>
      <Text style={{textDecorationStyle:'dotted',textDecorationLine:"underline",color:'gray'}}>
         Create an account
      </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f8ff',
    gap: 14,
    padding: 30,
  },
});
