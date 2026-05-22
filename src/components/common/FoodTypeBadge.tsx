import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const scale = width / 393;

interface Props {
  veg?: boolean;
  title: string;
}

export default function FoodTypeBadge({
  veg,
  title,
}: Props) {

  return (

    <View style={styles.row}>

      <View
        style={[
          styles.dotBox,

          {
            borderColor: veg
              ? '#46A72C'
              : '#E95322',
          },
        ]}>

        <View
          style={[
            styles.dot,

            {
              backgroundColor: veg
                ? '#46A72C'
                : '#E95322',
            },
          ]}
        />

      </View>

      <Text style={styles.text}>
        {title}
      </Text>

    </View>

  );
}

const styles = StyleSheet.create({

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dotBox: {
    width: 11 * scale,
    height: 11 * scale,

    borderWidth: 1 * scale,

    borderRadius: 2 * scale,

    justifyContent: 'center',
    alignItems: 'center',
  },

  dot: {
    width: 5 * scale,
    height: 5 * scale,

    borderRadius: 5 * scale,
  },

  text: {
    marginLeft: 4 * scale,

    fontFamily: 'Inter-Regular',

    fontSize: 10 * scale,
    lineHeight: 12 * scale,

    color: '#E95322',
  },

});