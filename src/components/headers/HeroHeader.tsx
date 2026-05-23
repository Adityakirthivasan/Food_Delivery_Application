import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  Platform,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Ionicons from '@react-native-vector-icons/ionicons';

import {
  scale,
  width,
} from '../../utils/responsive';

interface Props {
  title: string;
  subtitle: string;
  buttonText: string;

  image: string | ImageSourcePropType;

  showIcon?: boolean;

  titleStyle?: any;
  subtitleStyle?: any;
  imageStyle?: any;
  containerStyle?: any;
  contentStyle?: any;
}

export default function HeroHeader({
  title,
  subtitle,
  buttonText,
  image,
  showIcon,

  titleStyle,
  subtitleStyle,
  imageStyle,
  containerStyle,
  contentStyle,
}: Props) {

  return (

    <LinearGradient
      colors={[
        '#FF8340',
        '#C64500',
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={[
        styles.topSection,
        containerStyle,
      ]}>

      <View
        style={[
          styles.offerContainer,
          contentStyle,
        ]}>

        {/* LEFT CONTENT */}

        <View style={styles.leftContent}>

          <Text
            style={[
              styles.offerTitle,
              titleStyle,
            ]}>

            {title}

          </Text>

          <Text
            style={[
              styles.offerSub,
              subtitleStyle,
            ]}>

            {subtitle}

          </Text>

          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.orderButton}>

            {showIcon && (

              <Ionicons
                name="flash-outline"
                size={13}
                color="#FFFFFF"
                style={styles.flashIcon}
              />

            )}

            <Text style={styles.orderButtonText}>
              {buttonText}
            </Text>

          </TouchableOpacity>

        </View>

        {/* IMAGE */}

        <Image
          source={
            typeof image === 'string'
              ? { uri: image }
              : image
          }
          style={[
            styles.offerImage,
            imageStyle,
          ]}
        />

      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  topSection: {
    width: width,

    height: width * 0.72,

    minHeight: 276,
    maxHeight: 286,

    borderBottomLeftRadius: scale(30),
    borderBottomRightRadius: scale(30),

    overflow: 'hidden',
  },

  offerContainer: {
    flex: 1,
  },

leftContent: {
  paddingTop: scale(42),
  paddingHorizontal: scale(16),

  width: '56%',

  zIndex: 20,
},

  offerTitle: {
    width: scale(190),

    marginTop: scale(16),

    fontFamily: 'Montserrat-Bold',

    fontSize: 20,
    lineHeight: 24,

    letterSpacing: -0.3,

    color: '#FFFFFF',

    includeFontPadding: false,
  },

  offerSub: {
    width: scale(180),

    marginTop: scale(7),

    fontFamily: 'Montserrat-SemiBold',

    fontSize: 12,
    lineHeight: 16,

    letterSpacing: -0.2,

    color: '#FFFFFF',

    includeFontPadding: false,
  },

  orderButton: {
    width: scale(99),
    height: scale(38),

    marginTop: scale(18),

    borderRadius: scale(10),

    backgroundColor: '#040404',

    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row',
  },

  flashIcon: {
    marginRight: scale(4),
  },

  orderButtonText: {
    fontFamily: 'Montserrat',
    fontWeight:'bold',
    fontSize: 13,
    lineHeight: 12,

    letterSpacing: -0.2,

    color: '#FFFFFF',

    includeFontPadding: false,
  },

  offerImage: {
    width: scale(160),
    height: scale(160),

    position: 'absolute',

    right: scale(-1),
    bottom: scale(-3),

    resizeMode: 'contain',
  },

});