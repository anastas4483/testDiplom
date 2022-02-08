import { StyleSheet, Platform } from "react-native"

export const stylePers = StyleSheet.create({
    persHeader:{
        width:'100%',
        backgroundColor: '#355D8B',
        paddingTop: 35,
        paddingBottom:15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        top: 0,
        alignItems: 'center'
        
    },
    persHeaderText: {
        fontFamily: 'os_reg',
        fontSize: 18,
        color: '#fff',
        
    },
    persHeaderGear: {
        width: 30,
        height:30,
        
    }

})