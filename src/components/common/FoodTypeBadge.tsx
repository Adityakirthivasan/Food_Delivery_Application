import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

interface Props {
  veg?: boolean;
  title: string;
}

export default function FoodTypeBadge({
  veg = true,
  title,
}: Props) {
  return (
    <View style={styles.row}>

      <View
        style={[
          styles.outer,
          {
            borderColor: veg ? '#34C759' : '#FF6B35',
          },
        ]}>

        <View
          style={[
            styles.inner,
            {
              backgroundColor: veg ? '#34C759' : '#FF6B35',
            },
          ]}
        />

      </View>

      <Text
        style={[
          styles.text,
          {
            color: veg ? '#34C759' : '#FF6B35',
          },
        ]}>

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

  outer: {
    width: 12,
    height: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },

  inner: {
    width: 6,
    height: 6,
    borderRadius: 10,
  },

  text: {
    fontSize: 12,
    fontWeight: '500',
  },
});