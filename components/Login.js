import { Text, View, Image,KeyboardAvoidingView, ScrollView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState, useEffect } from "react"
import { styleLogin } from "../styles/login"
import Form from "./Form"
import { gStyle } from "../styles/gStyle"
import { auth } from "../base"
import {useNavigation} from '@react-navigation/core'


export default function Login() {

  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')
const navigation=useNavigation()

  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(user=>{
      if(user){
        navigation.navigate("Home")
      }
    })
    return unsubscribe
  },[])
  const hanldeLogin=(e)=>{
    auth
    .signInWithEmailAndPassword(login,pass)
    .then(userCredentials=>{
          const user=userCredentials.user
          console.log(user.email);
        })
        .catch(error=> alert(error.message))
  }
  // const handleSignUp=()=>{
  //   auth
  //   .createUserWithEmailAndPassword(login,pass)
  //   .then(userCredentials=>{
  //     const user=userCredentials.user
  //     console.log(user.login);
  //   })
  //   .catch(error=> alert(error.message))
  // }
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
          <Form setLogin={setLogin} setPass={setPass} GoToPRBtnOnPressHandler={hanldeLogin}/>
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
