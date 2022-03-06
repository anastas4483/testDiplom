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
import { useState } from "react"
import { styleSS } from "../styles/searchSubject"
import { gStyle } from "../styles/gStyle"
import GoBackBtn from "./GoBackBtn"
import Header from "./Header"
import ListSubjects from "./ListSubjects"
import * as firebase from "firebase"

export default function SeatchSubject(props) {
  // console.log(props.navigation);
  const [findSubj, setFindSubj] = useState([])
  const [user, setUser] = useState(props.route.params.user)
  let groups = []

  if (!user.isTeach) {
    const studentsRef = firebase.database().ref("subjects/")
    studentsRef.on("child_added", function (data) {
      if (data.val().groups.some((item) => user.id_group == item))
        groups.push(data.val())
    })
  } else {
    const teachersRef = firebase.database().ref("subjects/")
    teachersRef.on("child_added", function (data) {
      if (data.val().id_teach===user.id ) groups.push(data.val())
    })
  }

  const searchChangeHandler = (e) => {
    e.trim() === "" ? setFindSubj([]) : setFindSubj(groups.filter((item) =>item.name.toLowerCase().includes(e.trim().toLowerCase())
          )
        )
  }
  

  return (
    <View style={gStyle.container}>
      <LinearGradient
        colors={["#3F70A8", "#4B84C5", "#4F8BD0"]}
        style={gStyle.gradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: -1 }}
      >
        <Header user={user} />
        <GoBackBtn goBack={()=>props.navigation.goBack()}/>

        <View style={styleSS.wrap}>
          <TextInput
            style={styleSS.searchInput}
            placeholder="Поиск дисциплины..."
            placeholderTextColor="#B1CBE8"
            onChangeText={searchChangeHandler}
          />
          <Text style={[gStyle.H4, styleSS.searchText]}>
            Вот что удалось найти:
          </Text>
          <ListSubjects data={findSubj} navigate={(item)=>props.navigation.navigate('ProfilSubject',{item,user})} theme="light" />
        </View>
      </LinearGradient>
    </View>
  )
}
