import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';
import BottomNavigator from './src/navigator/BottomNavigator';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="firtScreen" component={StackNavigator} />
        <Stack.Screen name="nextScreen" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
