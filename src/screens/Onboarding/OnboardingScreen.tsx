import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Ionicons from '@react-native-vector-icons/ionicons';

import Photo from '../../assets/images/onboard/Photo.svg';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/types';

const { width, height } = Dimensions.get('window');
type NavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export default function OnboardingScreen() {

  const navigation =
    useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>

      {/* Top Carousel */}
      <View style={styles.carouselContainer}>

        {/* Left Card */}
        <View style={styles.sideCard}>
          <LinearGradient
            colors={['#FF8340', '#C64500']}
            style={styles.cardGradient}
          />
        </View>

        {/* Center Card */}
        <View style={styles.centerCard}>

          <LinearGradient
            colors={['#FF8340', '#C64500']}
            style={styles.centerGradient}
          />

          {/* SVG Illustration */}
<View style={styles.photoWrapper}>
  <Photo
    width="112%"
    height="112%"
  />
</View>

          {/* Logo Text */}
          {/* <Text style={styles.brandText}>
            Dine Dash
          </Text> */}
        </View>

        {/* Right Card */}
        <View style={styles.sideCard}>
          <LinearGradient
            colors={['#FF8340', '#C64500']}
            style={styles.cardGradient}
          />
        </View>
      </View>

      {/* Page Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
         <Text style={styles.title}>
  Delight Delivered,{'\n'}
  Cravings Satisfied.
</Text>
        </Text>

<Text style={styles.description}>
  Savor the convenience of delicious meals
  delivered right to your doorstep.
  {'\n'}
  Let's embark on a culinary journey together!
</Text>
      </View>

      {/* Next Button */}
      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.nextButton}
       onPress={() =>
  navigation.navigate(
    'LoginScreen'
  )
}>

        <LinearGradient
         colors={['#FF8340', '#C64500']}
          style={styles.buttonGradient}>

          <Ionicons
            name="arrow-forward"
            size={width * 0.09}
            color="#FFFFFF"
          />
        </LinearGradient>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

  /* ---------- Carousel ---------- */
carouselContainer: {
  width: '100%',
  height: height * 0.50,
  marginTop: height * 0.055,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

sideCard: {
  width: width * 0.18,
  height: height * 0.34,
    borderRadius: width * 0.045,
    overflow: 'hidden',
    opacity: 0.75,
  },

  cardGradient: {
    flex: 1,
  },

  centerCard: {
    width: width * 0.66,
    height: height * 0.47,
    borderRadius: width * 0.05,
    overflow: 'hidden',

    justifyContent: 'center',
    alignItems: 'center',

    marginHorizontal: width * 0.03,

    shadowColor: '#EB4D57',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 16,

    elevation: 12,
  },

 centerGradient: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
},

photoWrapper: {
  position: 'absolute',

  top: '-2%',
  left: '-6%',

  width: '112%',
  height: '112%',

  justifyContent: 'center',
  alignItems: 'center',
},


brandText: {
  position: 'absolute',
  bottom: height * 0.085,

  fontSize: width * 0.05,
  fontWeight: '700',
  color: '#FFFFFF',
},

  /* ---------- Text Content ---------- */

  contentContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: width * 0.06,
  marginTop: height * 0.02,
  },

  title: {
    width: width * 0.7,

    textAlign: 'center',
    fontSize: width * 0.064,
    fontWeight: '700',
    lineHeight: width * 0.085,

    color: '#000000',
  },

  description: {
    width: width * 0.88,

    marginTop: height * 0.018,

    textAlign: 'center',
    fontSize: width * 0.037,
    lineHeight: width * 0.055,

    color: '#343434',
  },

  /* ---------- Button ---------- */

  nextButton: {
    position: 'absolute',
    bottom: height * 0.065,

width: width * 0.17,
height: width * 0.17,
borderRadius: width * 0.085,

    overflow: 'hidden',

    shadowColor: '#EB4D57',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 16,

    elevation: 14,
  },

  buttonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});