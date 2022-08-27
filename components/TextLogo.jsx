import { Text, } from 'react-native'
import React from 'react'
import {colors} from '../assets/colors'
const TextLogo = () => {
  return (
    <Text 
    style={{alignSelf:'flex-start',
    fontSize:24,
    fontStyle:'italic',
    textShadowColor: colors.red,
    textShadowRadius:3,
    fontWeight:'bold'}}
    >DaSafe</Text>
  )
}

export default TextLogo
