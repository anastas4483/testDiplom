import { StyleSheet, Platform } from "react-native"
import { G } from "react-native-svg"

export const styleSearchS = StyleSheet.create({
    wrap:{
        marginTop: 30,
        marginHorizontal: 20,
        alignItems: 'center'
    },
    nameSubject:{
        color: '#fff',
        fontFamily: 'sansat_reg',

    },
    infoSubject:{
        marginTop: 15,
        borderRadius: 20,
        backgroundColor: '#fff',
        width: '100%',
        height: '75%',
        padding: 25
    },
    wrapRow:{
        flexDirection: 'row',
        marginBottom: 15,

    },
    character:{
        color: '#6C5D5D',
        fontFamily: 'os_reg',
        fontSize: 17
    },
    value:{
        color: '#000',
        fontFamily: 'os_reg',
        fontSize: 17
    },
    valueTeacher:{
        textDecorationLine:'underline',
        fontStyle: 'italic',
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    cabinet:{
        color: '#A7A7A7',
        fontFamily: 'os_reg',
        fontSize: 15,
        marginTop: 10

    },
    tableTitle:{
        color: '#000',
        fontFamily: 'os_reg',
        fontSize: 16,
        marginTop: 10

    },
    tableText:{
        fontFamily: 'os_reg',
        fontSize: 14
    },
    timetable:{
        borderTopColor: '#7A7A7A',
        borderTopWidth: 1,
    },
    timetableTitle:{
        fontFamily: 'os_reg',
        fontSize: 15,
        color: '#757575',
        textAlign: 'center',
        marginTop: 5
    }





})