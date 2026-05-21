import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import LinearGradient from 'react-native-linear-gradient';

import {
  useNavigation,
} from '@react-navigation/native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const topImage =
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200';

const noodle =
  'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1200';

const pancake =
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200';

const restaurantCards = [
  {
    id: 1,
    name: 'Burger king',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200',
  },
  {
    id: 2,
    name: 'Kfc, Fried chicken',
    image:
      'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?q=80&w=1200',
  },
  {
    id: 3,
    name: 'Pizza Hut',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200',
  },
  {
    id: 4,
    name: 'Burger king',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200',
  },
];

export default function SearchScreen() {

  const navigation = useNavigation<any>();

  return (

    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SCREEN_HEIGHT * 0.04,
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
              size={SCREEN_WIDTH * 0.065}
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
              size={SCREEN_WIDTH * 0.045}
              color="#111111"
            />

            <TextInput
              placeholder="Search your food"
              placeholderTextColor="#7A7A7A"
              style={styles.searchInput}
            />

            <View style={styles.searchDivider} />

            <Ionicons
              name="mic"
              size={SCREEN_WIDTH * 0.055}
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

        {/* TOP IMAGE */}

        <TouchableOpacity
          activeOpacity={0.95}
          style={styles.bannerContainer}
          onPress={() =>
            navigation.navigate(
              'RestaurantScreen',
            )
          }>

          <Image
            source={{ uri: topImage }}
            style={styles.bannerImage}
          />

          <LinearGradient
            colors={[
              'rgba(0,0,0,0)',
              'rgba(0,0,0,0.55)',
            ]}
            style={styles.bannerOverlay}>

            <View style={styles.newArrived}>

              <Text style={styles.newArrivedText}>
                New Arrived
              </Text>

            </View>

            <View style={styles.bannerBottom}>

              <Text style={styles.bannerTitle}>
                Ruchibe (guru Restaurant)
              </Text>

              <View style={styles.bannerMetaRow}>

                <View style={styles.starBox}>

                  <Ionicons
                    name="star"
                    size={SCREEN_WIDTH * 0.016}
                    color="#FFFFFF"
                  />

                </View>

                <Text style={styles.bannerMeta}>
                  3.3 (1.4k+) • 10-15 mins
                </Text>

              </View>

            </View>

          </LinearGradient>

        </TouchableOpacity>

        {/* HOTEL */}

        <View style={styles.hotelContainer}>

          <View style={styles.hotelHeader}>

            <View>

              <Text style={styles.hotelTitle}>
                Hotel Shree Bhavan
              </Text>

              <View style={styles.bannerMetaRow}>

                <View style={styles.starBox}>

                  <Ionicons
                    name="star"
                    size={SCREEN_WIDTH * 0.016}
                    color="#FFFFFF"
                  />

                </View>

                <Text style={styles.hotelMeta}>
                  3.3 (1.4k+) • 10-15 mins • 2.0 km
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
                size={SCREEN_WIDTH * 0.035}
                color="#9A9A9A"
              />

            </TouchableOpacity>

          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: SCREEN_WIDTH * 0.04,
            }}>

            {[1, 2, 3].map((item) => (

              <TouchableOpacity
                key={item}
                activeOpacity={0.95}
                style={styles.foodCard}
                onPress={() =>
                  navigation.navigate(
                    'ProductDetailScreen',
                  )
                }>

                <View>

                  <Image
                    source={{
                      uri:
                        item % 2 === 0
                          ? pancake
                          : noodle,
                    }}
                    style={styles.foodImage}
                  />

                  <TouchableOpacity
                    style={styles.heartBtn}>

                    <Ionicons
                      name="heart-outline"
                      size={SCREEN_WIDTH * 0.06}
                      color="#FFFFFF"
                    />

                  </TouchableOpacity>

                </View>

                <View style={styles.foodContent}>

                  <View style={styles.bestSellerRow}>

                    <View style={styles.vegMini}>

                      <View style={styles.vegMiniInner} />

                    </View>

                    <Text style={styles.bestSellerText}>
                      Best Seller
                    </Text>

                  </View>

                  <Text style={styles.foodTitle}>
                    {item % 2 === 0
                      ? 'Hanoi Pancake Shop'
                      : 'Rammen Noodel'}
                  </Text>

                  <View style={styles.priceRow}>

                    <Text style={styles.price}>
                      $200
                    </Text>

                    <TouchableOpacity
                      style={styles.addButton}>

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

        {/* MORE */}

        <Text style={styles.moreTitle}>
          More with us
        </Text>

        {restaurantCards.map((item) => (

          <TouchableOpacity
            key={item.id}
            activeOpacity={0.95}
            style={styles.restaurantCard}>

            <Image
              source={{ uri: item.image }}
              style={styles.restaurantImage}
            />

            <View style={styles.restaurantContent}>

              <Text style={styles.restaurantName}>
                {item.name}
              </Text>

              <Text style={styles.restaurantLocation}>
                HSR, Bangalore
              </Text>

              <Text style={styles.viewMenu}>
                View Menu
              </Text>

              <View style={styles.bannerMetaRow}>

                <View style={styles.starBox}>

                  <Ionicons
                    name="star"
                    size={SCREEN_WIDTH * 0.016}
                    color="#FFFFFF"
                  />

                </View>

                <Text style={styles.hotelMeta}>
                  3.3 (1.4k+) • 10-15 mins
                </Text>

              </View>

              <Text style={styles.smallText}>
                🍔 Snacks, Fast Food
              </Text>

              <Text style={styles.smallText}>
                Bangalore, HSR Layout
              </Text>

            </View>

            <TouchableOpacity
              style={styles.dotBtn}>

              <Ionicons
                name="ellipsis-horizontal"
                size={SCREEN_WIDTH * 0.05}
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
    marginLeft: SCREEN_WIDTH * 0.18,

    fontFamily: 'Montserrat-SemiBold',

    fontSize: SCREEN_WIDTH * 0.03,

    color: '#000',
  },

  searchRow: {
    marginTop: SCREEN_HEIGHT * 0.025,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: SCREEN_WIDTH * 0.04,
  },

  searchContainer: {
    width: SCREEN_WIDTH * 0.78,
    height: SCREEN_HEIGHT * 0.065,

    borderRadius: SCREEN_WIDTH * 0.03,

    backgroundColor: '#FFFFFF',

    paddingHorizontal: SCREEN_WIDTH * 0.04,

    flexDirection: 'row',
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,

    marginLeft: SCREEN_WIDTH * 0.03,

    fontFamily: 'Montserrat-Regular',

    fontSize: SCREEN_WIDTH * 0.038,

    color: '#000',
  },

  searchDivider: {
    width: 1,
    height: SCREEN_HEIGHT * 0.03,

    backgroundColor: '#D9D9D9',

    marginRight: SCREEN_WIDTH * 0.03,
  },

  vegContainer: {
    width: SCREEN_WIDTH * 0.12,
    height: SCREEN_HEIGHT * 0.065,

    borderRadius: SCREEN_WIDTH * 0.03,

    backgroundColor: '#FFFFFF',

    marginLeft: SCREEN_WIDTH * 0.02,

    justifyContent: 'center',
    alignItems: 'center',
  },

  vegText: {
    fontSize: SCREEN_WIDTH * 0.018,

    fontFamily: 'Montserrat-Medium',

    color: '#6F6F6F',

    marginBottom: SCREEN_HEIGHT * 0.004,
  },

  toggleTrack: {
    width: SCREEN_WIDTH * 0.06,
    height: SCREEN_HEIGHT * 0.015,

    borderRadius: 999,

    backgroundColor: '#D9D9D9',

    justifyContent: 'center',

    paddingLeft: 1,
  },

  toggleSquare: {
    width: SCREEN_WIDTH * 0.03,
    height: SCREEN_WIDTH * 0.03,

    borderRadius: 2,

    borderWidth: 1,
    borderColor: '#1F7500',

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  toggleCircle: {
    width: SCREEN_WIDTH * 0.015,
    height: SCREEN_WIDTH * 0.015,

    borderRadius: 999,

    backgroundColor: '#1F7500',
  },

  bannerContainer: {
    width: SCREEN_WIDTH * 0.92,
    aspectRatio: 361 / 182,

    alignSelf: 'center',

    marginTop: SCREEN_HEIGHT * 0.025,

    borderRadius: SCREEN_WIDTH * 0.03,

    overflow: 'hidden',
  },

  bannerImage: {
    width: '100%',
    height: '100%',
  },

  bannerOverlay: {
    position: 'absolute',

    width: '100%',
    height: '100%',

    justifyContent: 'space-between',
  },

  newArrived: {
    width: SCREEN_WIDTH * 0.20,
    height: SCREEN_HEIGHT * 0.04,

    borderRadius: SCREEN_WIDTH * 0.03,

    backgroundColor: '#FF7A2F',

    marginTop: SCREEN_HEIGHT * 0.02,
    marginLeft: SCREEN_WIDTH * 0.04,

    justifyContent: 'center',
    alignItems: 'center',
  },

  newArrivedText: {
    fontFamily: 'Montserrat-Bold',

    fontSize: SCREEN_WIDTH * 0.028,

    color: '#FFFFFF',
  },

  bannerBottom: {
    paddingHorizontal: SCREEN_WIDTH * 0.04,
    paddingBottom: SCREEN_HEIGHT * 0.018,
  },

  bannerTitle: {
    fontFamily: 'Montserrat-SemiBold',

    fontSize: SCREEN_WIDTH * 0.042,

    color: '#FFFFFF',
  },

  bannerMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: SCREEN_HEIGHT * 0.004,
  },

  starBox: {
    width: SCREEN_WIDTH * 0.03,
    height: SCREEN_WIDTH * 0.03,

    borderRadius: 2,

    backgroundColor: '#2FE922',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: SCREEN_WIDTH * 0.01,
  },

  bannerMeta: {
    fontFamily: 'Montserrat-SemiBold',

    fontSize: SCREEN_WIDTH * 0.026,

    color: '#FFFFFF',
  },

  hotelContainer: {
    marginTop: SCREEN_HEIGHT * 0.024,

    paddingLeft: SCREEN_WIDTH * 0.04,
  },

  hotelHeader: {
    width: SCREEN_WIDTH * 0.88,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: SCREEN_HEIGHT * 0.016,
  },

  hotelTitle: {
    fontFamily: 'Montserrat-SemiBold',

    fontSize: SCREEN_WIDTH * 0.055,

    color: '#000',
  },

  hotelMeta: {
    fontFamily: 'Montserrat-Medium',

    fontSize: SCREEN_WIDTH * 0.025,

    color: '#000',
  },

  seeAllRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  seeAllText: {
    fontSize: SCREEN_WIDTH * 0.03,

    color: '#9A9A9A',
  },

  foodCard: {
    width: SCREEN_WIDTH * 0.40,

    marginRight: SCREEN_WIDTH * 0.04,
  },

  foodImage: {
    width: '100%',
    aspectRatio: 171 / 140,

    borderRadius: SCREEN_WIDTH * 0.03,
  },

  heartBtn: {
    position: 'absolute',

    top: SCREEN_HEIGHT * 0.012,
    right: SCREEN_WIDTH * 0.025,
  },

  foodContent: {
    marginTop: SCREEN_HEIGHT * 0.01,
  },

  bestSellerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  vegMini: {
    width: SCREEN_WIDTH * 0.05,
    height: SCREEN_WIDTH * 0.05,

    borderRadius: 2,

    borderWidth: 1,
    borderColor: '#1F7500',

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: SCREEN_WIDTH * 0.01,
  },

  vegMiniInner: {
    width: SCREEN_WIDTH * 0.024,
    height: SCREEN_WIDTH * 0.024,

    borderRadius: 999,

    backgroundColor: '#1F7500',
  },

  bestSellerText: {
    fontFamily: 'Montserrat-Regular',

    fontSize: SCREEN_WIDTH * 0.028,

    color: '#E95322',
  },

  foodTitle: {
    marginTop: SCREEN_HEIGHT * 0.006,

    fontFamily: 'Montserrat-SemiBold',

    fontSize: SCREEN_WIDTH * 0.043,

    color: '#343434',
  },

  priceRow: {
    marginTop: SCREEN_HEIGHT * 0.012,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  price: {
    fontFamily: 'Montserrat-Bold',

    fontSize: SCREEN_WIDTH * 0.045,

    color: '#000',
  },

  addButton: {
    width: SCREEN_WIDTH * 0.16,
    height: SCREEN_HEIGHT * 0.045,

    borderRadius: SCREEN_WIDTH * 0.025,

    borderWidth: 1,
    borderColor: '#D9D9D9',

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  addText: {
    fontFamily: 'Montserrat-Bold',

    fontSize: SCREEN_WIDTH * 0.04,

    color: '#000',
  },

  moreTitle: {
    marginTop: SCREEN_HEIGHT * 0.03,
    marginLeft: SCREEN_WIDTH * 0.04,
    marginBottom: SCREEN_HEIGHT * 0.02,

    fontFamily: 'Montserrat-SemiBold',

    fontSize: SCREEN_WIDTH * 0.06,

    color: '#000',
  },

  restaurantCard: {
    width: SCREEN_WIDTH * 0.92,
    height: SCREEN_HEIGHT * 0.18,

    borderRadius: SCREEN_WIDTH * 0.035,

    backgroundColor: '#FFFFFF',

    alignSelf: 'center',

    marginBottom: SCREEN_HEIGHT * 0.018,

    overflow: 'hidden',

    flexDirection: 'row',

    elevation: 3,
  },

  restaurantImage: {
    width: SCREEN_WIDTH * 0.30,
    height: '100%',
  },

  restaurantContent: {
    flex: 1,

    paddingHorizontal: SCREEN_WIDTH * 0.035,
    paddingTop: SCREEN_HEIGHT * 0.018,
  },

  restaurantName: {
    fontFamily: 'Montserrat-Bold',

    fontSize: SCREEN_WIDTH * 0.045,

    color: '#000',
  },

  restaurantLocation: {
    marginTop: SCREEN_HEIGHT * 0.002,

    fontFamily: 'Montserrat-Medium',

    fontSize: SCREEN_WIDTH * 0.032,

    color: '#666',
  },

  viewMenu: {
    marginTop: SCREEN_HEIGHT * 0.004,

    fontFamily: 'Montserrat-SemiBold',

    fontSize: SCREEN_WIDTH * 0.032,

    color: '#E95322',
  },

  smallText: {
    marginTop: SCREEN_HEIGHT * 0.002,

    fontFamily: 'Montserrat-Regular',

    fontSize: SCREEN_WIDTH * 0.026,

    color: '#777',
  },

  dotBtn: {
    position: 'absolute',

    top: SCREEN_HEIGHT * 0.02,
    right: SCREEN_WIDTH * 0.03,
  },

});