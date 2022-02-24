import { StatusBar } from "expo-status-bar"
import { Platform, StyleSheet, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import AppLoading from "expo-app-loading"
import { gStyle } from "./styles/login"
import { LogBox } from "react-native"
import useFonts from './hooks/useFonts';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react'

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs(["Remote debugger"])

import Login from "./components/Login"
import PersRoom from "./components/Home"
import ProfilTeacher from "./components/ProfilTeacher"
import ProfilSubject from "./components/ProfilSubject"
import SeatchSubject from "./components/SearchSubject"
import base from "./base"

export default class App extends React.Component {
  state = {
    font: false,
    list: [
      { name: "Периферийные усройства", group: 1, id: 1, teacher: 1 },
      { name: "ТО и обслуживание ПК", group: 1, id: 2, teacher: 1 },
      { name: "Программирование Delphi", group: 2, id: 3, teacher: 2 },
      { name: "Физическая культура", group: 1, id: 4, teacher: 2 },
      { name: "Микропроцессорные системы", group: 1, id: 5, teacher: 3 },
      { name: "САПР", group: 2, id: 6, teacher: 3 },
    ],
  }


  componentDidMount(){
    console.log('mount')
  }

  fonts = async () => await useFonts();
  render() {
    if (this.state.font) {
      // return <SeatchSubject data={this.state.list} />
      return (
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="Home" options={{headerShown: false}} component={PersRoom} />

      </Stack.Navigator>
    </NavigationContainer>
    // <Login/>
      )
    } 
      return (
        <AppLoading
          startAsync={this.fonts}
          onFinish={() => this.setState({font:true})}
          onError={console.warn}
        />
      )
    
  }
}
