import { Text, View, Image, Pressable } from "react-native"
import { auth } from "../base"
import { gStyle } from "../styles/gStyle"
import {useNavigation} from '@react-navigation/core'

export default function Header() {
  const navigation=useNavigation()

 const exitHandler=()=>{
  auth
  .signOut()
  .then(()=>{
    navigation.replace('Login')
  })
  .catch(error => alert(error.message))
 }
  return (
<View style={gStyle.header}>
          <Text style={gStyle.headerText}>Добрый день, Андрей!</Text>
          <Pressable onPress={exitHandler}>
            {/* <Image
              source={require("../assets/gear.png")}
              style={gStyle.headerGear}
            /> */}
            <Text> Выйти</Text>
          </Pressable>
        </View>


  )}