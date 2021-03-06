import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import AppLoading from "expo-app-loading"
import { gStyle } from "./styles/login"
import { LogBox } from "react-native"
import setFonts from "./hooks/setFonts"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { UserContext } from "./hooks/UserContext"

import React from "react"

const Stack = createNativeStackNavigator()

LogBox.ignoreLogs(["Remote debugger"])

import Login from "./components/Login"
import PersRoom from "./components/Home"
import ProfilTeacher from "./components/ProfilTeacher"
import ProfilSubject from "./components/ProfilSubject"
import SeatchSubject from "./components/SearchSubject"
import SearchPeople from "./components/SearchPeople"
import Shedule from "./components/Shedule"
import base from "./base"
import Tasks from "./components/Tasks"
import { ZoomPhoto } from "./components/ZoomPhoto"
import { FloorMap } from "./components/FloorMap"
// const UserContext = React.createContext("")

export default class App extends React.Component {
  // static contextType = ThemeContext;
  state = {
    font: false,
    user: {},
    // fonts: ''
  }

  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@user")
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {
      // error reading value
    }
  }

  componentDidMount() {
    // this.setState({ user: null })
    // console.log(localStorage.getItem('user'))
    // this.getData().then(thing=>console.log('Aync',thing))  // сохранили user в AsyncStorage. Зачем? лучше использовать контекст
  }

  addUser = async (user) => {
    await this.setState({ user })
  }

  render() {
    if (this.state.font) {
      return (
        <UserContext.Provider value={this.state.user}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                options={{ headerShown: false }}
                component={PersRoom}
              />
              <Stack.Screen
                name="Login"
                options={{ headerShown: false }}
                component={Login}
                initialParams={{ addUser: this.addUser }}
              />
              <Stack.Screen
                name="SearchSubject"
                options={{ headerShown: false }}
                component={SeatchSubject}
              />
              <Stack.Screen
                name="ProfilSubject"
                options={{ headerShown: false }}
                component={ProfilSubject}
              />
              <Stack.Screen
                name="ProfilTeacher"
                options={{ headerShown: false }}
                component={ProfilTeacher}
              />
              <Stack.Screen
                name="SearchPeople"
                options={{ headerShown: false }}
                component={SearchPeople}
              />
              <Stack.Screen
                name="Tasks"
                options={{ headerShown: false }}
                component={Tasks}
              />
              <Stack.Screen
                name="FloorMap"
                options={{ headerShown: false }}
                component={FloorMap}
              />
              <Stack.Screen
                name="Shedule"
                options={{ headerShown: false }}
                component={Shedule}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </UserContext.Provider>
      )
    }
    return (
      <AppLoading
        startAsync={() => setFonts()}
        onFinish={() => this.setState({ font: true })}
        onError={console.warn}
      />
    )
  }
}
