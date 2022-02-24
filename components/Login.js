import { Text, View, Image,KeyboardAvoidingView, ScrollView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { styleLogin } from "../styles/login"
import Form from "./Form"
import { gStyle } from "../styles/gStyle"
export default function Login() {

  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')


  const GoToPRBtnOnPressHandler=(e)=>{
    console.log(login,pass)
  }
    return (
      <LinearGradient
        colors={["#3F70A8", "#4B84C5", "#4F8BD0"]}
        style={gStyle.gradient}
        start={{x: 0, y: 1}} end={{x: 0, y: -1}}
      >
        <View style={[gStyle.circle, styleLogin.loginCircleTop]}>
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
          <Text style={gStyle.H1}>Добрый день!</Text>
          <Text style={gStyle.H2}>Давайте сначала {"\n"}авторизуемся</Text>
          <Form setLogin={setLogin} setPass={setPass} GoToPRBtnOnPressHandler={GoToPRBtnOnPressHandler}/>
        </View>
        {/* <View style={styleLogin.loginWrapBottom}> */}
          <View style={[gStyle.circle, styleLogin.loginCircleBottom]}></View>
          <Text style={styleLogin.loginCopy}>
            &#169; 2022 ФГБОУ ВО «ВГТУ».{"\n"} Все права защищены
          </Text>
        {/* </View> */}
      </LinearGradient>
  )
}
