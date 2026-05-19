import React from 'react';

import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

interface Props {
  onPress?: () => void;
}

export default function ProfileButton({
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.profileButton}
      onPress={onPress}>

      <Ionicons
        name="person"
        size={18}
        color="#fff"
      />

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  profileButton: {
    width: 58,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});