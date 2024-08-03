import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/LoginPage';
import SignupPage from './src/SignupPage';
import HomePage from './src/HomePage';
import useAuth from './hooks/useAuth';


const Stack = createNativeStackNavigator();

export default function App() {
  const { user } = useAuth();
  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='HomePage' component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginPage' screenOptions={{headerShown:false}}>
          <Stack.Screen name='LoginPage' component={LoginPage} />
          <Stack.Screen name='SingupPage' component={SignupPage} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

}
