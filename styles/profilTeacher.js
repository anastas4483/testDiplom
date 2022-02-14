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
    },
    SubjectsWrap:{
        borderTopColor: '#bbb',
        borderTopWidth: 1,
        width: '90%',
        textAlign: 'center',
        paddingTop: 5,
        marginTop: 25,
        marginHorizontal: '5%',


    },
    subjectH3:{
        textAlign: 'center',
        paddingVertical: 15,
    },
    listText:{
        fontFamily: 'os_reg',
        fontSize: 17,
        color: '#423333',
        padding: 5,
        fontStyle:'italic',
        textDecorationLine: 'underline'
        
    },
    listItem:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    listDot:{
       color: '#999494',
       fontSize: 28 
    },
    listArrow:{
        color: '#423333',
        fontSize: 20,
        fontStyle: 'normal'
    }

})