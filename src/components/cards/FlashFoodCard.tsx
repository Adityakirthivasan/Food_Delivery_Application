import React from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import { useNavigation } from '@react-navigation/native';

import RatingBadge from '../common/RatingBadge';
import FoodTypeBadge from '../common/FoodTypeBadge';
import AddButton from '../buttons/AddButton';

import {
  scale,
} from '../../utils/responsive';

interface Props {

  item?: any;

  type?: 'category';

  title?: string;

  image?: any;
}

export default function FlashFoodCard({
  item,
  type,
  title,
  image,
}: Props) {

  const navigation = useNavigation<any>();

  // CATEGORY CARD

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

  return (

    <View style={styles.card}>

      {/* HEADER */}

      <View style={styles.header}>

        <View>

          <Text style={styles.hotelName}>
            {item.hotelName}
          </Text>

          <View style={styles.infoRow}>

            <RatingBadge
              rating={item.rating}
            />

            <Text style={styles.infoText}>
              (1.4k+) • {item.deliveryTime} • {item.distance}
            </Text>

          </View>

        </View>

        <TouchableOpacity style={styles.seeAllRow}>

          <Text style={styles.seeAllText}>
            See all
          </Text>

          <Ionicons
            name="chevron-forward"
            size={scale(12)}
            color="#B5B5B5"
          />

        </TouchableOpacity>

      </View>

      {/* FOODS */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>

        {item.foods.map((food: any) => (

          <TouchableOpacity
            key={food.id}
            activeOpacity={0.95}
            style={styles.foodCard}
            onPress={() =>
              navigation.navigate(
                'ProductDetailScreen',
                {
                  item: food,
                },
              )
            }>

            {/* IMAGE */}

            <View>

              <Image
                source={food.image}
                style={styles.foodImage}
              />

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.heartButton}>

                <Ionicons
                  name="heart-outline"
                  size={scale(20)}
                  color="#FFFFFF"
                />

              </TouchableOpacity>

            </View>

            {/* CONTENT */}

            <View style={styles.foodContent}>

              <FoodTypeBadge
                veg={food.veg}
                title="Best Seller"
              />

              <Text
                numberOfLines={2}
                style={styles.foodName}>

                {food.name}

              </Text>

              <View style={styles.bottomRow}>

                <Text style={styles.price}>
                  {food.price}
                </Text>

                <AddButton />

              </View>

            </View>

          </TouchableOpacity>

        ))}

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  // CATEGORY

  categoryItem: {
    width: scale(82),

    marginRight: scale(16),

    alignItems: 'center',
  },

  categoryImage: {
    width: scale(58),
    height: scale(58),

    resizeMode: 'contain',
  },

  categoryText: {
    marginTop: scale(8),

    fontFamily: 'Montserrat-Medium',

    fontSize: scale(12),
    lineHeight: scale(16),

    letterSpacing: -0.2,

    textAlign: 'center',

    color: '#040404',
  },

  // MAIN CARD

  card: {
    width: scale(361),

    alignSelf: 'center',

    marginTop: scale(16),

    backgroundColor: '#FFFFFF',

    borderRadius: scale(12),

    paddingTop: scale(14),
    paddingBottom: scale(16),

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.12,

    shadowRadius: 7,

    elevation: 4,
  },

  header: {
    paddingHorizontal: scale(16),

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  hotelName: {
    fontFamily: 'Montserrat-Bold',

    fontSize: scale(15),
    lineHeight: scale(20),

    letterSpacing: -0.24,

    color: '#040404',
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: scale(4),
  },

  infoText: {
    marginLeft: scale(4),

    fontFamily: 'Inter-SemiBold',

    fontSize: scale(10),
    lineHeight: scale(12),

    color: '#040404',
  },

  seeAllRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: scale(2),
  },

  seeAllText: {
    fontFamily: 'Inter-Regular',

    fontSize: scale(11),
    lineHeight: scale(14),

    color: '#B5B5B5',
  },

  scrollContainer: {
    paddingLeft: scale(16),
    paddingRight: scale(6),
  },

  foodCard: {
    width: scale(124),

    marginTop: scale(16),
    marginRight: scale(12),
  },

  foodImage: {
    width: scale(124),
    height: scale(128),

    borderRadius: scale(12),

    resizeMode: 'cover',

    backgroundColor: '#EFEFEF',
  },

  heartButton: {
    position: 'absolute',

    top: scale(8),
    right: scale(8),
  },

  foodContent: {
    marginTop: scale(8),
  },

  foodName: {
    marginTop: scale(4),

    fontFamily: 'Inter-Medium',

    fontSize: scale(13),
    lineHeight: scale(17),

    color: '#2A2A2A',
  },

  bottomRow: {
    marginTop: scale(8),

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  price: {
    fontFamily: 'Montserrat-Bold',

    fontSize: scale(15),
    lineHeight: scale(20),

    color: '#040404',
  },

});