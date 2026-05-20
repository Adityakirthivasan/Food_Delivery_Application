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
    width: 42,
    height: 25,

    borderRadius: 12,

    backgroundColor: '#040404',

    justifyContent: 'center',
    alignItems: 'center',
  },

});