import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {
  useNavigation,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Svg, {
  Path,
} from 'react-native-svg';

import {
  RootStackParamList,
} from '../../navigation/types';

const { width, height } = Dimensions.get('window');

type NavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export default function SplashScreen() {
  const navigation =
    useNavigation<NavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('OnboardingScreen');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={[
          '#FF8A3D',
          '#E95B00',
        ]}
        style={styles.container}>

        <View style={styles.logoContainer}>
<Svg
  width="100%"
  height="100%"
  viewBox="0 0 120 120">

  {/* Outer Bag */}
  <Path
    d="
      M28 42
      Q29 26 40 26
      L80 26
      Q91 26 92 42
      L96 92
      Q97 104 84 104
      L36 104
      Q23 104 24 92
      Z
    "
    stroke="#FFFFFF"
    strokeWidth="8"
    strokeLinejoin="round"
    fill="none"
  />

  {/* Top Bar */}
  <Path
    d="M30 52 H90"
    stroke="#FFFFFF"
    strokeWidth="8"
    strokeLinecap="round"
  />

  {/* Handle */}
  <Path
    d="
      M47 64
      C47 77 57 84 60 84
      C63 84 73 77 73 64
    "
    stroke="#FFFFFF"
    strokeWidth="8"
    strokeLinecap="round"
    fill="none"
  />

  {/* Center Stem */}
  <Path
    d="M60 84 L60 97"
    stroke="#FFFFFF"
    strokeWidth="8"
    strokeLinecap="round"
  />
</Svg>
        </View>

      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FF8A3D',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoContainer: {
    width: width * 0.31,
    height: width * 0.31,
    justifyContent: 'center',
    alignItems: 'center',

    transform: [
      {
        translateY: -(height * 0.02),
      },
    ],
  },
});