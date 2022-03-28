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
import Timetable from "./Timetable"

const Shedule = (props) => {
  const [user, setUser] = useState(props.route.params.user)
  const [daysWeek, setDaysWeek] = useState([])
  const [selectedDay, setSelectedDay] = useState("пн")
  const [shedule, setShedule] = useState(props.route.params.user.shedule)
  const [subjs, setSubjs] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [isAdd, setIsAdd] = useState(false)
  const [isWarn, setIsWarn] = useState(false)

  useEffect(() => {
    if (daysWeek.length <= 0) {
      const daysRef = firebase.database().ref("daysWeek/")
      daysRef.on("value", function(data) {
        setDaysWeek(data.val().filter((item) => item))
      })
    }
  }, [daysWeek])
  useEffect(() => {
    if (!user.isTeach) {
      const studentsRef = firebase.database().ref("subjects/")
      studentsRef.on("child_added", function(data) {
        if (data.val().groups.some((item) => user.id_group == item))
          setSubjs((subj) => {
            return [data.val(), ...subj]
          })
      })
    } else {
      const teachersRef = firebase.database().ref("subjects/")
      teachersRef.on("child_added", function(data) {
        if (data.val().id_teach === user.id)
          setSubjs((subj) => {
            return [data.val(), ...subj]
          })
      })
    }
  }, [])

  const doneHandler = (isWarn) => {
    if (!isWarn) setIsEdit(false)
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
        <View style={gStyle.wrapperPadding}>
          <GoBackBtn
            goBack={() => {
              props.navigation.goBack()
              setIsEdit(false)
              setIsAdd(false)
            }}
          />
          <View style={styleShedule.chooseDayWrap}>
            <Text style={[gStyle.H4, styleShedule.chooseDayText]}>
              Ваше расписание в
            </Text>
            <Picker
              itemStyle={{ height: 34 }}
              selectedValue={selectedDay}
              style={[styleShedule.pickerDayWeek, { borderRadius: 20 }]}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedDay(itemValue)
              }}
            >
              {daysWeek.map((day, index) => (
                <Picker.Item label={day} key={index} value={day} />
              ))}
            </Picker>
          </View>

          <ButtonShedule
            onPress={() => setIsEdit(true)}
            style={[styleShedule.buttonEdit, isEdit && { opacity: 0 }]}
          >
            <Image
              source={require("../assets/edit.png")}
              style={styleShedule.editIcon}
            />
          </ButtonShedule>

          {JSON.stringify(shedule) !== "{}" ? (
            <Timetable
              isEdit={isEdit}
              isAdd={isAdd}
              selectedDay={selectedDay}
              shedule={shedule}
              subjs={subjs}
              setIsAdd={setIsAdd}
              setIsWarn={setIsWarn}
              setSheduleProp={setShedule}
            />
          ) : (
            <View style={styleShedule.replaceContainer}>
              <Text style={gStyle.H5}>
                Чтобы добавить предмет в расписание, нажмите на кнопку выше ☝
              </Text>
            </View>
          )}
          {isEdit && (
            <View style={styleShedule.wrapBtns}>
              <ButtonShedule
                style={
                  Object.keys(shedule[selectedDay]).length >= 6 && {
                    opacity: 0,
                  }
                }
                onPress={() => setIsAdd(true)}
              >
                <Image
                  source={require("../assets/add.png")}
                  style={styleShedule.editIcon}
                />
              </ButtonShedule>

              <ButtonShedule onPress={() => doneHandler(isWarn)}>
                <Image
                  source={require("../assets/done.png")}
                  style={styleShedule.doneIcon}
                />
              </ButtonShedule>
            </View>
          )}
        </View>
        {isWarn && (
          <Text style={gStyle.warn}>Пожалуйста, заполните все поля</Text>
        )}
      </LinearGradient>
    </View>
  )
}

export default Shedule
