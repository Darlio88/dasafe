import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import {colors} from '../assets/colors'
const CustomInput = ({placeholder, iconName, secure}) => {
  return (
    <KeyboardAvoidingView 
      style={{flexDirection:'row', 
      marginVertical:4,
      paddingHorizontal:8,
      paddingVertical:8,
      alignItems:'center',
      backgroundColor:colors.white,
      borderRadius:12,
      borderWidth:1,
      borderColor:colors.secondary,
       width:'100%'}}>
      <Feather name={iconName} size={24} color={colors.secondary} />
        <TextInput
         placeholder={placeholder}
         placeholderTextColor={colors.secondary}
         secureTextEntry={secure}
         style={{marginLeft:8,
          width:'100%', 
          height:'100%',
          color:colors.dark
          }}/>
      </KeyboardAvoidingView>
  )
}

export default CustomInput

const styles = StyleSheet.create({})