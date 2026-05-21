import React from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
  SafeAreaView,
} from 'react-native-safe-area-context';

import Ionicons from '@react-native-vector-icons/ionicons';

import BestSellerCard from '../../components/cards/BestSellerCard';

import { bestSellerData } from '../../data/bestSellerData';

const { width } = Dimensions.get('window');

const guidelineWidth = 393;

const scale = width / guidelineWidth;

export default function BestSellerScreen({
  navigation,
}: any) {

  return (

    <SafeAreaView
      edges={['top']}
      style={styles.container}>

      {/* HEADER */}

      <View style={styles.header}>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>

          <Ionicons
            name="arrow-back"
            size={22}
            color="#040404"
          />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Best Sellers
        </Text>

      </View>

      {/* LIST */}

      <FlatList
        data={bestSellerData}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <BestSellerCard item={item} />
        )}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: '#FFF8F4',
  },

  header: {
    width: width - 40,

    height: 45 * scale,

    marginTop: 10 * scale,
    marginLeft: 20 * scale,

    flexDirection: 'row',
    alignItems: 'center',
  },

  headerTitle: {
    marginLeft: 12 * scale,

    fontFamily: 'Montserrat-Medium',

    fontSize: 28 * scale,
    lineHeight: 32 * scale,

    letterSpacing: -0.24,

    color: '#111111',
  },

  listContent: {
    paddingHorizontal: 19 * scale,

    paddingTop: 20 * scale,

    paddingBottom: 40 * scale,
  },

  row: {
    justifyContent: 'space-between',
  },
});