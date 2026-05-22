import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import {
  scale,
} from '../../utils/responsive';

interface Props {
  rating: string;
  small?: boolean;
}

export default function RatingBadge({
  rating,
  small,
}: Props) {

  return (

    <View style={styles.wrapper}>

      <View
        style={[
          styles.box,
          small && styles.smallBox,
        ]}>

        <Ionicons
          name="star"
          size={small ? scale(8) : scale(10)}
          color="#43D12D"
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

  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  box: {
    width: scale(16),
    height: scale(16),

    borderWidth: scale(1.5),
    borderColor: '#43D12D',

    borderRadius: scale(2),

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',
  },

  smallBox: {
    width: scale(14),
    height: scale(14),
  },

  text: {
    marginLeft: scale(4),

    fontFamily: 'Inter-Bold',

    fontSize: scale(10),
    lineHeight: scale(12),

    color: '#040404',
  },

  smallText: {
    fontSize: scale(9),
  },

});