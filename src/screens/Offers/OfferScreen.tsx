import React from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Ionicons from '@react-native-vector-icons/ionicons';

import OfferCard from '../../components/cards/OfferCard';

import { offerData } from '../../data/offerData';

const { width } = Dimensions.get('window');

const scale = width / 393;

export default function OfferScreen({ navigation }: any) {

  return (

    <SafeAreaView
      style={styles.container}
      edges={['top']}>

      {/* HEADER */}

      <View style={styles.header}>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.backButton}
          onPress={() => navigation.goBack()}>

          <Ionicons
            name="arrow-back"
            size={24 * scale}
            color="#040404"
          />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Best Offers
        </Text>

      </View>

      {/* OFFERS */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>

        {offerData.map((item) => (

          <OfferCard
            key={item.id}
            item={item}
          />

        ))}

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    width: width - (40 * scale),
    height: 45 * scale,

    marginTop: 4 * scale,
    marginLeft: 20 * scale,

    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    width: 32 * scale,
    height: 32 * scale,

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 8 * scale,
  },

  headerTitle: {
    fontFamily: 'Montserrat-Medium',

    fontSize: 16 * scale,
    lineHeight: 20 * scale,

    letterSpacing: -0.24,

    color: '#040404',
  },

  scrollContent: {
    paddingTop: 16 * scale,
    paddingBottom: 40 * scale,

    gap: 13 * scale,
  },

});