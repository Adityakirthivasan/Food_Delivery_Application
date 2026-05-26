import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    axios
.get(
'https://dinedash-backend-1.onrender.com/api/user/get-orders?userId=3588d041-5366-4dc4-8979-cef3b51f26f0',
)
      .then(response => {
        setOrderHistoryData(response.data.result);
        setLoading(false);
      })
      .catch(error => {
        console.error('Network Error:', error);
        setLoading(false);
      });
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
    <OrderHistoryCard item={item} />
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