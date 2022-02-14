import { StatusBar } from "expo-status-bar"
import { Platform, StyleSheet, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import AppLoading from "expo-app-loading"
import * as Font from "expo-font"
import { useState } from "react"
import { gStyle } from "./styles/login"

import Login from "./components/Login"
import PersRoom from './components/PersRoom'

export default function App() {
  const [font, setFont] = useState(false)

  const fonts = () =>
    Font.loadAsync({
      'os_reg': require("./assets/fonts/OpenSans-Regular.ttf"),
      'sansat_light': require("./assets/fonts/sansation-light.ttf"),
      'sanst_reg' : require('./assets/fonts/Sansation_Regular.ttf')
    })

  if (font) {
    return <PersRoom />
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
