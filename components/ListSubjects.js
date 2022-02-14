import { Text, View, Image, Pressable, FlatList } from "react-native"
import { useState } from "react"
import { gStyle } from "../styles/gStyle"
import { stylePT } from "../styles/profilTeacher"
export default function ListSubjects() {
  const [list, setList] = useState([
    {
      name: "Переферийные устройства",
      id: 1,
      group: 1,
    },
    {
      name: "Программирование Delphi",
      id: 2,
      group: 1,
    },
  ])

  const list1 = [1, 2, 3, 4]
  return (
    <FlatList
      data={list}
      renderItem={({ item }) => (
        <Pressable style={stylePT.listItem}>
          <Text style={stylePT.listDot}>{"\u2022"}</Text>
          <Text style={stylePT.listText}>{item.name}</Text>
          {/* <Text style={stylePT.listArrow}>{"➔"}</Text> */}
        </Pressable>
      )}
    />
  )
}
