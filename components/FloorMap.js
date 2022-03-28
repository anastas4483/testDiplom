import React, { Component } from "react"
import { Text, View } from "react-native"
import { ZoomPhoto } from "./ZoomPhoto"
import { gStyle } from "../styles/gStyle"
import { styleFloorMap } from "../styles/floorMap"
import { LinearGradient } from "expo-linear-gradient"
import GoBackBtn from "./GoBackBtn"
import { useEffect, useState, useRef } from "react"
import Header from "./Header"
import { Picker } from "@react-native-picker/picker"

export const FloorMap = (props) => {
  const [user, setUser] = useState(props.route.params.user)
  const [selectedLanguage, setSelectedLanguage] = useState()

  return (
    <View style={gStyle.container}>
      <LinearGradient
        colors={["#3F70A8", "#4B84C5", "#4F8BD0"]}
        style={gStyle.gradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: -1 }}
      >
        <Header user={user} />
        {/* <View style={gStyle.wrapperPadding}> */}
        <GoBackBtn goBack={() => props.navigation.goBack()} />
        <View style={styleFloorMap.wrap}>
          <Text style={styleFloorMap.text}>Показать карту</Text>
          <Picker
            selectedValue={selectedLanguage}
            style={[styleFloorMap.picker, { borderRadius: 20 }]}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedLanguage(itemValue)
              console.log(itemValue)
            }}
          >
            <Picker.Item label="1 этажа" value="1" />
            <Picker.Item label="2 этажа" value="2" />
            <Picker.Item label="3 этажа" value="3" />
            <Picker.Item label="4,5 этажей" value="4" />
          </Picker>
        </View>

        <ZoomPhoto numFloor={selectedLanguage} />
        {/* </View> */}
      </LinearGradient>
    </View>
  )
}
