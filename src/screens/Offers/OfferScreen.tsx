import React from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import OfferCard from '../../components/cards/OfferCard';

import { offerData } from '../../data/offerData';

export default function OfferScreen({ navigation }: any) {
  return (
    <View style={styles.container}>

      {/* STATUS + HEADER */}

      <View style={styles.header}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>

          <Ionicons
            name="arrow-back"
            size={24}
            color="#111"
          />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Best offers
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

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    width: 351,
    height: 45,
    marginTop: 49,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    marginRight: 14,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: '500',
    color: '#111',
  },

  scrollContent: {
    marginTop: 20,
    paddingBottom: 30,
    gap: 13,
  },
});