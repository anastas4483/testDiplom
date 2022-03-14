import {
  Text,
  View,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState, useEffect } from "react"
import { styleSP } from "../styles/searchPeople"
import { gStyle } from "../styles/gStyle"
import GoBackBtn from "./GoBackBtn"
import Header from "./Header"
import ListSubjects from "./ListSubjects"
import Loading from "./Loading"
import * as firebase from "firebase"

export default function SeatchPeople(props) {
  const [user, setUser] = useState(props.route.params.user)
  const [teach, setTeach] = useState([])
  const [groups, setGroups] = useState([])
  const [students,setStudents]=useState([])
  //   Если это препод, то ему выводится заголовок = Группа: и внизу список студентов. Пока они грузятся, должен показываться Loading
  const getSubjects = () => {
    const subjectsRef = firebase.database().ref("subjects/")
    let arr = []

    subjectsRef
      .orderByChild("id_teach")
      .equalTo(user.id)
      .on("child_added", function (data) {
        arr.push(data.val().id)
      })

    return arr
  }

  const getGroups = async () => {
    const subjs = getSubjects()
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
        setGroups((prev) => [...prev, data.val()])
      }
    })
  }

  const getStudents = (group) => {
    const studentsRef = firebase.database().ref(`students/`)
    studentsRef
    .orderByChild("id_group")
      .equalTo(group)
    .on("child_added", function (data) {
      // if (groups.some((item) => data.val().id_group === item)) {
        setStudents((prev) => [...prev, data.val()])
      // }
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

  const createTitle=()=>{
    if(user?.isTeach){
      if(students.length>0) return 'Список студентов'
      else if(groups.length>0 && students.length<=0) return 'Выберите группу'
    }else{
      return 'Список преподавателей'
    }
  }
  useEffect(() => {
    if (user?.isTeach) {
      if (groups.length <= 0) {
        getGroups()
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
        {teach.length > 0 || groups.length>0 ? (
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
                <ListSubjects
                  data={groups}
                  setStudents={setStudents}
                  theme='light'
                  navigate={(student) =>
                    props.navigation.navigate("ProfilStudent", {
                      student,
                      user,
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
