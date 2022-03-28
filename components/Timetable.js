import React, { Component } from "react"
import { Text, View, TouchableOpacity, Image } from "react-native"
import { gStyle } from "../styles/gStyle"
import { styleShedule } from "../styles/shedule"
import { LinearGradient } from "expo-linear-gradient"
import GoBackBtn from "./GoBackBtn"
import { useEffect, useState, useRef } from "react"
import Header from "./Header"
import { Picker } from "@react-native-picker/picker"
import * as firebase from "firebase"
import ButtonShedule from "./ButtonShedule"

const Timetable = (props) => {
  const [shedule, setShedule] = useState(props.shedule)
  const {
    selectedDay,
    isEdit,
    isAdd,
    subjs,
    setIsAdd,
    setIsWarn,
    setSheduleProp,
  } = props

  const [selectedNum, setSelectedNum] = useState("")
  const [selectedSubj, setSelectedSubj] = useState("")
  const countSubj = {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
  }
  const getTrimSubject = (name) => {
    if (name && name.length > 18) {
      return name.slice(0, 19) + "..."
    }
    return name
  }

  const deleteHandler = (item) => {
    const new_shedule = { ...shedule }
    delete new_shedule[selectedDay][item]
    setShedule(new_shedule)
  }
  useEffect(async () => {
    if (!isEdit && isAdd && selectedNum && selectedSubj) {
      const new_shedule = { ...shedule }
      if (!new_shedule[selectedDay]) new_shedule[selectedDay] = {}
      new_shedule[selectedDay][selectedNum] = selectedSubj
      setShedule(new_shedule)
      setIsAdd(false)
      setSelectedSubj("")
    }
  }, [isEdit])

  useEffect(async () => {
    if (isAdd) await setIsWarn(!selectedNum || !selectedSubj)
    else await setIsWarn(false)
  }, [isAdd, selectedNum, selectedSubj])

  useEffect(() => {
    setSheduleProp(shedule)
  }, [shedule])
  return (
    <>
      {JSON.stringify(shedule[selectedDay]) !== "{}" && shedule[selectedDay]
        ? Object.keys(shedule[selectedDay]).map((item) => {
            countSubj[item] += 1
            if (countSubj[item] > 1) delete countSubj[item]
            return (
              <View style={styleShedule.ruleRow}>
                <View style={styleShedule.ruleWrap}>
                  <Text style={styleShedule.LectionNum}>{item} пара</Text>
                  <Text style={styleShedule.SubjectName}>
                    {getTrimSubject(shedule[selectedDay][item].name)}
                  </Text>
                </View>
                {isEdit && (
                  <TouchableOpacity onPress={() => deleteHandler(item)}>
                    <Text style={styleShedule.cross}>❌</Text>
                  </TouchableOpacity>
                )}
              </View>
            )
          })
        : !isEdit && (
            <Text style={gStyle.H5}>
              В этот день пар нет✌ {"\n"} Вы можете добавить предмет, через
              кнопку "Редактировать"
            </Text>
          )}
      {isAdd && isEdit && (
        <View style={{ flexDirection: "row" }}>
          <View style={styleShedule.pickerNum}>
            <Picker
              // mode={'dropdown'}
              selectedValue={selectedNum}
              style={{ color: "#D1E7FF" }}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedNum(itemValue)
              }}
            >
              <Picker.Item label={"#"} value={""} />
              {Object.keys(countSubj).map((num, index) => (
                <Picker.Item label={num} key={index} value={num} />
              ))}
            </Picker>
          </View>
          <View style={styleShedule.pickerSubject}>
            <Picker
              selectedValue={selectedSubj}
              style={{ color: "#D1E7FF" }}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedSubj(itemValue)
              }}
            >
              <Picker.Item label="предмет" value={""} />

              {subjs.map((subj, index) => {
                return (
                  <Picker.Item label={subj.name} key={index} value={subj} />
                )
              })}
            </Picker>
          </View>
          <TouchableOpacity
            onPress={async () => {
              await setIsAdd(false)
              isAdd = false
            }}
          >
            <Text style={styleShedule.crossNewOption}>❌</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  )
}

export default Timetable
