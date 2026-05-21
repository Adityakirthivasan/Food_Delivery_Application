import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import ProfileButton from '../buttons/ProfileButton';

const { width } = Dimensions.get('window');

const scale = width / 393;

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

      <View>

        <View style={styles.locationTitleRow}>

          <Ionicons
            name="location-sharp"
            size={18 * scale}
            color={dark ? '#111' : '#fff'}
          />

          <Text
            style={[
              styles.locationTitle,
              {
                color: dark ? '#111' : '#fff',
              },
            ]}>

            {title}

          </Text>

          <Ionicons
            name="chevron-down"
            size={18 * scale}
            color={dark ? '#111' : '#fff'}
          />

        </View>

        <Text
          numberOfLines={1}
          style={[
            styles.locationSub,
            {
              color: dark ? '#777' : '#FFFFFFBF',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  locationTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16 * scale,
    lineHeight: 16 * scale,
    letterSpacing: -0.24,
    marginHorizontal: 4 * scale,
  },

  locationSub: {
    width: 168 * scale,
    marginTop: 6 * scale,

    fontFamily: 'Montserrat-Light',
    fontSize: 12 * scale,
    lineHeight: 12 * scale,
    letterSpacing: -0.24,
  },

});