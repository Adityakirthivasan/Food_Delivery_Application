import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';
import Feather from '@react-native-vector-icons/feather';

import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const guidelineWidth = 393;

const scale = width / guidelineWidth;

const CARD_WIDTH = (width - 51) / 2;

interface Props {
  item: any;
}

export default function BestSellerCard({
  item,
}: Props) {

  const navigation = useNavigation<any>();

  return (

    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.95}
      onPress={() =>
        navigation.navigate('ProductDetailScreen', {
          item,
        })
      }>

      {/* IMAGE BOX */}

      <View style={styles.imageContainer}>

        {/* NEW ARRIVED */}

        {item.newArrived && (

          <View style={styles.badge}>

            <Text style={styles.badgeText}>
              New Arrived
            </Text>

          </View>

        )}

        {/* HEART */}

        <TouchableOpacity style={styles.heartButton}>

          <Ionicons
            name="heart-outline"
            size={14}
            color="#040404"
          />

        </TouchableOpacity>

        {/* IMAGE */}

        <Image
          source={item.image}
          style={styles.image}
        />

      </View>

      {/* TITLE */}

      <Text
        numberOfLines={2}
        style={styles.title}>

        {item.title}

      </Text>

      {/* INFO */}

      <View style={styles.infoRow}>

        <View style={styles.infoItem}>

          <Feather
            name="clock"
            size={13}
            color="#696969"
          />

          <Text style={styles.infoText}>
            {item.time}
          </Text>

        </View>

        <View style={styles.separator} />

        <View style={styles.infoItem}>

          <Ionicons
            name="star-outline"
            size={13}
            color="#696969"
          />

          <Text style={styles.infoText}>
            {item.rating}
          </Text>

        </View>

      </View>

      {/* BOTTOM */}

      <View style={styles.bottomRow}>

        <View style={styles.priceRow}>

          <Text style={styles.price}>
            {item.price}
          </Text>

          {!!item.discount && (

            <Text style={styles.discount}>
              {item.discount}
            </Text>

          )}

        </View>

        <TouchableOpacity style={styles.addButton}>

          <Ionicons
            name="add"
            size={18}
            color="#040404"
          />

        </TouchableOpacity>

      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  card: {
    width: CARD_WIDTH,

    marginBottom: 22 * scale,
  },

  imageContainer: {
    width: '100%',
    height: 126 * scale,

    backgroundColor: '#FFFFFF',

    borderRadius: 10 * scale,

    justifyContent: 'center',
    alignItems: 'center',

    position: 'relative',

    overflow: 'hidden',
  },

  badge: {
    position: 'absolute',

    left: 0,
    top: 11 * scale,

    width: 77 * scale,
    height: 29 * scale,

    backgroundColor: '#E95322',

    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,

    justifyContent: 'center',
    alignItems: 'center',

    zIndex: 10,
  },

  badgeText: {
    fontFamily: 'Inter-Bold',

    fontSize: 12 * scale,

    letterSpacing: -0.24,

    color: '#FFFFFF',
  },

  heartButton: {
    width: 22 * scale,
    height: 22 * scale,

    borderRadius: 22,

    backgroundColor: '#FFFFFF',

    position: 'absolute',

    top: 12 * scale,
    right: 12 * scale,

    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowOpacity: 0.1,
    shadowRadius: 7,

    elevation: 3,

    zIndex: 20,
  },

  image: {
    width: 110 * scale,
    height: 90 * scale,

    resizeMode: 'contain',
  },

  title: {
    marginTop: 12 * scale,

    fontFamily: 'Montserrat-Medium',

    fontSize: 16 * scale,
    lineHeight: 20 * scale,

    letterSpacing: -0.24,

    color: '#040404',
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 8 * scale,
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  separator: {
    width: 1,
    height: 15,

    backgroundColor: '#696969',

    marginHorizontal: 6,
  },

  infoText: {
    marginLeft: 4,

    fontFamily: 'Inter-Regular',

    fontSize: 12 * scale,
    lineHeight: 15 * scale,

    letterSpacing: -0.24,

    color: '#696969',
  },

  bottomRow: {
    marginTop: 12 * scale,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  price: {
    fontFamily: 'Montserrat-Medium',

    fontSize: 14 * scale,
    lineHeight: 20 * scale,

    letterSpacing: -0.24,

    color: '#040404',
  },

  discount: {
    marginLeft: 5,

    fontFamily: 'Inter-Regular',

    fontSize: 10 * scale,
    lineHeight: 12 * scale,

    letterSpacing: -0.24,

    color: '#040404',

    opacity: 0.5,
  },

  addButton: {
    width: 25 * scale,
    height: 25 * scale,

    borderRadius: 5 * scale,

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
  },
});