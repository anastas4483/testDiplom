import { Text, View, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { styleLogin } from "../styles/login"

import Form from "./Form"
import { TextInput } from "react-native-web"
export default function Login() {
  return (
    <View style={styleLogin.container}>
      <LinearGradient
        colors={["#3F70A8", "#4B84C5", "#4F8BD0"]}
        style={styleLogin.gradient}
      >
        <View style={[styleLogin.loginCircle, styleLogin.loginCircleTop]}>
          <View style={styleLogin.loginWrapLogo}>
            <Image
              style={styleLogin.loginLogo}
              source={require("../assets/2408025.png")}
            />
            <Text style={styleLogin.loginTitle}>
              Портал справочной {"\n"} информации для {"\n"}студентов {"\n"}ВГТУ
              СПК
            </Text>
          </View>
        </View>
        <View style={styleLogin.loginForm}>
          <Text style={styleLogin.loginH1}>Добрый день!</Text>
          <Text style={styleLogin.loginH3}>Давайте сначала {"\n"}авторизуемся</Text>
          <Form />
        </View>
        {/* <View style={styleLogin.loginWrapBottom}> */}
          <View style={[styleLogin.loginCircle, styleLogin.loginCircleBottom]}></View>
          <Text style={styleLogin.loginCopy}>
            &#169; 2022 ФГБОУ ВО «ВГТУ».{"\n"} Все права защищены
          </Text>
        {/* </View> */}
      </LinearGradient>
    </View>
  )
}
