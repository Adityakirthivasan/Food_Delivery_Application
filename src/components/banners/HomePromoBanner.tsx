import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function HomePromoBanner() {

  return (

    <View style={styles.container}>

      {/* TITLE */}

      <Text style={styles.title}>
        Get extra $50 OFF!
      </Text>

      {/* SUBTITLE */}

      <Text style={styles.subtitle}>
        Win today, eat for less tomorrow.
      </Text>

      {/* BUTTON */}

      <TouchableOpacity style={styles.orderButton}>

        <Text style={styles.orderText}>
          Order now
        </Text>

      </TouchableOpacity>

      {/* IMAGE SECTION */}

      <View style={styles.imageContainer}>

        {/* SPEECH BUBBLE */}

        <Image
          source={require('../../assets/images/home/promo/Speech-bubble.png')}
          style={styles.speechBubble}
        />

        {/* COMBO TEXT */}

        <Image
          source={require('../../assets/images/home/promo/Combo-bubble.png')}
          style={styles.comboBubble}
        />

        {/* BURGER */}

        <Image
          source={require('../../assets/images/home/promo/Burger.png')}
          style={styles.burger}
        />

        {/* CHARACTER */}

        <Image
          source={require('../../assets/images/home/promo/Character.png')}
          style={styles.character}
        />

        {/* DRINK */}

        <Image
          source={require('../../assets/images/home/promo/Drink.png')}
          style={styles.drink}
        />

        {/* FRIES */}

        <Image
          source={require('../../assets/images/home/promo/Fries.png')}
          style={styles.fries}
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    width: 393,
    height: 170,
    marginTop: 18,
    position: 'relative',
  },

title: {
  position: 'absolute',
  width: 190,
  height: 24,

  top: 20,
  left: 0,

  fontFamily: 'Montserrat-Bold',
  fontSize: 20,
  lineHeight: 24,
  letterSpacing: -0.24,

  color: '#FFFFFF',
},

subtitle: {
  position: 'absolute',
  width: 190,
  height: 30,

  top: 58,
  left: 0,

  fontFamily: 'Montserrat-SemiBold',
  fontSize: 12,
  lineHeight: 15,
  letterSpacing: -0.24,

  color: '#FFFFFF',
},

  orderButton: {
    position: 'absolute',

    width: 83,
    height: 31,

    top: 106,
    left: 0,

    borderRadius: 10,
    backgroundColor: '#000',

    justifyContent: 'center',
    alignItems: 'center',
  },

 orderText: {
  fontFamily: 'Montserrat-Bold',
  fontSize: 12,
  lineHeight: 15,
  letterSpacing: -0.24,

  color: '#FFFFFF',
},

  imageContainer: {
    position: 'absolute',

    width: 165.22,
    height: 164.79,

    top: 10,
    left: 212,
  },

  speechBubble: {
    position: 'absolute',

    width: 61.95,
    height: 41.61,

    top: 0,
    left: 0,

    resizeMode: 'contain',
  },

  comboBubble: {
    position: 'absolute',

    width: 51.06,
    height: 25.29,

    top: 8,
    left: 5,

    resizeMode: 'contain',
  },

  burger: {
    position: 'absolute',

    width: 75.55,
    height: 63.61,

    top: 49,
    left: 0,

    resizeMode: 'contain',
  },

  character: {
    position: 'absolute',

    width: 60.97,
    height: 147.82,

    top: -2,
    left: 62,

    resizeMode: 'contain',
  },

  drink: {
    position: 'absolute',

    width: 46.24,
    height: 95.47,

    top: 20,
    left: 119,

    resizeMode: 'contain',
  },

  fries: {
    position: 'absolute',

    width: 34.5,
    height: 56.79,

    top: 63,
    left: 98,

    resizeMode: 'contain',
  },

});