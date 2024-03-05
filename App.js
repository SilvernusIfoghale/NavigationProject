import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';
import AppStackNavigator from './src/navigator/AppStackNavigator';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="firtScreen" component={StackNavigator} />
        <Stack.Screen name="AppStackNavigator" component={AppStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
