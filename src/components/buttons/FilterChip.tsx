import React from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const scale = width / 393;

interface Props {
  title: string;
  icon?: React.ReactNode;
  large?: boolean;
}

export default function FilterChip({
  title,
  icon,
  large,
}: Props) {

  const isFlash =
    title === 'Flash food in 10 min';

  return (

    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.chip,

        large && styles.largeChip,
      ]}>

      <View style={styles.row}>

        {/* FLASH ICON FIRST */}

        {isFlash && icon}

        <Text style={styles.text}>
          {title}
        </Text>

        {/* OTHER ICONS LAST */}

        {!isFlash && icon}

      </View>

    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({

  chip: {
    height: 42 * scale,

    borderRadius: 8 * scale,

    borderWidth: 1,
    borderColor: '#D9D9D9',

    justifyContent: 'center',

    paddingHorizontal: 16 * scale,

    marginRight: 12 * scale,

    backgroundColor: '#FFFFFF',
  },

  largeChip: {
    paddingHorizontal: 18 * scale,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 6 * scale,
  },

  text: {
    fontFamily: 'Inter-SemiBold',

    fontSize: 16 * scale,
    lineHeight: 20 * scale,

    color: '#040404',
  },

});