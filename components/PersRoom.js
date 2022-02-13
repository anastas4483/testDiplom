import { Text, View, Image,  Pressable, ImageBackground } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { stylePers } from "../styles/persRoom"
import { gStyle } from "../styles/gStyle"


export default function Login() {
  const onPressHandler = () => {
    console.log("click")
  }
  return (
    <View style={gStyle.container}>
      <LinearGradient
        colors={["#3F70A8", "#4B84C5", "#4F8BD0"]}
        style={[gStyle.gradient, { paddingTop: 0 }]}
      >
        <View style={stylePers.persHeader}>
          <Text style={stylePers.persHeaderText}>Добрый день, Андрей!</Text>
          <Pressable onPress={onPressHandler}>
            <Image
              source={require("../assets/gear.png")}
              style={stylePers.persHeaderGear}
            />
          </Pressable>
        </View>

        <View style={stylePers.persWrap}>
          <View style={stylePers.persNots}>
            <View style={stylePers.persNotsList}>

            </View>
           <Pressable onPress={()=> console.log('mfsm')} style={stylePers.persNotsWrapButton}>
              {/* <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} colors={["#5A8FF8",  '#6695F6',"#4A81F0","#386CD2",]} style={stylePers.persNotsButton}> */}
              <ImageBackground source={ require("../assets/prersBgButton.png" ) } imageStyle={stylePers.persBGImage} style= {[{width: '100%', height: '100%', }, stylePers.persBGImage]} >
                <Text style={stylePers.persNotsButtonText}>
                Показать все...
              </Text>
              </ImageBackground>
            {/* </LinearGradient> */}
            </Pressable>
            
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}
