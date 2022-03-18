import { Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState, useEffect } from "react"
import { styleSP } from "../styles/searchPeople"
import { gStyle } from "../styles/gStyle"
import GoBackBtn from "./GoBackBtn"
import Header from "./Header"
import ListSubjects from "./ListSubjects"
import Loading from "./Loading"
import * as firebase from "firebase"
import ListStudents from "./ListStudents"

export default function SeatchPeople(props) {
  const [user, setUser] = useState(props.route.params.user)
  const [teach, setTeach] = useState([])
  const [groups, setGroups] = useState([])
  const [students, setStudents] = useState([])
  const [subjsId, setSubjsId] = useState([])
  //   Если это препод, то ему выводится заголовок = Группа: и внизу список студентов. Пока они грузятся, должен показываться Loading
  const getSubjects = async () => {
    const teachersRef = firebase.database().ref("subjects/")
    const arr = []
    await teachersRef.on("child_added", function (data) {
      if (data.val().id_teach === user.id) arr.push(data.val().id)
    })
    setSubjsId(arr)
  }
  const getStudents = () => {
    const studentsRef = firebase.database().ref(`students/`)
    studentsRef.on("value", function (data) {
      setStudents(data.val().filter((item) => item))
    })
  }

  const getGroups = () => {
    const subjs = subjsId
    console.log(subjsId)
    let arr = []
    subjs.forEach((subj) => {
      const subjectsRef = firebase.database().ref(`subjects/${subj}`)
      subjectsRef.on("value", function (data) {
        arr = arr.concat(data.val().groups)
      })
    })
    arr = [...new Set(arr.sort())]
    const groupsRef = firebase.database().ref(`groups`)
    groupsRef.on("child_added", function (data) {
      if (arr.some((item) => data.val().id == item)) {
        setGroups((prev) => [data.val(), ...prev])
      }
    })
  }
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
      setTeach((prev) => [...prev, data.val()])
    })
  }

  const createTitle = () =>
    user?.isTeach ? "Список студентов" : "Список преподавателей"

  useEffect(() => {
    if (user?.isTeach) {
      if (subjsId.length <= 0) getSubjects()
      else {
        if (groups.length <= 0) getGroups()
        else {
          if (students.length <= 0) getStudents()
        }
      }
    } else {
      if (teach.length <= 0) {
        getTeacherIds().forEach((item) => {
          getTeachersObj(item)
        })
      }
    }
  })
  return (
    <View style={gStyle.container}>
      <LinearGradient
        colors={["#3F70A8", "#4B84C5", "#4F8BD0"]}
        style={gStyle.gradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: -1 }}
      >
        {teach.length > 0 || students.length > 0 ? (
          <>
            <Header user={user} />
            <View style={gStyle.wrapperPadding}>
              <GoBackBtn goBack={() => props.navigation.goBack()} />
              <Text style={[gStyle.H4, styleSP.searchText]}>
                {createTitle()}:
              </Text>
              {!user.isTeach ? (
                <ListSubjects
                  data={teach}
                  navigate={(teacher) =>
                    props.navigation.navigate("ProfilTeacher", {
                      teacher,
                      user,
                    })
                  }
                  theme="light"
                />
              ) : (
                <ListStudents
                  groups={groups}
                  students={students}
                  theme="light"
                  navigate={(student) =>
                    props.navigation.navigate("ProfilStudent", {
                      student,
                    })
                  }
                />
              )}
            </View>
          </>
        ) : (
          <Loading />
        )}
      </LinearGradient>
    </View>
  )
}
