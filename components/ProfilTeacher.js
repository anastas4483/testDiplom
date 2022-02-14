import { Text, View, Image, Pressable } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { stylePT } from "../styles/profilTeacher"
import { TextInput } from "react-native-web"
import { gStyle } from "../styles/gStyle"
import { symbolicateLogLazy } from "react-native/Libraries/LogBox/Data/LogBoxData"
export default function ProfilTeacher() {
  return (
    <View style={gStyle.container}>
      <LinearGradient
        colors={["#3F70A8", "#4B84C5", "#4F8BD0"]}
        style={gStyle.gradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: -1 }}
      >
        <View style={gStyle.persHeader}>
          <Text style={gStyle.headerText}>Добрый день, Андрей!</Text>
          <Pressable>
            <Image
              source={require("../assets/gear.png")}
              style={gStyle.persHeaderGear}
            />
          </Pressable>
        </View>
        <View style={stylePT.wrap}>
          <View style={stylePT.wrapBack}>
            <Image
              source={require("../assets/backArrow.png")}
              style={{ width: 27, height: 24 }}
            />
            <Text style={stylePT.BackText}>Назад</Text>
          </View>
          <View style={stylePT.wrapInfo}>
              <View style={stylePT.wrapNamePhoto}> 
                  <Image source={require('../assets/paretskikhEV.jpg')} style={{width: 110,height: 110}}/>
              <View style={stylePT.wrapContacts}>
                  <Text  style={stylePT.nameInfo}>Парецких{'\n'}Елена Викторовна</Text>
                  <Text style={stylePT.mailInfo}>elenaparetskih@gmail.com</Text>
                  <View style={stylePT.wrapSoc}>
                      <Image source={require('../assets/vk.png')} style={{width: 34, height: 34}} />
                      <Image source={require('../assets/discord.png')} style={{width: 34, height: 34}} />
 
                  </View>
              </View>
              
              </View>
              
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}
