import React from "react"
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import { gStyle } from "../styles/gStyle"

const Item = ({ item, navigate, theme, student }) => (
  <TouchableOpacity style={gStyle.listItem} onPress={() => navigate(student)}>
    <View style={{ flexDirection: "row" }}>
      <Text
        style={[
          gStyle.listDot,
          theme === "light" ? { color: "#2A496C" } : { color: "#423333" },
          { marginLeft: 10 },
        ]}
      >
        {"\u2022"}
      </Text>
      <Text
        style={[
          gStyle.listText,
          theme === "light" ? { color: "#fff" } : { color: "#423333" },
        ]}
      >
        {item}
      </Text>
    </View>
  </TouchableOpacity>
)

const ListStudents = (props) => {
  const DATA2 = []
  props.groups.forEach((group) => {
    const name_students = []
    const new_students = props.students.filter(
      (student) => student.id_group === group.id
    )
    new_students.forEach((item) => {
      name_students.push(item.name)
    })
    DATA2.push({
      title: group.name,
      data: name_students,
      student: new_students,
    })
  })
  return (
    <SectionList
      scrollEnabled={true}
      sections={DATA2}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item, section, index }) => {
        console.log(section.student[index])
        return (
          <Item
            item={item}
            navigate={props.navigate}
            student={section.student[index]}
            theme={props.theme}
          />
        )
      }}
      renderSectionHeader={({ section }) => (
        <View>
          <Text style={[gStyle.H5, { marginTop: 10 }]}>{section.title}</Text>
        </View>
      )}
    />
  )
}

export default ListStudents
