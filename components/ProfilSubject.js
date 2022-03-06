import { Text, View, Image, Pressable, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState, useEffect } from "react"
import { stylePS } from "../styles/profilSubject"
import { Button, FlatList, TextInput } from "react-native-web"
import { gStyle } from "../styles/gStyle"
import GoBackBtn from "./GoBackBtn"
import Header from "./Header"
import Loading from "./Loading"
import * as firebase from "firebase"

export default function ProfilSubject(props) {
  const [user, setUser] = useState(props.route.params.user)
  const [item, setItem] = useState(props.route.params.item)
  const [teacher, setTeacher] = useState({})

  useEffect(() => {
    const teachersRef = firebase.database().ref("teachers/")
    teachersRef
      .orderByChild("id")
      .equalTo(item.id_teach)
      .on("child_added", function (data) {
        setTeacher(data.val())
      })
  }, [])

console.log(teacher);
  if (teacher && item) {
    return (
      <View style={gStyle.container}>
        <LinearGradient
          colors={["#3F70A8", "#4B84C5", "#4F8BD0"]}
          style={gStyle.gradient}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: -1 }}
        >
          <Header user={user} />
          <GoBackBtn goBack={() => props.navigation.goBack()} />
          <View style={stylePS.wrap}>
            <Text style={[gStyle.H3, stylePS.nameSubject]}>{item.name}</Text>
            <View style={stylePS.infoSubject}>
              <View style={stylePS.wrapRow}>
                <Text style={stylePS.character}>Преподаватель: </Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate('ProfilTeacher',{teacher,user})}>
                  <Text style={[stylePS.value, stylePS.valueTeacher]}>
                  {teacher.short_name}
                </Text>
                </TouchableOpacity>
                
              </View>
              <View style={stylePS.wrapRow}>
                <Text style={stylePS.character}>Продолжительность:</Text>
                <Text style={stylePS.value}>{item.duration}ч</Text>
              </View>
              <View style={stylePS.wrapRow}>
                <Text style={stylePS.character}>Тип сдачи: </Text>
                <Text style={stylePS.value}>{item.type_of_delivery}</Text>
              </View>
              <View style={stylePS.timetable}>
                <Text style={stylePS.timetableTitle}>График занятий</Text>
                <View style={stylePS.row}>
                  <Text style={stylePS.tableTitle}>Лекции:</Text>
                  <Text style={stylePS.cabinet}>401каб</Text>
                </View>
                <View style={stylePS.row}>
                  <Text style={stylePS.tableText}>чт - 12:00, пт - 10:15</Text>
                </View>
                <View style={stylePS.row}>
                  <Text style={stylePS.tableTitle}>Практические:</Text>
                  <Text style={stylePS.cabinet}>107каб</Text>
                </View>
                <View style={stylePS.row}>
                  <Text style={stylePS.tableText}>
                    1подгр: пт - 12:00 (1,3,5,7,9 нед.)
                  </Text>
                </View>
                <View style={stylePS.row}>
                  <Text style={stylePS.tableText}>
                    2подгр: пт - 12:00 (2,4,6,8,10 нед.)
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={stylePS.button}
                onPress={() => console.log("ff")}
              >
                <Text style={stylePS.buttonText}>перейти в радел заданий</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    )
  } else {
    <Loading />
  }
}
