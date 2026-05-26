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
          size={small ? 7 : 8}
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
    width: 12,
    height: 12,

    borderWidth: scale(1),
    borderColor: '#43D12D',

    borderRadius: 2,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',
  },

  smallBox: {
    width: scale(14),
    height: scale(14),
  },

text: {
  marginLeft: 3,

  fontFamily: 'Inter',

  fontWeight: '700',

  fontSize: 11,

  lineHeight: 16,

  color: '#040404',
},

  smallText: {
    fontSize: scale(9),
  },

});