import { Text, View, Image, Pressable } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { stylePT } from "../styles/profilTeacher"
import { gStyle } from "../styles/gStyle"
import { symbolicateLogLazy } from "react-native/Libraries/LogBox/Data/LogBoxData"
import ListSubjects from "./ListSubjects"
import GoBackBtn from "./GoBackBtn"
import Header from "./Header"
export default function ProfilTeacher(props) {
  return (
    <View style={gStyle.container}>
      <LinearGradient
        colors={["#3F70A8", "#4B84C5", "#4F8BD0"]}
        style={gStyle.gradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: -1 }}
      >
        <Header/> 
        <GoBackBtn/>
        <View style={stylePT.wrap}>
         
          <View style={stylePT.wrapInfo}>
            <View style={stylePT.wrapNamePhoto}>
              <Image
                source={require("../assets/paretskikhEV.jpg")}
                style={{ width: 110, height: 110 }}
              />
              <View style={stylePT.wrapContacts}>
                <Text style={[gStyle.H3, stylePT.nameInfo]}>
                  Парецких{"\n"}Елена Викторовна
                </Text>
                <Text style={stylePT.mailInfo}>elenaparetskih@gmail.com</Text>
                <View style={stylePT.wrapSoc}>
                  <Image source={require("../assets/vk.png")} style={{ width: 34, height: 34 }}/>
                  <Image  source={require("../assets/discord.png")} style={{ width: 34, height: 34 }} />
                </View>
              </View>
              
            </View>
            <View style={stylePT.SubjectsWrap}>
                <Text style={[gStyle.H3,stylePT.subjectH3]}>Ваши дисциплины:</Text>
                <ListSubjects data={props.data}/>
              </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}
