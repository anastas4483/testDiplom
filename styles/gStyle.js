import { StyleSheet, Platform } from "react-native"

export const gStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    flex: 1,
    width: "100%",
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

  H5: {
    fontSize: 18,
    color: "#D1E7FF",
    fontFamily: "os_reg",
    textAlign: "center",
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
    marginBottom: 28,
  },

  headerGear: {
    width: 30,
    height: 30,
  },

  wrapBack: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E9E9E9",
    borderRadius: 20,
    width: 110,
    height: 40,
    padding: 10,
    elevation: 8,
    marginLeft: 20,
  },
  BackText: {
    fontFamily: "os_reg",
    fontSize: 16,
    color: "#7A7A7A",
    marginLeft: 5,
  },
  loading: {
    width: 200,
    height: 200,
  },
  wrapLoading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  wrapperPadding: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  listText: {
    fontFamily: "os_reg",
    fontSize: 17,
    color: "#423333",
    padding: 5,
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  listDot: {
    color: "#999494",
    fontSize: 28,
  },
  listArrow: {
    color: "#423333",
    fontSize: 20,
    fontStyle: "normal",
  },
  warn: {
    color: "#D40000",
    backgroundColor: "#86A6CC",
    width: "100%",
    textAlign: "center",
    padding: 15,
    fontSize: 15,
    marginTop: 30,
  },
})
