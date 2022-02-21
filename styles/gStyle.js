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
  H2: {
    fontSize: 24,
    color: "#fff",
    fontFamily: "sansat_light",
  },
  H3: {
    fontSize: 21,
    color: "#4B4B4B",
    fontFamily: "sansat_reg",
  },
  H4: {
    fontSize: 19,
    color: "#fff",
    fontFamily: "sansat_reg",
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
  header: {
    width: "100%",
    backgroundColor: "#355D8B",
    paddingTop: 35,
    paddingBottom: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    top: 0,
    alignItems: "center",
    marginBottom: 28
  },

  headerGear: {
    width: 30,
    height: 30,
  },

  wrapBack: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#E9E9E9',
    borderRadius: 20,
    width: 110,
    height: 40,
    padding: 10,
    elevation: 8,
    marginLeft: 20
    
  },
  BackText: {
    fontFamily: "os_reg",
    fontSize: 16,
    color: '#7A7A7A',
    marginLeft: 5,
  },
})
