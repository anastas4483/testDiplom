import { Text, View, Image, Pressable, FlatList } from "react-native"
import { useState } from "react"
import { gStyle } from "../styles/gStyle"
import { stylePT } from "../styles/profilTeacher"
export default function ListSubjects(props) {
 

  const list1 = [1, 2, 3, 4]
  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => (
        <Pressable style={stylePT.listItem}>
          <Text style={stylePT.listDot}>{"\u2022"}</Text>
          <Text style={[stylePT.listText, props.theme=== 'light'? {color: '#fff'} : {color:'#423333'}]}>{item.name}</Text>
          {/* <Text style={stylePT.listArrow}>{"➔"}</Text> */}
        </Pressable>
      )}
    />
  )
}
