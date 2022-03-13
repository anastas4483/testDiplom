import {
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
  AsyncStorage,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useEffect, useState, useContext } from "react"
import { stylePers } from "../styles/persRoom"
import { gStyle } from "../styles/gStyle"
import Header from "./Header"
import React from "react"

import { useNavigation } from "@react-navigation/core"

import { UserContext } from "../hooks/UserContext"
import Loading from "./Loading"
export default function Login(props) {
  const navigation = useNavigation()

  const { userVal } = useContext(UserContext)
  // console.log(userVal)
  const onPressHandler = () => {
    console.log("click")
  }
  const [user, setUser] = useState(null)
  // const [isTeach,setIsTeach]=useState(props.route.params.isTeach)

  // const [isTeach,setIsTeach]=useState(false)
  // const [user,setUser]=useState({})
  //     const login = await AsyncStorage.getItem('@user');
  //     if (login !== null) {
  //     setUser(login)
  //     }
  //    else{
  //        // navigate to the Login screen or any other screen
  // }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@user")
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {
      // error reading value
    }
  }
  useEffect(() => {
    //  if(!localStorage.getItem('user')) navigation.navigate('Login')
    getData().then((thing) => {
      if (thing !== undefined && !user) {
        setUser(thing)
      }
      if (!thing) navigation.navigate("Login")
      // setUser(thing)  // сохранили user в AsyncStorage. Зачем? лучше использовать контекст
    })
  })
  if (user) {
    return (
      <View style={gStyle.container}>
        <LinearGradient
          colors={["#3F70A8", "#4B84C5", "#4F8BD0"]}
          style={[gStyle.gradient, { paddingTop: 0 }]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: -1 }}
        >
          <Header user={user} />

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
            <View style={[stylePers.persLevels, stylePers.wrapSearch]}>
              <Pressable
                style={stylePers.wrapSearchTeacher}
                onPress={() => navigation.navigate("SearchPeople", { user })}
                // style={stylePers.wrapSearchObject}
              >
                <Text style={stylePers.searchTeacherText}>
                  Список{"\n"}
                  {user?.isTeach ? "студентов" : "преподавателей"}
                </Text>
                <Image
                  source={require("../assets/magnifier.png")}
                  style={stylePers.searchMagnifier}
                />
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("SearchSubject", { user })}
                style={stylePers.wrapSearchObject}
              >
                {/* <View  > */}
                <Text style={stylePers.searchTeacherText}>
                  Список {"\n"}предметов
                </Text>
                <Image
                  source={require("../assets/magnifier.png")}
                  style={stylePers.searchMagnifier}
                />
                {/* </View> */}
              </Pressable>
            </View>
            <View style={[stylePers.persLevels, stylePers.wrapCabinet]}>
              <ImageBackground
                source={require("../assets/persBGCabinet.png")}
                imageStyle={{ borderRadius: 20 }}
                style={[
                  { width: "100%", height: "100%" },
                  stylePers.persBGImage,
                ]}
              >
                <View style={stylePers.wrapSearchCabinet}>
                  <Text style={stylePers.WhereCabinet}>
                    Где этот кабинет? :о
                  </Text>
                  <Text style={stylePers.openMap}>Открыть карту</Text>
                  <Image
                    source={require("../assets/mapPin.png")}
                    style={stylePers.mapImg}
                  />
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
  } else {
    return <Loading />
  }
}
