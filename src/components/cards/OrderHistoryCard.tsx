import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

interface Props {
  item: any;
}

export default function OrderHistoryCard({
  item,
}: Props) {
  return (
    <View style={styles.card}>

      <View style={styles.imageContainer}>

        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />

      </View>

      <View style={styles.contentContainer}>

        <View style={styles.topRow}>

          <Text
            numberOfLines={2}
            style={styles.title}>

            {item.title}

          </Text>

          <Text style={styles.price}>
            {item.price}
          </Text>

        </View>

        <View style={styles.middleRow}>

          <Text style={styles.metaText}>
            15 Mar 2020
          </Text>

          <Text style={styles.metaText}>
            5 Items
          </Text>

        </View>

        <View style={styles.bottomRow}>

          <View style={styles.statusRow}>

            <Text style={styles.statusText}>
              Delivered
            </Text>

            <Text style={styles.tickText}>
              ✓✓
            </Text>

          </View>

          <Text style={styles.orderId}>
            OrderId:#123215
          </Text>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    width: 353,
    height: 105,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginBottom: 16,
    flexDirection: 'row',
    paddingHorizontal: 14,
    alignItems: 'center',
  },

  imageContainer: {
    width: 82,
    height: 82,
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 58,
    height: 58,
    resizeMode: 'contain',
  },

  contentContainer: {
    flex: 1,
    marginLeft: 14,
    height: 82,
    justifyContent: 'space-between',
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  title: {
    width: 170,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '500',
    color: '#111111',
  },

  price: {
    fontSize: 13,
    color: '#777777',
    marginTop: 2,
  },

  middleRow: {
    flexDirection: 'row',
    marginTop: 2,
  },

  metaText: {
    fontSize: 12,
    color: '#8E8E93',
    marginRight: 14,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusText: {
    fontSize: 14,
    color: '#666666',
  },

  tickText: {
    fontSize: 12,
    color: '#666666',
    marginLeft: 5,
  },

  orderId: {
    fontSize: 12,
    color: '#8E8E93',
  },
});