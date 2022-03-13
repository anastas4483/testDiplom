import {
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native"
import { useState } from "react"
import { gStyle } from "../styles/gStyle"
import { stylePT } from "../styles/profilTeacher"
export default function ListSubjects(props) {
  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={stylePT.listItem}
          onPress={() => props.navigate(item)}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={stylePT.listDot}>{"\u2022"}</Text>
            <Text
              style={[
                stylePT.listText,
                props.theme === "light"
                  ? { color: "#fff" }
                  : { color: "#423333" },
              ]}
            >
              {item.short_name ? item.short_name : item.name}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}
