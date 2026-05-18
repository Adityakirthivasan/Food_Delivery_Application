import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';
import Feather from '@react-native-vector-icons/feather';
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons';

import TopPickCard from '../../components/cards/TopPickCard';
import RestaurantCard from '../../components/cards/RestaurantCard';
import FilterChip from '../../components/buttons/FilterChip';

import {
  topPicksData,
  restaurantData,
} from '../../data/homeData';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}>

        {/* TOP SECTION */}
        <View style={styles.topSection}>

          {/* LOCATION */}
          <View style={styles.locationRow}>

            <View>

              <View style={styles.locationTitleRow}>

                <Ionicons
                  name="location-sharp"
                  size={16}
                  color="#fff"
                />

                <Text style={styles.locationTitle}>
                  Rivertown Haven
                </Text>

                <Ionicons
                  name="chevron-down"
                  size={16}
                  color="#fff"
                />

              </View>

              <Text style={styles.locationSub}>
                SGM, petals, sai baba colony...
              </Text>

            </View>

            <TouchableOpacity style={styles.profileButton}>

              <Ionicons
                name="person"
                size={18}
                color="#fff"
              />

            </TouchableOpacity>

          </View>

          {/* SEARCH */}
          <View style={styles.searchRow}>

            <View style={styles.searchBar}>

              <Feather
                name="search"
                size={20}
                color="#555"
              />

              <TextInput
                placeholder="Search your food"
                placeholderTextColor="#8E8E93"
                style={styles.input}
              />

              <View style={styles.divider} />

              <MaterialCommunityIcons
                name="microphone"
                size={22}
                color="#F97316"
              />

            </View>

<TouchableOpacity style={styles.vegButton}>

  <Text style={styles.vegText}>
    Veg
  </Text>

 <View style={styles.toggleTrack}>

  <View style={styles.vegToggleOuter}>

    <View style={styles.vegToggleInner} />

  </View>

</View>

</TouchableOpacity>

          </View>

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

            {[
              'Meat',
              'Cold drinks',
              'Dessert',
              'Burger',
              'Pizza',
            ].map((item, index) => (

              <View key={index} style={styles.categoryItem}>

                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
                  }}
                  style={styles.categoryImage}
                />

                <Text style={styles.categoryText}>
                  {item}
                </Text>

              </View>

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

            {[1, 2, 3].map((item) => (

              <View key={item} style={styles.moreCard}>

                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
                  }}
                  style={styles.moreImage}
                />

              </View>

            ))}

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

  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  locationTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 4,
  },

  locationSub: {
    color: '#FDE7D3',
    marginTop: 5,
    fontSize: 13,
  },

  profileButton: {
    width: 58,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

searchRow: {
  flexDirection: 'row',
  marginTop: 20,
  alignItems: 'center',
},

searchBar: {
  flex: 1,
  height: 50,
  backgroundColor: '#fff',
  borderRadius: 15,
  paddingHorizontal: 16,
  flexDirection: 'row',
  alignItems: 'center',
},

  input: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
    color:'#000',
  },

  divider: {
    width: 1,
    height: 22,
    backgroundColor: '#E5E5E5',
    marginHorizontal: 12,
  },

vegButton: {
  width: 64,
  height: 50,
  backgroundColor: '#fff',
  borderRadius: 15,
  marginLeft: 12,
  justifyContent: 'center',
  alignItems: 'center',
},

vegText: {
  fontWeight: '600',
  fontSize: 14,
  marginBottom: 4,
},

  toggleContainer: {
    width: 20,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },

  toggleCircle: {
    width: 8,
    height: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'green',
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

  categoryItem: {
    marginRight: 20,
    alignItems: 'center',
  },

  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  categoryText: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '500',
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
 toggleTrack: {
  width: 34,
  height: 14,
  borderRadius: 10,
  backgroundColor: '#D9D9D9',
  justifyContent: 'center',
  paddingLeft: 2,
},

vegToggleOuter: {
  width: 14,
  height: 14,
  borderRadius: 3,
  borderWidth: 1.5,
  borderColor: '#228B22',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
},

vegToggleInner: {
  width: 8,
  height: 8,
  borderRadius: 10,
  backgroundColor: '#228B22',
},
});