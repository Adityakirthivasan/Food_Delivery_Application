import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';
import Feather from '@react-native-vector-icons/feather';

import SearchBar from '../../components/inputs/SearchBar';
import ProfileButton from '../../components/buttons/ProfileButton';

import OrderHistoryCard from '../../components/cards/OrderHistoryCard';

import { orderHistoryData } from '../../data/orderHistoryData';
import axios from 'axios';

export default function OrderHistoryScreen({ navigation }: any) {
  const [orderHistoryData, setOrderHistoryData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [dishes, setDishes] =
  useState<any[]>([]);

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

        const ordersResponse =
          await axios.get(
            `https://dinedash-backend-1.onrender.com/api/user/get-orders?userId=${user.userId}`,
          );

        const dishesResponse =
          await axios.get(
            'https://dinedash-backend-1.onrender.com/api/user/get-dishes',
          );

        const mappedOrders =
          (
            ordersResponse
              .data
              .result ||
            []
          ).map(
            (
              order: any,
            ) => {

              const dish =
                (
                  dishesResponse
                    .data
                    .result ||
                  []
                ).find(
                  (
                    d: any,
                  ) =>
                    d.dishId ===
                    order
                      .items?.[0]
                      ?.dishId,
                );

              return {
                ...order,

                image:
                  dish?.image,

                dishName:
                  dish?.name,

                price:
                  dish?.price,
              };
            },
          );

        setOrderHistoryData(
          mappedOrders,
        );

        setDishes(
          dishesResponse
            .data
            .result ||
            [],
        );

        setLoading(false);

      } catch (error) {

        console.log(
          error,
        );

        setLoading(false);
      }
    };

  fetchOrders();

}, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}

      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
  name="arrow-back"
  size={16}
  color="#040404"
/>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>My Orders</Text>
        </View>

        <View style={styles.iconOnly}>
          <Ionicons name="person" size={22} color="#000" />
        </View>
      </View>

      {/* SEARCH */}

{/* SEARCH */}

<View style={styles.searchContainer}>
  <SearchBar
    showMic={true}
    placeholder="Search orders"
  />
</View>

      {/* ORDERS */}

<FlatList
  data={orderHistoryData}
  keyExtractor={item => item.orderId}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={styles.listContent}
  style={{ marginTop: 20 }}
renderItem={({ item }) => (
  <OrderHistoryCard
    item={{
      ...item,

      title:
        item.dishName ||
        'Food Item',

      image:
        item.image,

      amount:
        `$${item.price || 0}`,

      status:
        item.status ||
        'New',
    }}
  />
)}
/>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#FFF8F4',
},

header: {
  width: 353,

  height: 32,

  marginTop: 49,
  marginLeft: 16,

  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},

leftHeader: {
  flexDirection: 'row',
  alignItems: 'center',
},

headerTitle: {
  marginLeft: 12,

  fontFamily: 'Montserrat-Medium',

  fontSize: 16,
  lineHeight: 20,

  letterSpacing: -0.24,

  color: '#040404',
},

 searchContainer: {
  width: 353,

  marginTop: 20,

  alignSelf: 'center',
},

listContent: {
  paddingTop: 20,

  paddingBottom: 40,

  gap: 16,
},
iconOnly: {
  width: 32,
  height: 32,

  justifyContent: 'center',
  alignItems: 'center',
},
});