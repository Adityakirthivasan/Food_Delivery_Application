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

const CARD_WIDTH = (Dimensions.get('window').width - 51) / 2;

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

      <View style={styles.imageContainer}>

        {item.newArrived && (

          <View style={styles.badge}>

            <Text style={styles.badgeText}>
              New Arrived
            </Text>

          </View>

        )}

        <TouchableOpacity style={styles.heartButton}>

          <Ionicons
            name="heart-outline"
            size={18}
            color="#111"
          />

        </TouchableOpacity>

        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />

      </View>

      <Text
        numberOfLines={2}
        style={styles.title}>

        {item.title}

      </Text>

      <View style={styles.infoRow}>

        <View style={styles.infoItem}>

          <Feather
            name="clock"
            size={14}
            color="#7A7A7A"
          />

          <Text style={styles.infoText}>
            {item.time}
          </Text>

        </View>

        <Text style={styles.divider}>
          |
        </Text>

        <View style={styles.infoItem}>

          <Ionicons
            name="star-outline"
            size={14}
            color="#7A7A7A"
          />

          <Text style={styles.infoText}>
            {item.rating}
          </Text>

        </View>

      </View>

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
            size={22}
            color="#111"
          />

        </TouchableOpacity>

      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  card: {
    width: CARD_WIDTH,
    marginBottom: 22,
  },

  imageContainer: {
    width: '100%',
    height: 165,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  badge: {
    position: 'absolute',
    top: 10,
    left: 0,
    backgroundColor: '#F15A24',
    height: 28,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 10,
    zIndex: 5,
  },

  badgeText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  heartButton: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  image: {
    width: 135,
    height: 135,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111',
    marginTop: 10,
    lineHeight: 20,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  divider: {
    marginHorizontal: 6,
    color: '#A0A0A0',
    fontSize: 13,
  },

  infoText: {
    fontSize: 12,
    color: '#7A7A7A',
    marginLeft: 4,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111',
  },

  discount: {
    fontSize: 12,
    color: '#8A8A8A',
    marginLeft: 6,
    marginTop: 1,
  },

  addButton: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },
});