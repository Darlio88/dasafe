import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Feather} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Settings from '../screens/Settings/Settings'
import VaultNavigation from './VaultNavigation'
import Favorites from '../screens/Favorites/Favorites' 
import {colors} from '../assets/colors'

const Tab = createBottomTabNavigator()
const BottomTabs = () => {
  return (
   <Tab.Navigator  
   initialRouteName='vault-navigation'
   screenOptions={
    {
      headerShown:false,
      tabBarInactiveTintColor:colors.secondary,
      tabBarActiveTintColor:colors.red,
      tabBarShowLabel:false,

    }}
   >
    <Tab.Screen 
    options={
      {
        tabBarIcon:({color, size}) => (<Feather name='home' size={size} color={color} />
        )
      }
    }
    name='vault-navigation'
     component={VaultNavigation} />
    <Tab.Screen 
     options={
      {
        tabBarIcon:({color, size}) => (<Feather name='star' size={size} color={color} />
        )
      }
    }
    name='favorites' 
    component={Favorites} />
    <Tab.Screen 
     options={
      {
        tabBarIcon:({color, size}) => (<Feather name='settings' size={size} color={color} />
        )
      }
    }
    name='settings' 
    component={Settings} />

   </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})