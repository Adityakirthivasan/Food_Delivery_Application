import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';

import {
  SafeAreaView,
} from 'react-native-safe-area-context';

import Ionicons from '@react-native-vector-icons/ionicons';

const {
  width,
  height,
} = Dimensions.get('window');

const DELIVERY_IMAGE = require(
  '../../assets/images/booking/DeliveryMan.png',
);

export default function BookingScreen({
  navigation,
}: any) {

  const [quantity, setQuantity] = useState(1);

  return (

    <SafeAreaView
      edges={['top']}
      style={styles.safeArea}>

      <StatusBar
        translucent={false}
        backgroundColor="#F5F5F5"
        barStyle="dark-content"
      />

      <View style={styles.container}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>

          {/* HEADER */}

          <View style={styles.header}>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.goBack()
              }
              style={styles.backButton}>

              <Ionicons
                name="arrow-back"
                size={width * 0.065}
                color="#000"
              />

            </TouchableOpacity>

            <View style={styles.headerCenter}>

              <Text
                numberOfLines={1}
                style={styles.restaurantName}>

                Ruchibe (guru Restaurant)

              </Text>

              <View style={styles.locationRow}>

                <Ionicons
                  name="home-outline"
                  size={width * 0.038}
                  color="#000"
                />

                <Text style={styles.homeText}>
                  Home
                </Text>

                <Text style={styles.dot}>
                  •
                </Text>

                <Text
                  numberOfLines={1}
                  style={styles.locationText}>

                  SGM, petals, Banglore

                </Text>

              </View>

            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.moreBtn}>

              <Ionicons
                name="ellipsis-horizontal"
                size={width * 0.06}
                color="#000"
              />

            </TouchableOpacity>

          </View>

          {/* MAIN CARD */}

          <View style={styles.mainCard}>

            <View style={styles.offerContainer}>

<View>

  <Text style={styles.offerTitle}>
    Add one at $1
  </Text>

  <View style={styles.offerGradientLine} />

</View>

              <View style={styles.offerRow}>

                <View style={{ flex: 1 }}>

                  <Text style={styles.offerText}>
                    Save $29 now & get 3 months
                  </Text>

<View
  style={{
    flexDirection: 'row',
    alignItems: 'center',
  }}>

  <Text style={styles.offerText}>
    free deliveries
  </Text>

  <Ionicons
    name="chevron-forward"
    size={width * 0.038}
    color="#000"
    style={{
      marginLeft: width * 0.006,
    }}
  />

</View>

                </View>

                <View style={styles.offerRight}>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.addMiniBtn}>

                    <Text style={styles.addMiniText}>
                      ADD
                    </Text>

                  </TouchableOpacity>

                  <Text style={styles.oneDollar}>
                    $1
                  </Text>

                </View>

              </View>

            </View>

            {/* PRODUCT */}

            <View style={styles.productRow}>

              <View style={styles.productLeft}>

                <View style={styles.nonVegBox}>

                  <View style={styles.nonVegCircle} />

                </View>

                <Text
                  numberOfLines={1}
                  style={styles.productName}>

                  Schezwan chicken fried rice

                </Text>

              </View>

              <View style={styles.productRight}>

                <View style={styles.stepper}>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      setQuantity(
                        quantity > 1
                          ? quantity - 1
                          : 1,
                      )
                    }>

                    <Text style={styles.stepperBtn}>
                      −
                    </Text>

                  </TouchableOpacity>

                  <Text style={styles.quantityText}>
                    {quantity}
                  </Text>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      setQuantity(
                        quantity + 1,
                      )
                    }>

                    <Text style={styles.stepperBtn}>
                      +
                    </Text>

                  </TouchableOpacity>

                </View>

                <View style={styles.priceColumn}>

                  <Text style={styles.oldPrice}>
                    $154
                  </Text>

                  <Text style={styles.newPrice}>
                    $114
                  </Text>

                </View>

              </View>

            </View>

            {/* BUTTONS */}

            <View style={styles.bottomButtons}>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.optionButton}>

                <Ionicons
                  name="flash-outline"
                  size={width * 0.042}
                  color="#000"
                />

                <Text style={styles.optionText}>
                  Flash food in 10 min
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.optionButton2}>

<Ionicons
  name="flash-outline"
  size={width * 0.04}
  color="#000000"
/>

                <Text style={styles.optionText}>
                  Cutlery Needed
                </Text>

              </TouchableOpacity>

            </View>

          </View>

          {/* SAVINGS */}

          <View style={styles.savingCard}>

            <Text style={styles.savingTitle}>
              Savings Corner
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.couponRow}>

              <View style={styles.couponLeft}>

                <Ionicons
                  name="pricetag"
                  size={width * 0.045}
                  color="#E95322"
                />

                <Text style={styles.couponText}>
                  Apply Coupon
                </Text>

              </View>

              <Ionicons
                name="chevron-forward"
                size={width * 0.055}
                color="#000"
              />

            </TouchableOpacity>

            <View style={styles.divider} />

            <View style={styles.couponRow}>

              <View style={styles.couponLeft}>

                <Ionicons
                  name="pricetag"
                  size={width * 0.045}
                  color="#E95322"
                />

                <Text style={styles.couponText}>
                  $40 extra off above coupons
                </Text>

              </View>

              <Text style={styles.appliedText}>
                Applied
              </Text>

            </View>

          </View>

          {/* DELIVERY */}

          <View style={styles.deliveryCard}>

            <View style={styles.segmentedControl}>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.activeSegment}>

                <Text style={styles.activeSegmentText}>
                  Delivery Type
                </Text>

              </TouchableOpacity>

             <TouchableOpacity
  activeOpacity={0.8}
  style={styles.segment}>

  <Text style={styles.segmentText}>
    Tip
  </Text>

</TouchableOpacity>

<View style={styles.segmentSeparator} />

<TouchableOpacity
  activeOpacity={0.8}
  style={styles.segment}>

  <Text style={styles.segmentText}>
    Instructions
  </Text>

</TouchableOpacity>

            </View>

            <View style={styles.deliveryBottom}>

              <View>

                <Text style={styles.deliveryTime}>
                  10-15 mins delivery
                </Text>

                <Text style={styles.flashFoodText}>
                  On your Flash Food
                </Text>

              </View>

<Image
  source={DELIVERY_IMAGE}
  style={styles.deliveryImage}
/>

            </View>

          </View>

          {/* ADDRESS */}

          <View style={styles.bottomContainer}>

            <View style={styles.addressRow}>

              <Ionicons
                name="navigate"
                size={width * 0.04}
                color="#E95322"
              />

              <Text
  numberOfLines={1}
  adjustsFontSizeToFit
  style={styles.addressTitle}>
                Where would you like us to deliver this order?
              </Text>

            </View>

            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.addressButton}>

              <Text style={styles.addressButtonText}>
                Add or Select address
              </Text>

            </TouchableOpacity>

          </View>

        </ScrollView>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  scrollContent: {
    paddingBottom: height * 0.05,

    paddingTop:
      Platform.OS === 'android'
        ? (StatusBar.currentHeight || 0) * 0.25
        : 0,
  },

  /* HEADER */

  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',

    paddingHorizontal: width * 0.045,

    paddingTop: height * 0.01,

    minHeight: height * 0.08,
  },

  backButton: {
    width: width * 0.09,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  headerCenter: {
    flex: 1,
    marginLeft: width * 0.015,
    paddingRight: width * 0.03,
  },

  moreBtn: {
    width: width * 0.08,
    alignItems: 'flex-end',
  },

restaurantName: {
  fontFamily: 'Inter-Regular',

  fontSize: width * 0.033,
  lineHeight: width * 0.041,

  letterSpacing: -0.24,

  color: 'rgba(0,0,0,0.54)',
},

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.004,
  },

homeText: {
  marginLeft: width * 0.01,

  fontFamily: 'Inter-Medium',

  fontSize: width * 0.033,
  lineHeight: width * 0.041,

  letterSpacing: -0.24,

  color: '#000000',
},

  dot: {
    marginHorizontal: width * 0.012,
    color: '#8A8A8A',
  },

  locationText: {
    flex: 1,

    fontFamily: 'Montserrat-Regular',
    fontSize: width * 0.031,

    color: '#8A8A8A',
  },

  /* MAIN CARD */

  mainCard: {
    width: width * 0.92,

    backgroundColor: '#FFFFFF',

    borderRadius: width * 0.04,

    alignSelf: 'center',

    marginTop: height * 0.035,

    padding: width * 0.04,

    elevation: 3,
  },

  offerContainer: {
    backgroundColor: '#FDEFEF',

    borderRadius: width * 0.025,

    padding: width * 0.04,
  },

offerTitle: {
  fontFamily: 'Inter-Bold',

  fontSize: width * 0.036,
  lineHeight: width * 0.053,

  letterSpacing: -0.32,

  color: '#C64500',
},

  offerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: height * 0.02,
  },

offerText: {
  fontFamily: 'Inter-Medium',

  fontSize: width * 0.033,
  lineHeight: width * 0.041,

  letterSpacing: -0.24,

  color: '#000000',
},

  offerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width * 0.03,
  },

  addMiniBtn: {
    width: width * 0.12,
    height: height * 0.04,

    borderRadius: width * 0.02,

    borderWidth: 1,
    borderColor: '#D9D9D9',

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',
  },

 addMiniText: {
  fontFamily: 'Inter',
  fontWeight:'bold',

  fontSize: width * 0.028,
  lineHeight: width * 0.05,

  letterSpacing: -0.32,

  color: '#34C759',
},

oneDollar: {
  marginLeft: width * 0.02,

  fontFamily: 'Inter',
  fontWeight: 'bold',

  fontSize: width * 0.052,
  lineHeight: width * 0.056,

  letterSpacing: -0.32,

  color: '#000000',
},

  /* PRODUCT */

  productRow: {
    marginTop: height * 0.035,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  productLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: width * 0.03,
  },

  nonVegBox: {
    width: width * 0.04,
    height: width * 0.04,

    borderWidth: 1,
    borderColor: '#C64500',

    borderRadius: 2,

    justifyContent: 'center',
    alignItems: 'center',
  },

  nonVegCircle: {
    width: width * 0.018,
    height: width * 0.018,

    borderRadius: 999,

    backgroundColor: '#C64500',
  },

  productName: {
    marginLeft: width * 0.02,

    flex: 1,

    fontFamily: 'Montserrat-Medium',
    fontSize: width * 0.038,

    color: '#000',
  },

  productRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

stepper: {
  width: width * 0.16,
  height: width * 0.075,

  borderRadius: width * 0.02,

  borderWidth: 1,
  borderColor: '#D9D9D9',

  backgroundColor: '#FFFFFF',

  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
},

  stepperBtn: {
    fontSize: width * 0.06,
    color: '#34C759',
  },

quantityText: {
  fontFamily: 'Inter-Regular',

  fontSize: width * 0.042,

  letterSpacing: -0.24,

  color: '#000000',
},

  priceColumn: {
    marginLeft: width * 0.03,
    alignItems: 'flex-end',
  },

oldPrice: {
  fontFamily: 'Inter',
  fontWeight:'bold',
  fontSize: width * 0.028,

  letterSpacing: -0.24,

  textDecorationLine: 'line-through',

  color: '#8A8A8A',

  marginBottom: -2,
},

  newPrice: {
  fontFamily: 'Inter',
  fontWeight:'bold',

  fontSize: width * 0.052,

  lineHeight: width * 0.058,

  letterSpacing: -0.32,

  color: '#000000',
},

  /* BUTTONS */

bottomButtons: {
  marginTop: height * 0.028,

  flexDirection: 'row',
  justifyContent: 'center',

  gap: width * 0.05,
},

  optionButton: {
    width: width * 0.408,
    height: height * 0.055,

    borderRadius: width * 0.02,

    borderWidth: 1,
    borderColor: '#D9D9D9',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  optionButton2: {
    width: width * 0.35,
    height: height * 0.055,

    borderRadius: width * 0.02,

    borderWidth: 1,
    borderColor: '#D9D9D9',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  optionText: {
    marginLeft: width * 0.015,

    fontFamily: 'Montserrat-Regular',
    fontSize: width * 0.035,

    color: '#000',
  },

  /* SAVINGS */

  savingCard: {
    width: width * 0.92,

    backgroundColor: '#FFFFFF',

    borderRadius: width * 0.04,

    alignSelf: 'center',

    marginTop: height * 0.025,

    paddingVertical: height * 0.025,

    elevation: 3,
  },

  savingTitle: {
    marginLeft: width * 0.04,

    fontFamily: 'Montserrat-Medium',
    fontSize: width * 0.05,

    color: '#8A8A8A',
  },

  couponRow: {
    marginTop: height * 0.03,

    paddingHorizontal: width * 0.04,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  couponLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

couponText: {
  marginLeft: width * 0.025,

  fontFamily: 'Inter',
  fontWeight:'medium',

  fontSize: width * 0.038,
  lineHeight: width * 0.045,

  letterSpacing: -0.24,

  color: '#000000',
},

  divider: {
    width: '100%',
    height: 1,

    backgroundColor: '#EFEFEF',

    marginTop: height * 0.025,
  },

appliedText: {
  fontFamily: 'Inter',
  fontWeight:'bold',
  fontSize: width * 0.038,
  lineHeight: width * 0.045,

  letterSpacing: -0.24,

  color: '#34C759',
},

  /* DELIVERY */

  deliveryCard: {
    width: width * 0.92,

    backgroundColor: '#FFFFFF',

    borderRadius: width * 0.04,

    alignSelf: 'center',

    marginTop: height * 0.025,

    padding: width * 0.03,

    elevation: 3,
  },

  segmentedControl: {
    height: height * 0.055,

    borderRadius: width * 0.025,

    backgroundColor: 'rgba(120,120,128,0.12)',

    flexDirection: 'row',
    alignItems: 'center',
  },

  activeSegment: {
    flex: 1,

    height: '86%',

    marginLeft: width * 0.006,

    borderRadius: width * 0.02,

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  activeSegmentText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: width * 0.034,
    color: '#000',
  },

  segment: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  segmentText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: width * 0.034,
    color: '#000',
  },

  deliveryBottom: {
    marginTop: height * 0.03,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

deliveryTime: {
  fontFamily: 'Inter',
  fontWeight:'bold',
  fontSize: width * 0.033,
  lineHeight: width * 0.053,

  letterSpacing: -0.32,

  color: '#E95322',
},

  flashFoodText: {
    marginTop: height * 0.004,

    fontFamily: 'Montserrat-Medium',
    fontSize: width * 0.03,
    color: '#000',
  },

  deliveryImage: {
    width: width * 0.12,
    height: width * 0.12,
    resizeMode: 'contain',
  },

  /* ADDRESS */

  bottomContainer: {
    width: width * 0.92,

    alignSelf: 'center',

    marginTop: height * 0.16,

    marginBottom: height * 0.05,
  },

  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: height * 0.03,
  },

addressTitle: {
  marginLeft: width * 0.02,

  flex: 1,

  fontFamily: 'Montserrat',
  fontWeight:'bold',

  fontSize: width * 0.041,

  lineHeight: width * 0.05,

  color: '#535252',

  flexShrink: 1,
},

  addressButton: {
    width: '100%',
    height: height * 0.065,

    borderRadius: width * 0.03,

    backgroundColor: '#FF5A00',

    justifyContent: 'center',
    alignItems: 'center',
  },

  addressButtonText: {
    fontFamily: 'Montserrat',
    fontWeight:'bold',
    fontSize: width * 0.045,

    color: '#FFFFFF',
  },
  offerGradientLine: {
  width: width * 0.21, // ~82px from Figma
  height: 1,

  marginTop: height * 0.004,

  backgroundColor: '#E95322',

  opacity: 0.8,

  alignSelf: 'flex-start',
},
segmentSeparator: {
  width: 1,
  height: 12,

  borderRadius: 0.5,

  backgroundColor: '#8E8E93',

  opacity: 0.3,

  alignSelf: 'center',
},
});