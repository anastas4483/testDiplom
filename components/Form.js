import { View, TextInput, Pressable, Text, Button } from "react-native"
import Checkbox from "expo-checkbox"
import { LinearGradient } from "expo-linear-gradient"
import AppLoading from "expo-app-loading"
import * as Font from "expo-font"
import { useState } from "react"
import { styleLogin } from "../styles/login"
import { BoxShadow } from "react-native-shadow"
export default function Form(props) {
  return (
    <View style={styleLogin.loginFormWrap}>
      <TextInput
        placeholderTextColor="#B1CBE8"
        onChangeText={(text) => props.setLogin(text.trim())}
        style={styleLogin.loginInput}
        placeholder="Ваш логин"
      />
      <TextInput
        placeholderTextColor="#B1CBE8"
        onChangeText={(text) => props.setPass(text)}
        style={styleLogin.loginInput}
        secureTextEntry
        placeholder="Ваш пароль"
      />
      <View style={{ flexDirection: "row" }}>
        <Checkbox
          color="#ccc"
          disabled={false}
          value={props.isSelected}
          onValueChange={props.setSelection}
        />

        <Text style={styleLogin.checkboxText}>Я преподаватель{"\n"}</Text>
      </View>
      <Pressable
        style={styleLogin.loginButton}
        onPress={props.GoToPRBtnOnPressHandler}
      >
        <Text style={styleLogin.loginButtonText}>Войти</Text>
      </Pressable>
    </View>
  )
}
