import {
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  TextInput,
  FlatList
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { styleSS } from "../styles/searchSubject"
import { gStyle } from "../styles/gStyle"
import GoBackBtn from "./GoBackBtn"
import Header from "./Header"
import ListSubjects from "./ListSubjects"
export default function SeatchSubject(props) {
    const [findSubj,setFindSubj]=useState([])
    
    const searchChangeHandler=(e)=>{
        e==='' ? setFindSubj([]) : setFindSubj(props.data.filter((item)=> item.name.toLowerCase().includes(e.toLowerCase())))
       for(let i=0; i<findSubj.length;i++) console.log(findSubj[i].name)
      
    }

    
  return (
    <View style={gStyle.container}>
      <LinearGradient
        colors={["#3F70A8", "#4B84C5", "#4F8BD0"]}
        style={gStyle.gradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: -1 }}
      >
        <Header />
        <GoBackBtn />

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
          <ListSubjects data={findSubj} theme='light'/>

          
        </View>
      </LinearGradient>
    </View>
  )
}
