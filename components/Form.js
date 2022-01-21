import {  View, TextInput,Pressable, Text, Button } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import AppLoading from "expo-app-loading"
import * as Font from "expo-font"
import { useState } from "react"
import { gStyle } from "../styles/style"
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
    <View style={gStyle.loginFormWrap}>
      <TextInput placeholderTextColor='#fff' style={gStyle.loginInput} placeholder="Ваш логин"/>
      <TextInput placeholderTextColor='#fff' style={gStyle.loginInput} placeholder="Ваш пароль"/>
      {/* <Button title="Войти" color= '#fff' style={gStyle.loginButton}/> */}
     
      {/* <BoxShadow setting={shadowOpt}>  */}
      <Pressable style={gStyle.loginButton}>
          <Text style={gStyle.loginButtonText}>
              Войти
          </Text>
      </Pressable>

     
      {/* </BoxShadow> */}
    </View>
  )
}
