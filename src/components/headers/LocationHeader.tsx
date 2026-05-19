import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import ProfileButton from '../buttons/ProfileButton';

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
            size={16}
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
            size={16}
            color={dark ? '#111' : '#fff'}
          />

        </View>

        <Text
          style={[
            styles.locationSub,
            {
              color: dark ? '#777' : '#FDE7D3',
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
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 4,
  },

  locationSub: {
    marginTop: 5,
    fontSize: 13,
  },
});