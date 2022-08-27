import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Vault from '../screens/Vault/Vault'
import CreateVault from '../screens/Vault/CreateVault'
const Stack = createNativeStackNavigator()

const VaultNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='vault'>
        <Stack.Screen 
        options={
          {headerShown:false,}
        }
        name='vault' component={Vault} />
        <Stack.Screen name='create-vault' 
        component={CreateVault} />
    </Stack.Navigator>
  )
}

export default VaultNavigation

const styles = StyleSheet.create({})