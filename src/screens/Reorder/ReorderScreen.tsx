import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Ionicons from '@react-native-vector-icons/ionicons';
import Feather from '@react-native-vector-icons/feather';

import LocationHeader from '../../components/headers/LocationHeader';
import SearchBar from '../../components/inputs/SearchBar';

const { width } = Dimensions.get('window');

const scale = width / 393;

// const historyData = [
//   {
//     id: 1,
//     name: 'Burger king',
//     location: 'HSR, Bangalore',
//     amount: '$200',

//     image: require('../../assets/images/reorder/Dish.png'),
//   },

//   {
//     id: 2,
//     name: 'Burger king',
//     location: 'HSR, Bangalore',
//     amount: '$200',

//     image: require('../../assets/images/reorder/Dish.png'),
//   },

//   {
//     id: 3,
//     name: 'Burger king',
//     location: 'HSR, Bangalore',
//     amount: '$200',

//     image: require('../../assets/images/reorder/Dish.png'),
//   },

//   {
//     id: 4,
//     name: 'Burger king',
//     location: 'HSR, Bangalore',
//     amount: '$200',

//     image: require('../../assets/images/reorder/Dish.png'),
//   },
// ];

export default function ReorderScreen({
  navigation,
}: any) {
  const [historyData, setHistoryData] =
  useState<any[]>([]);
  const [dishes, setDishes] =
  useState<any[]>([]);

const [loading, setLoading] =
  useState(true);
const [userData, setUserData] =
  useState<any>(null);
useEffect(() => {

  const fetchOrders =
    async () => {

      try {

        const storedUser =
          await AsyncStorage.getItem(
            'user',
          );

        if (!storedUser) {
          setLoading(false);
          return;
        }

        const user =
          JSON.parse(
            storedUser,
          );

        setUserData(user);

const ordersResponse =
  await axios.get(
    `https://dinedash-backend-1.onrender.com/api/user/get-orders?userId=${user.userId}`,
  );

const dishesResponse =
  await axios.get(
    'https://dinedash-backend-1.onrender.com/api/user/get-dishes',
  );

setHistoryData(
  ordersResponse.data
    .result || [],
);

setDishes(
  dishesResponse.data
    .result || [],
);

        setLoading(false);

      } catch (error) {
        console.log(error);

        setLoading(false);
      }
    };

  fetchOrders();

}, []);
if (loading) {
  return (
    <ActivityIndicator
      size="large"
    />
  );
}

  return (

    <SafeAreaView
      style={styles.container}
      edges={['top']}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.scrollContent}>

        {/* TOP */}

        <View style={styles.topSection}>

<LocationHeader
  title={
    userData?.name ||
    'Rivertown Haven'
  }
  subtitle={
    userData?.address ||
    'SGM, petals, sai baba colony...'
  }
  dark
/>

          <SearchBar dark />

        </View>

        {/* DELIVERY CARD */}

        <View style={styles.deliveryCard}>

          <Image
            source={require('../../assets/images/reorder/Location.png')}
            style={styles.mapImage}
          />

          <View style={styles.deliveryContent}>

            <View style={styles.deliveryTopRow}>

              <View style={styles.deliveryTextContainer}>

                <Text style={styles.deliveryTitle}>
                  Order out for delivery
                </Text>

                <Text style={styles.deliverySub}>
                  Rama moorthy is on the way to delivery your order
                </Text>

              </View>

              <View style={styles.timeBox}>

                <Text style={styles.timeText}>
                  4
                </Text>

                <Text style={styles.minText}>
                  min
                </Text>

              </View>

            </View>

            {/* ACTIONS */}

            <View style={styles.actionRow}>

              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.instructionButton}>

                <Ionicons
                  name="add-circle"
                  size={18 * scale}
                  color="#000"
                />

                <Text style={styles.instructionText}>
                  Add Delivery Instructions
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.iconButton}>

                <Feather
                  name="phone"
                  size={18 * scale}
                  color="#000"
                />

              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.iconButton}>

                <Ionicons
                  name="ellipsis-horizontal"
                  size={18 * scale}
                  color="#000"
                />

              </TouchableOpacity>

            </View>

          </View>

        </View>

        {/* HISTORY */}

        <View style={styles.historySection}>

          <Text style={styles.historyTitle}>
            History
          </Text>

{historyData.map(item => {

const dish =
  dishes.find(
    d =>
      d.dishId ===
      item.items?.[0]
        ?.dishId,
  );

return (
            

            <View
             key={item.orderId}
              style={styles.historyCard}>

              {/* IMAGE */}

<Image
  source={
    dish?.image
      ? {
          uri:
            dish.image,
        }
      : require(
          '../../assets/images/reorder/Dish.png'
        )
  }
  style={
    styles.foodImage
  }
/>

              {/* CONTENT */}

              <View style={styles.cardContent}>

                {/* TOP */}

                <View style={styles.cardTopRow}>

                  <View style={styles.topLeftContent}>

                    <Text
                      
                      style={styles.foodName}>

{dish?.name ||
'Food Item'}

                    </Text>

                    <Text style={styles.locationText}>
{userData?.address ||
'Address'}
                    </Text>

                    <View style={styles.viewMenuRow}>

                      <Text style={styles.viewMenu}>
                        View Menu
                      </Text>

                      <Ionicons
                        name="chevron-forward"
                        size={9 * scale}
                        color="#E95322"
                      />

                    </View>

                  </View>

                  <TouchableOpacity
                    style={styles.moreButton}>

                    <Ionicons
                      name="ellipsis-horizontal"
                      size={20 * scale}
                      color="#000"
                    />

                  </TouchableOpacity>

                </View>

                {/* ITEMS */}

                <View style={styles.itemRow}>

                  <View style={styles.vegDot}>

                    <View style={styles.vegInnerDot} />

                  </View>

                  <Text
                    numberOfLines={1}
                    style={styles.itemText}>

{item.items?.length
  ? item.items
.map(
(food: any) =>
`${food.quantity} x ${dish?.name}`
)
      .join(', ')
  : 'No items'}

                  </Text>

                </View>

                {/* ORDER DETAILS */}

                <View style={styles.orderInfoRow}>

<Text
  numberOfLines={1}
  style={styles.orderPlaced}>

 Order placed on{' '}
{new Date(
  item.createdAt,
).toLocaleString()}

</Text>

<Text style={styles.dot}>
  •
</Text>

<Text style={styles.delivered}>
  Delivered
</Text>

                </View>

                {/* BOTTOM */}

                <View style={styles.bottomRow}>

                  <Text style={styles.amount}>
                 ${
(
(dish?.price || 0) *
(item.items?.[0]
?.quantity || 1)
).toFixed(2)
}
                  </Text>

<TouchableOpacity
  activeOpacity={0.9}
  style={styles.reorderButton}
onPress={() =>
  navigation.navigate(
    'BookingScreen',
    {
      order: {
        ...item,

        dishId:
          dish?.dishId,

        name:
          dish?.name,

        image:
          dish?.image,

        price:
          dish?.price,

        quantity:
          item.items?.[0]
            ?.quantity || 1,

        prepTime:
          dish?.prepTime,

        restaurantName:
          'Restaurant',

        userAddress:
          userData?.address,

        originalPrice:
          (
            dish?.price || 0
          ) + 5,
      },
    },
  )
}>

                    <Text style={styles.reorderText}>
                      Reorder
                    </Text>

                  </TouchableOpacity>

                </View>

              </View>

            </View>

          );})}

        </View>

      </ScrollView>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: '#F8F8F8',
  },

  scrollContent: {
    paddingBottom: 120 * scale,
  },

  topSection: {
    paddingHorizontal: 16 * scale,
    paddingTop: 10 * scale,
    paddingBottom: 20 * scale,

    backgroundColor: '#F8F8F8',
  },

  /* DELIVERY */

  deliveryCard: {
    width: width - (32 * scale),

    borderRadius: 18 * scale,

    backgroundColor: '#FFFFFF',

    alignSelf: 'center',

    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 3,
  },

  mapImage: {
    width: '100%',
    height: 170 * scale,

    resizeMode: 'cover',
  },

  deliveryContent: {
    padding: 16 * scale,
  },

  deliveryTopRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'flex-start',
  },

  deliveryTextContainer: {
    flex: 1,

    paddingRight: 10 * scale,
  },

  deliveryTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',

    fontSize: 17 * scale,
    lineHeight: 24 * scale,

    color: '#000000',
  },

  deliverySub: {
    marginTop: 2 * scale,

    fontFamily: 'Inter',
    fontWeight: '400',

    fontSize: 12 * scale,
    lineHeight: 17 * scale,

    color: '#000000',
  },

  timeBox: {
    width: 58 * scale,
    height: 58 * scale,

    borderRadius: 14 * scale,

    backgroundColor: '#32D623',

    justifyContent: 'center',
    alignItems: 'center',
  },

  timeText: {
    fontFamily: 'Inter',
    fontWeight: '700',

    fontSize: 20 * scale,
    lineHeight: 22 * scale,

    color: '#FFFFFF',
  },

  minText: {
    fontFamily: 'Inter',
    fontWeight: '500',

    fontSize: 11 * scale,

    color: '#FFFFFF',
  },

  /* ACTIONS */

  actionRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 18 * scale,
  },

  instructionButton: {
    flex: 1,

    height: 48 * scale,

    borderRadius: 14 * scale,

    borderWidth: 1,
    borderColor: '#E2E2E2',

    backgroundColor: '#FAFAFA',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 10 * scale,
  },

  instructionText: {
    marginLeft: 6 * scale,

    fontFamily: 'Inter',
    fontWeight: '500',

    fontSize: 14 * scale,

    color: '#000000',
  },

  iconButton: {
    width: 48 * scale,
    height: 48 * scale,

    marginLeft: 10 * scale,

    borderRadius: 14 * scale,

    borderWidth: 1,
    borderColor: '#E2E2E2',

    backgroundColor: '#FAFAFA',

    justifyContent: 'center',
    alignItems: 'center',
  },

  /* HISTORY */

  historySection: {
    paddingHorizontal: 16 * scale,
    paddingTop: 28 * scale,
  },

  historyTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',

    fontSize: 22 * scale,
    lineHeight: 28 * scale,

    color: '#000000',
  },

  /* HISTORY CARD */
historyCard: {
  width: '100%',

  minHeight: 160 * scale,

  marginTop: 16 * scale,

  borderRadius: 18 * scale,

  backgroundColor: '#FFFFFF',

  overflow: 'hidden',

  flexDirection: 'row',

  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },

  shadowOpacity: 0.08,
  shadowRadius: 10,

  elevation: 3,
},


foodImage: {
  width: 128 * scale,

  height: '100%',

  resizeMode: 'cover',
},

cardContent: {
  flex: 1,

  paddingHorizontal: 16 * scale,
  paddingVertical: 14 * scale,

  justifyContent: 'space-between',
},

  cardTopRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'flex-start',
  },

  topLeftContent: {
    flex: 1,

    paddingRight: 8 * scale,
  },

foodName: {
  fontFamily: 'Inter',

  fontWeight: '700',

  fontSize: 18 * scale,
  lineHeight: 28 * scale,

  color: '#000000',
},

locationText: {
  marginTop: 2 * scale,

  fontFamily: 'Inter',

  fontWeight: '400',

  fontSize: 12 * scale,
  lineHeight: 18 * scale,

  color: '#000000',
},

  viewMenuRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 3 * scale,
  },

viewMenu: {
  fontFamily: 'Inter',

  fontWeight: '400',

  fontSize: 10 * scale,
  lineHeight: 14 * scale,

  color: '#E95322',
},

  moreButton: {
    paddingLeft: 4 * scale,
  },

itemRow: {
  flexDirection: 'row',

  alignItems: 'center',

  marginTop: 6 * scale,
},

  vegDot: {
    width: 12 * scale,
    height: 12 * scale,

    borderWidth: 1.4 * scale,
    borderColor: '#C64500',

    borderRadius: 2 * scale,

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 6 * scale,
  },

  vegInnerDot: {
    width: 6 * scale,
    height: 6 * scale,

    borderRadius: 6 * scale,

    backgroundColor: '#C64500',
  },

  itemText: {
    flex: 1,

    fontFamily: 'Inter',
    fontWeight: '400',

    fontSize: 10 * scale,
    lineHeight: 15 * scale,

    color: '#8A8A8A',
  },

orderInfoRow: {
  flexDirection: 'row',

  alignItems: 'center',

  marginTop: 8 * scale,
},

orderPlaced: {
  flex: 1,

  fontFamily: 'Inter',

  fontWeight: '500',

  fontSize: 11 * scale,
  lineHeight: 16 * scale,

  color: '#000000',
},

delivered: {
  marginLeft: 4 * scale,

  fontFamily: 'Inter',

  fontWeight: '700',

  fontSize: 11 * scale,
  lineHeight: 16 * scale,

  color: '#000000',
},

bottomRow: {
  flexDirection: 'row',

  justifyContent: 'space-between',

  alignItems: 'center',

  marginTop: 10 * scale,
},

amount: {
  fontFamily: 'Inter',
  fontWeight: '700',

  fontSize: 18 * scale,
  lineHeight: 28 * scale,

  color: '#000000',
},


reorderButton: {
  width: 122 * scale,

  height: 44 * scale,

  borderRadius: 10 * scale,

  borderWidth: 1,
  borderColor: '#D9D9D9',

  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: '#FFFFFF',
},

reorderText: {
  fontFamily: 'Inter',
  fontWeight: '700',

  fontSize: 16 * scale,
  lineHeight: 22 * scale,

  color: '#000000',
},
dot: {
  marginHorizontal: 2 * scale,

  fontSize: 12 * scale,

  color: '#000000',

  fontWeight: '700',
},
});