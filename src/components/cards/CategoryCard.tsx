import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const scale = width / 393;

interface Props {
  title: string;
  image: any;
}

export default function CategoryCard({
  title,
  image,
}: Props) {

  return (

    <View style={styles.categoryItem}>

      <Image
        source={image}
        style={styles.categoryImage}
      />

      <Text style={styles.categoryText}>
        {title}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  categoryItem: {
    width: 82 * scale,

    marginRight: 16 * scale,

    alignItems: 'center',
  },

  categoryImage: {
    width: 58 * scale,
    height: 58 * scale,

    resizeMode: 'contain',
  },

  categoryText: {
    marginTop: 8 * scale,

    fontFamily: 'Montserrat-Medium',

    fontSize: 12 * scale,
    lineHeight: 16 * scale,

    letterSpacing: -0.2,

    textAlign: 'center',

    color: '#040404',
  },

});