import React from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import BestSellerCard from '../../components/cards/BestSellerCard';

import { bestSellerData } from '../../data/bestSellerData';

export default function BestSellerScreen({
  navigation,
}: any) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity
          onPress={() => navigation.goBack()}>

          <Ionicons
            name="arrow-back"
            size={24}
            color="#111"
          />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Best Sellers
        </Text>

      </View>

      <FlatList
        data={bestSellerData}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <BestSellerCard item={item} />
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
    width: 351,
    height: 45,
    marginTop: 49,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: '500',
    color: '#111',
    marginLeft: 12,
  },

  listContent: {
    paddingHorizontal: 19,
    paddingTop: 18,
    paddingBottom: 40,
  },

  row: {
    justifyContent: 'space-between',
  },
});