import { StyleSheet, Platform } from "react-native"

export const styleFloorMap = StyleSheet.create({
  picker: {
    fontFamily: "os_reg",
    backgroundColor: "#fff",
    color: "#142546",
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
    // borderBottomColor: '#ff0',
    borderStyle: "solid",
    borderBottomWidth: 10,
    elevation: 3,
    borderRadius: 10,
    width: "50%",
  },
  text: {
      color: '#fff',
      fontFamily: 'sansat_reg',
      fontSize: 18
  },
  wrap: {
      flex: 1,
      flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto'
  }
})
