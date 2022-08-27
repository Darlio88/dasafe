import { NavigationHelpersContext } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';

import {colors} from '../../assets/colors'
export default function Welcome({navigation}){
    
  return (
    <View style={styles.container}>
     <View style={{flex:1, }}>
      <Image
       source={require('../../assets/security.png')} 
       style={{height:240, width:200, resizeMode:'contain'}} />
     </View>
   <View style={{flex:1}}>
   <View  style={{flex:2,}}>
      <Text style={{fontSize:24,color:colors.black, fontWeight:'bold'}}>Secure your password </Text> 
      <Text style={{fontSize:18,color:colors.black, fontWeight:'bold'}}>With Dasafe,</Text>
      <Text style={{fontSize:18,color:colors.black, fontWeight:'bold'}}>get all passwords with one click </Text>
     </View>
     <View style={{flex:1}}>
      <Button title='GET STARTED'
       onPress={()=>navigation.navigate('signin')} 
       color={colors.secondary} 
       style={{borderRadius:4, }} />
     </View>
   </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      alignItems:'center',
      justifyContent: 'center',
      paddingTop:24
    },
  });
  