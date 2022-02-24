import {  View, TextInput,Pressable, Text, Button,TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import AppLoading from "expo-app-loading"
import * as Font from "expo-font"
import { useState } from "react"
import { styleLogin } from "../styles/login"
import {BoxShadow} from 'react-native-shadow'
export default function Form(props) {
  
  
 
  return (
    <View style={styleLogin.loginFormWrap}>
      <TextInput placeholderTextColor="#B1CBE8" onChangeText={(text)=>props.setLogin(text)}  style={styleLogin.loginInput} placeholder="Ваш логин"/>
      <TextInput placeholderTextColor="#B1CBE8" onChangeText={(text)=>props.setPass(text)} style={styleLogin.loginInput} secureTextEntry placeholder="Ваш пароль"/>
      {/* <Button title="Войти" color= '#fff' style={styleLogin.loginButton}/> */}
     
      {/* <BoxShadow setting={shadowOpt}>  */}
      <Pressable style={styleLogin.loginButton} onPress={props.GoToPRBtnOnPressHandler}>
          <Text style={styleLogin.loginButtonText}>
              Войти
          </Text>
      </Pressable>

     
      {/* </BoxShadow> */}
    </View>
  )
}
