import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput'
import {colors} from '../../assets/colors'

const Vault = () => {
  return (
    <ScrollView style={{paddingTop:32}}>
    <SafeAreaView  style={{flex:1, 
      alignItems:'center',
      padding:16,
       width:'100%'}}>
      <Text 
      style={{alignSelf:'flex-start',
      fontSize:24,
      fontStyle:'italic',
      textShadowColor: colors.red,
      textShadowRadius:3,
      fontWeight:'bold'}}
      >DaSafe</Text>
      <View style={{width:'90%', paddingRight:'8px'}} >
        <CustomInput 
        iconName='search'
         placeholder='Search Passwords here..' />
      </View>
    </SafeAreaView>
    </ScrollView>
  )
}

export default Vault

const styles = StyleSheet.create({})