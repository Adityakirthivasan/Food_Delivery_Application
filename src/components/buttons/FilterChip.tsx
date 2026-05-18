import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';

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
  return (
    <TouchableOpacity
      style={[
        styles.chip,
        large && styles.largeChip,
      ]}>

      <View style={styles.row}>
        {icon}
        <Text style={styles.text}>
          {title}
        </Text>
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    height: 36,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    justifyContent: 'center',
    paddingHorizontal: 14,
    marginRight: 10,
  },

  largeChip: {
    paddingHorizontal: 18,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  text: {
    fontSize: 14,
    fontWeight: '500',
  },
});