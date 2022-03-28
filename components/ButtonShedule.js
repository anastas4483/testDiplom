import React, { Component } from "react"
import { View, TouchableOpacity } from "react-native"
import { styleShedule } from "../styles/shedule"

const ButtonShedule = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styleShedule.buttonShedule, props.style]}>
        {props.children}
      </View>
    </TouchableOpacity>
  )
}

export default ButtonShedule
