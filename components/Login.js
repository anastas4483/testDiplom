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
        <View style={[gStyle.loginCircle, gStyle.loginCircleTop]}>
          <View style={gStyle.loginWrapLogo}>
            <Image
              style={gStyle.loginLogo}
              source={require("../assets/2408025.png")}
            />
            <Text style={gStyle.loginTitle}>
              Портал справочной {"\n"} информации для {"\n"}студентов {"\n"}ВГТУ
              СПК
            </Text>
          </View>
        </View>
        <View style={gStyle.loginForm}>
          <Text style={gStyle.loginH1}>Добрый день!</Text>
          <Text style={gStyle.loginH3}>Давайте сначала {"\n"}авторизуемся</Text>
          <Form />
        </View>
        {/* <View style={gStyle.loginWrapBottom}> */}
          <View style={[gStyle.loginCircle, gStyle.loginCircleBottom]}></View>
          <Text style={gStyle.loginCopy}>
            &#169; 2022 ФГБОУ ВО «ВГТУ».{"\n"} Все права защищены
          </Text>
        {/* </View> */}
      </LinearGradient>
    </View>
  )
}
