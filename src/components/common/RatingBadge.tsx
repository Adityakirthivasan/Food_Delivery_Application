import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

interface Props {
  rating: string;
  small?: boolean;
}

export default function RatingBadge({
  rating,
  small,
}: Props) {
  return (
    <View style={styles.row}>

      <View
        style={[
          styles.box,
          small && styles.smallBox,
        ]}>

        <Ionicons
          name="star"
          size={small ? 6 : 8}
          color="#fff"
        />

      </View>

      <Text
        style={[
          styles.text,
          small && styles.smallText,
        ]}>

        {rating}

      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  box: {
    width: 12,
    height: 12,
    borderRadius: 2,
    backgroundColor: '#34C759',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },

  text: {
    fontSize: 13,
    color: '#111',
    fontWeight: '700',
  },

  smallBox: {
    width: 10,
    height: 10,
  },

  smallText: {
    fontSize: 12,
    color: '#444',
  },
});