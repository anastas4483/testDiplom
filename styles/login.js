import { StyleSheet, Platform } from "react-native"
import { G } from "react-native-svg"

// if(Platform.OS==='web') styleLogin.loginInput['outlineWidth']=0
export const styleLogin = StyleSheet.create({

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
 
  loginCircleTop: {
    justifyContent: "center",
    alignItems: "center",
    top: Platform.OS === "web" ? "-45%" : -100,
    left: Platform.OS === "web" ? "75%" : "50%",
  },
  loginCircleBottom: {
    // position: 'absolute',

    top: Platform.OS === "web" ? "65%" : 600,
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
  
  },
  checkboxText:{
    color: '#B1CBE8',
    marginLeft: 10,
    marginBottom: 20,
    fontFamily: 'os_reg',
    fontSize: 16
  }
})
