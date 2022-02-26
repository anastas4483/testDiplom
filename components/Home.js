import { Text, View, Image, Pressable, ImageBackground } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useEffect, useState } from "react"
import { stylePers } from "../styles/persRoom"
import { gStyle } from "../styles/gStyle"
import Header from "./Header"

export default function Login(props) {
  const onPressHandler = () => {
    console.log("click")
  }
  const [user,setUser]=useState(props.route.params.user)
  const [isTeach,setIsTeach]=useState(props.route.params.isTeach)
  
  useEffect(()=>{
     
    })
  return (
    <View style={gStyle.container}>
      <LinearGradient
        colors={["#3F70A8", "#4B84C5", "#4F8BD0"]}
        style={[gStyle.gradient, { paddingTop: 0 }]}
        start={{x: 0, y: 1}} end={{x: 0, y: -1}}
      >
       <Header/>

        <View style={stylePers.persWrap}>
          <View style={[stylePers.persNots, stylePers.persLevels]}>
            <View style={stylePers.persNotsList}></View>
            <Pressable
              onPress={() => console.log("mfsm")}
              style={stylePers.persNotsWrapButton}
            >
              {/* <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} colors={["#5A8FF8",  '#6695F6',"#4A81F0","#386CD2",]} style={stylePers.persNotsButton}> */}
              <ImageBackground
                source={require("../assets/prersBgButton.png")}
                imageStyle={stylePers.persBGImage}
                style={[
                  { width: "100%", height: "100%" },
                  stylePers.persBGImage,
                ]}
              >
                <Text style={stylePers.persNotsButtonText}>
                  Показать все...
                </Text>
              </ImageBackground>
              {/* </LinearGradient> */}
            </Pressable>
          </View>
          <View style={[stylePers.persLevels,stylePers.wrapSearch]}>
            <View style={stylePers.wrapSearchTeacher}>
              <Text style={stylePers.searchTeacherText}>Список{'\n'}преподавателей</Text> 
              <Image source={require('../assets/magnifier.png')} style={stylePers.searchMagnifier}/>
            </View>
            <View style={stylePers.wrapSearchObject}>
              <Text style={stylePers.searchTeacherText}>Поиск {'\n'}предмета</Text> 
              <Image source={require('../assets/magnifier.png')} style={stylePers.searchMagnifier}/>
            </View>
          </View>
          <View  style={[stylePers.persLevels,stylePers.wrapCabinet]}>
          <ImageBackground
                source={require("../assets/persBGCabinet.png")}
                imageStyle={{borderRadius: 20}}
                style={[
                  { width: "100%", height: "100%" },
                  stylePers.persBGImage,
                ]}
              >
                <View style={stylePers.wrapSearchCabinet}>
                  <Text style={stylePers.WhereCabinet}>Где этот кабинет? :о</Text><Text style={stylePers.openMap}>Открыть карту</Text>
                  <Image source={require('../assets/mapPin.png')} style={stylePers.mapImg}/>
                </View>
                </ImageBackground>
          </View>

          <View style={[gStyle.circle, stylePers.wrapFAQ]}>
            <Text style={stylePers.textFAQ}> FAQ</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}
