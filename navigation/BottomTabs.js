import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Settings from '../screens/Settings/Settings'
import VaultNavigation from './VaultNavigation'

const Tab = createBottomTabNavigator()
const BottomTabs = () => {
  return (
   <Tab.Navigator  
   initialRouteName='vault-navigation'
   >
    <Tab.Screen name='vault-navigation' component={VaultNavigation} />
    <Tab.Screen name='settings' component={Settings} />
   </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})