import React from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

interface Props {
  item?: any;
}

export default function AddButton({
  item,
}: Props) {

  const navigation =
    useNavigation<any>();

  return (

    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        navigation.navigate(
          'ProductDetailScreen',
          {
            item,
          },
        )
      }>

      <Text style={styles.text}>
        ADD
      </Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  button: {
    width: 70,
    height: 34,

    borderRadius: 8,

    borderWidth: 1,
    borderColor: '#D9D9D9',

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#fff',
  },

  text: {
    fontSize: 14,

    fontWeight: '700',

    color: '#111',
  },
});