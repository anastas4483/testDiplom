import { Text, View, Image, Touchable, Pressable } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { stylePers } from "../styles/persRoom"
import { gStyle } from "../styles/gStyle"

import Form from "./Form"
import {
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-web"
export default function Login() {
  const onPressHandler = () => {
    console.log("click")
  }
  return (
    <View style={gStyle.container}>
      <LinearGradient
        colors={["#3F70A8", "#4B84C5", "#4F8BD0"]}
        style={[gStyle.gradient, { paddingTop: 0 }]}
      >
        <View style={stylePers.persHeader}>
          <Text style={stylePers.persHeaderText}>Добрый день, Андрей!</Text>
          <Pressable onPress={onPressHandler}>
              <Image
                source={require("../assets/gear.png")}
                style={stylePers.persHeaderGear}
              />
          </Pressable>

        </View>
      </LinearGradient>
    </View>
  )
}
