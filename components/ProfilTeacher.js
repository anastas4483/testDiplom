import { Text, View, Image, Pressable, Button } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState, useEffect } from "react"
import { stylePT } from "../styles/profilTeacher"
import { gStyle } from "../styles/gStyle"
import { symbolicateLogLazy } from "react-native/Libraries/LogBox/Data/LogBoxData"
import ListSubjects from "./ListSubjects"
import GoBackBtn from "./GoBackBtn"
import Header from "./Header"
import * as firebase from "firebase"
import storage from "@react-native-firebase/storage"
import Loading from "./Loading"

export default function ProfilTeacher(props) {
  const [teacher, setTeacher] = useState(props.route.params.teacher)
  const [user, setUser] = useState(props.route.params.user)
  const [list_of_subjects, setListSubj] = useState([])
  const [imageURL, setImageURL] = useState(null)
  const [sizeImage, setSizeImage] = useState({ width: 100, height: 100 })
  // Если student, то в разделе "Ваши дисциплины" высвечиваются общие предметы препода и ученика (id_teach ==id у учетилея, а в groups есть группа студента). Если как teacher, то все его предметы.

  let list = []
  useEffect(() => {
    const storageRef = firebase
      .storage()
      .ref()
      .child(`${teacher.login}.jpg`)
    storageRef.getDownloadURL().then(
      function(url) {
        setImageURL(url)
      },
      function(error) {
        console.log(error)
      }
    )
    const subjectsRef = firebase.database().ref("subjects/")
    if (!user?.isTeach) {
      subjectsRef
        .orderByChild("id_teach")
        .equalTo(teacher.id)
        .on("child_added", function(data) {
          if (data.val().groups.some((item) => user.id_group == item)) {
            list.push(data.val())
            setListSubj(list)
          }
        })
    } else {
      subjectsRef
        .orderByChild("id_teach")
        .equalTo(teacher.id)
        .on("child_added", function(data) {
          list.push(data.val())
          setListSubj(list)
        })
    }
  }, [])
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
        <View style={stylePT.wrap}>
          <View style={stylePT.wrapInfo}>
            <View style={stylePT.wrapNamePhoto}>
              {imageURL ? (
                <Image
                  source={{
                    uri: imageURL,
                  }}
                  style={sizeImage}
                />
              ) : (
                <Loading size={sizeImage} />
              )}
              <View style={stylePT.wrapContacts}>
                <Text style={[gStyle.H3, stylePT.nameInfo]}>
                  {`${teacher.full_name.split(" ")[0]} ${
                    teacher.full_name.split(" ")[1]
                  }`}
                  {"\n"}
                  {teacher.full_name.split(" ")[2]}
                </Text>
                <Text style={stylePT.mailInfo}>{teacher.email}</Text>
                <View style={stylePT.wrapSoc}>
                  <Image
                    source={require("../assets/vk.png")}
                    style={{ width: 34, height: 34, marginRight: 5 }}
                  />
                  <Image
                    source={require("../assets/discord.png")}
                    style={{ width: 34, height: 34 }}
                  />
                </View>
              </View>
            </View>
            <View style={stylePT.SubjectsWrap}>
              <Text style={[gStyle.H3, stylePT.subjectH3]}>
                Ваши дисциплины:
              </Text>
              <ListSubjects
                data={list_of_subjects}
                navigate={(item) =>
                  props.navigation.navigate("ProfilSubject", { item, user })
                }
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}
