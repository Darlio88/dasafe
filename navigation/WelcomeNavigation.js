import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Signin from '../screens/Welcome/Signin'
import Welcome from '../screens/Welcome/Welcome'
import Signup from '../screens/Welcome/Signup'


const Stack = createNativeStackNavigator()

const WelcomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:'false'}} initialRouteName='welcome'>
<Stack.Screen name='welcome' component={Welcome}/>
<Stack.Screen name='signin' component={Signin}/>
<Stack.Screen name='signup' component={Signup}/>
    </Stack.Navigator>
  )
}

export default WelcomeNavigation

const styles = StyleSheet.create({})