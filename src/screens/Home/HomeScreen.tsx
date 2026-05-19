import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';
import Feather from '@react-native-vector-icons/feather';

import { useNavigation } from '@react-navigation/native';

import TopPickCard from '../../components/cards/TopPickCard';
import RestaurantCard from '../../components/cards/RestaurantCard';
import FilterChip from '../../components/buttons/FilterChip';
import CategoryCard from '../../components/cards/CategoryCard';

import LocationHeader from '../../components/headers/LocationHeader';
import SearchBar from '../../components/inputs/SearchBar';

import {
  topPicksData,
  restaurantData,
  categoryData
} from '../../data/homeData';

export default function HomeScreen() {

  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}>

        {/* TOP SECTION */}

        <View style={styles.topSection}>

<LocationHeader
  title="Rivertown Haven"
  subtitle="SGM, petals, sai baba colony..."
  onProfilePress={() =>
    navigation.navigate('MyOrdersScreen')
  }
/>

          <SearchBar showVegToggle />

          {/* OFFER */}

          <View style={styles.offerContainer}>

            <View>

              <Text style={styles.offerTitle}>
                Get extra $50 OFF!
              </Text>

              <Text style={styles.offerSub}>
                Win today, eat for less tomorrow.
              </Text>

              <TouchableOpacity style={styles.orderButton}>

                <Text style={styles.orderButtonText}>
                  Order now
                </Text>

              </TouchableOpacity>

            </View>

            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
              }}
              style={styles.offerImage}
            />

          </View>

        </View>

        {/* FREE DELIVERY */}

        <View style={styles.deliveryCard}>

          <View>

            <Text style={styles.deliveryTitle}>
              Free delivery{'\n'}within 10km!
            </Text>

            <TouchableOpacity style={styles.deliveryButton}>

              <Text style={styles.deliveryButtonText}>
                Order now
              </Text>

            </TouchableOpacity>

          </View>

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1521401292936-0a2129a30b1c',
            }}
            style={styles.deliveryImage}
          />

        </View>

        {/* CATEGORIES */}

        <View style={styles.categorySection}>

          <Text style={styles.sectionTitle}>
            What you like to have?
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryScroll}>

            {categoryData.map((item) => (

              <CategoryCard
                key={item.id}
                title={item.title}
                image={item.image}
              />

            ))}

          </ScrollView>

        </View>

        {/* TOP PICKS */}

        <View style={styles.topPickContainer}>

          <View style={styles.topPickHeader}>

            <Text style={styles.topPickTitle}>
              Top picks
            </Text>

            <View style={styles.seeAllRow}>

              <Text style={styles.seeAll}>
                See all
              </Text>

              <Ionicons
                name="chevron-forward"
                size={16}
                color="#B0B0B0"
              />

            </View>

          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>

            {topPicksData.map((item) => (

              <TopPickCard
                key={item.id}
                item={item}
              />

            ))}

          </ScrollView>

        </View>

        {/* MORE WITH US */}

        <View style={styles.moreSection}>

          <Text style={styles.moreTitle}>
            More with us
          </Text>

          <View style={styles.moreImageRow}>

            {/* OFFER PAGE */}

            <TouchableOpacity
              style={styles.moreCard}
              onPress={() =>
                navigation.navigate('OfferScreen')
              }>

              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
                }}
                style={styles.moreImage}
              />

            </TouchableOpacity>

            {/* BEST SELLER */}

            {/* <TouchableOpacity style={styles.moreCard}> */}
            <TouchableOpacity
  style={styles.moreCard}
  onPress={() =>
    navigation.navigate('BestSellerScreen')
  }>

              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0',
                }}
                style={styles.moreImage}
              />

            </TouchableOpacity>

            {/* BEST SELLER */}

            <TouchableOpacity
  style={styles.moreCard}
  onPress={() =>
    navigation.navigate('BestSellerScreen')
  }>

              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1551024601-bec78aea704b',
                }}
                style={styles.moreImage}
              />

            </TouchableOpacity>

          </View>

        </View>

        {/* FILTERS */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterContainer}>

          <FilterChip
            title="Filter"
            icon={
              <Feather
                name="sliders"
                size={16}
                color="#000"
              />
            }
          />

          <FilterChip
            title="Sort By"
            icon={
              <Ionicons
                name="chevron-down"
                size={16}
                color="#000"
              />
            }
          />

          <FilterChip
            title="Flash food in 10 min"
            large
          />

        </ScrollView>

        {/* RESTAURANTS */}

        <View style={styles.restaurantSection}>

          <Text style={styles.restaurantTitle}>
            Restaurant for you
          </Text>

          {restaurantData.map((item) => (

            <RestaurantCard
              key={item.id}
              item={item}
            />

          ))}

        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  topSection: {
    width: '100%',
    minHeight: 355,
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 28,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#F97316',
  },

  offerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },

  offerTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '800',
    width: 220,
  },

  offerSub: {
    color: '#fff',
    fontSize: 15,
    width: 170,
    marginTop: 8,
    lineHeight: 20,
  },

  orderButton: {
    width: 120,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },

  orderButtonText: {
    color: '#fff',
    fontWeight: '600',
  },

  offerImage: {
    width: 140,
    height: 140,
    borderRadius: 20,
    resizeMode: 'cover',
  },

  deliveryCard: {
    width: '92%',
    height: 145,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  deliveryTitle: {
    fontSize: 20,
    fontWeight: '700',
  },

  deliveryButton: {
    width: 120,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },

  deliveryButtonText: {
    color: '#fff',
    fontWeight: '600',
  },

  deliveryImage: {
    width: 110,
    height: 110,
    borderRadius: 20,
  },

  categorySection: {
    marginTop: 28,
    paddingLeft: 16,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
  },

  categoryScroll: {
    marginTop: 18,
    paddingRight: 16,
  },

  topPickContainer: {
    marginTop: 26,
    paddingLeft: 16,
  },

  topPickHeader: {
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  topPickTitle: {
    fontSize: 20,
    fontWeight: '700',
  },

  seeAllRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  seeAll: {
    color: '#8E8E93',
    fontSize: 14,
  },

  moreSection: {
    marginTop: 24,
    paddingHorizontal: 16,
  },

  moreTitle: {
    fontSize: 20,
    fontWeight: '600',
  },

  moreImageRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 8,
    marginTop: 18,
  },

  moreCard: {
    width: 122,
    height: 122,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    backgroundColor: '#fff',
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
    width: 85,
    height: 85,
    borderRadius: 12,
  },

  filterContainer: {
    paddingLeft: 16,
    marginTop: 22,
    paddingRight: 16,
  },

  restaurantSection: {
    marginTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },

  restaurantTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
});