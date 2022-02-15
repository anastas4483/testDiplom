import {  View, TextInput,Pressable, Text, Button,TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import AppLoading from "expo-app-loading"
import * as Font from "expo-font"
import { useState } from "react"
import { styleLogin } from "../styles/login"
import {BoxShadow} from 'react-native-shadow'
export default function Form() {

    const shadowOpt = {
        height: 55,
        width: 180,
        color:"#000",
        border: 3,
        radius:30,
       
        opacity:0.25,
        x:4,
        y:5,
        style:{ 
            borderRadius:20,
            marginVertical:10,
        }
    }
  return (
    <View style={styleLogin.loginFormWrap}>
      <TextInput placeholderTextColor='#fff' style={styleLogin.loginInput} placeholder="Ваш логин"/>
      <TextInput placeholderTextColor='#fff' style={styleLogin.loginInput} placeholder="Ваш пароль"/>
      {/* <Button title="Войти" color= '#fff' style={styleLogin.loginButton}/> */}
     
      {/* <BoxShadow setting={shadowOpt}>  */}
      <TouchableOpacity style={styleLogin.loginButton}>
          <Text style={styleLogin.loginButtonText}>
              Войти
          </Text>
      </TouchableOpacity>

     
      {/* </BoxShadow> */}
    </View>
  )
}
