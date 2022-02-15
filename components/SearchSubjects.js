import { Text, View, Image, Pressable } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { stylePT } from "../styles/profilTeacher"
import { FlatList, TextInput } from "react-native-web"
import { gStyle } from "../styles/gStyle"
import { symbolicateLogLazy } from "react-native/Libraries/LogBox/Data/LogBoxData"
import ListSubjects from "./ListSubjects"
import GoBackBtn from "./GoBackBtn"
import Header from "./Header"
export default function SearchSubjects() {
  return (
    <View style={gStyle.container}>
      <LinearGradient
        colors={["#3F70A8", "#4B84C5", "#4F8BD0"]}
        style={gStyle.gradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: -1 }}
      >
        <Header />
        <View>
          <GoBackBtn/>
          
        </View>
      </LinearGradient>
    </View>
  )
}
