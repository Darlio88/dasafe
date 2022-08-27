import { StyleSheet, 
  Text,
  Image, 
  View,
  ScrollView,
TouchableOpacity
 } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { colors } from '../../assets/colors'


const Signup = ({navigation}) => {
  return (
    <ScrollView>
    <View style={{flex:1, alignItems:'center', padding:8, width:'100%'}}>
      <View>
       <Image 
       source={require('../../assets/policeman.png')}
        style={{width:100,height:100, resizeMode:'contain'}}/>
      </View>
      <View style={{width:'100%', marginTop:24,}}>
        <Text style={{fontSize:24,alignSelf:'center', fontWeight:'bold', color:colors.secondary}}>Sign Up</Text>
      <View style={{marginVertical:8}}>
      <CustomInput placeholder='Enter FirstName' iconName='user' />
      </View>
      <View style={{marginVertical:8}}>
      <CustomInput placeholder='Enter LastName' iconName='user' />
      </View>
      <View style={{marginVertical:8}}>
      <CustomInput placeholder='Enter Email' iconName='mail' />
      </View>
      <View style={{marginVertical:8}}>
      <CustomInput placeholder='Enter Password' iconName='lock' secure={true} />
      </View>
      <View style={{marginVertical:8}}>
      <CustomInput placeholder='Confirm Password' iconName='lock' secure={true} />
      </View>
      </View>
      {/* <View style={{flexDirection:'row', marginVertical:16,paddingRight:8,  alignSelf:'flex-end'}}>
      <Text style={{color:colors.black}}>Forgot Password?</Text>
      <TouchableOpacity>
      <Text style={{marginLeft:4,color:colors.blue}}>click here</Text>
        </TouchableOpacity> 

      </View> */}
  <CustomButton 
  title='SIGNUP' 
  color={colors.secondary} 
  clicked={()=>navigation.navigate('bottom-tabs',{screen:'vault-navigation'})}/>
  <View style={{flexDirection:'row', marginVertical:16,paddingRight:8}}>
      <Text style={{color:colors.black}}>Already have an account??</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('signup')} >
      <Text style={{marginLeft:4,color:colors.blue}}>Sign in</Text>
        </TouchableOpacity> 

      </View>
    </View>
    </ScrollView>
  )
}

export default Signup

const styles = StyleSheet.create({})