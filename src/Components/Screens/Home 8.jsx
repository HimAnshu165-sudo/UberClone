import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import image from '../assets/homeImage2.png'
const {width,height} = Dimensions.get('screen')
const Home8 = () => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image}/>
      <Text style={{fontWeight:"bold",fontSize:35}}>The Uber you know, reimagined for business</Text>
      <Text style={{fontSize:20,marginVertical:20}}>Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size.</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={{textAlign:"center",color:'white',fontSize:20}}>Get Started</Text>
      </TouchableOpacity>
      <Text style={{textDecorationLine:"underline",fontSize:18,color:"#6d6767ff",paddingVertical:height*0.024}}>
        Check out our solutions
      </Text>
    </View>
  );
};

export default Home8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f9f9f8ff',
    paddingVertical:height*0.055
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
    borderRadius:10,
    marginVertical:30
  },
});
