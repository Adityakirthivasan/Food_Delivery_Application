import React from 'react';

import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const guidelineWidth = 393;

const scale = width / guidelineWidth;

interface Props {
  item: any;
}

export default function OfferCard({ item }: Props) {
  return (
    <View style={styles.card}>
      {/* LEFT SECTION */}

      <View style={styles.leftSection}>
        <View>
          <Text numberOfLines={1} style={styles.title}>
            {item.name}
          </Text>

          <Text numberOfLines={2} style={styles.subtitle}>
            {item.description}
          </Text>
        </View>

        <View style={styles.couponBox}>
          <Text style={styles.couponText}>{item.promoCode}</Text>
        </View>
      </View>

      {/* RIGHT SECTION */}

      <View style={styles.rightSection}>
        <Image
          source={{ uri: item.image }}
          style={[
            styles.image,

            item.id === 1 && styles.burgerImage,
            item.id === 2 && styles.dessertImage,
            item.id === 3 && styles.meatImage,
            item.id === 4 && styles.biriyaniImage,
          ]}
        />

        {/* BADGE */}

        <View style={styles.badge}>
          <Text style={styles.discount}>{item.percentOff}%</Text>

          <Text style={styles.off}>Off!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width - 40,
    height: 145,

    alignSelf: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 20,

    marginBottom: 14,

    flexDirection: 'row',

    overflow: 'hidden',

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowOpacity: 0.1,
    shadowRadius: 7,

    elevation: 4,
  },

  /* LEFT */

  leftSection: {
    width: '52%',

    paddingLeft: 20,
    paddingTop: 18,
    paddingBottom: 18,

    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'Montserrat-SemiBold',

    fontSize: 20 * scale,
    lineHeight: 24 * scale,

    letterSpacing: -0.24,

    color: '#040404',
  },

  subtitle: {
    width: 155,

    marginTop: 8,

    fontFamily: 'Inter-Regular',

    fontSize: 14 * scale,
    lineHeight: 17 * scale,

    letterSpacing: -0.24,

    color: '#696969',
  },

  couponBox: {
    width: 61,
    height: 22,

    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#000',

    justifyContent: 'center',
    alignItems: 'center',
  },

  couponText: {
    fontFamily: 'Inter-Regular',

    fontSize: 10,

    color: '#000',
  },

  /* RIGHT */

  rightSection: {
    flex: 1,

    position: 'relative',

    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    resizeMode: 'contain',

    position: 'absolute',
  },

  /* IMAGE FIXES */

  burgerImage: {
    width: 160,
    height: 118,

    right: -6,
    top: 16,
  },

  dessertImage: {
    width: 128,
    height: 118,

    right: 8,
    top: 14,
  },

  meatImage: {
    width: 145,
    height: 92,

    right: -2,
    top: 34,
  },

  biriyaniImage: {
    width: 160,
    height: 160,

    right: -8,
    top: -6,
  },

  /* BADGE */

  badge: {
    width: 57,
    height: 57,

    borderRadius: 57,

    backgroundColor: '#E95322',

    position: 'absolute',

    top: 12,
    right: 18,

    justifyContent: 'center',
    alignItems: 'center',

    zIndex: 20,
  },

  discount: {
    fontFamily: 'Montserrat-SemiBold',

    fontSize: 20,

    lineHeight: 22,

    color: '#FFFFFF',
  },

  off: {
    fontFamily: 'Montserrat-Medium',

    fontSize: 12,

    lineHeight: 14,

    color: '#FFFFFF',

    marginTop: -2,
  },
});