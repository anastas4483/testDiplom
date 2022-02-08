import { Text, View, Image, Touchable } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { stylePers } from "../styles/persRoom"

import Form from "./Form"
import { TextInput, TouchableWithoutFeedback } from "react-native-web"
export default function Login() {
  return (
    <View style={stylePers.container}>
      <LinearGradient
        colors={["#3F70A8", "#4B84C5", "#4F8BD0"]}
        style={stylePers.gradient}
      >
        <View style={stylePers.persHeader}>
        <Text>
          Добрый день, Андрей!
        </Text>
        <TouchableWithoutFeedback>
          <Image source={require("../assets/gear.png")} style={stylePers.persHeaderGear}/>
        </TouchableWithoutFeedback>
        </View>
        


      </LinearGradient>
    </View>
  )
}
