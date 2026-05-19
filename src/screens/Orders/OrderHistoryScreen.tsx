import React from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';
import Feather from '@react-native-vector-icons/feather';

import SearchBar from '../../components/inputs/SearchBar';
import ProfileButton from '../../components/buttons/ProfileButton';

import OrderHistoryCard from '../../components/cards/OrderHistoryCard';

import { orderHistoryData } from '../../data/orderHistoryData';

export default function OrderHistoryScreen({
  navigation,
}: any) {
  return (
    <View style={styles.container}>

      {/* HEADER */}

      <View style={styles.header}>

        <View style={styles.leftHeader}>

          <TouchableOpacity
            onPress={() => navigation.goBack()}>

            <Ionicons
              name="arrow-back"
              size={24}
              color="#111"
            />

          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            My Orders
          </Text>

        </View>

        <View style={styles.iconOnly}>

  <Ionicons
    name="person"
    size={22}
    color="#000"
  />

</View>

      </View>

      {/* SEARCH */}

      <View style={styles.searchRow}>

        <View style={styles.searchContainer}>

          <SearchBar
            
            showMic={false}
            placeholder="Search orders"
          />

        </View>

        <TouchableOpacity style={styles.filterButton}>

          <Feather
            name="sliders"
            size={20}
            color="#111"
          />

        </TouchableOpacity>

      </View>

      {/* ORDERS */}

      <FlatList
        data={orderHistoryData}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
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
    width: 337,
    height: 32,
    marginTop: 49,
    marginLeft: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },

  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#111',
    marginLeft: 12,
  },

  searchRow: {
    width: 353,
    height: 50,
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  searchContainer: {
    flex: 1,
    marginTop: -20,
  },

  filterButton: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  listContent: {
    width: 353,
    paddingTop: 24,
    paddingBottom: 40,
    alignSelf: 'center',
  },
  iconOnly: {
  justifyContent: 'center',
  alignItems: 'center',
},  
});