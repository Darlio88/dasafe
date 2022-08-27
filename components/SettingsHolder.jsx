import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import {colors} from '../assets/colors'
import { Feather } from '@expo/vector-icons'

const SettingsHolder = ({name, image}) => {
  return (
    <View  style={{
        flexDirection:'row',
        justifyContent:'space-between', 
        marginVertical:12,
        marginHorizontal:12}} >
        <View style={{flexDirection:'row', alignItems:'center',}}>
          <Image source={{uri:image}} style={{marginRight:8,width:32, height:32}} />
          <Text style={{color:colors.black,fontWeight:'bold'}}>{name}</Text>
        </View>
        <View>
  <Feather name='chevron-right' size={24} />
        </View>
      </View>
  )
}

export default SettingsHolder

const styles = StyleSheet.create({})