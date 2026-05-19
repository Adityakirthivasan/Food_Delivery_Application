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

import RatingBadge from '../common/RatingBadge';
import { useNavigation } from '@react-navigation/native';

const CARD_WIDTH = Dimensions.get('window').width * 0.37;

interface Props {
  item: {
    category: string;
    rating: string;
    name: string;
    time: string;
    distance: string;
    image: string;
  };
}

export default function TopPickCard({
  item,
}: Props) {

  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
  style={styles.card}
  activeOpacity={0.9}
  onPress={() =>
    navigation.navigate('ProductDetailScreen', {
      item,
    })
  }>

      <View>

        <Image
          source={{uri: item.image}}
          style={styles.image}
        />

        <TouchableOpacity style={styles.heartButton}>

          <Ionicons
            name="heart-outline"
            size={22}
            color="#fff"
          />

        </TouchableOpacity>

      </View>

      <View style={styles.foodTypeRow}>

        <Text style={styles.foodType}>
          {item.category}
        </Text>

        <RatingBadge
          rating={item.rating}
          small
        />

      </View>

      <Text numberOfLines={1} style={styles.restaurantName}>
        {item.name}
      </Text>

      <View style={styles.foodInfoRow}>

        <View style={styles.infoItem}>

          <Feather
            name="clock"
            size={13}
            color="#8A8A8A"
          />

          <Text style={styles.foodInfo}>
            {item.time}
          </Text>

        </View>

        <View style={styles.infoItem}>

          <Ionicons
            name="paper-plane-outline"
            size={13}
            color="#8A8A8A"
          />

          <Text style={styles.foodInfo}>
            {item.distance}
          </Text>

        </View>

      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  card: {
    width: CARD_WIDTH,
    marginTop: 18,
    marginRight: 14,
  },

  image: {
    width: '100%',
    height: 170,
    borderRadius: 16,
  },

  heartButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  foodTypeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  foodType: {
    fontSize: 14,
    color: '#444',
  },

  // smallRatingContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginTop: 2,
  // },

  // smallRatingBox: {
  //   width: 10,
  //   height: 10,
  //   borderRadius: 2,
  //   backgroundColor: '#FF6B35',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginRight: 4,
  // },

  // smallRatingText: {
  //   fontSize: 12,
  //   color: '#444',
  // },

  restaurantName: {
    fontSize: 15,
    fontWeight: '400',
    marginTop: 6,
    color: '#3A3A3A',
  },

  foodInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 14,
  },

  foodInfo: {
    color: '#777',
    fontSize: 12,
    marginLeft: 4,
  },
});