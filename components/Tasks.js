import React, { Component, useState } from "react"
import { Text, View } from "react-native"
import { gStyle } from "../styles/gStyle"
import { LinearGradient } from "expo-linear-gradient"
import GoBackBtn from "./GoBackBtn"
import Header from "./Header"
import Loading from "./Loading"

const Tasks = (props) => {
  const [user, setUser] = useState(props.route.params.user)
  const [tasks, setTasks] = useState([])
  return (
    <View style={gStyle.container}>
      <LinearGradient
        colors={["#3F70A8", "#4B84C5", "#4F8BD0"]}
        style={gStyle.gradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: -1 }}
      >
        <>
          <Header user={user} />
          <View style={gStyle.wrapperPadding}>
            <GoBackBtn goBack={() => props.navigation.goBack()} />
            {tasks.length > 0 ? (
              console.log(tasks)
            ) : (
              <View style={[{ width: '100%' ,height: '80%',justifyContent: 'center', alignItems: 'center'}]}>
                <Text style={[gStyle.H5, ]}>Ура! На сегодня задач нет ✅</Text>
              </View>
            )}
          </View>
        </>
      </LinearGradient>
    </View>
  )
}

export default Tasks
