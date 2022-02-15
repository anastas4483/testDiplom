import { Text, View, Image, Pressable } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { styleSearchS } from "../styles/searchSubjects"
import { Button, FlatList, TextInput } from "react-native-web"
import { gStyle } from "../styles/gStyle"
import GoBackBtn from "./GoBackBtn"
import Header from "./Header"
export default function SearchSubjects() {
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

        <View style={styleSearchS.wrap}>
          <Text style={[gStyle.H3, styleSearchS.nameSubject]}>
            Переферийные устройства
          </Text>
          <View style={styleSearchS.infoSubject}>
            <View style={styleSearchS.wrapRow}>
              <Text style={styleSearchS.character}>Преподаватель: </Text>
              <Text style={[styleSearchS.value, styleSearchS.valueTeacher]}>
                Парецких Е.В.
              </Text>
            </View>
            <View style={styleSearchS.wrapRow}>
              <Text style={styleSearchS.character}>Продолжительность:</Text>
              <Text style={styleSearchS.value}>180ч</Text>
            </View>
            <View style={styleSearchS.wrapRow}>
              <Text style={styleSearchS.character}>Тип сдачи: </Text>
              <Text style={styleSearchS.value}>экзамен</Text>
            </View>
            <View style={styleSearchS.timetable}>
              <Text style={styleSearchS.timetableTitle}>График занятий</Text>
              <View style={styleSearchS.row}>
                <Text style={styleSearchS.tableTitle}>Лекции:</Text>
                <Text style={styleSearchS.cabinet}>401каб</Text>
              </View>
              <View style={styleSearchS.row}>
                <Text style={styleSearchS.tableText}>
                  чт - 12:00, пт - 10:15
                </Text>
              </View>
              <View style={styleSearchS.row}>
                <Text style={styleSearchS.tableTitle}>Практические:</Text>
                <Text style={styleSearchS.cabinet}>107каб</Text>
              </View>
              <View style={styleSearchS.row}>
                <Text style={styleSearchS.tableText}>
                  1подгр: пт - 12:00 (1,3,5,7,9 нед.)
                </Text>
              </View>
              <View style={styleSearchS.row}>
                <Text style={styleSearchS.tableText}>
                  2подгр: пт - 12:00 (2,4,6,8,10 нед.)
                </Text>
              </View>
            </View>
            <Button
  onPress={()=>console.log('dks')}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}
