import React from "react";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: "row"
    },
    form: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        padding: 35,

    },
    formText: {
        fontWeight: 'bold',
        marginTop: 15,
        fontSize: 20,


    },
    burbu: {
        marginLeft: 225,
        width: 172,
        height: 100,
    },
    rightBurble: {
        width: 172,
        height: 100,
        margin: 55,
        marginLeft: -75
    },
    texImputForm: {
        flex: 1,
        borderBottomWidth: 1,
        marginLeft: 15.5
    },
    imputForm: {
        flexDirection: "row",
        marginTop: 30

    },
    formIcon: {
        width: 25,
        height: 20,
        marginTop: 5
    },
    formIcon1: {
        width: 20,
        height: 25,
        marginTop: 5
    },
    formRegister: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 25,

    },
    formRegisterTex: {
        fontStyle: "italic",
        color: '#8b16ff',
        borderBottomWidth: 1,
        borderBottomColor: '#8b16ff',
        fontWeight: 'bold',
        marginLeft: 10


    },
    logoContainer: {
        alignSelf: 'center',
        margin: 48
    },
    logoImage: {

        width: 280,
        height: 70,

    },
    logotext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10,
        fontWeight: 'bold'
    },

});

export default styles