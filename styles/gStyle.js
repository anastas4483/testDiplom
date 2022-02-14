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
    // paddingTop: 20,
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
  circle: {
    position: "absolute",
    backgroundColor: "#90ACCD",
    borderColor: "#3D7DFA",
    borderWidth: 2,
    shadowRadius: 15,
    shadowColor:
      Platform.OS === "android" ? "#fff" : "rgba(255, 255, 255, 0.2)",
    shadowOffset: { height: 9, width: -9 },
    elevation: 20,
    width: Platform.OS === "web" ? "45%" : "90%",
    height: Platform.OS === "web" ? "90%" : 300,
    borderRadius: 500,
  },

  headerText: {
    fontFamily: "os_reg",
    fontSize: 18,
    color: "#fff",
  },
  persHeader: {
    width: "100%",
    backgroundColor: "#355D8B",
    paddingTop: 35,
    paddingBottom: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    top: 0,
    alignItems: "center",
  },
  
  persHeaderGear: {
    width: 30,
    height: 30,
  },

})