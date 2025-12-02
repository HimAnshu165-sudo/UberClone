import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
const {width,height} = Dimensions.get('window')
export default function Home2() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 20 }}>
        Suggestions
      </Text>
      <View
        style={{
          backgroundColor: '#dbd7d7ff',
          borderRadius: width*0.03,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 17,
            display: 'flex',
            flexDirection: 'column',
            gap: width * 0.02,
            width: '60%',
          }}
        >
          <Text style={styles.text}>Ride</Text>
          <Text style={{ marginBottom: 7 }}>
            Go anywhere with Uber, Request a ride, hop in, and go
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: width*0.18,
              padding: 2,
              borderRadius: width*0.03,
            }}
          >
            <Text style={{ textAlign: 'center' }}>Details</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: '45%', paddingVertical: 15, paddingHorizontal: 17 }}
        >
          <Image
            source={{
              uri: 'https://imgs.search.brave.com/1pHley0PMry2txdozOE8K_e5e81ML_9G5K9ElRLYG1c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by95ZWxsb3ctdGF4/aS1jYWItdHJhbnNw/YXJlbnQtYmFja2dy/b3VuZF8xMzUzNTQ2/LTQ5Ny5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA',
            }}
            style={{ height: 100, width: 100, borderRadius: 10 }}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#dbd7d7ff',
          borderRadius: width*0.03,
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
        }}
      >
        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 17,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            width: '60%',
          }}
        >
          <Text style={styles.text}>Reserve</Text>
          <Text style={{ marginBottom: 7 }}>
            Reserve your ride in advance so you can relax on the day of you trip
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: '40%',
              padding: 2,
              borderRadius: 50,
            }}
          >
            <Text style={{ textAlign: 'center' }}>Details</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: '45%', paddingVertical: 15, paddingHorizontal: 17 }}
        >
          <Image
            source={{
              uri: 'https://imgs.search.brave.com/KCGqAdMFS_tINIIuoiRmSpJAuI8qN0sbVITMa_qpa-s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvaXNvbGF0ZWQt/dGF4aS1kZXNpZ25f/MTM0NC0xMzQuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw',
            }}
            style={{ height: 100, width: 100, borderRadius: 10 }}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#dbd7d7ff',
          borderRadius: width*0.03,
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
        }}
      >
        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 17,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            width: '60%',
          }}
        >
          <Text style={styles.text}>Intercity</Text>
          <Text style={{ marginBottom: 7 }}>
            Get Convinient, affordable outstation cabs anytime at your..
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: '40%',
              padding: 2,
              borderRadius: 10,
            }}
          >
            <Text style={{ textAlign: 'center' }}>Details</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: '45%', paddingVertical: 15, paddingHorizontal: 17 }}
        >
          <Image
            source={{
              uri: 'https://imgs.search.brave.com/mrxw-SoS-6CPevZasRuxnJb693PSWKjX2sVA4WP5-1U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzE0LzI5Lzcz/LzM2MF9GXzQxNDI5/NzMwM19zckZvMkwx/VTJjWjRBbm8wZVFy/OVBsYmY5S1l5SDB1/MC5qcGc',
            }}
            style={{ height: 100, width: 100, borderRadius: 10 }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f8ff',
    gap: width*0.04,
    padding:width * 0.06,
  },
  text: {
    fontSize: 19,
    fontWeight: '600',
  },
});
