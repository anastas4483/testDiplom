import { StyleSheet, Platform } from "react-native"
import { G } from "react-native-svg"

export const styleSS = StyleSheet.create({
    wrap:{
        paddingHorizontal: 20
    },
  searchInput: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1.5,
    height: 40,
    width: '45%',
    padding: 3,
    paddingLeft: 4,
    fontFamily: "os_reg",
    fontSize: 14,
    // marginHorizontal: '15%',
    color: '#fff',
    // marginVertical: 20,
    marginRight: 20

  },
  searchText:{
      textAlign: 'left',
      marginTop: 20

  },
  wrapSearchBack:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  }
})
