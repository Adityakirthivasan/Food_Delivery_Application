import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AmicoSvg from '../../assets/images/home/promo/amico.svg';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import LinearGradient from 'react-native-linear-gradient';

import Ionicons from '@react-native-vector-icons/ionicons';
import Feather from '@react-native-vector-icons/feather';

import { useNavigation } from '@react-navigation/native';

import FilterChip from '../../components/buttons/FilterChip';

import LocationHeader from '../../components/headers/LocationHeader';
import SearchBar from '../../components/inputs/SearchBar';

import HomeCard from '../../components/cards/HomeCard';

import { topPickData, categoryData } from '../../data/homeData';

import { scale, width } from '../../utils/responsive';
import ScooterSvg from '../../assets/images/home/action/Scooter.svg';
export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const [restaurantData, setRestaurantData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndHydrateRestaurants = async () => {
      try {
        // Fetch the baseline list of restaurants
        const restaurantsRes = await axios.get(
          'https://dinedash-backend-1.onrender.com/api/user/get-restaurants',
        );

        const rawRestaurants = restaurantsRes.data.result || [];
        console.log(rawRestaurants);

        // Map over each restaurant and build a dynamic array of distance API promises
        const distancePromises = rawRestaurants.map(async (restaurant: any) => {
          try {
            const resLat = restaurant.latitude;
            const resLng = restaurant.longitude;

            const distanceRes = await axios.get(
              `https://dinedash-backend-1.onrender.com/api/user/get-distances`,
              {
                params: {
                  userLat: 11.027471,
                  userLng: 76.873813,
                  resLat,
                  resLng,
                },
              },
            );
            console.log(distanceRes);
            // Extract your metrics from your newly fixed backend controller payload format
            const logistics = distanceRes.data.data;

            // Append logistics fields right into the restaurant object
            return {
              ...restaurant,
              distance: logistics.distanceKm,
              deliveryTime: logistics.travelDurationMinutes,
            };
          } catch (err) {
            console.error(
              `Failed to fetch logistics for restaurant ${restaurant._id}:`,
              err,
            );
            // Fallback default properties if one Mapbox look-up fails so the whole app doesn't crash
            return {
              ...restaurant,
              distanceKm: null,
              travelDurationMinutes: null,
              totalExpectedDeliveryTimeMinutes: null,
            };
          }
        });

        const hydratedRestaurants = await Promise.all(distancePromises);

        setRestaurantData(hydratedRestaurants);
        console.log(
          'Fully Hydrated Restaurant Array Data:',
          hydratedRestaurants,
        );
        setLoading(false);
      } catch (error) {
        console.error('Data Fetching Network Error:', error);
        setLoading(false);
      }
    };

    fetchAndHydrateRestaurants();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          {/* TOP SECTION */}

          <LinearGradient
            colors={['#FF8340', '#C64500']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.topSection}
          >
            {/* HEADER */}

            <View style={styles.headerWrapper}>
              <LocationHeader
                title="Rivertown Haven"
                subtitle="SGM, petals, sai baba colony..."
                onProfilePress={() => navigation.navigate('MyOrdersScreen')}
              />

              <TouchableOpacity
                activeOpacity={0.95}
                onPress={() => navigation.navigate('SearchScreen')}
              >
                <SearchBar showVegToggle />
              </TouchableOpacity>
            </View>

            {/* OFFER */}

            <View style={styles.offerContent}>
              <Text style={styles.offerTitle}>Get extra $50 OFF!</Text>

              <Text style={styles.offerSubtitle}>
                Win today, eat for less tomorrow.
              </Text>

              <TouchableOpacity activeOpacity={0.9} style={styles.orderButton}>
                <Text style={styles.orderButtonText}>Order now</Text>
              </TouchableOpacity>
            </View>

            {/* IMAGE */}

            <AmicoSvg
              width={width * 0.48}
              height={width * 0.48}
              style={styles.amico}
            />
          </LinearGradient>

          {/* ACTION CARD */}

          <View style={styles.actionCard}>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>
                Free delivery
                {'\n'}
                within 10km!
              </Text>

              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Order now</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.scooterContainer}>
              <ScooterSvg width={'92%'} height={'72%'} />
            </View>
          </View>

          {/* SLIDER */}

          <View style={styles.sliderContainer}>
            <View style={styles.sliderActive} />
          </View>

          {/* CATEGORIES */}

          <View style={styles.categorySection}>
            <Text style={styles.sectionTitle}>What you like to have?</Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoryScroll}
            >
              {categoryData.map(item => (
                <HomeCard
                  key={item.id}
                  type="category"
                  title={item.title}
                  image={item.image}
                />
              ))}
            </ScrollView>
          </View>

          {/* TOP PICKS */}

          <View style={styles.topPickContainer}>
            <View style={styles.topPickHeader}>
              <Text style={styles.topPickTitle}>Top picks</Text>

              <View style={styles.seeAllRow}>
                <Text style={styles.seeAll}>See all</Text>

                <Ionicons
                  name="chevron-forward"
                  size={scale(16)}
                  color="#B0B0B0"
                />
              </View>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {topPickData.map(item => (
                <HomeCard key={item.id} type="topPick" item={item} />
              ))}
            </ScrollView>
          </View>

          {/* MORE WITH US */}

          <View style={styles.moreSection}>
            <Text style={styles.moreTitle}>More with us</Text>

            <View style={styles.moreImageRow}>
              <TouchableOpacity
                style={styles.moreCard}
                onPress={() => navigation.navigate('OfferScreen')}
              >
                <Image
                  source={require('../../assets/images/home/MWU/OnlinePayment.png')}
                  style={styles.moreImage}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.moreCard}
                onPress={() => navigation.navigate('BestSellerScreen')}
              >
                <Image
                  source={require('../../assets/images/home/MWU/Lunch.png')}
                  style={styles.moreImage}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.moreCard}
                onPress={() => navigation.navigate('BestSellerScreen')}
              >
                <Image
                  source={require('../../assets/images/home/MWU/TakeAway.png')}
                  style={styles.moreImage}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* FILTERS */}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterContainer}
          >
            <FilterChip
              title="Filter"
              icon={<Feather name="sliders" size={scale(14)} color="#000000" />}
            />

            <FilterChip
              title="Sort By"
              icon={
                <Ionicons name="chevron-down" size={scale(16)} color="#000" />
              }
            />

            <FilterChip
              title="Flash food in 10 min"
              large
              icon={
                <Ionicons
                  name="flash-outline"
                  size={scale(15)}
                  color="#000000"
                />
              }
            />
          </ScrollView>

          {/* RESTAURANTS */}

          <View style={styles.restaurantSection}>
            <Text style={styles.restaurantTitle}>Restaurant for you</Text>

            {restaurantData.map(item => {
              console.log(item);
              return (
                <HomeCard
                  key={item.restaurantId}
                  type="restaurant"
                  item={item}
                  onPress={() =>
                    navigation.navigate('RestaurantScreen', {
                      restaurant: item,
                    })
                  }
                />
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  topSection: {
    width: width,

    height: scale(300),

    borderBottomLeftRadius: scale(30),
    borderBottomRightRadius: scale(30),

    overflow: 'hidden',
  },

  headerWrapper: {
    paddingHorizontal: scale(16),

    paddingTop: scale(15),
  },

  offerContent: {
    marginTop: scale(24),

    paddingHorizontal: scale(16),

    width: scale(190),

    zIndex: 20,
  },

  offerTitle: {
    width: scale(190),

    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: scale(22),
    lineHeight: scale(24),

    letterSpacing: -0.24,

    color: '#FFFFFF',

    includeFontPadding: false,
  },

  offerSubtitle: {
    width: scale(190),

    marginTop: scale(6),

    fontFamily: 'Montserrat',
    fontWeight: 'semibold',
    fontSize: scale(15),
    lineHeight: scale(15),

    letterSpacing: -0.24,

    color: '#FFFFFF',

    includeFontPadding: false,
  },

  orderButton: {
    width: scale(83),

    height: scale(31),

    marginTop: scale(20),

    borderRadius: scale(10),

    backgroundColor: '#000000',

    justifyContent: 'center',
    alignItems: 'center',

    paddingVertical: scale(8),

    paddingHorizontal: scale(9),
  },

  orderButtonText: {
    fontFamily: 'Montserrat',

    fontWeight: '700',

    fontSize: scale(12.5),

    lineHeight: scale(14),

    letterSpacing: -0.24,

    textAlign: 'center',

    color: '#FFFFFF',

    includeFontPadding: false,
  },

  amico: {
    width: width * 0.48,
    height: width * 0.48,

    position: 'absolute',

    right: width * 0.01,

    bottom: -scale(20),

    resizeMode: 'contain',
  },

  categorySection: {
    marginTop: scale(28),
    paddingLeft: scale(16),
  },

  sectionTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: scale(22),

    color: '#040404',
  },

  categoryScroll: {
    marginTop: scale(18),
    paddingRight: scale(16),
  },

  topPickContainer: {
    marginTop: scale(26),
    paddingLeft: scale(16),
  },

  topPickHeader: {
    paddingRight: scale(16),

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  topPickTitle: {
    fontFamily: 'Inter',
    fontWeight: 'bold',

    fontSize: scale(20),

    color: '#040404',
  },

  seeAllRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  seeAll: {
    fontFamily: 'Inter-Medium',

    color: '#B0B0B0',

    fontSize: scale(14),
  },

  moreSection: {
    marginTop: scale(24),
    paddingHorizontal: scale(16),
  },

  moreTitle: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: scale(20),

    color: '#040404',
  },

  moreImageRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: scale(18),
  },

  moreCard: {
    width: width * 0.29,
    height: width * 0.29,

    borderRadius: scale(12),

    borderWidth: 1,
    borderColor: '#D9D9D9',

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.12,
    shadowRadius: 4,

    elevation: 3,
  },

  moreImage: {
    width: '72%',
    height: '72%',

    resizeMode: 'contain',
  },

  filterContainer: {
    paddingLeft: scale(16),

    marginTop: scale(22),

    paddingBottom: scale(8),

    paddingRight: scale(16),
  },

  restaurantSection: {
    marginTop: scale(18),

    paddingHorizontal: scale(16),

    paddingBottom: scale(40),
  },

  restaurantTitle: {
    fontFamily: 'Inter-semiBold',
    fontWeight: '700',
    fontSize: scale(20),

    color: '#040404',
  },

  actionCard: {
    width: '91%',
    height: scale(145),

    marginTop: scale(20),

    alignSelf: 'center',

    borderRadius: scale(20),

    backgroundColor: '#FFFFFF',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.12,
    shadowRadius: 4,

    elevation: 3,

    flexDirection: 'row',

    overflow: 'hidden',
  },

  actionContent: {
    flex: 1,

    paddingLeft: scale(19),
    paddingTop: scale(19),
    paddingBottom: scale(19),

    justifyContent: 'space-between',
  },

  actionTitle: {
    fontFamily: 'Montserrat-Bold',

    fontSize: scale(20),
    lineHeight: scale(22),

    letterSpacing: -0.24,

    color: '#040404',
  },

  actionButton: {
    width: scale(104),
    height: scale(39),

    borderRadius: scale(10),

    backgroundColor: '#040404',

    justifyContent: 'center',
    alignItems: 'center',
  },

  actionButtonText: {
    fontFamily: 'Montserrat-Medium',

    fontSize: scale(12),

    color: '#FFFFFF',
  },

  scooterContainer: {
    width: '36%',

    justifyContent: 'center',
    alignItems: 'center',
  },

  scooterImage: {
    width: '92%',
    height: '72%',

    resizeMode: 'contain',
  },

  sliderContainer: {
    width: scale(25),
    height: scale(5),

    marginTop: scale(12),

    alignSelf: 'center',

    borderRadius: scale(10),

    backgroundColor: '#00000033',

    overflow: 'hidden',

    justifyContent: 'center',
  },

  sliderActive: {
    width: scale(11),
    height: scale(5),

    borderRadius: scale(10),

    backgroundColor: '#000000',
  },
});
