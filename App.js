import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './navigation/BottomTabs'
import WelcomeNavigation from './navigation/WelcomeNavigation'

const Stack = createNativeStackNavigator()
export default function App() {
return (
<NavigationContainer>
<Stack.Navigator 
 screenOptions={{headerShown:false,
    

}} 
 initialRouteName='welcome-navigation'>
    <Stack.Screen name='welcome-navigation' component={WelcomeNavigation} />
    <Stack.Screen name='bottom-tabs' component={BottomTabs} />

</Stack.Navigator>
</NavigationContainer>

)
}

