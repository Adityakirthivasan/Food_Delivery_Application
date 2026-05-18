import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home/HomeScreen';
import FlashFoodScreen from '../screens/FlashFood/FlashFoodScreen';
import ReorderScreen from '../screens/Reorder/ReorderScreen';

import { BottomTabParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>

      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="FlashFood"
        component={FlashFoodScreen}
      />

      <Tab.Screen
        name="Reorder"
        component={ReorderScreen}
      />

    </Tab.Navigator>
  );
}