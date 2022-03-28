import { StyleSheet, Platform } from "react-native"

export const styleSS = StyleSheet.create({
  wrap: {
    paddingHorizontal: 20,
  },
  searchInput: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1.5,
    height: 35,
    width: "53%",
    padding: 0,
    paddingLeft: 4,
    fontFamily: "os_reg",
    fontSize: 14,
    lineHeight: 14,
    color: "#fff",
    marginRight: 20,
  },
  searchText: {
    textAlign: "left",
    marginTop: 20,
  },
  wrapSearchBack: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
})
