import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {colors} from '../assets/colors'
const CustomButton = ({title, color, clicked}) => {
  return (
    <TouchableOpacity 
    onPress={clicked}
    style={{width:'100%',
     backgroundColor:color, 
     alignItems:'center',
     paddingVertical:12,
     borderRadius:12
     }}>
      <Text 
      style={{color:colors.black,
       textTransform:'uppercase'
       }}>{title}</Text>
    </TouchableOpacity>
     
  )
}

export default CustomButton

const styles = StyleSheet.create({})