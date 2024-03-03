import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/home/HomeScreen';
import CartScreen from '../screens/main/cart/CartScreen';
import FavoriteScreen from '../screens/main/favorite/FavoriteScreen';
import ProfileScreen from '../screens/main/profile/ProfileScreen';

export default function BottomNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Image
                source={require('../../assets/images/icon-home.png')}
                style={{
                  height: 25,
                  width: 23,
                  tintColor: focused ? 'red' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Image
                source={require('../../assets/images/icon-wishlist.png')}
                style={{
                  height: 25,
                  width: 23,
                  tintColor: focused ? 'red' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Image
                source={require('../../assets/images/icon-heart.png')}
                // style={[styles.iconStyle],  [tintColor: focus ? 'red' : 'black',] }
                style={{
                  height: 25,
                  width: 23,
                  tintColor: focused ? 'red' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Image
                source={require('../../assets/images/icon-account.png')}
                style={{
                  height: 25,
                  width: 23,
                  tintColor: focused ? 'red' : 'black',
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  // iconStyle: {
  //   height: 25,
  //   width: 25,
  // tintColor: focus ? 'red' : 'black',
  // },
});
