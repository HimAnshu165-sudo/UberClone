import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import inventory from '../assets/inventory.png';
import clock from '../assets/clock.png';
import box from '../assets/box.png';
const { width, height } = Dimensions.get('screen');

const Home5 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text
          style={{
            fontSize: width * 0.056,
            fontWeight: 'bold',
            marginBottom: height * 0.03,
          }}
        >
          Benefits
        </Text>

        <View style={styles.innerCard}>
          <View style={styles.item}>
            <Image
              source={inventory}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.text}>
              Choose your exact pickup time up to 90 days in advance.
            </Text>
          </View>
          <View style={styles.item}>
            <Image source={clock} style={styles.image} resizeMode="contain" />
            <Text style={styles.text}>
              Extra wait time included to meet your ride.
            </Text>
          </View>
          <View style={styles.item}>
            <Image source={box} style={styles.image} resizeMode="contain" />
            <Text style={styles.text}>
              Cancel at no charge up to 60 minutes in advance.
            </Text>
          </View>
        </View>
        <TouchableOpacity>
            <Text style={{textDecorationLine:"underline",fontSize:18,color:"#6e6868ff"}}>See Terms</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f9f9f8ff',
  },
  card: {
    padding: 15,
    backgroundColor: '#f1f1f1ff',
    borderRadius: width * 0.03,
  },
  innerCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: height * 0.035,
    paddingBottom:height*0.03
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: width*0.04,
    paddingRight: width * 0.06,
  },
  image: {
    width: width * 0.06,
    height: width * 0.06,
  },
  text: {
    fontSize: width * 0.04,
    fontWeight: '500',
    borderBottomWidth: width*0.001,
    borderBottomColor: '#c9c0c0ff',
    paddingBottom: height * 0.015,
    width:width*0.7
  },
});
