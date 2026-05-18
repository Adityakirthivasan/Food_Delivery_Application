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

const SCREEN_WIDTH = Dimensions.get('window').width;

interface Props {
  item: any;
}

export default function RestaurantCard({
  item,
}: Props) {
  return (
    <View style={styles.card}>

      <View>

        <Image
          source={{uri: item.image}}
          style={styles.image}
        />

        <TouchableOpacity style={styles.heart}>

          <Ionicons
            name="heart-outline"
            size={28}
            color="#fff"
          />

        </TouchableOpacity>

        {/* SLIDER DOTS */}

        <View style={styles.sliderDots}>

          <View style={styles.activeDot} />

          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />

        </View>

      </View>

      <View style={styles.content}>

        <Text style={styles.flashText}>
          Flash food in 10 min
        </Text>

        <Text style={styles.name}>
          {item.name}
        </Text>

        <View style={styles.ratingRow}>

          <View style={styles.ratingBox}>

            <Ionicons
              name="star"
              size={8}
              color="#fff"
            />

          </View>

          <Text style={styles.info}>
            {item.rating} (1.4k+) • {item.deliveryTime} • {item.distance}
          </Text>

        </View>

        <Text style={styles.cuisine}>
          {item.cuisine}
        </Text>

        <Text style={styles.location}>
          {item.location}
        </Text>
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

    </View>
  );
}

const styles = StyleSheet.create({

card: {
  width: SCREEN_WIDTH - 32,
  borderRadius: 16,
  borderWidth: 1,
  borderColor: '#E9E9E9',
  backgroundColor: '#fff',
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

  sliderDots: {
    position: 'absolute',
    bottom: 14,
    right: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  activeDot: {
    width: 16,
    height: 5,
    borderRadius: 4,
    backgroundColor: '#000',
    marginRight: 4,
  },

  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#BDBDBD',
    marginRight: 4,
  },

content: {
  paddingHorizontal: 14,
  paddingTop: 10,
  paddingBottom: 14,
},

flashText: {
  color: '#555',
  fontSize: 13,
  fontWeight: '400',
},

name: {
  fontSize: 22,
  fontWeight: '700',
  marginTop: 4,
  color: '#000',
},

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  ratingBox: {
    width: 12,
    height: 12,
    borderRadius: 2,
    backgroundColor: '#34C759',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },

info: {
  fontSize: 13,
  color: '#111',
  fontWeight: '700',
},

  cuisine: {
    marginTop: 6,
    color: '#666',
  },

  location: {
    marginTop: 4,
    color: '#777',
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
  color: '#444',
  fontWeight: '500',
},
});