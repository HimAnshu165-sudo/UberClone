import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View } from "react-native";
import HomeScreen from "./src/Components/Screens/HomeScreen";
import RideScreen from "./src/Components/Screens/RideScreen";
import NavBar from "./src/Components/Screens/NavBaar";
import Footer from './src/Components/Screens/footer'
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              backgroundColor: "#030303",
              width: 150,
            },
            drawerActiveTintColor: "#10B981",
            drawerInactiveTintColor: "#ccc",
            drawerPosition: 'right'

          }}
        >
          <Drawer.Screen name="Home" options={{ headerShown: false }}>
            {({ navigation }) => (
              <View style={{ flex: 1 }}>
                <NavBar navigation={navigation} /> 
                <HomeScreen />
                <Footer/>
              </View>
            )}
          </Drawer.Screen>

          <Drawer.Screen name="Ride" options={{ headerShown: false }}>
            {({ navigation }) => (
              <View style={{ flex: 1 }}>
                <NavBar navigation={navigation} /> 
                <RideScreen />
                <Footer/>
              </View>
            )}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
