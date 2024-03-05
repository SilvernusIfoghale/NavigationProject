import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationScreen from '../screens/main/notification/NotificationScreen';
import Description from '../screens/main/description/Description';
import BottomNavigator from './BottomNavigator';

export default function AppStackNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="nextScreen" component={BottomNavigator} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="Description" component={Description} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
