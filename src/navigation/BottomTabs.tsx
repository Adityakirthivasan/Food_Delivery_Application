import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@react-native-vector-icons/ionicons';

import HomeScreen from '../screens/Home/HomeScreen';
import FlashFoodScreen from '../screens/FlashFood/FlashFoodScreen';
import ReorderScreen from '../screens/Reorder/ReorderScreen';

import { BottomTabParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({

        headerShown: false,

        tabBarActiveTintColor: '#0A84FF',
        tabBarInactiveTintColor: '#9B9B9B',

        tabBarStyle: {
          height: 72,
          paddingBottom: 8,
          paddingTop: 8,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 2,
        },

        tabBarIcon: ({ focused, color }) => {

          if (route.name === 'Home') {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={color}
              />
            );
          }

          if (route.name === 'FlashFood') {
            return (
              <Ionicons
                name={focused ? 'flash' : 'flash-outline'}
                size={24}
                color={color}
              />
            );
          }

          return (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={24}
              color={color}
            />
          );
        },
      })}>

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />

      <Tab.Screen
        name="FlashFood"
        component={FlashFoodScreen}
        options={{
          title: 'Flash Food',
        }}
      />

      <Tab.Screen
        name="Reorder"
        component={ReorderScreen}
        options={{
          title: 'Reorder',
        }}
      />

    </Tab.Navigator>
  );
}