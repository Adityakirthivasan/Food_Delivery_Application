import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

interface Props {
  title: string;
  image: string;
}

export default function CategoryCard({
  title,
  image,
}: Props) {

  return (

    <View style={styles.categoryItem}>

      {/* IMAGE */}

      <Image
        source={{ uri: image }}
        style={styles.categoryImage}
      />

      {/* TEXT */}

      <Text style={styles.categoryText}>
        {title}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  categoryItem: {
    width: 82.43,
    height: 70,

    marginRight: 16,

    alignItems: 'center',
    justifyContent: 'space-between',
  },

  categoryImage: {
    width: 56,
    height: 56,

    borderRadius: 56,

    resizeMode: 'cover',
  },

  categoryText: {
    fontFamily: 'Inter-Regular',
    fontWeight: '400',

    fontSize: 14,
    lineHeight: 14,

    letterSpacing: -0.24,

    textAlign: 'center',

    color: '#040404',
  },

});