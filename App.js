import { StatusBar } from "expo-status-bar"
import { Platform, StyleSheet, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
export default function App() {
  // let [fontsLoaded] = useFonts({
  //   OpenSans_400Regular,
  // });

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#2974FA", "#38ABFD", "#43D4FF"]}
        style={styles.gradient}
      >
        <Text style={styles.h1}>Добрый день!</Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  paddingTop:20,
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    flex: 1,
    width: "100%",
    paddingTop: 20,
    top: 10,
    fontSize: 16,
  },
  h1: {
    top: Platform.OS === "android" ? 150 : 30,
    fontSize: 27,
    color: "#fff",
    fontFamily: "sans-serif",
  },
})
