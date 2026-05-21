import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Ionicons from '@react-native-vector-icons/ionicons';

import {
  useNavigation,
} from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const scale = (size: number) =>
  (width / 393) * size;

const FOOD_1 =
  'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1200';

const FOOD_2 =
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200';

const TOP_1 =
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200';

const TOP_2 =
  'https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=1200';

export default function RestaurantScreen() {

  const navigation = useNavigation<any>();

  const [search, setSearch] =
    React.useState('');

  const [showCart, setShowCart] =
    React.useState(false);

  const [selectedItem, setSelectedItem] =
    React.useState<any>(null);

  return (

    <View style={styles.screen}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: scale(130),
        }}>

        {/* ORANGE HEADER */}

        <View style={styles.mainContainer}>

          <LinearGradient
            colors={['#FF8340', '#C64500']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.orangeContainer}>

            {/* TOP BAR */}

            <View style={styles.topBar}>

              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.iconBtn}
                onPress={() =>
                  navigation.goBack()
                }>

                <Ionicons
                  name="arrow-back"
                  size={scale(24)}
                  color="#FFFFFF"
                />

              </TouchableOpacity>

              <View style={styles.rightActions}>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.groupOrderBtn}>

                  <Ionicons
                    name="person-add-outline"
                    size={scale(16)}
                    color="#FFFFFF"
                  />

                  <Text style={styles.groupOrderText}>
                    Group Order
                  </Text>

                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.dotButton}>

                  <Ionicons
                    name="ellipsis-horizontal"
                    size={scale(18)}
                    color="#FFFFFF"
                  />

                </TouchableOpacity>

              </View>

            </View>

            {/* INFO CARD */}

            <View style={styles.infoCard}>

              <View style={styles.cardHeaderRow}>

                <View style={styles.nameSection}>

                  <Text style={styles.restaurantName}>
                    Ruchibe (Guru Restaurant)
                  </Text>

                  <View style={styles.metaRow}>

                    <Text style={styles.metaText}>
                      15-20 mins
                    </Text>

                    <View style={styles.verticalLine} />

                    <Text style={styles.metaText}>
                      Bangalore Locality
                    </Text>

                  </View>

                </View>

                <View style={styles.ratingSection}>

                  <View style={styles.ratingRow}>

                    <View style={styles.starBox}>

                      <Ionicons
                        name="star"
                        size={scale(8)}
                        color="#FFFFFF"
                      />

                    </View>

                    <Text style={styles.ratingValue}>
                      3.3
                    </Text>

                  </View>

                  <Text style={styles.ratingCount}>
                    1.4k+ Rating
                  </Text>

                </View>

              </View>

              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[
                  'rgba(0,0,0,0)',
                  'rgba(0,0,0,0.54)',
                  'rgba(102,102,102,0)',
                ]}
                style={styles.horizontalLine}
              />

              <Text style={styles.deliveryText}>
                Free delivery on order above $99
              </Text>

            </View>

          </LinearGradient>

        </View>

        {/* SEARCH */}

        <View style={styles.searchContainer}>

          <Ionicons
            name="search"
            size={scale(18)}
            color="#111111"
          />

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search your food"
            placeholderTextColor="#696969"
            style={styles.searchInput}
          />

          <View style={styles.searchDivider} />

          <Ionicons
            name="mic"
            size={scale(22)}
            color="#E95322"
          />

        </View>

        {/* FILTERS */}

        <View style={styles.chipWrapper}>

          <View style={styles.chipRow}>

            {/* VEG */}

            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.smallChip}>

              <View style={styles.toggleTrack}>

                <View
                  style={styles.toggleSquareGreen}>

                  <View
                    style={styles.toggleCircleGreen}
                  />

                </View>

              </View>

            </TouchableOpacity>

            {/* NON VEG */}

            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.smallChip}>

              <View style={styles.toggleTrack}>

                <View
                  style={styles.toggleSquareRed}>

                  <View
                    style={styles.toggleCircleRed}
                  />

                </View>

              </View>

            </TouchableOpacity>

            {/* FLASH */}

            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.flashChip}>

              <Ionicons
                name="flash-outline"
                size={scale(16)}
                color="#000000"
              />

              <Text style={styles.flashChipText}>
                Flash food in 10 min
              </Text>

            </TouchableOpacity>

            {/* RATING */}

            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.ratingChip}>

              <Text style={styles.ratingChipText}>
                Rating 5
              </Text>

            </TouchableOpacity>

          </View>

        </View>

        {/* DIVIDER */}

        <View style={styles.bottomDivider} />

        {/* TOP PICKS */}

        <Text style={styles.sectionTitle}>
          Top picks
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: scale(16),
            paddingRight: scale(6),
          }}>

          {[TOP_1, TOP_2].map(
            (item, index) => (

              <TouchableOpacity
                key={index}
                activeOpacity={0.9}
                style={styles.topCard}>

                <Image
                  source={{ uri: item }}
                  style={styles.topImage}
                />

                <LinearGradient
                  colors={[
                    'rgba(0,0,0,0)',
                    'rgba(0,0,0,0.82)',
                  ]}
                  style={styles.topOverlay}>

                  <Text style={styles.topName}>
                    Ruchibe (guru Restaurant)
                  </Text>

                  <View style={styles.topMetaRow}>

                    <View style={styles.smallStarBox}>

                      <Ionicons
                        name="star"
                        size={scale(6)}
                        color="#FFFFFF"
                      />

                    </View>

                    <Text style={styles.topMetaText}>
                      3.3 (1.4k+) • 10-15 mins
                    </Text>

                  </View>

                </LinearGradient>

              </TouchableOpacity>

            ),
          )}

        </ScrollView>

        {/* RECOMMENDED */}

        <Text style={styles.recommendedTitle}>
          Recommended (10)
        </Text>

        <View style={styles.grid}>

          {Array.from({ length: 10 }).map(
            (_, index) => (

              <TouchableOpacity
                activeOpacity={0.95}
                key={index}
                style={styles.foodCard}
                onPress={() => {

                  setShowCart(true);

                  setSelectedItem({
                    id: index,
                    title:
                      index % 2 === 0
                        ? 'Rammen Noodel'
                        : 'Hanoi Pancake Shop',
                    image:
                      index % 2 === 0
                        ? FOOD_1
                        : FOOD_2,
                    price: 200,
                  });
                }}>

                <View>

                  <Image
                    source={{
                      uri:
                        index % 2 === 0
                          ? FOOD_1
                          : FOOD_2,
                    }}
                    style={styles.foodImage}
                  />

                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.heartBtn}>

                    <Ionicons
                      name="heart-outline"
                      size={scale(24)}
                      color="#FFFFFF"
                    />

                  </TouchableOpacity>

                </View>

                <View style={styles.foodContent}>

                  <View
                    style={styles.bestSellerRow}>

                    <View style={styles.vegMini}>

                      <View
                        style={styles.vegMiniInner}
                      />

                    </View>

                    <Text
                      style={styles.bestSellerText}>

                      Best Seller
                    </Text>

                  </View>

                  <Text style={styles.foodTitle}>
                    {index % 2 === 0
                      ? 'Rammen Noodel'
                      : 'Hanoi Pancake Shop'}
                  </Text>

                  <View style={styles.priceRow}>

                    <Text style={styles.price}>
                      $200
                    </Text>

                    <TouchableOpacity
                      activeOpacity={0.9}
                      style={styles.addButton}
                      onPress={() =>
                        navigation.navigate(
                          'ProductDetailScreen',
                          {
                            item: {
                              id: index,
                              title:
                                index % 2 === 0
                                  ? 'Rammen Noodel'
                                  : 'Hanoi Pancake Shop',
                              image:
                                index % 2 === 0
                                  ? FOOD_1
                                  : FOOD_2,
                              price: 200,
                            },
                          },
                        )
                      }>

                      <Text
                        style={styles.addText}>

                        ADD
                      </Text>

                    </TouchableOpacity>

                  </View>

                </View>

              </TouchableOpacity>

            ),
          )}

        </View>

      </ScrollView>

      {/* CART */}

      {showCart && (

        <TouchableOpacity
          activeOpacity={0.95}
          style={styles.cartBar}
          onPress={() =>
            navigation.navigate(
              'ProductDetailScreen',
              {
                item: selectedItem,
              },
            )
          }>

          <Text style={styles.cartLeftText}>
            1 Item added
          </Text>

          <View style={styles.cartRight}>

            <Text style={styles.cartRightText}>
              View Cart
            </Text>

            <Ionicons
              name="chevron-forward"
              size={scale(22)}
              color="#FFFFFF"
            />

          </View>

        </TouchableOpacity>

      )}

    </View>
  );
}

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  mainContainer: {
    width: width,
    height: scale(231),

    borderBottomLeftRadius: scale(30),
    borderBottomRightRadius: scale(30),

    overflow: 'hidden',
  },

  orangeContainer: {
    flex: 1,

    paddingTop: scale(58),
    paddingHorizontal: scale(16),
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  iconBtn: {
    width: scale(24),
    height: scale(24),

    justifyContent: 'center',
    alignItems: 'center',
  },

  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  groupOrderBtn: {
    width: scale(116),
    height: scale(27),

    borderRadius: scale(10),
    borderWidth: 1,

    borderColor: '#FFFFFF',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    gap: scale(6),
  },

  groupOrderText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: scale(12),

    color: '#FFFFFF',
  },

  dotButton: {
    marginLeft: scale(16),
  },

  infoCard: {
    width: '100%',
    height: scale(103),

    borderRadius: scale(12),

    backgroundColor: '#FFFFFF',

    marginTop: scale(13),

    paddingHorizontal: scale(16),
    paddingTop: scale(16),
  },

  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  nameSection: {
    flex: 1,
  },

  restaurantName: {
    fontFamily: 'Inter-Bold',
    fontSize: scale(16),

    color: '#000000',
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: scale(4),
  },

  metaText: {
    fontFamily: 'Inter-Regular',
    fontSize: scale(12),

    color: '#0000008A',
  },

  verticalLine: {
    width: 1,
    height: scale(10),

    backgroundColor: '#00000054',

    marginHorizontal: scale(8),
  },

  ratingSection: {
    alignItems: 'center',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  starBox: {
    width: scale(12),
    height: scale(12),

    borderRadius: scale(2),

    backgroundColor: '#2FE922',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: scale(4),
  },

  ratingValue: {
    fontFamily: 'Inter-Bold',
    fontSize: scale(14),

    color: '#000000',
  },

  ratingCount: {
    fontSize: scale(10),

    color: '#0000008A',

    marginTop: scale(2),
  },

  horizontalLine: {
    width: '100%',
    height: 1,

    marginTop: scale(11),
  },

  deliveryText: {
    alignSelf: 'center',

    marginTop: scale(6),

    fontFamily: 'Inter-SemiBold',
    fontSize: scale(14),

    color: '#000000',
  },

  searchContainer: {
    width: width - scale(32),
    height: scale(50),

    borderRadius: scale(10),

    backgroundColor: '#FFFFFF',

    alignSelf: 'center',

    flexDirection: 'row',
    alignItems: 'center',

    marginTop: scale(18),

    paddingHorizontal: scale(18),
  },

  searchInput: {
    flex: 1,

    marginLeft: scale(12),

    fontFamily: 'Inter-Regular',
    fontSize: scale(14),

    color: '#696969',
  },

  searchDivider: {
    width: 1,
    height: scale(20),

    backgroundColor: '#D9D9D9',

    marginRight: scale(12),
  },

  chipWrapper: {
    marginTop: scale(16),
  },

  chipRow: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: scale(16),
  },

  smallChip: {
    width: scale(74),
    height: scale(36),

    borderRadius: scale(8),
    borderWidth: 1,

    borderColor: '#D9D9D9',

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: scale(12),
  },

  toggleTrack: {
    width: scale(38),
    height: scale(16),

    borderRadius: scale(20),

    backgroundColor: '#D9D9D9',

    justifyContent: 'center',

    paddingLeft: scale(2),
  },

  toggleSquareGreen: {
    width: scale(16),
    height: scale(16),

    borderRadius: scale(3),
    borderWidth: 1.4,

    borderColor: '#1F7500',

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  toggleCircleGreen: {
    width: scale(9),
    height: scale(9),

    borderRadius: scale(20),

    backgroundColor: '#1F7500',
  },

  toggleSquareRed: {
    width: scale(16),
    height: scale(16),

    borderRadius: scale(3),
    borderWidth: 1.4,

    borderColor: '#C64500',

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  toggleCircleRed: {
    width: scale(9),
    height: scale(9),

    borderRadius: scale(20),

    backgroundColor: '#C64500',
  },

  flashChip: {
    height: scale(36),

    borderRadius: scale(8),
    borderWidth: 1,

    borderColor: '#D9D9D9',

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: scale(18),

    marginRight: scale(12),
  },

  flashChipText: {
    marginLeft: scale(6),

    fontFamily: 'Inter-Regular',
    fontSize: scale(14),

    color: '#000000',
  },

  ratingChip: {
    width: scale(98),
    height: scale(36),

    borderRadius: scale(8),
    borderWidth: 1,

    borderColor: '#D9D9D9',

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  ratingChipText: {
    fontFamily: 'Inter-Regular',
    fontSize: scale(14),

    color: '#000000',
  },

  bottomDivider: {
    width: width - scale(32),
    height: 1,

    backgroundColor: '#D9D9D9',

    alignSelf: 'center',

    marginTop: scale(18),
    marginBottom: scale(20),
  },

  sectionTitle: {
    marginLeft: scale(16),
    marginBottom: scale(14),

    fontFamily: 'Montserrat-Bold',
    fontSize: scale(20),

    color: '#000000',
  },

  topCard: {
    width: scale(228),
    height: scale(170),

    borderRadius: scale(12),

    overflow: 'hidden',

    marginRight: scale(14),
  },

  topImage: {
    width: '100%',
    height: '100%',
  },

  topOverlay: {
    position: 'absolute',
    bottom: 0,

    width: '100%',

    paddingHorizontal: scale(12),
    paddingBottom: scale(10),
    paddingTop: scale(24),
  },

  topName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scale(14),

    color: '#FFFFFF',
  },

  topMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: scale(4),
  },

  smallStarBox: {
    width: scale(9),
    height: scale(9),

    borderRadius: scale(2),

    backgroundColor: '#2FE922',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: scale(4),
  },

  topMetaText: {
    fontSize: scale(10),

    color: '#FFFFFF',
  },

  recommendedTitle: {
    marginTop: scale(28),
    marginBottom: scale(16),

    marginLeft: scale(16),

    fontFamily: 'Montserrat-Bold',
    fontSize: scale(20),

    color: '#000000',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'space-between',

    paddingHorizontal: scale(16),
  },

  foodCard: {
    width: scale(171),

    marginBottom: scale(18),
  },

  foodImage: {
    width: scale(171),
    height: scale(140),

    borderRadius: scale(12),
  },

  heartBtn: {
    position: 'absolute',

    top: scale(8),
    right: scale(8),
  },

  foodContent: {
    marginTop: scale(6),
  },

  bestSellerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  vegMini: {
    width: scale(16),
    height: scale(16),

    borderRadius: scale(2),
    borderWidth: 1,

    borderColor: '#1F7500',

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: scale(4),
  },

  vegMiniInner: {
    width: scale(9),
    height: scale(9),

    borderRadius: scale(20),

    backgroundColor: '#1F7500',
  },

  bestSellerText: {
    fontFamily: 'Inter-Regular',
    fontSize: scale(12),

    color: '#E95322',
  },

  foodTitle: {
    marginTop: scale(4),

    fontFamily: 'Inter-SemiBold',
    fontSize: scale(14),

    color: '#343434',
  },

  priceRow: {
    marginTop: scale(8),

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  price: {
    fontFamily: 'Inter-Bold',
    fontSize: scale(14),

    color: '#000000',
  },

  addButton: {
    width: scale(63),
    height: scale(30),

    borderRadius: scale(6),
    borderWidth: 1,

    borderColor: '#D9D9D9',

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',
  },

  addText: {
    fontFamily: 'Inter-Bold',
    fontSize: scale(14),

    color: '#000000',
  },

  cartBar: {
    position: 'absolute',

    bottom: scale(14),

    width: width - scale(14),
    height: scale(48),

    borderRadius: scale(12),

    backgroundColor: '#FD803D',

    alignSelf: 'center',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: scale(16),
  },

  cartLeftText: {
    fontFamily: 'Inter-Bold',
    fontSize: scale(16),

    color: '#FFFFFF',
  },

  cartRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cartRightText: {
    fontFamily: 'Inter-Bold',
    fontSize: scale(16),

    color: '#FFFFFF',
  },

});