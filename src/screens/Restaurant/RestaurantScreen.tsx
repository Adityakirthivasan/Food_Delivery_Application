import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Ionicons from '@react-native-vector-icons/ionicons';

const RestaurantScreen = () => {

  return (

    <View style={styles.screen}>

      {/* ORANGE HEADER */}

      <View style={styles.mainContainer}>

        <LinearGradient
          colors={['#FF8340', '#C64500']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.orangeContainer}>

          {/* TOP BAR */}

          <View style={styles.topBar}>

            <TouchableOpacity style={styles.iconBtn}>

              <Ionicons
                name="arrow-back"
                size={24}
                color="#FFFFFF"
              />

            </TouchableOpacity>

            <View style={styles.rightActions}>

              <TouchableOpacity style={styles.groupOrderBtn}>

                <Ionicons
                  name="person-add-outline"
                  size={16}
                  color="#FFFFFF"
                />

                <Text style={styles.groupOrderText}>
                  Group Order
                </Text>

              </TouchableOpacity>

              <TouchableOpacity style={styles.dotButton}>

                <Ionicons
                  name="ellipsis-horizontal"
                  size={18}
                  color="#FFFFFF"
                />

              </TouchableOpacity>

            </View>

          </View>

          {/* INFO CARD */}

          <View style={styles.infoCard}>

            <View style={styles.cardHeaderRow}>

              <View style={styles.nameSection}>

                <Text style={styles.restaurantName}>
                  Ruchibe (Guru Restaurant)
                </Text>

                <View style={styles.metaRow}>

                  <Text style={styles.metaText}>
                    15-20 mins
                  </Text>

                  <View style={styles.verticalLine} />

                  <Text style={styles.metaText}>
                    Bangalore Locality
                  </Text>

                </View>

              </View>

              <View style={styles.ratingSection}>

                <View style={styles.ratingRow}>

                  <View style={styles.starBox}>

                    <Ionicons
                      name="star"
                      size={8}
                      color="#FFFFFF"
                    />

                  </View>

                  <Text style={styles.ratingValue}>
                    3.3
                  </Text>

                </View>

                <Text style={styles.ratingCount}>
                  1.4k+ Rating
                </Text>

              </View>

            </View>

            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={[
                'rgba(0,0,0,0)',
                'rgba(0,0,0,0.54)',
                'rgba(102,102,102,0)',
              ]}
              style={styles.horizontalLine}
            />

            <Text style={styles.deliveryText}>
              Free delivery on order above $99
            </Text>

          </View>

        </LinearGradient>

      </View>

      {/* WHITE SECTION */}

      <View style={styles.bottomSection}>

        {/* SEARCH */}

        <View style={styles.searchContainer}>

          <Ionicons
            name="search"
            size={18}
            color="#111111"
          />

          <Text style={styles.searchPlaceholder}>
            Search your food
          </Text>

          <View style={styles.searchDivider} />

          <Ionicons
            name="mic"
            size={22}
            color="#E95322"
          />

        </View>

        {/* FILTERS */}

        <View style={styles.chipRow}>

          {/* VEG */}

          <TouchableOpacity style={styles.smallChip}>

            <View style={styles.toggleTrack}>

              <View style={styles.vegOuterGreen}>

                <View style={styles.vegInnerGreen} />

              </View>

            </View>

          </TouchableOpacity>

          {/* NON VEG */}

          <TouchableOpacity style={styles.smallChip}>

            <View style={styles.toggleTrack}>

              <View style={styles.vegOuterRed}>

                <View style={styles.vegInnerRed} />

              </View>

            </View>

          </TouchableOpacity>

          {/* FLASH FOOD */}

          <TouchableOpacity style={styles.flashChip}>

            <Ionicons
              name="flash-outline"
              size={16}
              color="#000000"
            />

            <Text style={styles.flashChipText}>
              Flash food in 10 min
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  mainContainer: {
    width: 393,
    height: 231,

    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

    overflow: 'hidden',

    alignSelf: 'center',
  },

  orangeContainer: {
    width: 393,
    height: 231,

    paddingTop: 58,
    paddingHorizontal: 16,
  },

  topBar: {
    width: 361,
    height: 27,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  iconBtn: {
    width: 24,
    height: 24,

    justifyContent: 'center',
    alignItems: 'center',
  },

  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  groupOrderBtn: {
    width: 116,
    height: 27,

    borderRadius: 10,
    borderWidth: 1,

    borderColor: '#FFFFFF',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: 6,

    paddingHorizontal: 9,
  },

  groupOrderText: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',

    fontSize: 12,
    lineHeight: 12,

    letterSpacing: -0.24,

    color: '#FFFFFF',
  },

  dotButton: {
    width: 24,
    height: 24,

    marginLeft: 16,

    justifyContent: 'center',
    alignItems: 'center',
  },

  infoCard: {
    width: 361,
    height: 103,

    marginTop: 13,

    borderRadius: 12,

    backgroundColor: '#FFFFFF',

    paddingHorizontal: 16,
    paddingTop: 16,

    alignSelf: 'center',
  },

  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  nameSection: {
    flex: 1,
  },

  restaurantName: {
    fontFamily: 'Inter-Bold',
    fontWeight: '700',

    fontSize: 16,
    lineHeight: 24,

    letterSpacing: -0.24,

    color: '#000000',
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  metaText: {
    fontFamily: 'Inter-Regular',
    fontWeight: '400',

    fontSize: 12,
    lineHeight: 16,

    color: '#0000008A',
  },

  verticalLine: {
    width: 1,
    height: 10,

    marginHorizontal: 7,

    backgroundColor: 'rgba(0,0,0,0.54)',
  },

  ratingSection: {
    alignItems: 'center',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  starBox: {
    width: 12,
    height: 12,

    borderRadius: 2,

    backgroundColor: '#2FE922',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 4,
  },

  ratingValue: {
    fontFamily: 'Inter-Bold',
    fontWeight: '700',

    fontSize: 13.75,
    lineHeight: 22,

    color: '#000000',
  },

  ratingCount: {
    marginTop: 1,

    fontSize: 10,

    color: '#0000008A',
  },

  horizontalLine: {
    width: 329,
    height: 1,

    marginTop: 11,

    alignSelf: 'center',
  },

  deliveryText: {
    marginTop: 6,

    alignSelf: 'center',

    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',

    fontSize: 14,
    lineHeight: 24,

    letterSpacing: -0.24,

    color: '#000000',
  },

  bottomSection: {
    paddingTop: 26,
  },

  searchContainer: {
    width: 361,
    height: 50,

    borderRadius: 10,

    backgroundColor: '#FFFFFF',

    alignSelf: 'center',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 18,
  },

  searchPlaceholder: {
    flex: 1,

    marginLeft: 13,

    fontFamily: 'Inter-Regular',
    fontWeight: '400',

    fontSize: 14,
    lineHeight: 14,

    letterSpacing: -0.24,

    color: '#696969',
  },

  searchDivider: {
    width: 1,
    height: 20,

    backgroundColor: '#D9D9D9',

    marginRight: 12,
  },

  chipRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 16,

    paddingHorizontal: 16,
  },

  smallChip: {
    width: 58,
    height: 25,

    borderRadius: 6,
    borderWidth: 1,

    borderColor: '#D9D9D9',

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',

    paddingHorizontal: 12,

    marginRight: 8,
  },

  toggleTrack: {
    width: 34,
    height: 16,

    borderRadius: 10,

    backgroundColor: '#D9D9D9',

    justifyContent: 'center',

    paddingLeft: 2,
  },

 vegOuterGreen: {
  width: 16,
  height: 16,

  borderRadius: 2,

  borderWidth: 1.2,

  borderColor: '#1F7500',

  backgroundColor: '#FFFFFF',

  justifyContent: 'center',
  alignItems: 'center',
},

vegInnerGreen: {
  width: 6.5,
  height: 6.5,

  borderRadius: 10,

  backgroundColor: '#1F7500',
},

vegOuterRed: {
  width: 16,
  height: 16,

  borderRadius: 2,

  borderWidth: 1.2,

  borderColor: '#C64500',

  backgroundColor: '#FFFFFF',

  justifyContent: 'center',
  alignItems: 'center',
},

vegInnerRed: {
  width: 6.5,
  height: 6.5,

  borderRadius: 10,

  backgroundColor: '#C64500',
},

  flashChip: {
    width: 170,
    height: 25,

    borderRadius: 6,
    borderWidth: 1,

    borderColor: '#D9D9D9',

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: 4,
  },

  flashChipText: {
    fontFamily: 'Inter-Regular',
    fontWeight: '400',

    fontSize: 14,
    lineHeight: 21,

    letterSpacing: -0.32,

    color: '#000000',
  },

});

export default RestaurantScreen;