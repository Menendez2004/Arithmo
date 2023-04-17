import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import roundedStyle from './assets/style/roundedStyle'

interface Props{
    text: string,
    onPress: () => void
}

export const RoundedButton = ( { text, onPress }: Props ) => {
  return (
    <TouchableOpacity
    style={roundedStyle.RoundedButton}
    onPress={() => onPress()}
    >
        <Text style={roundedStyle.textButton}>{text}</Text>
    </TouchableOpacity>
  )
}


