import { Image, SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput'
import {colors} from '../../assets/colors'
import { Feather } from '@expo/vector-icons'
import TextLogo from '../../components/TextLogo'
import PasswordCard from '../../components/PasswordCard'

const Vault = () => {
  return (
    <View style={{paddingTop:32, flex:1}}>
    <View  style={{flex:1, 
      alignItems:'center',
      padding:16,
       width:'100%'}}>
    <TextLogo />
      <View style={{width:'90%'}} >
        <CustomInput 
        iconName='search'
         placeholder='Search Passwords here..' />
      </View>
    </View>
    <ScrollView style={{flex:2}}>
   <PasswordCard />
   <PasswordCard />
   <PasswordCard />
   <PasswordCard />
   <PasswordCard />
   <PasswordCard />
   <PasswordCard />
   <PasswordCard />
   <PasswordCard />
   <PasswordCard />
   </ScrollView>
   <TouchableOpacity 
   style={{position:'absolute',
   padding:8,
   top: 70,
   right: 10,
    backgroundColor:colors.secondary,
    borderRadius:23,
    elevation:5,
    marginRight:8,

    }} >
<Feather name='plus' size={32} color={colors.black}/>
   </TouchableOpacity>
    </View>
  )
}

export default Vault

const styles = StyleSheet.create({})