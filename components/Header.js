import { Text, View, Image, Pressable, AsyncStorage } from "react-native"
import { auth } from "../base"
import { gStyle } from "../styles/gStyle"
import {useNavigation} from '@react-navigation/core'
// import AsyncStorage from"@react-native-community/async-storage"

import { useState } from "react"

export default function Header(props) {
  const navigation=useNavigation()
//  console.log(props.user)
  const [name,setName]=useState(props.user?.isTeach ? props.user.full_name.split(' ')[1] : props.user.name.split(' ')[1])

 
 const exitHandler=()=>{
  auth
  .signOut()
  .then(()=>{
    AsyncStorage.removeItem('@user')
    navigation.replace('Login')
  })
  .catch(error => alert(error.message))
 }
  return (
<View style={gStyle.header}>
          <Text style={gStyle.headerText}>Добрый день, {name}</Text>
          <Pressable onPress={exitHandler}>
            {/* <Image
              source={require("../assets/gear.png")}
              style={gStyle.headerGear}
            /> */}
            <Text> Выйти</Text>
          </Pressable>
        </View>


  )}