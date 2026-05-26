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

  textStyle?: any;
}
export default function FilterChip({
  title,
  icon,
  textStyle,
}: Props){
  const isFlash =
    title === 'Flash food in 10 min';

  const isFilter =
    title === 'Filter';

  const isSort =
    title === 'Sort By';

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.chip,

        isFilter &&
          styles.filterChip,

        isSort &&
          styles.sortChip,

        isFlash &&
          styles.flashChip,
      ]}>

      <View style={styles.row}>

        {/* FLASH ICON FIRST */}

        {isFlash && (
          <View style={styles.flashIcon}>
            {icon}
          </View>
        )}

        <Text
  style={[
    styles.text,
    textStyle,
  ]}>
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
    borderRadius: 6 * scale,

    borderWidth: 1,
    borderColor: '#D9D9D9',

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    marginRight: 8 * scale,
  },

  /* FILTER */

  filterChip: {
    width: 76 * scale,
    height: 25 * scale,

    paddingHorizontal: 12 * scale,
  },

  /* SORT */

  sortChip: {
    width: 91 * scale,
    height: 25 * scale,

    paddingHorizontal: 12 * scale,
  },

  /* FLASH */

  flashChip: {
    width: 170 * scale,
    height: 25 * scale,

    paddingHorizontal: 12 * scale,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 4 * scale,
  },

  flashIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontFamily: 'Inter',

    fontWeight: '400',

    fontSize: 14 * scale,

    lineHeight: 21 * scale,

    letterSpacing: -0.32,

    textAlign: 'center',

    color: '#040404',

    includeFontPadding: false,
  },
});