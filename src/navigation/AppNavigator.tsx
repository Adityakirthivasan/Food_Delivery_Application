import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './BottomTabs';

import OfferScreen from '../screens/Offers/OfferScreen';
import BestSellerScreen from '../screens/BestSeller/BestSellerScreen';
import MyOrdersScreen from '../screens/Orders/OrderHistoryScreen';
import RestaurantScreen from '../screens/Restaurant/RestaurantScreen';
import ProductDetailScreen from '../screens/ProductDetail/ProductDetailScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import BookingScreen from '../screens/Booking/BookingScreen';
import ReorderScreen from '../screens/Reorder/ReorderScreen';

import SplashScreen from '../screens/SplashScreen/SplashScreen';
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';

import { RootStackParamList } from './types';

const Stack =
  createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>

        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
        />

        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
        />

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
  name="RegisterScreen"
  component={RegisterScreen}
/>

        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
        />

        <Stack.Screen
          name="OfferScreen"
          component={OfferScreen}
        />

        <Stack.Screen
          name="BestSellerScreen"
          component={BestSellerScreen}
        />

        <Stack.Screen
          name="MyOrdersScreen"
          component={MyOrdersScreen}
        />

        <Stack.Screen
          name="RestaurantScreen"
          component={RestaurantScreen}
        />

        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
        />

        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
        />

        <Stack.Screen
          name="ReorderScreen"
          component={ReorderScreen}
        />

        <Stack.Screen
          name="BookingScreen"
          component={BookingScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}