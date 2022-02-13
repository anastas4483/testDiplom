import { StyleSheet, Platform } from "react-native"

export const stylePers = StyleSheet.create({
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
  persHeaderText: {
    fontFamily: "os_reg",
    fontSize: 18,
    color: "#fff",
  },
  persHeaderGear: {
    width: 30,
    height: 30,
  },
  persWrap: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
    justifyContent: "space-between",
  },
  persNots: {
    backgroundColor: "#91B1D7",
    borderRadius: 20,
    width: "80%",
    height: 175,
    marginHorizontal: "auto",
    shadowOpacity: 0.75,
    shadowRadius: 0,
    shadowColor: "#28466A",
    shadowOffset: { height: 5, width: 0 },
    marginHorizontal: "5%",
    elevation: 5,
  },
  persNotsList: {
    backgroundColor: "#91B1D7",
    borderRadius: 20,
    width: "80%",
    height: 175,
    marginHorizontal: "auto",
    flex: 7,
  },
  persNotsWrapButton: {
    // backgroundImage: "url()",
    width: "100%",
    height: 50,
    flex: 2,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    zIndex: 100,
    overflow: 'hidden'
  },

  persNotsButtonText: {
    color: '#fff'
  },
  persBGImage:{
      alignItems: 'center',
      justifyContent: "center",
    
  
  }
})
