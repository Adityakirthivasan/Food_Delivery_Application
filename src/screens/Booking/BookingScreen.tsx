  import React, { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  route,
}: any) {

const cartItem =
  route.params?.cartItem ||
  route.params?.order ||
  route.params?.item;

const [quantity, setQuantity] = useState(
  cartItem?.quantity || 1,
);

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
                  size={width * 0.05}
                  color="#000"
                />

              </TouchableOpacity>

              <View style={styles.headerCenter}>

                <Text
                  numberOfLines={1}
                  style={styles.restaurantName}>

{route.params?.order
  ?.restaurantName ||
  cartItem.restaurantName ||
  'Restaurant'}

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

  {
    cartItem?.userAddress ||
    route.params?.userAddress ||
    'SGM, petals, Banglore'
  }

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

                   {cartItem.name}

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
  ${
    (
      (cartItem.price || 0) *
      1.35
    ).toFixed(2)
  }
</Text>

                    <Text style={styles.newPrice}>
                     ${cartItem.price * quantity}
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
                   {cartItem.prepTime || 10}-{(cartItem.prepTime || 10) + 5} mins delivery
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
  style={styles.addressButton}
  onPress={async () => {
    try {
const storedUser =
  await AsyncStorage.getItem(
    'user',
  );

if (!storedUser) {
  console.log(
    'No logged user found',
  );
  return;
}

const user =
  JSON.parse(
    storedUser,
  );

await axios.post(
        'https://dinedash-backend-1.onrender.com/api/user/place-order',
{
  userId:user.userId,
  status: 'New',
  orderTime: new Date(),
items: [
  {
    dishId:
      cartItem.dishId ||
      cartItem.id,
    quantity,
  },
],
},
      );

      
    } catch (error) {
      console.log(
        'Place order error:',
        error,
      );
    }
   navigation.navigate('BottomTabs');
  }}
>

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

    paddingHorizontal: width * 0.041, // ~16px

    paddingTop: height * 0.008,

    minHeight: height * 0.075,
  },

  backButton: {
    width: width * 0.07,

    justifyContent: 'center',
    alignItems: 'flex-start',

    marginTop: height * 0.004,
  },

  headerCenter: {
    flex: 1,

    marginLeft: width * 0.01,

    paddingRight: width * 0.02,
  },

  moreBtn: {
    width: width * 0.06,

    justifyContent: 'flex-start',
    alignItems: 'flex-end',

    marginTop: height * 0.003,
  },

  restaurantName: {
    fontFamily: 'Inter-Regular',

    fontSize: width * 0.0305,
    lineHeight: width * 0.038,

    letterSpacing: -0.24,

    color: 'rgba(0,0,0,0.54)',
  },

  
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: height * 0.0035,
  },

  homeText: {
    marginLeft: width * 0.008,

    fontFamily: 'Inter-Medium',

    fontSize: width * 0.0305,
    lineHeight: width * 0.038,

    letterSpacing: -0.24,

    color: '#000000',
  },

  dot: {
    marginHorizontal: width * 0.010,

    color: '#8A8A8A',

    fontSize: width * 0.028,
  },

  locationText: {
    flex: 1,

    fontFamily: 'Inter-Regular',

    fontSize: width * 0.0305,
    lineHeight: width * 0.038,

    letterSpacing: -0.24,

    color: 'rgba(0,0,0,0.54)',
  },

    /* MAIN CARD */

  mainCard: {
    width: width * 0.918, // ~361

    minHeight: height * 0.255,

    backgroundColor: '#FFFFFF',

    borderRadius: width * 0.0305, // ~12

    alignSelf: 'center',

    marginTop: height * 0.032,

    paddingHorizontal: width * 0.041, // ~16
    paddingVertical: width * 0.041,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 7,

    elevation: 4,
  },

  offerContainer: {
    backgroundColor: '#FDEFEF',

    borderRadius: width * 0.022,

    paddingHorizontal: width * 0.0305,
    paddingVertical: width * 0.0305,
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

    marginTop: height * 0.012,
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
    marginTop: height * 0.022,

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
    marginTop: height * 0.020,

    flexDirection: 'row',

    justifyContent: 'space-between',

    gap: width * 0.010, // ~4px
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
    width: width * 0.918,

    minHeight: height * 0.182,

    backgroundColor: '#FFFFFF',

    borderRadius: width * 0.0305,

    alignSelf: 'center',

    marginTop: height * 0.020,

    paddingVertical: width * 0.041,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 7,

    elevation: 4,
  },

  savingTitle: {
    marginLeft: width * 0.041,

    fontFamily: 'Montserrat-Medium',

    fontSize: width * 0.041,
    lineHeight: width * 0.051,

    letterSpacing: -0.24,

    color: '#696969',
  },

  couponRow: {
    marginTop: height * 0.018,

    paddingHorizontal: width * 0.041,

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

    marginTop: height * 0.018,
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
    width: width * 0.918,

    minHeight: height * 0.128,

    backgroundColor: '#FFFFFF',

    borderRadius: width * 0.0305,

    alignSelf: 'center',

    marginTop: height * 0.020,

    paddingHorizontal: width * 0.041,
    paddingVertical: width * 0.0305,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 7,

    elevation: 4,
  },

segmentedControl: {
  width: '100%',

  height: width * 0.081, // ~32px

  borderRadius: width * 0.023,

  backgroundColor: 'rgba(120,120,128,0.12)',

  flexDirection: 'row',
  alignItems: 'center',

  padding: width * 0.005, // soft inner padding
},

segment: {
  flex: 1,

  height: '100%',

  justifyContent: 'center',
  alignItems: 'center',
},

    activeSegmentText: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: width * 0.034,
      color: '#000',
    },
    activeSegment: {
  flex: 1,

  height: '100%',

  backgroundColor: '#FFFFFF',

  borderRadius: width * 0.02,

  justifyContent: 'center',
  alignItems: 'center',
},

  segmentText: {
    fontFamily: 'Inter-Medium',

    fontSize: width * 0.031,
    lineHeight: width * 0.038,

    letterSpacing: -0.24,

    color: '#040404',
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
  width: width * 0.125,
  height: width * 0.125,

  position: 'absolute',

  right: width * 0.035,
  bottom: width * 0.01,

  resizeMode: 'contain',
},

    /* ADDRESS */

bottomContainer: {
  width: width * 0.918,

  alignSelf: 'center',

  marginTop: height * 0.11,

  marginBottom: height * 0.04,
},
addressRow: {
  flexDirection: 'row',
  alignItems: 'flex-start',

  marginBottom: height * 0.020,
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

  height: width * 0.132,

  borderRadius: width * 0.028,

  backgroundColor: '#FF5A00',

  justifyContent: 'center',
  alignItems: 'center',
},
addressButtonText: {
  fontFamily: 'Montserrat',
  fontWeight:'bold',
  fontSize: width * 0.040,
  lineHeight: width * 0.050,

  letterSpacing: -0.24,

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