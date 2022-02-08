import { StyleSheet, Platform } from "react-native"
import { G } from "react-native-svg"

export const gStyle = StyleSheet.create({
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
    top: 0,
    fontSize: 16,
    overflow: "hidden",
  },
  H1: {
    fontSize: 35,
    color: "#fff",
    fontFamily: "sansat_light",
    paddingBottom: 13,
  },
  H3: {
    fontSize: 24,
    color: "#fff",
    fontFamily: "sansat_light",
  },

})