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

import RatingBadge from '../common/RatingBadge';

import { useNavigation } from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;

interface Props {
  item: any;
  onPress?: () => void;
}

export default function RestaurantCard({
  item,
}: Props) {

  const navigation = useNavigation<any>();

  return (

    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.95}
      onPress={() =>
        navigation.navigate('RestaurantScreen', {
          item,
        })
      }>

      {/* IMAGE SECTION */}

      <View>

        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />

        {/* HEART */}

        <TouchableOpacity style={styles.heart}>

          <Ionicons
            name="heart-outline"
            size={28}
            color="#fff"
          />

        </TouchableOpacity>

        {/* SLIDER */}

        <View style={styles.sliderContainer}>

          <View style={styles.sliderBase}>

            <View style={styles.sliderActive} />

          </View>

        </View>

      </View>

      {/* CONTENT */}

      <View style={styles.content}>

        <Text style={styles.flashText}>
          Flash food in 10 min
        </Text>

        <Text style={styles.name}>
          {item.name}
        </Text>

        <View style={styles.ratingRow}>

          <RatingBadge rating={item.rating} />

          <Text style={styles.info}>
            (1.4k+) • {item.deliveryTime} • {item.distance}
          </Text>

        </View>

        <Text style={styles.cuisine}>
          {item.cuisine}
        </Text>

        <Text style={styles.location}>
          {item.location}
        </Text>

        {/* TAGS */}

        <View style={styles.tagRow}>

          <View style={styles.tag}>

            <Text style={styles.tagText}>
              Last 100 orders without complaints
            </Text>

          </View>

          <View style={styles.tag}>

            <Text style={styles.tagText}>
              Frequently reordered
            </Text>

          </View>

        </View>

      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  card: {
    width: SCREEN_WIDTH - 32,

    borderRadius: 16,

    borderWidth: 1,
    borderColor: '#E9E9E9',

    backgroundColor: '#FFFFFF',

    marginTop: 18,

    overflow: 'hidden',

    alignSelf: 'center',
  },

  image: {
    width: '100%',
    height: 205,

    backgroundColor: '#E7CBC4',
  },

  heart: {
    position: 'absolute',

    top: 12,
    right: 12,
  },

  /* SLIDER */

  sliderContainer: {
    position: 'absolute',

    bottom: 14,
    right: 14,
  },

  sliderBase: {
    width: 25,
    height: 5,

    borderRadius: 10,

    backgroundColor: '#00000033',

    overflow: 'hidden',

    justifyContent: 'center',
  },

  sliderActive: {
    width: 11,
    height: 5,

    borderRadius: 10,

    backgroundColor: '#000000',
  },

  /* CONTENT */

  content: {
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 14,
  },

  flashText: {
    fontFamily: 'Inter-Regular',
    fontWeight: '400',

    fontSize: 13,

    color: '#555555',
  },

  name: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: '700',

    fontSize: 22,

    marginTop: 4,

    color: '#000000',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 6,
  },

  info: {
    fontFamily: 'Inter-Bold',
    fontWeight: '700',

    fontSize: 13,

    color: '#111111',
  },

  cuisine: {
    marginTop: 6,

    color: '#666666',
  },

  location: {
    marginTop: 4,

    color: '#777777',
  },

  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    marginTop: 14,
  },

  tag: {
    backgroundColor: '#F1F1F1',

    paddingHorizontal: 10,
    paddingVertical: 6,

    borderRadius: 8,

    marginRight: 8,
  },

  tagText: {
    fontSize: 11,

    color: '#444444',

    fontWeight: '500',
  },

});