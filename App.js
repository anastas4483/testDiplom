import { StatusBar } from "expo-status-bar"
import { Platform, StyleSheet, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import AppLoading from "expo-app-loading"
import * as Font from "expo-font"
import React, { useEffect, useState } from "react"
import { gStyle } from "./styles/login"
import { LogBox } from "react-native"

LogBox.ignoreLogs(["Remote debugger"])

import Login from "./components/Login"
import PersRoom from "./components/PersRoom"
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
    
  }

  fonts = () =>
    Font.loadAsync({
      os_reg: require("./assets/fonts/OpenSans-Regular.ttf"),
      sansat_light: require("./assets/fonts/sansation-light.ttf"),
      sansat_reg: require("./assets/fonts/Sansation_Regular.ttf"),
    })
  render() {
    if (this.state.font) {
      return <SeatchSubject data={list} />
    } else {
      return (
        <AppLoading
          startAsync={fonts}
          onFinish={() => setFont(true)}
          onError={console.warn}
        />
      )
    }
  }
}
