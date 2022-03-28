import { StyleSheet, Platform } from "react-native"

export const styleShedule = StyleSheet.create({
  chooseDayWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  pickerDayWeek: {
    backgroundColor: "#3C5B7E",
    width: 90,
    height: 34,
    padding: 10,
    color: "#fff",
    elevation: 3,
  },
  buttonShedule: {
    backgroundColor: "#EBEBEB",
    borderRadius: 20,
    paddingHorizontal: 19,
    paddingVertical: 8,
    elevation: 5,
    width: 63,
  },
  editIcon: {
    width: 24,
    height: 24,
  },
  doneIcon: {
    width: 24,
    height: 22,
  },
  replaceContainer: {
    width: "100%",
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  replaceText: {
    color: "#fff",
    fontFamily: "sansat_reg",
    textAlign: "center",
    fontSize: 18,
  },
  ruleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  LectionNum: {
    fontFamily: "os_reg",
    fontSize: 18,
    color: "#D1E7FF",
    paddingRight: 10,
    borderRightColor: "#A3B5DA",
    borderRightWidth: 1,
    // paddingBottom: 10,
    lineHeight: 25,
  },
  SubjectName: {
    fontFamily: "os_reg",
    fontSize: 18,
    color: "#fff",
    paddingLeft: 10,
    paddingBottom: 13,
  },
  buttonEdit: {
    marginBottom: 30,
  },
  cross: {
    alignItems: "center",
    alignContent: "center",
    lineHeight: 24,
    paddingLeft: 5,
  },
  wrapBtns: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-around",
    marginTop: 15,
  },
  ruleWrap: {
    flexDirection: "row",
    justifyContent: "flex-start",
    // width: '100%'
  },
  pickerNum: {
    borderRadius: 4,
    width: 75,
    padding: 0,
    height: 45,
    elevation: 3,
    marginLeft: -10,
  },

  pickerSubject: {
    borderRadius: 4,
    width: 220,
    padding: 0,
    height: 45,
    elevation: 3,
    marginLeft: 12,
  },
  crossNewOption: {
    marginTop: 15,
    marginLeft: 7,
  },
})
