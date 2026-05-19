import React from 'react';

import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import { addOnsData } from '../../data/addOnsData';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function ProductDetailScreen({
  navigation,
  route,
}: any) {

  const { item } = route.params;

  return (
    <View style={styles.container}>

      {/* IMAGE SECTION */}

      <View style={styles.imageSection}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>

          <Ionicons
            name="arrow-back"
            size={22}
            color="#111"
          />

        </TouchableOpacity>

        <TouchableOpacity style={styles.searchButton}>

          <Ionicons
            name="search-outline"
            size={22}
            color="#111"
          />

        </TouchableOpacity>

        <Image
          source={{
            uri: item.image,
          }}
          style={styles.productImage}
        />

      </View>

      {/* DETAIL SECTION */}

      <View style={styles.detailContainer}>

        <View style={styles.titleRow}>

          <Text style={styles.title}>
            {item.name || item.title}
          </Text>

          <View style={styles.quantityRow}>

            <Text style={styles.quantityIcon}>
              +
            </Text>

            <Text style={styles.quantityText}>
              1
            </Text>

            <Ionicons
              name="trash-outline"
              size={18}
              color="#111"
            />

          </View>

        </View>

        <View style={styles.priceRow}>

          <Text style={styles.price}>
            {item.price || '$10.99'}
          </Text>

          <Text style={styles.rating}>
            4.8
          </Text>

        </View>

        <Text style={styles.description}>
          Indulge in the Bacon Bliss Bombshell, a
          mouthwatering burger sensation that
          Readmore
        </Text>

      </View>

      {/* ADD ONS */}

      <View style={styles.addOnContainer}>

        <Text style={styles.addOnTitle}>
          Add ones
        </Text>

        <FlatList
          horizontal
          data={addOnsData}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.addOnList}
          renderItem={({ item }) => (

            <View style={styles.addOnCard}>

              <Image
                source={{ uri: item.image }}
                style={styles.addOnImage}
              />

              <TouchableOpacity style={styles.plusButton}>

                <Ionicons
                  name="add"
                  size={14}
                  color="#fff"
                />

              </TouchableOpacity>

            </View>

          )}
        />

      </View>

      {/* BUTTON */}

      <TouchableOpacity style={styles.cartButton}>

        <Text style={styles.cartButtonText}>
          Add to cart
        </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  imageSection: {
    width: SCREEN_WIDTH,
    height: 401,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backButton: {
    position: 'absolute',
    top: 58,
    left: 20,
    zIndex: 10,
  },

  searchButton: {
    position: 'absolute',
    top: 58,
    right: 20,
    zIndex: 10,
  },

  productImage: {
    width: 320,
    height: 320,
    resizeMode: 'contain',
  },

  detailContainer: {
    width: 354,
    height: 140,
    marginTop: 26,
    alignSelf: 'center',
  },

  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  title: {
    width: 210,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '600',
    color: '#111',
  },

  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },

  quantityIcon: {
    fontSize: 24,
    color: '#111',
    marginRight: 10,
  },

  quantityText: {
    fontSize: 21,
    color: '#111',
    marginRight: 10,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },

  price: {
    fontSize: 16,
    color: '#111',
    fontWeight: '500',
  },

  rating: {
    fontSize: 16,
    color: '#111',
    marginLeft: 10,
  },

  description: {
    fontSize: 14,
    lineHeight: 21,
    color: '#777',
    marginTop: 18,
    width: 320,
  },

  addOnContainer: {
    width: 245,
    height: 101,
    marginTop: 8,
    marginLeft: 20,
  },

  addOnTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111',
  },

  addOnList: {
    marginTop: 14,
  },

  addOnCard: {
    width: 57,
    height: 57,
    borderRadius: 8,
    backgroundColor: '#F2F2F2',
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addOnImage: {
    width: 46,
    height: 46,
    resizeMode: 'contain',
  },

  plusButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: -4,
    right: -4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartButton: {
    width: 351,
    height: 44,
    borderRadius: 20,
    backgroundColor: '#040404',
    marginTop: 78,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
});