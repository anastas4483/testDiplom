import {
  Text,
  View,
  Image,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState, useEffect } from "react"
import { styleLogin } from "../styles/login"
import Form from "./Form"
import { gStyle } from "../styles/gStyle"
import { useNavigation } from "@react-navigation/core"
import * as firebase from "firebase"
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login(props) {
  const [login, setLogin] = useState("")
  const [pass, setPass] = useState("")
  const [isSelected, setSelection] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {

  })

  const setData = async (key,value) => {
    try {
      await AsyncStorage.setItem(`@${key}`, value)
    } catch (e) {
      console.log('set item was failed');
    }
  }

  const signIn= async (user)=>{
    navigation.navigate('Home', {user, isTeach: isSelected})
    setData('user', JSON.stringify(user))
await props.route.params.addUser(user)

  }
  const GoToPRBtnOnPressHandler = (e) => {
   
    if (!isSelected) {
      const studentsRef = firebase.database().ref("students/")
      studentsRef
        .orderByChild("login")
        .equalTo(login)
        .on("child_added", function (data) {
          if (data.val().pass === pass)  signIn(data.val())

        })
    } else {
      const teachersRef = firebase.database().ref("teachers/")
      teachersRef
        .orderByChild("login")
        .equalTo(login)
        .on("child_added", function (data) {
          if (data.val().pass === pass) signIn(data.val())
        })
    }
  }
  return (
    <LinearGradient
      colors={["#3F70A8", "#4B84C5", "#4F8BD0"]}
      style={gStyle.gradient}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: -1 }}
    >
      <View style={[gStyle.circle, styleLogin.loginCircleTop]}>
        <View style={styleLogin.loginWrapLogo}>
          <Image
            style={styleLogin.loginLogo}
            source={require("../assets/2408025.png")}
          />
          <Text style={styleLogin.loginTitle}>
            Портал справочной{"\n"}информации для{"\n"}студентов
          </Text>
        </View>
      </View>
      <View style={styleLogin.loginForm}>
        <Text style={gStyle.H1}>Добрый день!</Text>
        <Text style={gStyle.H2}>Давайте сначала {"\n"}авторизуемся</Text>
        <Form
          setLogin={setLogin}
          setPass={setPass}
          GoToPRBtnOnPressHandler={GoToPRBtnOnPressHandler}
          isSelected={isSelected}
          setSelection={setSelection}
        />
      </View>
      <View style={[gStyle.circle, styleLogin.loginCircleBottom]}></View>
      <Text style={styleLogin.loginCopy}>
        &#169; 2022 University of Воронеж.{"\n"} Все права защищены
      </Text>
    </LinearGradient>
  )
}
