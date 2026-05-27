import React from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
const BURGER_IMAGE = require('../../assets/images/product/Burger.png');

const { width, height } = Dimensions.get('window');

const guidelineWidth = 393;
const guidelineHeight = 852;

const horizontalScale = width / guidelineWidth;
const verticalScale = height / guidelineHeight;

const scale = (size: number) => horizontalScale * size;

const moderateScale = (size: number, factor = 0.4) =>
  size + (scale(size) - size) * factor;

export default function ProductDetailScreen({ navigation, route }: any) {
  const insets = useSafeAreaInsets();

  const { item } = route.params;
  const [quantity, setQuantity] = React.useState(1);

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.container}>
      {/* TOP IMAGE SECTION */}

      <View style={styles.topSection}>
        {/* HEADER */}

        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.iconButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={22} color="#040404" />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.iconButton}>
            <Ionicons name="search-outline" size={21} color="#040404" />
          </TouchableOpacity>
        </View>

        {/* PRODUCT IMAGE */}
<Image
  source={
    typeof item.image === 'string'
      ? { uri: item.image }
      : item.image
  }
  style={styles.productImage}
/>
      </View>

      {/* DETAILS */}

      <View style={styles.detailsContainer}>
        <View style={styles.titleRow}>
          {/* LEFT */}

          <View style={styles.leftContent}>
            <Text style={styles.title}>{item.name}</Text>

            <View style={styles.priceRow}>
              <Text style={styles.price}>${item.price}</Text>

              <Text style={styles.rating}>{item.rating}</Text>
            </View>
          </View>

          {/* RIGHT */}

          <View style={styles.quantityBox}>
<TouchableOpacity
  activeOpacity={0.8}
  style={styles.qtyButton}
  onPress={() =>
    setQuantity(prev => prev + 1)
  }
>
  <Ionicons
    name="add"
    size={15}
    color="#040404"
  />
</TouchableOpacity>

           <Text style={styles.quantityText}>
  {quantity}
</Text>

<TouchableOpacity
  activeOpacity={0.8}
  style={styles.qtyButton}
  onPress={() =>
    setQuantity(prev =>
      prev > 1 ? prev - 1 : 1,
    )
  }
>
  <Ionicons
    name={
      quantity > 1
        ? 'remove'
        : 'trash-outline'
    }
    size={14}
    color="#040404"
  />
</TouchableOpacity>
          </View>
        </View>

        {/* DESCRIPTION */}

        <Text style={styles.description}>
          {item.description}
          <Text style={styles.readMore}>Readmore</Text>
        </Text>
      </View>

      {/* ADD ONS */}

      <View style={styles.addOnContainer}>
        <Text style={styles.addOnTitle}>Add ones</Text>

<FlatList
  horizontal
  data={
    item.addOns?.length
      ? item.addOns
      : [{ id: 1 }, { id: 2 }]
  }
         keyExtractor={(
  item,
  index,
) =>
  (
    item._id ||
    item.id ||
    index
  ).toString()
}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.addOnList}
renderItem={({
  item,
  index,
}) => (

  <View style={styles.addOnCard}>

    <View
      style={
        styles.addOnImageBox
      }>

<Image
  source={
    item.image &&
    typeof item.image ===
      'string' &&
    item.image.startsWith(
      'http',
    )
      ? {
          uri:
            item.image,
        }
      : addOnsData[
          index %
            addOnsData.length
        ].image
  }
  style={
    styles.addOnImage
  }
/>

    </View>

    <TouchableOpacity
      activeOpacity={0.8}
      style={
        styles.plusButton
      }>

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
            bottom: insets.bottom > 0 ? insets.bottom + 8 : 18,
          },
        ]}
onPress={async () => {

  let user = null;

  try {

    const storedUser =
      await AsyncStorage.getItem(
        'user',
      );

    if (!storedUser) {
      console.log(
        'No logged user found',
      );
      return;
    }

    user =
      JSON.parse(
        storedUser,
      );

    await axios.put(
      `https://dinedash-backend-1.onrender.com/api/user/update-cart/${user.userId}`,
      {
        cart: [
          {
            dishId:
              item.dishId,
            quantity,
          },
        ],
      },
    );

  } catch (error) {
    console.log(
      'Cart update error:',
      error,
    );
  }

  navigation.navigate(
    'BookingScreen',
    {
      cartItem: {
        ...item,
        quantity,
      },

      userAddress:
        user?.address,
    },
  );
}}
      >
        <Text style={styles.cartButtonText}>Add to cart</Text>
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
    height: scale(401),

    backgroundColor: '#F7F7F7',

    alignItems: 'center',
  },

  header: {
    width: width - 40,

    marginTop: Platform.OS === 'ios' ? 6 : 10,

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
    width: scale(309),
    height: scale(229),

    resizeMode: 'contain',

    marginTop: scale(28),
  },

  /* DETAILS */
  detailsContainer: {
    width: scale(354),

    alignSelf: 'center',

    marginTop: scale(25),
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
    fontFamily: 'Montserrat-SemiBold',

    fontSize: moderateScale(24),

    lineHeight: moderateScale(24),

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

    lineHeight: moderateScale(20),

    letterSpacing: -0.24,

    color: '#040404',
  },

  rating: {
    marginLeft: scale(10),

    fontFamily: 'Montserrat-Medium',

    fontSize: moderateScale(16),

    lineHeight: moderateScale(20),

    letterSpacing: -0.24,

    color: '#040404',
  },

  quantityBox: {
    width: scale(70),
    height: scale(25),

    borderRadius: scale(5),

    backgroundColor: '#ffffff',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    paddingHorizontal: scale(6),

    marginTop: scale(4),
  },

  qtyButton: {
    width: 18,
    height: 18,

    justifyContent: 'center',
    alignItems: 'center',
  },

  quantityText: {
    fontFamily: 'Inter',
    fontWeight: 'regular',

    fontSize: moderateScale(16),

    letterSpacing: -0.24,

    color: '#000000',
  },
  description: {
    width: scale(324),

    marginTop: scale(18),

    fontFamily: 'Inter',
    fontWeight: 'semibold',
    fontSize: moderateScale(14),

    lineHeight: scale(18),

    letterSpacing: -0.24,

    color: '#696969',
  },
  readMore: {
    fontFamily: 'Inter-Regular',
    color: '#040404',
  },

  /* ADD ONS */

  addOnContainer: {
    width: scale(245),

    marginTop: scale(24),

    marginLeft: scale(20),
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
    width: scale(351),
    height: scale(44),

    borderRadius: scale(20),

    backgroundColor: '#040404',

    justifyContent: 'center',
    alignItems: 'center',

    alignSelf: 'center',

    position: 'absolute',

    bottom: Platform.OS === 'ios' ? 34 : 18,
  },

  cartButtonText: {
    fontFamily: 'Montserrat-Medium',

    fontSize: moderateScale(16),

    lineHeight: 20,

    letterSpacing: -0.24,

    color: '#FFFFFF',
  },
});