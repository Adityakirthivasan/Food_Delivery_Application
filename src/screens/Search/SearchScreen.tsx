import React, {
  useEffect,
  useState,
} from 'react';
import axios from 'axios';
import {
  flashFoodData,
} from '../../data/flashFoodData';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  ActivityIndicator
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import {
  useNavigation,
} from '@react-navigation/native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

export default function SearchScreen() {

  const navigation = useNavigation<any>();
  const [search, setSearch] =
  useState('');

const [restaurants, setRestaurants] =
  useState<any[]>([]);

const [dishes, setDishes] =
  useState<any[]>([]);

const [loading, setLoading] =
  useState(true);

  useEffect(() => {
  Promise.all([
    axios.get(
      'https://dinedash-backend-1.onrender.com/api/user/get-restaurants',
    ),
    axios.get(
      'https://dinedash-backend-1.onrender.com/api/user/get-dishes',
    ),
  ])
    .then(([resData, dishData]) => {
      setRestaurants(
        resData.data.result || [],
      );

      setDishes(
        dishData.data.result || [],
      );

      setLoading(false);
    })
    .catch(error => {
      console.log(error);
      setLoading(false);
    });
}, []);
if (loading) {
  return (
    <ActivityIndicator
      size="large"
    />
  );
}

  return (

    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SCREEN_HEIGHT * 0.05,
        }}>

        {/* HEADER */}

        <View style={styles.headerContainer}>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.goBack()
            }>

            <Ionicons
              name="arrow-back"
              size={24}
              color="#000"
            />

          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Search for dishes & restaurants
          </Text>

        </View>

        {/* SEARCH */}

        <View style={styles.searchRow}>

          <View style={styles.searchContainer}>

            <Ionicons
              name="search"
              size={20}
              color="#111111"
            />

            <TextInput
              placeholder="Search your food"
              placeholderTextColor="#7A7A7A"
              style={styles.searchInput}
              value={search}
onChangeText={setSearch}
            />

            <View style={styles.searchDivider} />

            <Ionicons
              name="mic"
              size={22}
              color="#E95322"
            />

          </View>

          {/* VEG */}

          <TouchableOpacity
            style={styles.vegContainer}>

            <Text style={styles.vegText}>
              Veg
            </Text>

            <View style={styles.toggleTrack}>

              <View style={styles.toggleSquare}>

                <View style={styles.toggleCircle} />

              </View>

            </View>

          </TouchableOpacity>

        </View>

        {/* RUCHIBE CARD */}

{restaurants.length > 0 && (

<TouchableOpacity
  activeOpacity={0.95}
  style={styles.bannerContainer}
  onPress={() =>
    navigation.navigate(
      'RestaurantScreen',
      {
        restaurant:
          restaurants[0],
      },
    )
  }>

<Image
  source={
    restaurants[0]?.image &&
    restaurants[0].image.startsWith(
      'http',
    )
      ? {
          uri:
            restaurants[0]
              .image,
        }
      : flashFoodData[0]
          .foods[0].image
  }
  style={
    styles.bannerImage
  }
/>

          <View style={styles.overlay} />

          <View style={styles.newArrived}>

            <Text style={styles.newArrivedText}>
              New Arrived
            </Text>

          </View>

          <View style={styles.bannerBottom}>

            <Text style={styles.bannerTitle}>
             {restaurants[0]?.name}
            </Text>

            <View style={styles.bannerMetaRow}>

              <View style={styles.ratingBoxBanner}>

                <Ionicons
                  name="star"
                  size={7}
                  color="#20C400"
                />

              </View>

              <Text style={styles.bannerMeta}>
               {restaurants[0]?.rating} •
{' '}
{restaurants[0]?.deliveryTime ||
'10-15 mins'}
              </Text>

            </View>

          </View>

        </TouchableOpacity>
)}

        {/* HOTEL SHREE */}

        <View style={styles.hotelContainer}>

          <View style={styles.hotelHeader}>

            <View>

              <Text style={styles.hotelTitle}>
              {restaurants[0]?.name ||
'Restaurant'}
              </Text>

              <View style={styles.metaRow}>

                <View style={styles.ratingBox}>

                  <Ionicons
                    name="star"
                    size={8}
                    color="#20C400"
                  />

                </View>

                <Text style={styles.metaText}>
                 {restaurants[0]?.rating}
•{' '}
{restaurants[0]?.deliveryTime ||
'10-15 mins'}
                </Text>

              </View>

            </View>

            <TouchableOpacity
              style={styles.seeAllRow}>

              <Text style={styles.seeAllText}>
                See all
              </Text>

              <Ionicons
                name="chevron-forward"
                size={14}
                color="#B5B5B5"
              />

            </TouchableOpacity>

          </View>

          {/* FOODS */}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: 16,
            }}>

           {dishes
.filter(
  (dish: any) =>
    dish.available !==
      false &&
    dish.name
      ?.toLowerCase()
      .includes(
        search.toLowerCase(),
      ),
)
.slice(0, 6)
.map((
  item: any,
  index: number,
) => (

              <TouchableOpacity
             key={item.dishId}
                activeOpacity={0.95}
                style={styles.foodCard}
onPress={() =>
  navigation.navigate(
    'ProductDetailScreen',
    {
      item,
    },
  )
}
>

                {/* IMAGE */}

                <View>

<Image
  source={
    item.image &&
    item.image.startsWith(
      'http',
    )
      ? {
          uri:
            item.image,
        }
      : flashFoodData[
          index %
            flashFoodData.length
        ].foods[0].image
  }
  style={
    styles.foodImage
  }
/>

                  <TouchableOpacity
                    style={styles.heartBtn}>

                    <Ionicons
                      name="heart-outline"
                      size={22}
                      color="#FFFFFF"
                    />

                  </TouchableOpacity>

                </View>

                {/* CONTENT */}

                <View style={styles.foodContent}>

                  <View style={styles.bestSellerRow}>

                    <View style={styles.vegMini}>

                      <View style={styles.vegMiniInner} />

                    </View>

                    <Text style={styles.bestSellerText}>
                      Best Seller
                    </Text>

                  </View>

<Text
  numberOfLines={2}
  style={styles.foodTitle}>

  {item.name}

</Text>

                  <View style={styles.priceRow}>

                    <Text style={styles.price}>
                    ${item.price}
                    </Text>

                   <TouchableOpacity
  style={styles.addButton}
  onPress={() =>
  navigation.navigate(
    'ProductDetailScreen',
    {
      item,
    },
  )

  }>

  <Text style={styles.addText}>
    ADD
  </Text>

</TouchableOpacity>

                    

                  </View>

                </View>

              </TouchableOpacity>

            ))}

          </ScrollView>

        </View>

        {/* MORE WITH US */}

        <Text style={styles.moreTitle}>
          More with us
        </Text>

{restaurants
.filter(
  (restaurant: any) =>
    restaurant.name
      ?.toLowerCase()
      .includes(
        search.toLowerCase(),
      ),
)
.map((
  item: any,
  index: number,
) => (

          <TouchableOpacity
          key={item.restaurantId || item.name}
            activeOpacity={0.95}
            style={styles.restaurantCard}
onPress={() =>
  navigation.navigate(
    'RestaurantScreen',
    {
      restaurant: item,
    },
  )

            }>

<Image
  source={
    item.image &&
    item.image.startsWith(
      'http',
    )
      ? {
          uri:
            item.image,
        }
      : flashFoodData[
          index %
            flashFoodData.length
        ].foods[0].image
  }
  style={
    styles.restaurantImage
  }
/>

            <View style={styles.restaurantContent}>

              <Text style={styles.restaurantName}>
               {item.name}
              </Text>

              <Text style={styles.restaurantLocation}>
               {item.location ||
'Restaurant'}
              </Text>

              <View style={styles.viewMenuRow}>

                <Text style={styles.viewMenu}>
                  View Menu
                </Text>

                <Ionicons
                  name="chevron-forward"
                  size={15}
                  color="#F36A21"
                />

              </View>

              <View style={styles.metaRow}>

                <View style={styles.ratingBox}>

                  <Ionicons
                    name="star"
                    size={8}
                    color="#20C400"
                  />

                </View>

                <Text style={styles.metaText}>
                  {item.rating} •
{' '}
{item.deliveryTime ||
'10-15 mins'}
                </Text>

              </View>

              <View style={styles.foodTypeRow}>

                <View style={styles.orangeVegBox}>

                  <View style={styles.orangeVegInner} />

                </View>

                <Text style={styles.foodTypeText}>
                  Snacks, Fast Food
                </Text>

              </View>

              <Text style={styles.addressText}>
               {item.address ||
item.location}
              </Text>

            </View>

            <TouchableOpacity
              style={styles.dotBtn}>

              <Ionicons
                name="ellipsis-horizontal"
                size={20}
                color="#000"
              />

            </TouchableOpacity>

          </TouchableOpacity>

        ))}

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  headerContainer: {
    marginTop: SCREEN_HEIGHT * 0.065,

    paddingHorizontal: SCREEN_WIDTH * 0.04,

    flexDirection: 'row',
    alignItems: 'center',
  },

  headerTitle: {
    marginLeft: SCREEN_WIDTH * 0.17,

    fontFamily: 'Inter',
    fontWeight:'semibold',

    fontSize: 15,

    lineHeight: 15,

    letterSpacing: -0.29,

    color: '#000000',
  },

  searchRow: {
    marginTop: 20,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 16,
  },

  searchContainer: {
    width: SCREEN_WIDTH * 0.78,
    height: 48,

    borderRadius: 12,

    backgroundColor: '#FFFFFF',

    paddingHorizontal: 16,

    flexDirection: 'row',
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,

    marginLeft: 10,

    fontFamily: 'Montserrat-Regular',

    fontSize: 15,

    color: '#000',
  },

  searchDivider: {
    width: 1,
    height: 24,

    backgroundColor: '#D9D9D9',

    marginRight: 12,
  },

  vegContainer: {
    width: 52,
    height: 48,

    borderRadius: 12,

    backgroundColor: '#FFFFFF',

    marginLeft: 8,

    justifyContent: 'center',
    alignItems: 'center',
  },

  vegText: {
    fontSize: 11,

    fontFamily: 'Montserrat-Medium',

    color: '#6F6F6F',

    marginBottom: 3,
  },

  toggleTrack: {
    width: 26,
    height: 10,

    borderRadius: 999,

    backgroundColor: '#D9D9D9',

    justifyContent: 'center',

    paddingLeft: 1,
  },

  toggleSquare: {
    width: 10,
    height: 10,

    borderRadius: 2,

    borderWidth: 1,
    borderColor: '#1F7500',

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  toggleCircle: {
    width: 5,
    height: 5,

    borderRadius: 999,

    backgroundColor: '#1F7500',
  },

  // BANNER

  bannerContainer: {
    width: SCREEN_WIDTH * 0.92,
    height: 182,

    borderRadius: 16,

    overflow: 'hidden',

    alignSelf: 'center',

    marginTop: 22,

    backgroundColor: '#FFFFFF',

    elevation: 4,
  },

  bannerImage: {
    width: '100%',
    height: '100%',

    resizeMode: 'cover',
  },

  overlay: {
    position: 'absolute',

    width: '100%',
    height: '100%',

    backgroundColor: 'rgba(0,0,0,0.18)',
  },

  newArrived: {
    position: 'absolute',

    top: 14,
    left: 0,

    backgroundColor: '#F36A21',

    paddingHorizontal: 10,
    paddingVertical: 5,

    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },

  newArrivedText: {
    fontFamily: 'Montserrat-Bold',

    fontSize: 12,

    color: '#FFFFFF',
  },

  bannerBottom: {
    position: 'absolute',

    bottom: 12,
    left: 14,
  },

 bannerTitle: {
  fontFamily: 'SF-Pro',
  fontWeight: 'bold',

  fontSize: 20,

  lineHeight: 28,

  letterSpacing: -0.08,

  color: '#FFFFFF',
},

  bannerMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 4,
  },

  ratingBoxBanner: {
    width: 14,
    height: 14,

    borderRadius: 2,

    //backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#20C400',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 6,
  },

  bannerMeta: {
    fontFamily: 'Inter-Bold',

    fontSize: 11,

    color: '#FFFFFF',
  },

  // HOTEL

  hotelContainer: {
    width: SCREEN_WIDTH * 0.92,

    alignSelf: 'center',

    marginTop: 18,

    backgroundColor: '#FFFFFF',

    borderRadius: 16,

    paddingVertical: 16,

    borderWidth: 1,
    borderColor: '#ECECEC',

    elevation: 3,
  },

  hotelHeader: {
    paddingHorizontal: 16,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    marginBottom: 12,
  },

hotelTitle: {
  fontFamily: 'Inter',
  fontWeight:'bold',
  fontSize: 16,
  lineHeight: 24,

  letterSpacing: -0.24,

  color: '#000000',
},

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 6,
  },

  ratingBox: {
    width: 14,
    height: 14,

    borderRadius: 2,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#20C400',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 6,
  },

metaText: {
  fontFamily: 'Inter',
  fontWeight:'bold',

  fontSize: 11,
  lineHeight: 16,

  letterSpacing: 0,

  color: '#000000',
},

  seeAllRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  seeAllText: {
    fontSize: 12,

    color: '#B5B5B5',
  },

  foodCard: {
    width: 140,

    marginLeft: 16,
  },

  foodImage: {
    width: 140,
    height: 140,

    borderRadius: 12,

    resizeMode: 'cover',
  },

  heartBtn: {
    position: 'absolute',

    top: 8,
    right: 8,
  },

  foodContent: {
    marginTop: 8,
  },

  bestSellerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  vegMini: {
    width: 14,
    height: 14,

    borderRadius: 2,

    borderWidth: 1,
    borderColor: '#1F7500',

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 6,
  },

  vegMiniInner: {
    width: 6,
    height: 6,

    borderRadius: 999,

    backgroundColor: '#1F7500',
  },

bestSellerText: {
  fontFamily: 'Inter-Regular',

  fontSize: 12,
  lineHeight: 16,

  letterSpacing: 0,

  color: '#E95322',
},

foodTitle: {
  marginTop: 4,

  fontFamily: 'Inter',
  fontWeight:'bold',

  fontSize: 14,
  lineHeight: 17,

  letterSpacing: 0,

  color: '#646262',
},

  priceRow: {
    marginTop: 8,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

price: {
  fontFamily: 'Inter',
  fontWeight:'bold',

  fontSize: 14,
  lineHeight: 21,

  letterSpacing: -0.32,

  color: '#000000',
},

addButton: {
  width: 70,
  height: 34,

  borderRadius: 8,

  borderWidth: 1,
  borderColor: '#D9D9D9',

  backgroundColor: '#FFFFFF',

  justifyContent: 'center',
  alignItems: 'center',
},
addText: {
  fontFamily: 'Inter',
  fontWeight:'bold',
  fontSize: 14,
  lineHeight: 21,

  letterSpacing: -0.32,

  textAlign: 'center',

  color: '#000000',
},

  // MORE WITH US

  moreTitle: {
    marginTop: 28,
    marginLeft: 16,
    marginBottom: 16,

    fontFamily: 'Inter',
    fontWeight:'bold',
    fontSize: 24,

    color: '#000',
  },

  restaurantCard: {
    width: SCREEN_WIDTH * 0.92,
    height: 170,

    borderRadius: 18,

    backgroundColor: '#FFFFFF',

    alignSelf: 'center',

    marginBottom: 16,

    overflow: 'hidden',

    flexDirection: 'row',

    borderWidth: 1,
    borderColor: '#E6E6E6',
  },

  restaurantImage: {
    width: 126,
    height: '100%',

    resizeMode: 'cover',
  },

  restaurantContent: {
    flex: 1,

    paddingHorizontal: 14,
    paddingTop: 16,
  },

  restaurantName: {
    fontFamily: 'Inter',
    fontWeight:'bold',
    fontSize: 23,

    color: '#000',
  },

  restaurantLocation: {
    marginTop: 1,

    fontFamily: 'Inter-Regular',

    fontSize: 15,

    color: '#4D4D4D',
  },

  viewMenuRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 5,
  },

  viewMenu: {
    fontFamily: 'Montserrat-SemiBold',

    fontSize: 14,

    color: '#F36A21',
  },

  foodTypeRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 8,
  },

  orangeVegBox: {
    width: 14,
    height: 14,

    borderRadius: 2,

    borderWidth: 1,
    borderColor: '#F36A21',

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 7,
  },

  orangeVegInner: {
    width: 7,
    height: 7,

    borderRadius: 999,

    backgroundColor: '#F36A21',
  },

  foodTypeText: {
    fontFamily: 'Inter-Regular',

    fontSize: 13,

    color: '#777777',
  },

  addressText: {
    marginTop: 5,

    fontFamily: 'Inter-Regular',

    fontSize: 13,

    color: '#777777',
  },

  dotBtn: {
    position: 'absolute',

    top: 14,
    right: 10,
  },

});