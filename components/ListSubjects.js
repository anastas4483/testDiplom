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
export default function ListSubjects(props) {
  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            style={gStyle.listItem}
            onPress={() => props.navigate(item)}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={[
                  gStyle.listDot,
                  props.theme === "light"
                    ? { color: "#2A496C" }
                    : { color: "#423333" },
                ]}
              >
                {"\u2022"}
              </Text>
              <Text
                style={[
                  gStyle.listText,
                  props.theme === "light"
                    ? { color: "#fff" }
                    : { color: "#423333" },
                ]}
              >
                {item.short_name ? item.short_name : item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )
      }}
    />
  )
}
