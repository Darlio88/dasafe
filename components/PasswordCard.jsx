import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { colors } from '../assets/colors'

const PasswordCard = ({account,username,password,imageUrl}) => {
  return (
    <View style={{
      flexDirection:'row',
      justifyContent:'space-between', 
      marginVertical:12,
      marginHorizontal:12}} >
      <View>
        <Image source={{uri:imageUrl}} style={{width:40, height:40, resizeMode:'contain'}} />
      </View>
      <View>
        <Text style={{color:colors.black,fontWeight:'bold'}}>{account}</Text>
        <Text style={{color:colors.dark}}>{username}</Text>
      </View>
      <View>
<Feather name='chevron-right' size={24} />
      </View>
    </View>
  )
}

export default PasswordCard

const styles = StyleSheet.create({})