import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import image from '../assets/homeImage.png'
const {width,height} = Dimensions.get('screen')
const Home6 = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:"bold",fontSize:35}}>Drive when you want, make what you need</Text>
      <Text style={{fontSize:23,marginVertical:20}}>Make money on your schedule with deliveries or rides-or both. You can use your own car or choose a rental through Uber</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={{textAlign:"center",color:'white',fontSize:20}}>Get Started</Text>
      </TouchableOpacity>
      <Text style={{textDecorationLine:"underline",fontSize:18,color:"#6d6767ff",paddingVertical:height*0.024}}>
        Already have an account? Sign in
      </Text>
      <Image source={image} style={styles.image}/>
    </View>
  );
};

export default Home6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f9f9f8ff',
  },
  btn:{
    backgroundColor:'black',
    width:width*0.36,
    paddingVertical:height*0.02,
    borderRadius:10,
    marginVertical:height*0.018
  },
  image: {
    width: width * 0.84,
    height: width * 0.84,
    borderRadius:10
  },
});
