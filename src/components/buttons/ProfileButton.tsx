import React from 'react';

import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import {
  scale,
} from '../../utils/responsive';

interface Props {
  onPress?: () => void;
}

export default function ProfileButton({
  onPress,
}: Props) {

  return (

    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.profileButton}
      onPress={onPress}>

      <Ionicons
        name="person"
        size={scale(16)}
        color="#FFFFFF"
      />

    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({

  profileButton: {
    width: scale(42),
    height: scale(25),

    borderRadius: scale(12),

    backgroundColor: '#040404',

    justifyContent: 'center',
    alignItems: 'center',
  },

});