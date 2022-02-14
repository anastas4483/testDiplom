import { Text, View, Image, Pressable } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"

import { TextInput } from "react-native-web"
import { gStyle } from "../styles/gStyle"
export default function ProfilTeacher() {
  return (
    <View style={gStyle.container}>
      <LinearGradient
        colors={["#3F70A8", "#4B84C5", "#4F8BD0"]}
        style={gStyle.gradient}
        start={{x: 0, y: 1}} end={{x: 0, y: -1}}
      >
        <View style={gStyle.persHeader}>
          <Text style={gStyle.headerText}>Добрый день, Андрей!</Text>
          <Pressable>
            <Image
              source={require("../assets/gear.png")}
              style={gStyle.persHeaderGear}
            />
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  )
}
