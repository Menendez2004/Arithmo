import React from "react"
import { StyleSheet } from "react-native";
import { MyColors } from '../theme/AppTheme'

const roundedStyle = StyleSheet.create({
    RoundedButton:{
        width: '100%',
        height: 50,
        backgroundColor: MyColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 30,

    },
    textButton:{
        color: MyColors.background,
        fontWeight: 'bold'
    }
})

export default roundedStyle;