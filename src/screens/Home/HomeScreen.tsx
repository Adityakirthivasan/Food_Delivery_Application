import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

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
  categoryData,
} from '../../data/homeData';

export default function HomeScreen() {

  const navigation = useNavigation<any>();

  return (

    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}>

        {/* TOP SECTION */}

        <LinearGradient
          colors={['#FF8340', '#C64500']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.topSection}>

          {/* LOCATION */}

          <LocationHeader
            title="Rivertown Haven"
            subtitle="SGM, petals, sai baba colony..."
            onProfilePress={() =>
              navigation.navigate('MyOrdersScreen')
            }
          />

          {/* SEARCH */}

          <SearchBar showVegToggle />

          {/* OFFER TITLE */}

          <Text style={styles.offerTitle}>
            Get extra $50 OFF!
          </Text>

          {/* OFFER SUBTITLE */}

          <Text style={styles.offerSubtitle}>
            Win today, eat for less 
            
            tomorrow.
          </Text>

          {/* BUTTON */}

          <TouchableOpacity style={styles.orderButton}>

            <Text style={styles.orderButtonText}>
              Order now
            </Text>

          </TouchableOpacity>

          {/* IMAGES */}

          <View style={styles.imageContainer}>

            {/* SPEECH BUBBLE */}

            <Image
              source={require('../../assets/images/home/promo/Speech-bubble.png')}
              style={styles.speechBubble}
            />

            {/* COMBO TEXT */}

            <Image
              source={require('../../assets/images/home/promo/Combo-bubble.png')}
              style={styles.comboBubble}
            />

            {/* BURGER */}

            <Image
              source={require('../../assets/images/home/promo/Burger.png')}
              style={styles.burger}
            />

            {/* CHARACTER */}

            <Image
              source={require('../../assets/images/home/promo/Character.png')}
              style={styles.character}
            />

            {/* DRINK */}

            <Image
              source={require('../../assets/images/home/promo/Drink.png')}
              style={styles.drink}
            />

            {/* FRIES */}

            <Image
              source={require('../../assets/images/home/promo/Fries.png')}
              style={styles.fries}
            />

          </View>

        </LinearGradient>

        {/* ACTION CARD */}

        <View style={styles.actionCard}>

          {/* LEFT CONTENT */}

          <View style={styles.actionContent}>

            <Text style={styles.actionTitle}>
              Free delivery
              {'\n'}
              within 10km!
            </Text>

            <TouchableOpacity style={styles.actionButton}>

              <Text style={styles.actionButtonText}>
                Order now
              </Text>

            </TouchableOpacity>

          </View>

          {/* SCOOTER IMAGE */}

          <View style={styles.scooterContainer}>

            <Image
              source={require('../../assets/images/home/action/Scooter.png')}
              style={styles.scooterImage}
            />

          </View>

        </View>

        {/* SLIDER */}
<View style={styles.sliderContainer}>

  <View style={styles.sliderActive} />

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
              onPress={() =>
                navigation.navigate('RestaurantScreen', { restaurant: item })
              }
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
    backgroundColor: '#FFFFFF',
  },

  topSection: {
    width: '100%',
    height: 300,

    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

    paddingTop: 50,
    paddingHorizontal: 16,

    overflow: 'hidden',
  },

offerTitle: {
  position: 'absolute',

  width: 190,
  height: 24,

  top: 181,
  left: 16,

  fontFamily: 'Montserrat-SemiBold',
  fontWeight: '700',

  fontSize: 20,
  lineHeight: 20,

  letterSpacing: -0.24,

  color: '#FFFFFF',
},

offerSubtitle: {
  position: 'absolute',

  width: 190,

  top: 205,
  left: 16,

  fontFamily: 'Montserrat-SemiBold',
  fontWeight: '600',

  fontSize: 12,
  lineHeight: 12,

  letterSpacing: -0.24,

  color: '#FFFFFF',
},

  orderButton: {
    position: 'absolute',

    width: 83,
    height: 31,

    top: 246,
    left: 16,

    borderRadius: 10,

    backgroundColor: '#000000',

    justifyContent: 'center',
    alignItems: 'center',
  },

orderButtonText: {
  fontFamily: 'Montserrat-Bold',
  fontWeight: '600',

  fontSize: 12,
  lineHeight: 12,

  letterSpacing: -0.24,

  color: '#FFFFFF',
},

  imageContainer: {
    position: 'absolute',

    width: 165.22,
    height: 164.79,

    top: 172,
    left: 248,
  },

  speechBubble: {
    position: 'absolute',

    width: 61.95,
    height: 41.61,

    top: 15,
    left: 0,

    resizeMode: 'contain',
  },

  comboBubble: {
    position: 'absolute',

    width: 51.06,
    height: 25.29,

    top: 22,
    left: 5,

    resizeMode: 'contain',
  },

  burger: {
    position: 'absolute',

    width: 75.55,
    height: 63.61,

    top: 64,
    left: 0,

    resizeMode: 'contain',
  },

  character: {
    position: 'absolute',

    width: 60.97,
    height: 147.82,

    top: 10,
    left: 62,

    resizeMode: 'contain',
  },

  drink: {
    position: 'absolute',

    width: 46.24,
    height: 95.47,

    top: 32,
    left: 119,

    resizeMode: 'contain',
  },

  fries: {
    position: 'absolute',

    width: 34.5,
    height: 56.79,

    top: 82,
    left: 98,

    resizeMode: 'contain',
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
     actionCard: {
    //width: 361,
    width: '91%',
    height: 145,

    marginTop: 20,
   // marginLeft: 16,
   alignSelf: 'center',

    borderRadius: 20,

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
    width: 190,
    height: 107,

    marginTop: 19,
    marginLeft: 19,

    justifyContent: 'space-between',
  },

  actionTitle: {
    width: 190,
    height: 48,

    fontFamily: 'Montserrat-Bold',
    fontWeight: '700',

    fontSize: 20,
    lineHeight: 20,

    letterSpacing: -0.24,

    color: '#040404',
  },

  actionButton: {
    width: 104,
    height: 39,

    borderRadius: 10,

    backgroundColor: '#040404',

    justifyContent: 'center',
    alignItems: 'center',
  },

  actionButtonText: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',

    fontSize: 12,
    lineHeight: 12,

    letterSpacing: -0.24,

    color: '#FFFFFF',
  },

  scooterContainer: {
    width: 128.2,
    height: 128.2,

    marginTop: 8,

    justifyContent: 'center',
    alignItems: 'center',
  },

  scooterImage: {
    width: 128.19,
    height: 108.08,

    resizeMode: 'contain',
  },

  sliderContainer: {
    width: 25,
    height: 5,

    marginTop: 12,

    alignSelf: 'center',

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

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowOpacity: 0.1,
    shadowRadius: 7,

    elevation: 2,
  },

});