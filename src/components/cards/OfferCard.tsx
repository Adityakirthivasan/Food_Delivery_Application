import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

interface Props {
  item: any;
}

export default function OfferCard({
  item,
}: Props) {
  return (
    <View style={styles.card}>

      <View style={styles.leftContent}>

        <Text
          numberOfLines={1}
          style={styles.title}>

          {item.title}

        </Text>

        <Text
          numberOfLines={2}
          style={styles.subtitle}>

          {item.subtitle}

        </Text>

        <View style={styles.couponBox}>

          <Text style={styles.couponText}>
            {item.code}
          </Text>

        </View>

      </View>

      <View style={styles.imageSection}>

        <Image
          source={{ uri: item.image }}
          style={styles.foodImage}
        />

        <View style={styles.discountBadge}>

          <Text style={styles.discountText}>
            {item.discount}
          </Text>

          <Text style={styles.offText}>
            Off!
          </Text>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    width: SCREEN_WIDTH - 40,
    height: 145,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginBottom: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    alignSelf: 'center',
    paddingLeft: 20,
    paddingTop: 18,
  },

  leftContent: {
    width: 165,
  },

  title: {
    fontSize: 19,
    fontWeight: '700',
    color: '#111',
  },

  subtitle: {
    marginTop: 7,
    fontSize: 12,
    lineHeight: 17,
    color: '#666',
    width: 150,
  },

  couponBox: {
    width: 76,
    height: 28,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },

  couponText: {
    fontSize: 10,
    color: '#111',
    fontWeight: '500',
  },

  imageSection: {
    width: 160,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  foodImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -10,
    right: -10,
  },

  discountBadge: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#F15A24',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 14,
  },

  discountText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 26,
  },

  offText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    marginTop: -2,
  },
});