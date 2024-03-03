import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SplashScreen from '../screens/auth/SplashScreen';
import { createStackNavigator } from '@react-navigation/stack';
import CreateAccount from '../screens/auth/CreateAccount';
import Login from '../screens/auth/Login';
import Success from '../screens/auth/Success';
import NotificationScreen from '../screens/main/notification/NotificationScreen';
import Description from '../screens/main/description/Description';

export default function StackNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="Description" component={Description} />
    </Stack.Navigator>
  );
}
