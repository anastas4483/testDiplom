import { StyleSheet, Platform } from "react-native"
import { G } from "react-native-svg"

export const stylePT = StyleSheet.create({
    wrap:{
        paddingHorizontal: 20,
        paddingVertical: 40
    },
    wrapBack:{
        flexDirection: 'row',
        alignItems: 'center',

    },
    BackText:{
        fontFamily: 'os_reg',
        fontSize: 16,
        textDecorationLine: 'underline',
        marginLeft: 5,

    },
    wrapInfo:{
        backgroundColor: '#fff',
        borderRadius: 20,
        width: '100%',
        height: '85%',
        marginTop: 30,
        paddingVertical: 50,
        paddingHorizontal: 8,

    },
    nameInfo:{
        fontFamily: 'sanst_reg',
        fontSize: 21,
        color: '#4B4B4B',
        lineHeight: 27,
        letterSpacing: 0

    },
    wrapNamePhoto:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    wrapContacts:{
        marginLeft: 10
    },
    mailInfo:{
        color: '#969696',
        textDecorationLine: 'underline',
        fontSize: 13,
        fontFamily: 'os_reg',
        letterSpacing: 0,
        marginTop: 10
    },
    wrapSoc:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '40%',
        marginTop: 6
    }


})