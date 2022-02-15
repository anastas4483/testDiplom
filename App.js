import { StatusBar } from "expo-status-bar"
import { Platform, StyleSheet, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import AppLoading from "expo-app-loading"
import * as Font from "expo-font"
import { useState } from "react"
import { gStyle } from "./styles/login"
import { LogBox } from 'react-native';


LogBox.ignoreLogs(['Remote debugger']);

import Login from "./components/Login"
import PersRoom from './components/PersRoom'
import ProfilTeacher from "./components/ProfilTeacher"
import SearchSubjects from "./components/SearchSubjects"

export default function App() {
  const [font, setFont] = useState(false)

  const fonts = () =>
    Font.loadAsync({
      'os_reg': require("./assets/fonts/OpenSans-Regular.ttf"),
      'sansat_light': require("./assets/fonts/sansation-light.ttf"),
      'sansat_reg' : require('./assets/fonts/Sansation_Regular.ttf')
    })

  if (font) {
    return <SearchSubjects />
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
