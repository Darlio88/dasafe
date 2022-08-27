import { StyleSheet, View,Text} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import CustomInputDetails from '../../components/CustomInputDetails'
import CustomButton from '../../components/CustomButton'
import { colors } from '../../assets/colors';


const CreateVault = () => {
  return (
   <View style={{flex:1, marginTop:16}}>
   <View style={{flex:2, margin:8}}>
   <Text style={{alignSelf:'center',paddingBottom:8,color:colors.black,fontSize:20,fontWeight:'bold'}}>Enter your account details</Text>
<View style={{marginVertical:4}}>
<CustomInputDetails placeholder='Enter Username' iconName='user' />
</View>
<View style={{marginVertical:4}}>
<CustomInputDetails placeholder='Enter Password' iconName='lock' secure={true}/>
</View>
<View style={{marginVertical:4}}>
<CustomInputDetails placeholder='Enter Website' iconName='at-sign' />
</View>
    
    <CustomButton title='SUBMIT' color={colors.secondary} />
   </View>
    <View style={{flex:1, margin:8,}}>
      <View style={{flexDirection:'row', alignItems:'center', marginVertical:6}}>
      <Feather name="star" size={24} color={colors.black} />
      <Text style={{marginLeft:6, color:colors.black}}>Add to favorites</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center', marginVertical:6}}>
      <Feather name="copy" size={24} color={colors.black} />
      <Text style={{marginLeft:6, color:colors.black}}>Copy</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center', marginVertical:6}}>
      <MaterialIcons name="delete-outline" size={24} color={colors.red} />
      <Text style={{marginLeft:6, color:colors.red}}>Delete</Text>
      </View>
    </View>
   </View>
    
  )
}

export default CreateVault

const styles = StyleSheet.create({})