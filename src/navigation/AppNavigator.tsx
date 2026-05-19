import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './BottomTabs';

import OfferScreen from '../screens/Offers/OfferScreen';
import BestSellerScreen from '../screens/BestSeller/BestSellerScreen';
import MyOrdersScreen from '../screens/Orders/OrderHistoryScreen';

import ProductDetailScreen from '../screens/ProductDetail/ProductDetailScreen';

import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>

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
          name="ProductDetailScreen"
          component={ProductDetailScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}