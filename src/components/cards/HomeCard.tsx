import React, {
  useRef,
  useState,
} from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';
import Feather from '@react-native-vector-icons/feather';

import RatingBadge from '../common/RatingBadge';

import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const scale = width / 393;

const SCREEN_WIDTH = width;

const TOP_PICK_CARD_WIDTH = width * 0.356;

interface Props {
  type:
    | 'category'
    | 'topPick'
    | 'restaurant'
    | 'more';

  item?: any;

  title?: string;

  image?: any;

  onPress?: () => void;
}

export default function HomeCard({
  type,
  item,
  title,
  image,
  onPress,
}: Props) {

  const navigation = useNavigation<any>();

  const [activeIndex, setActiveIndex] =
    useState(0);

  const scrollRef =
    useRef<ScrollView>(null);

  const onScrollHandler = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {

    const slide = Math.round(
      event.nativeEvent.contentOffset.x /
        (SCREEN_WIDTH - 32),
    );

    setActiveIndex(slide);
  };

  // CATEGORY

  if (type === 'category') {

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

  // MORE

  if (type === 'more') {

    return (

      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.moreCard}>

        <Image
          source={item.image}
          style={styles.moreImage}
        />

      </TouchableOpacity>

    );
  }

  // TOP PICK

  if (type === 'topPick') {

    return (

      <TouchableOpacity
        activeOpacity={0.92}
        style={styles.topPickCard}
        onPress={() =>
          navigation.navigate(
            'ProductDetailScreen',
            {
              item,
            },
          )
        }>

        <View style={styles.imageWrapper}>

          <Image
            source={item.image}
            style={styles.topPickImage}
          />

          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.heartButton}>

            <Ionicons
              name="heart-outline"
              size={18 * scale}
              color="#FFFFFF"
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

        <Text
          numberOfLines={1}
          style={styles.restaurantName}>

          {item.title}

        </Text>

        <View style={styles.foodInfoRow}>

          <View style={styles.infoItem}>

            <Feather
              name="clock"
              size={11 * scale}
              color="#8A8A8A"
            />

            <Text style={styles.foodInfo}>
              {item.time}
            </Text>

          </View>

          <View style={styles.infoItem}>

            <Ionicons
              name="paper-plane-outline"
              size={11 * scale}
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

  // RESTAURANT

  return (

    <TouchableOpacity
      style={styles.restaurantCard}
      activeOpacity={0.95}
      onPress={
        onPress
          ? onPress
          : () =>
              navigation.navigate(
                'RestaurantScreen',
                {
                  item,
                },
              )
      }>

      {/* IMAGE SECTION */}

      <View>

        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScrollHandler}
          scrollEventThrottle={16}>

          {item.images.map(
            (
              img: any,
              index: number,
            ) => (

              <Image
                key={index}
                source={img}
                style={styles.restaurantImage}
              />

            ),
          )}

        </ScrollView>

        {/* HEART */}

        <TouchableOpacity
          style={styles.restaurantHeart}>

          <Ionicons
            name="heart-outline"
            size={28}
            color="#FFFFFF"
          />

        </TouchableOpacity>

        {/* DOTS */}

        <View style={styles.dotsContainer}>

          {item.images.map(
            (
              _: any,
              index: number,
            ) => (

              <View
                key={index}
                style={[
                  styles.dot,

                  activeIndex === index &&
                    styles.activeDot,
                ]}
              />

            ),
          )}

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

          <RatingBadge
            rating={item.rating}
          />

          <Text style={styles.info}>
            (1.4k+) • {item.deliveryTime}
            {' • '}
            {item.distance}
          </Text>

        </View>

        <Text style={styles.cuisine}>
          {item.cuisine}
        </Text>

        <Text style={styles.location}>
          Bangalore
        </Text>

        {/* TAGS */}

        <View style={styles.tagRow}>

          <View style={styles.largeTag}>

            <Text
              numberOfLines={1}
              style={styles.tagText}>

              Last 100 orders without complaints

            </Text>

          </View>

          <View style={styles.smallTag}>

            <Text
              numberOfLines={1}
              style={styles.tagText}>

              Frequently reordered

            </Text>

          </View>

        </View>

      </View>

    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({

  // CATEGORY

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

    color: '#040404',
  },

  // MORE

  moreCard: {
    width: 122 * scale,
    height: 122 * scale,

    borderRadius: 12 * scale,

    borderWidth: 1,
    borderColor: '#D9D9D9',

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 8 * scale,
  },

  moreImage: {
    width: 85 * scale,
    height: 85 * scale,

    resizeMode: 'contain',
  },

  // TOP PICKS

  topPickCard: {
    width: TOP_PICK_CARD_WIDTH,

    minHeight: 212 * scale,

    marginTop: 18 * scale,
    marginRight: 16 * scale,
  },

  imageWrapper: {
    width: '100%',

    aspectRatio: 1,

    borderRadius: 12 * scale,

    overflow: 'hidden',
  },

  topPickImage: {
    width: '100%',
    height: '100%',

    resizeMode: 'cover',
  },

  heartButton: {
    position: 'absolute',

    top: 10 * scale,
    right: 10 * scale,

    zIndex: 5,
  },

  foodTypeRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 10 * scale,
  },

  foodType: {
    fontFamily: 'Inter-Regular',

    fontSize: 12 * scale,

    color: '#444444',
  },

  restaurantName: {
    marginTop: 5 * scale,

    fontFamily: 'Inter-Medium',

    fontSize: 15 * scale,

    color: '#3A3A3A',
  },

  foodInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 6 * scale,
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',

    marginRight: 12 * scale,
  },

  foodInfo: {
    marginLeft: 4 * scale,

    fontFamily: 'Inter-Regular',

    fontSize: 11 * scale,

    color: '#777777',
  },

  // RESTAURANT

  restaurantCard: {
    width: SCREEN_WIDTH - 32,

    borderRadius: 16,

    borderWidth: 1,
    borderColor: '#E7E7E7',

    backgroundColor: '#FFFFFF',

    marginTop: 18,

    overflow: 'hidden',

    alignSelf: 'center',
  },

  restaurantImage: {
    width: SCREEN_WIDTH - 32,

    height: 205,

    resizeMode: 'cover',

    backgroundColor: '#E7CBC4',
  },

  restaurantHeart: {
    position: 'absolute',

    top: 14,
    right: 14,

    zIndex: 10,
  },

  // EXACT DOTS

  dotsContainer: {
    position: 'absolute',

    bottom: 16,
    right: 18,

    flexDirection: 'row',
    alignItems: 'center',
  },

  dot: {
    width: 8,
    height: 8,

    borderRadius: 10,

    backgroundColor: '#B9A8A3',

    marginLeft: 8,
  },

  activeDot: {
    width: 28,
    height: 8,

    borderRadius: 10,

    backgroundColor: '#000000',
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 16,
  },

  flashText: {
    fontFamily: 'Inter-Regular',

    fontSize: 13,

    color: '#111111',
  },

  // EXACT TITLE

  name: {
    fontFamily: 'Montserrat-ExtraBold',

    fontSize: 22,

    marginTop: 4,

    color: '#000000',
  },

  // EXACT META ROW

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 6,
  },

  info: {
    fontFamily: 'Inter-ExtraBold',

    fontSize: 13,

    color: '#111111',

    marginLeft: 6,
  },

  cuisine: {
    marginTop: 8,

    fontFamily: 'Inter-Regular',

    fontSize: 13,

    color: '#444444',
  },

  location: {
    marginTop: 3,

    fontFamily: 'Inter-Regular',

    fontSize: 13,

    color: '#444444',
  },

  // EXACT TAGS

  tagRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 14,
  },

  largeTag: {
    width: 164,
    height: 25,

    borderRadius: 6,

    borderWidth: 1,
    borderColor: '#D9D9D9',

    backgroundColor: '#EFEFEF',

    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 4,

    marginRight: 6,
  },

  smallTag: {
    width: 102,
    height: 25,

    borderRadius: 6,

    borderWidth: 1,
    borderColor: '#D9D9D9',

    backgroundColor: '#EFEFEF',

    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 4,
  },

  tagText: {
    fontFamily: 'Inter-Regular',

    fontSize: 10,
    lineHeight: 21,

    letterSpacing: -0.32,

    textAlign: 'center',

    color: '#000000',

    includeFontPadding: false,
  },

});