import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const guidelineWidth = 393;

const scale = width / guidelineWidth;

interface Props {
  item: any;
}

export default function OrderHistoryCard({
  item,
}: Props) {

  return (

    <View style={styles.card}>

      {/* IMAGE */}

      <View style={styles.imageBox}>

        <Image
          source={item.image}
          style={styles.image}
        />

      </View>

      {/* BODY */}

      <View style={styles.body}>

        {/* TOP */}

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

        {/* MIDDLE */}

        <View style={styles.middleRow}>

          <Text style={styles.meta}>
            15 Mar 2020
          </Text>

          <Text style={styles.meta}>
            5 Items
          </Text>

        </View>

        {/* BOTTOM */}

        <View style={styles.bottomRow}>

          <View style={styles.statusRow}>

            <Text style={styles.status}>
              Delivered
            </Text>

            <Text style={styles.tick}>
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
    width: 353 * scale,
    height: 108 * scale,

    backgroundColor: '#FFFFFF',

    borderRadius: 10 * scale,

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 10 * scale,

    marginBottom: 16 * scale,

    alignSelf: 'center',
  },

  imageBox: {
    width: 99 * scale,
    height: 76 * scale,

    backgroundColor: '#F2F2F1',

    borderRadius: 5 * scale,

    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 62 * scale,
    height: 62 * scale,

    resizeMode: 'contain',
  },

  body: {
    flex: 1,

    marginLeft: 16 * scale,

    height: 88 * scale,

    justifyContent: 'space-between',
  },

  topRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'flex-start',
  },

  title: {
    width: 150 * scale,

    fontFamily: 'Montserrat-Medium',

    fontSize: 16 * scale,

    lineHeight: 20 * scale,

    letterSpacing: -0.24,

    color: '#040404',
  },

  price: {
    fontFamily: 'Inter-Regular',

    fontSize: 10 * scale,

    lineHeight: 12 * scale,

    letterSpacing: -0.24,

    color: '#696969',

    marginTop: 2 * scale,
  },

  middleRow: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  meta: {
    marginRight: 10 * scale,

    fontFamily: 'Inter-Regular',

    fontSize: 10 * scale,

    lineHeight: 12 * scale,

    letterSpacing: -0.24,

    color: '#696969',
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

  status: {
    fontFamily: 'Inter-Regular',

    fontSize: 12 * scale,

    lineHeight: 15 * scale,

    letterSpacing: -0.24,

    color: '#696969',
  },

  tick: {
    marginLeft: 4 * scale,

    fontSize: 11 * scale,

    color: '#696969',
  },

  orderId: {
    fontFamily: 'Inter-Regular',

    fontSize: 10 * scale,

    lineHeight: 12 * scale,

    letterSpacing: -0.24,

    color: '#696969',
  },

});