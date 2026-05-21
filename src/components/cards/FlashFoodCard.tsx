import React from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import { useNavigation } from '@react-navigation/native';

import RatingBadge from '../common/RatingBadge';
import FoodTypeBadge from '../common/FoodTypeBadge';
import AddButton from '../buttons/AddButton';

const { width } = Dimensions.get('window');

const guidelineBaseWidth = 393;

const scale = width / guidelineBaseWidth;

interface Props {
  item: any;
}

export default function FlashFoodCard({
  item,
}: Props) {

  const navigation = useNavigation<any>();

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
            size={12 * scale}
            color="#A0A0A0"
          />

        </TouchableOpacity>

      </View>

      {/* FOOD ITEMS */}

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
                source={
                  typeof food.image === 'string'
                    ? { uri: food.image }
                    : food.image
                }
                style={styles.foodImage}
              />

              {/* HEART */}

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.heartButton}>

                <Ionicons
                  name="heart-outline"
                  size={18 * scale}
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

  card: {
    width: width - (16 * scale),

    backgroundColor: '#FFFFFF',

    borderRadius: 16 * scale,

    alignSelf: 'center',

    marginTop: 16 * scale,

    paddingTop: 14 * scale,
    paddingBottom: 16 * scale,

    shadowColor: '#000000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 3,
  },

  header: {
    paddingHorizontal: 14 * scale,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  hotelName: {
    fontFamily: 'Montserrat-Bold',

    fontSize: 16 * scale,
    lineHeight: 20 * scale,

    color: '#040404',
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 4 * scale,
  },

  infoText: {
    marginLeft: 4 * scale,

    fontFamily: 'Inter-Bold',

    fontSize: 9.5 * scale,
    lineHeight: 12 * scale,

    color: '#040404',
  },

  seeAllRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 2 * scale,
  },

  seeAllText: {
    fontFamily: 'Inter-Regular',

    fontSize: 10 * scale,

    color: '#B0B0B0',
  },

  scrollContainer: {
    paddingLeft: 14 * scale,
    paddingRight: 2 * scale,
  },

  foodCard: {
    width: 118 * scale,

    marginTop: 16 * scale,
    marginRight: 10 * scale,
  },

  foodImage: {
    width: 118 * scale,
    height: 118 * scale,

    borderRadius: 12 * scale,

    resizeMode: 'cover',

    backgroundColor: '#EDEDED',
  },

  heartButton: {
    position: 'absolute',

    top: 8 * scale,
    right: 8 * scale,
  },

  foodContent: {
    marginTop: 8 * scale,
  },

  foodName: {
    marginTop: 4 * scale,

    fontFamily: 'Inter-Regular',

    fontSize: 12 * scale,
    lineHeight: 15 * scale,

    color: '#2C2C2C',
  },

  bottomRow: {
    marginTop: 8 * scale,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  price: {
    fontFamily: 'Montserrat-Bold',

    fontSize: 15 * scale,

    color: '#040404',
  },

});