import {
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState, useEffect } from "react"
import { styleSP } from "../styles/searchPeople"
import { gStyle } from "../styles/gStyle"
import GoBackBtn from "./GoBackBtn"
import Header from "./Header"
import ListSubjects from "./ListSubjects"
import { Loading } from "./Loading"
import * as firebase from "firebase"

export default function SeatchPeople(props) {
  const [user, setUser] = useState(props.route.params.user)
  const [teachers, setTeachers] = useState([])
  //   Если это препод, то ему выводится заголовок = Группа: и внизу список студентов. Пока они грузятся, должен показываться Loading
  const getforTeachersList = () => {}
  const getTeacherIds = () => {
    const teachersRef = firebase.database().ref("subjects/")
    let arr = []

    teachersRef.on("child_added", function (data) {
      if (data.val().groups.some((item) => user.id_group == item)) {
        arr.push(data.val().id_teach)
      }
    })
    return [...new Set(arr.sort())]
  }

  const getTeachersObj = (id) => {
    const teachersRef = firebase.database().ref(`teachers/${id}`)
    teachersRef.on("value", function (data) {
      setTeachers((prev) => [...prev, data.val()])
    })
  }
  useEffect(() => {
    if (teachers.length <= 0)
      getTeacherIds().forEach((item) => {
        getTeachersObj(item)
      })
  })

  return (
    <View style={gStyle.container}>
      <LinearGradient
        colors={["#3F70A8", "#4B84C5", "#4F8BD0"]}
        style={gStyle.gradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: -1 }}
      >
        <Header user={user} />
        <View style={gStyle.wrapperPadding}>
          <GoBackBtn goBack={() => props.navigation.goBack()} />
          <Text style={[gStyle.H4, styleSP.searchText]}>
            Список преподавателей:
          </Text>
          <ListSubjects
            data={teachers}
            navigate={(teacher) =>
              props.navigation.navigate("ProfilTeacher", { teacher, user })
            }
            theme="light"
          />
        </View>
      </LinearGradient>
    </View>
  )
}
