import { StyleSheet, Platform } from "react-native"

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
  loginH1: {
    fontSize: 35,
    color: "#fff",
    fontFamily: "sansat_light",
    paddingBottom: 13,
  },
  loginH3: {
    fontSize: 24,
    color: "#fff",
    fontFamily: "sansat_light",
  },
  loginForm: {
    textAlign: "left",
    paddingHorizontal: 40,
    paddingTop: 200,
  },
  loginFormWrap: {
    marginHorizontal: "10%",
    width: "80%",

  },
  loginInput: {
    borderColor: "#fff",
    borderWidth: 0,
    borderBottomWidth: 2,
    borderStyle: "solid",
    color: "#fff",
    width: 210,
    fontFamily: "os_reg",
    fontSize: 17,
    paddingBottom: 5,
    marginTop: 25,
    marginBottom: 25,
  },
  loginButton: {
    height: 55,
    width: '80%',
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    backgroundColor: "#fff",
    shadowOpacity: 0.75,
    color: "#000",
    shadowRadius: 0,
    shadowColor: "#28466A",
    shadowOffset: { height: 5, width: 0 },
    marginHorizontal: '5%',
    elevation: 5,
  },
  loginButtonText: {
    textTransform: "uppercase",
    color: "#000",
    fontSize: 16,
    fontFamily: "os_reg",
  },

  loginLogo: {
    width: 75,
    height: 75,
  },
  loginTitle: {
    fontSize: 13,
    color: "#fff",
    fontFamily: "sansat_light",
    textAlign: "right",
  },
  loginCircle: {
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
    height: Platform.OS === "web" ? "90%" : "45%",
    borderRadius: 500,
  },
  loginCircleTop: {
    justifyContent: "center",
    alignItems: "center",
    top: Platform.OS === "web" ? "-45%" : "-15%",
    left: Platform.OS === "web" ? "75%" : "50%",
  },
  loginCircleBottom: {
    top: Platform.OS === "web" ? "65%" : "80%",
    left: Platform.OS === "web" ? "-30%" : "-45%",
  },
  loginWrapLogo: {
    alignItems: "flex-end",
    top: "15%",
    left: "-18%",
  },

  loginCopy:{
    flex:1,
    alignItems:'flex-start',
    justifyContent: 'space-around',
    textAlign:'right',
    textAlignVertical:'bottom',
    paddingBottom:10,
    paddingRight: 20,
    fontSize: 13,
    color: "#fff",
    fontFamily: "sansat_light",
    textAlign: "right",
  },
  loginWrapBottom:{
    width: '100%',
    height: '100%'
  
  }
})
