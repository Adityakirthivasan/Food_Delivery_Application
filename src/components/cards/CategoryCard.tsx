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

      <Image
        source={{ uri: image }}
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
    marginRight: 20,
    alignItems: 'center',
  },

  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  categoryText: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '500',
  },
});