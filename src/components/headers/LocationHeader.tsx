import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import ProfileButton from '../buttons/ProfileButton';

import {
  scale,
} from '../../utils/responsive';

interface Props {
  title: string;
  subtitle: string;
  dark?: boolean;
  onProfilePress?: () => void;
}

export default function LocationHeader({
  title,
  subtitle,
  dark,
  onProfilePress,
}: Props) {

  return (

    <View style={styles.locationRow}>

      <View style={styles.leftSection}>

        <View style={styles.locationTitleRow}>

          <Ionicons
            name="location-sharp"
            size={scale(17)}
            color={dark ? '#111' : '#FFFFFF'}
          />

          <Text
            style={[
              styles.locationTitle,
              {
                color: dark ? '#111' : '#FFFFFF',
              },
            ]}>

            {title}

          </Text>

          <Ionicons
            name="chevron-down"
            size={scale(17)}
            color={dark ? '#111' : '#FFFFFF'}
          />

        </View>

        <Text
          numberOfLines={1}
          style={[
            styles.locationSub,
            {
              color: dark
                ? '#777'
                : 'rgba(255,255,255,0.78)',
            },
          ]}>

          {subtitle}

        </Text>

      </View>

      <ProfileButton onPress={onProfilePress} />

    </View>

  );
}

const styles = StyleSheet.create({

  locationRow: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  leftSection: {
    width: '74%',
  },

  locationTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

locationTitle: {
  marginHorizontal: scale(5),

  fontFamily: 'Inter-SemiBold',

  fontSize: scale(16),
  lineHeight: scale(19),

  letterSpacing: -0.24,

  color: '#FFFFFF',

  includeFontPadding: false,
},

locationSub: {
  marginTop: scale(2),

  fontFamily: 'Montserrat-Light',

  fontSize: scale(12),
  lineHeight: scale(15),

  letterSpacing: -0.24,

  color: 'rgba(255,255,255,0.75)',

  includeFontPadding: false,
},

});