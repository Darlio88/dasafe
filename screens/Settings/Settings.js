import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { colors } from '../../assets/colors'
import SettingsHolder from '../../components/SettingsHolder'
import { settings } from '../../assets/data/settings'

const Settings = () => {
  return (
    <View style={{flex:1, paddingTop:16}}>
      <View style={{flex:1, justifyContent:'center'}}>
      <View style={{
      flexDirection:'row',
      justifyContent:'space-between', 
      marginVertical:12,
      marginHorizontal:12}} >
      <View>
        <Image source={require('../../assets/man.png')} style={{width:40, height:40, resizeMode:'contain'}} />
      </View>
      <View>
        <Text style={{color:colors.black,fontWeight:'bold'}}>Alexander Mary</Text>
        <Text style={{color:colors.dark}}>alexandermary01@gmail.com</Text>
      </View>
      <View>
<Feather name='chevron-right' size={24} />
      </View>
    </View>
      </View>
    

      <View style={{flex:4}}>
        {settings.map((setting, index)=>(<SettingsHolder key={index} name={setting.name} image={setting.image}/>))}
        
      </View>
      <View style={{flex:1, flexDirection:'row',marginTop:8, marginLeft:12}}>

        <Feather name='log-out' size={24} color={colors.red}/>
        <Text style={{fontSize:16, marginLeft:8, color:colors.red}}>Log out</Text>
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})