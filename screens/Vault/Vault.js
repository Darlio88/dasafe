import { Image, SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput'
import {colors} from '../../assets/colors'
import { Feather } from '@expo/vector-icons'
import TextLogo from '../../components/TextLogo'
import PasswordCard from '../../components/PasswordCard'
import {accounts} from '../../assets/data/accounts'


const Vault = ({navigation}) => {
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
    <View style={{flex:5}}>
      <ScrollView>
        {
          accounts.map((account, index)=>(  <PasswordCard key={index} {...account} />))
        }
 
   </ScrollView>
   </View>
   <TouchableOpacity 
   onPress={()=>navigation.navigate('create-vault')}
   style={{position:'absolute',
   padding:8,
   top: 400,
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