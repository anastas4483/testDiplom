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
  persLevels: {
    width: "85%",
    marginHorizontal: "auto",
    marginBottom: 40
  },
  persNots: {
    backgroundColor: "#91B1D7",
    borderRadius: 20,
    height: 175,

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
    // height: 175,
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
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    zIndex: 100,
    overflow: "hidden",
  },

  persNotsButtonText: {
    color: "#fff",
  },
  persBGImage: {
    alignItems: "center",
    justifyContent: "center",
  },
  wrapSearch: {
    // marginTop: 40,
    width: "85%",
    // height: 175,
    marginHorizontal: "auto",
    flexDirection: 'row',
    justifyContent: 'space-between'
    // width: '100%'
  },
  wrapSearchTeacher: {
    backgroundColor: "#fff",
    width: "55%",
    height: 77,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    textAlign: "left",
  },
  searchTeacherText: {
    fontFamily: "os_reg",
    fontSize: 17,
  },
  searchMagnifier: {
    position: "absolute",
    top: 10,
    left: "105%",
    resizeMode: "stretch",
    width: 18,
    height: 18,
  },
  wrapSearchObject: {
    backgroundColor: "#fff",
    width: "40%",
    height: 77,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    textAlign: "left",
  },
  wrapCabinet: {
backgroundColor: "#fff",
    width: "95%",
    height: 65,
    borderRadius: 20,
    // paddingVertical: 0,
    justifyContent: 'center',
    

   
  },
  wrapSearchCabinet: {
    paddingHorizontal: 20,
     flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  openMap:{
    fontFamily: 'os_reg',
    fontSize: 13,
    color: '#4579B5',
  },
  WhereCabinet:{
    color: '#000',
    fontFamily: 'os_reg',
    fontSize: 17,
    flex: 1
  },
  mapImg:{
    width: 25,
    height: 25
  }
})
