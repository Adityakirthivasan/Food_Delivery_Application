import React from 'react';

import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import Ionicons from '@react-native-vector-icons/ionicons';

import { addOnsData } from '../../data/addOnsData';

const { width, height } = Dimensions.get('window');

const guidelineWidth = 393;
const guidelineHeight = 852;

const horizontalScale = width / guidelineWidth;
const verticalScale = height / guidelineHeight;

const scale = (size: number) =>
  horizontalScale * size;

const moderateScale = (
  size: number,
  factor = 0.4,
) =>
  size + (scale(size) - size) * factor;

export default function ProductDetailScreen({
  navigation,
  route,
}: any) {

  const insets = useSafeAreaInsets();

  const { item } = route.params;

  return (

    <SafeAreaView
      edges={['top', 'bottom']}
      style={styles.container}>

      {/* TOP IMAGE SECTION */}

      <View style={styles.topSection}>

        {/* HEADER */}

        <View style={styles.header}>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.iconButton}
            onPress={() => navigation.goBack()}>

            <Ionicons
              name="arrow-back"
              size={22}
              color="#040404"
            />

          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.iconButton}>

            <Ionicons
              name="search-outline"
              size={21}
              color="#040404"
            />

          </TouchableOpacity>

        </View>

        {/* PRODUCT IMAGE */}

        <Image
          source={item.image}
          style={styles.productImage}
        />

      </View>

      {/* DETAILS */}

      <View style={styles.detailsContainer}>

        <View style={styles.titleRow}>

          {/* LEFT */}

          <View style={styles.leftContent}>

            <Text style={styles.title}>
              {item.name || item.title}
            </Text>

            <View style={styles.priceRow}>

              <Text style={styles.price}>
                {item.price || '$10.99'}
              </Text>

              <Text style={styles.rating}>
                4.8
              </Text>

            </View>

          </View>

          {/* RIGHT */}

          <View style={styles.quantityBox}>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.qtyButton}>

              <Ionicons
                name="add"
                size={15}
                color="#040404"
              />

            </TouchableOpacity>

            <Text style={styles.quantityText}>
              1
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.qtyButton}>

              <Ionicons
                name="trash-outline"
                size={14}
                color="#040404"
              />

            </TouchableOpacity>

          </View>

        </View>

        {/* DESCRIPTION */}

        <Text style={styles.description}>
          Indulge in the Bacon Bliss Bombshell, a
          mouthwatering burger sensation that
          satisfies every craving perfectly.
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
          keyExtractor={(item) =>
            item.id.toString()
          }
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.addOnList}
          renderItem={({ item }) => (

            <View style={styles.addOnCard}>

              <View style={styles.addOnImageBox}>

                <Image
                  source={item.image}
                  style={styles.addOnImage}
                />

              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.plusButton}>

                <Ionicons
                  name="add"
                  size={11}
                  color="#FFFFFF"
                />

              </TouchableOpacity>

            </View>

          )}
        />

      </View>

      {/* BUTTON */}

      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.cartButton,
          {
            marginBottom:
              insets.bottom > 0
                ? insets.bottom + 8
                : 18,
          },
        ]}
        onPress={() =>
          navigation.navigate('BookingScreen')
        }>

        <Text style={styles.cartButtonText}>
          Add to cart
        </Text>

      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  /* TOP SECTION */

  topSection: {
    width: width,
    height: height * 0.47,

    backgroundColor: '#F7F7F7',

    alignItems: 'center',
  },

  header: {
    width: width - 40,

    marginTop:
      Platform.OS === 'ios'
        ? 6
        : 10,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',
  },

  iconButton: {
    width: 32,
    height: 32,

    justifyContent: 'center',
    alignItems: 'center',
  },

  productImage: {
    width: width * 0.84,
    height: width * 0.84,

    resizeMode: 'contain',

    marginTop: height * 0.015,
  },

  /* DETAILS */

  detailsContainer: {
    width: width - 40,

    alignSelf: 'center',

    marginTop: 22,
  },

  titleRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'flex-start',
  },

  leftContent: {
    width: '68%',
  },

  title: {
    fontFamily: 'Montserrat-Bold',

    fontSize: moderateScale(24),

    lineHeight: 29,

    letterSpacing: -0.24,

    color: '#040404',
  },

  priceRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 6,
  },

  price: {
    fontFamily: 'Montserrat-Medium',

    fontSize: moderateScale(16),

    lineHeight: 20,

    letterSpacing: -0.24,

    color: '#040404',
  },

  rating: {
    marginLeft: 8,

    fontFamily: 'Montserrat-Medium',

    fontSize: moderateScale(16),

    lineHeight: 20,

    letterSpacing: -0.24,

    color: '#040404',
  },

  quantityBox: {
    width: 92,
    height: 34,

    borderRadius: 6,

    backgroundColor: '#F2F2F1',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    paddingHorizontal: 10,

    marginTop: 4,
  },

  qtyButton: {
    width: 18,
    height: 18,

    justifyContent: 'center',
    alignItems: 'center',
  },

  quantityText: {
    fontFamily: 'Inter-Regular',

    fontSize: 16,

    lineHeight: 19,

    letterSpacing: -0.24,

    color: '#040404',
  },

  description: {
    width: '88%',

    marginTop: 18,

    fontFamily: 'Inter-Regular',

    fontSize: moderateScale(14),

    lineHeight: 20,

    letterSpacing: -0.24,

    color: '#696969',
  },

  /* ADD ONS */

  addOnContainer: {
    marginTop: 22,

    marginLeft: 20,
  },

  addOnTitle: {
    fontFamily: 'Montserrat-Medium',

    fontSize: moderateScale(16),

    lineHeight: 20,

    letterSpacing: -0.24,

    color: '#040404',
  },

  addOnList: {
    paddingTop: 16,
  },

  addOnCard: {
    width: 71,
    height: 65,

    marginRight: 16,
  },

  addOnImageBox: {
    width: 60,
    height: 60,

    borderRadius: 6,

    backgroundColor: '#D9D9D9',

    justifyContent: 'center',
    alignItems: 'center',
  },

  addOnImage: {
    width: 44,
    height: 44,

    resizeMode: 'contain',
  },

  plusButton: {
    width: 24,
    height: 24,

    borderRadius: 12,

    backgroundColor: '#040404',

    position: 'absolute',

    right: 0,
    bottom: 0,

    justifyContent: 'center',
    alignItems: 'center',
  },

  /* BUTTON */

  cartButton: {
    width: width - 42,
    height: 44,

    borderRadius: 20,

    backgroundColor: '#040404',

    justifyContent: 'center',
    alignItems: 'center',

    alignSelf: 'center',

    marginTop: 'auto',
  },

  cartButtonText: {
    fontFamily: 'Montserrat-Medium',

    fontSize: moderateScale(16),

    lineHeight: 20,

    letterSpacing: -0.24,

    color: '#FFFFFF',
  },

});