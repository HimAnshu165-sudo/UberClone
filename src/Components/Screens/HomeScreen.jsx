import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home1 from './Home1'
import Home2 from './Home2'
import Home3 from './Home3'
import Home4 from './Home4'
import Home5 from './Home5'
import Home6 from './Home6'
import Home7 from './Home7'
import Home8 from './Home 8'
const HomeScreen = () => {
  return (
    <>
    <ScrollView>
       <Home1/>
       <Home2/>
       <Home3/>
       <Home4/>
       <Home5/>
       <Home6/>
       <Home7/>
       <Home8/>
    </ScrollView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})