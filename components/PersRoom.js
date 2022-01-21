import { Text, View, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { gStyle } from "../styles/style"

import Form from "./Form"
import { TextInput } from "react-native-web"
export default function Login() {
  return (
    <View style={gStyle.container}>
      <LinearGradient
        colors={["#3F70A8", "#4B84C5", "#4F8BD0"]}
        style={gStyle.gradient}
      >
        
      </LinearGradient>
    </View>
  )
}
