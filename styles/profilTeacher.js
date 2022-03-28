import { StyleSheet, Platform } from "react-native"

export const stylePT = StyleSheet.create({
  wrap: {
    paddingHorizontal: 20,
  },

  wrapInfo: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "100%",
    marginTop: 20,
    paddingVertical: 50,
    paddingHorizontal: 8,
  },
  nameInfo: {
    lineHeight: 27,
    letterSpacing: 0,
  },
  wrapNamePhoto: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapContacts: {
    marginLeft: 10,
  },
  mailInfo: {
    color: "#969696",
    textDecorationLine: "underline",
    fontSize: 13,
    fontFamily: "os_reg",
    letterSpacing: 0,
    marginTop: 10,
  },
  wrapSoc: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
    marginTop: 6,
  },
  SubjectsWrap: {
    borderTopColor: "#bbb",
    borderTopWidth: 1,
    width: "90%",
    textAlign: "center",
    paddingTop: 5,
    marginTop: 25,
    marginHorizontal: "5%",
  },
  subjectH3: {
    textAlign: "center",
    paddingVertical: 15,
  },
})
