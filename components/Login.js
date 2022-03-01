import {
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState, useEffect } from "react"
import { styleLogin } from "../styles/login"
import Form from "./Form"
import { gStyle } from "../styles/gStyle"
import { auth } from "../base"
import { useNavigation } from "@react-navigation/core"
import { query, where, orderBy } from "firebase/firestore"
import * as firebase from "firebase"
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login(props) {
  const [login, setLogin] = useState("")
  const [pass, setPass] = useState("")
  const [isSelected, setSelection] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    // ПЕРЕАДРИСОВВКА ДОМОЙ
    // const unsubscribe=auth.onAuthStateChanged(user=>{
    //   if(user){
    //     navigation.navigate("Home")
    //   }
    // })
    // return unsubscribe
    // console.log(props.route.params)

  })

  const setData = async (key,value) => {
    try {
      await AsyncStorage.setItem(`@${key}`, value)
    } catch (e) {
      // saving error
      console.log('set item was failed');
    }
  }

  const signIn= async (user)=>{
    navigation.navigate('Home', {user, isTeach: isSelected})
    setData('user', JSON.stringify(user))
await props.route.params.addUser(user)

    // localStorage.setItem('isTeach', isTeach*1)
    // localStorage.setItem('user', user.id)
  }
  const GoToPRBtnOnPressHandler = (e) => {
    // for (let i = 0; i < sampleObj.length; i++) {
    //   let acc = sampleObj[i]
    //   if (acc.login === input_login) {
    //     p_login.classList.add("hide")
    //     p_login.classList.remove("show")
    //     if (acc.password == password) {
    //       signin(acc, () => navigate("/", { replace: true }))
    //       // break
    //     }
    //     p_pass.classList.add("show")
    //     break
    //   } else {
    //     p_login.classList.remove("hide")
    //     p_login.classList.add("show")
    //   }
    // }
   
    if (!isSelected) {
      const studentsRef = firebase.database().ref("students/")
      studentsRef
        .orderByChild("login")
        .equalTo(login)
        .on("child_added", function (data) {
          console.log("Start at filter: " + data.val().name)
          if (data.val().pass === pass)  signIn(data.val())

        })
    } else {
      const teachersRef = firebase.database().ref("teachers/")
      // const populationQuery = teachersRef.where("login", "==", login);
      // console.log(populationQuery)
      teachersRef
        .orderByChild("login")
        .equalTo(login)
        .on("child_added", function (data) {
          console.log("Start at filter: " + data.val().full_name)
          if (data.val().pass === pass) signIn(data.val())
          // if (data.val().pass === pass) console.log(data.val())
        })
    }
  }

  // const q = query(firebase.database().ref(`/students`), where("login", ">", 100000), orderBy("population"));

  // ---- Вход по емаил в firebase
  // const hanldeLogin=(e)=>{
  //   auth
  //   .signInWithEmailAndPassword(login,pass)
  //   .then(userCredentials=>{
  //         const user=userCredentials.user
  //         console.log(user.email);
  //       })
  //       .catch(error=> alert(error.message))
  // }

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
            Портал справочной {"\n"} информации для {"\n"}студентов {"\n"}ВГТУ
            СПК
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
      {/* <View style={styleLogin.loginWrapBottom}> */}
      <View style={[gStyle.circle, styleLogin.loginCircleBottom]}></View>
      <Text style={styleLogin.loginCopy}>
        &#169; 2022 ФГБОУ ВО «ВГТУ».{"\n"} Все права защищены
      </Text>
      {/* </View> */}
    </LinearGradient>
  )
}
