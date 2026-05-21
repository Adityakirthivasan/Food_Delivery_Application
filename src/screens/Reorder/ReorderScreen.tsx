import React from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Ionicons from '@react-native-vector-icons/ionicons';
import Feather from '@react-native-vector-icons/feather';

import LocationHeader from '../../components/headers/LocationHeader';
import SearchBar from '../../components/inputs/SearchBar';

const { width } = Dimensions.get('window');

const scale = width / 393;

const historyData = [
  {
    id: 1,
    name: 'Burger king',
    location: 'HSR, Bangalore',
    amount: '$200',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
  },

  {
    id: 2,
    name: 'Burger king',
    location: 'HSR, Bangalore',
    amount: '$200',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
  },

  {
    id: 3,
    name: 'Burger king',
    location: 'HSR, Bangalore',
    amount: '$200',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
  },

  {
    id: 4,
    name: 'Burger king',
    location: 'HSR, Bangalore',
    amount: '$200',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
  },
];

export default function ReorderScreen() {

  return (

    <SafeAreaView
      style={styles.container}
      edges={['top']}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}>

        {/* TOP */}

        <View style={styles.topSection}>

          <LocationHeader
            title="Rivertown Haven"
            subtitle="SGM, petals, sai baba colony..."
            dark
          />

          <SearchBar dark />

        </View>

        {/* DELIVERY CARD */}

        <View style={styles.deliveryCard}>

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1524661135-423995f22d0b',
            }}
            style={styles.mapImage}
          />

          <View style={styles.deliveryContent}>

            <View style={styles.deliveryTopRow}>

              <View style={{ flex: 1 }}>

                <Text style={styles.deliveryTitle}>
                  Order out for delivery
                </Text>

                <Text style={styles.deliverySub}>
                  Rama moorthy is on the way to delivery your order
                </Text>

              </View>

              <View style={styles.timeBox}>

                <Text style={styles.timeText}>
                  4{'\n'}min
                </Text>

              </View>

            </View>

            {/* ACTIONS */}

            <View style={styles.actionRow}>

              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.instructionButton}>

                <Ionicons
                  name="add-circle"
                  size={18 * scale}
                  color="#000"
                />

                <Text style={styles.instructionText}>
                  Add Delivery Instructions
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.iconButton}>

                <Feather
                  name="phone"
                  size={18 * scale}
                  color="#000"
                />

              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.iconButton}>

                <Ionicons
                  name="ellipsis-horizontal"
                  size={18 * scale}
                  color="#000"
                />

              </TouchableOpacity>

            </View>

          </View>

        </View>

        {/* HISTORY */}

        <View style={styles.historySection}>

          <Text style={styles.historyTitle}>
            History
          </Text>

          {historyData.map(item => (

            <View
              key={item.id}
              style={styles.historyCard}>

              {/* IMAGE */}

              <Image
                source={{ uri: item.image }}
                style={styles.foodImage}
              />

              {/* CONTENT */}

              <View style={styles.cardContent}>

                {/* TOP */}

                <View style={styles.cardTopRow}>

                  <View>

                    <Text style={styles.foodName}>
                      {item.name}
                    </Text>

                    <Text style={styles.locationText}>
                      {item.location}
                    </Text>

                    <View style={styles.viewMenuRow}>

                      <Text style={styles.viewMenu}>
                        View Menu
                      </Text>

                      <Ionicons
                        name="chevron-forward"
                        size={10 * scale}
                        color="#E95322"
                      />

                    </View>

                  </View>

                  <TouchableOpacity>

                    <Ionicons
                      name="ellipsis-horizontal"
                      size={22 * scale}
                      color="#000"
                    />

                  </TouchableOpacity>

                </View>

                {/* ITEMS */}

                <View style={styles.itemRow}>

                  <View style={styles.vegDot} />

                  <Text style={styles.itemText}>
                    5 x Crispy Chicken + Crispy Chicken.
                  </Text>

                </View>

                {/* ORDER DETAILS */}

                <View style={styles.orderInfoRow}>

                  <Text style={styles.orderPlaced}>
                    Order placed on 23 oct, 5:08 PM
                  </Text>

                  <Text style={styles.delivered}>
                    Delivered
                  </Text>

                </View>

                {/* BOTTOM */}

                <View style={styles.bottomRow}>

                  <Text style={styles.amount}>
                    {item.amount}
                  </Text>

                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.reorderButton}>

                    <Text style={styles.reorderText}>
                      Reorder
                    </Text>

                  </TouchableOpacity>

                </View>

              </View>

            </View>

          ))}

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  topSection: {
    paddingHorizontal: 16 * scale,
    paddingTop: 10 * scale,
    paddingBottom: 24 * scale,
  },

  /* DELIVERY */

  deliveryCard: {
    width: width - (32 * scale),

    borderRadius: 12 * scale,

    backgroundColor: '#FFFFFF',

    alignSelf: 'center',

    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.12,
    shadowRadius: 7,

    elevation: 4,
  },

  mapImage: {
    width: '100%',
    height: 155 * scale,
  },

  deliveryContent: {
    padding: 16 * scale,
  },

  deliveryTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  deliveryTitle: {
    fontFamily: 'Inter-Bold',

    fontSize: 16 * scale,
    lineHeight: 24 * scale,

    letterSpacing: -0.24,

    color: '#000000',
  },

  deliverySub: {
    width: 225 * scale,

    marginTop: 2 * scale,

    fontFamily: 'Inter-Regular',

    fontSize: 12 * scale,
    lineHeight: 16 * scale,

    color: '#000000',
  },

  timeBox: {
    width: 55 * scale,
    height: 52 * scale,

    borderRadius: 12 * scale,

    backgroundColor: '#32D623',

    justifyContent: 'center',
    alignItems: 'center',
  },

  timeText: {
    fontFamily: 'Inter-Bold',

    fontSize: 18 * scale,
    lineHeight: 20 * scale,

    textAlign: 'center',

    color: '#FFFFFF',
  },

  /* ACTIONS */

  actionRow: {
    flexDirection: 'row',
    marginTop: 16 * scale,
    alignItems: 'center',
  },

  instructionButton: {
    flex: 1,

    height: 44 * scale,

    borderRadius: 12 * scale,

    borderWidth: 1,
    borderColor: '#D9D9D9',

    backgroundColor: '#F6F6F6',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 10 * scale,
  },

  instructionText: {
    marginLeft: 6 * scale,

    fontFamily: 'Inter-Medium',

    fontSize: 14 * scale,
    lineHeight: 17 * scale,

    color: '#000000',
  },

  iconButton: {
    width: 44 * scale,
    height: 44 * scale,

    marginLeft: 10 * scale,

    borderRadius: 12 * scale,

    borderWidth: 1,
    borderColor: '#D9D9D9',

    backgroundColor: '#F6F6F6',

    justifyContent: 'center',
    alignItems: 'center',
  },

  /* HISTORY */

  historySection: {
    paddingHorizontal: 16 * scale,
    paddingTop: 24 * scale,
    paddingBottom: 40 * scale,
  },

  historyTitle: {
    fontFamily: 'Montserrat-SemiBold',

    fontSize: 20 * scale,
    lineHeight: 24 * scale,

    letterSpacing: -0.24,

    color: '#040404',
  },

  /* CARD */

  historyCard: {
    width: '100%',
    height: 150 * scale,

    marginTop: 16 * scale,

    borderRadius: 12 * scale,

    backgroundColor: '#FFFFFF',

    overflow: 'hidden',

    flexDirection: 'row',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.12,
    shadowRadius: 7,

    elevation: 4,
  },

  foodImage: {
    width: 119 * scale,
    height: '100%',
  },

  cardContent: {
    flex: 1,

    paddingHorizontal: 10 * scale,
    paddingTop: 12 * scale,
    paddingBottom: 12 * scale,
  },

  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  foodName: {
    fontFamily: 'Inter-Bold',

    fontSize: 16 * scale,
    lineHeight: 24 * scale,

    letterSpacing: -0.24,

    color: '#000000',
  },

  locationText: {
    marginTop: 1 * scale,

    fontFamily: 'Inter-Regular',

    fontSize: 12 * scale,
    lineHeight: 16 * scale,

    color: '#000000',
  },

  viewMenuRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 2 * scale,
  },

  viewMenu: {
    fontFamily: 'Inter-Regular',

    fontSize: 8 * scale,
    lineHeight: 10 * scale,

    color: '#E95322',
  },

  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 4 * scale,
  },

  vegDot: {
    width: 10 * scale,
    height: 10 * scale,

    borderRadius: 2 * scale,

    backgroundColor: '#C64500',

    marginRight: 6 * scale,
  },

  itemText: {
    fontFamily: 'Inter-Regular',

    fontSize: 10 * scale,
    lineHeight: 16 * scale,

    color: '#0000008A',
  },

  orderInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 10 * scale,
  },

  orderPlaced: {
    fontFamily: 'Inter-Medium',

    fontSize: 10 * scale,
    lineHeight: 16 * scale,

    color: '#000000',
  },

  delivered: {
    fontFamily: 'Inter-Bold',

    fontSize: 10 * scale,
    lineHeight: 16 * scale,

    color: '#000000',
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 8 * scale,
  },

  amount: {
    fontFamily: 'Inter-Bold',

    fontSize: 16 * scale,
    lineHeight: 21 * scale,

    letterSpacing: -0.32,

    color: '#000000',
  },

  reorderButton: {
    width: 125 * scale,
    height: 30 * scale,

    borderRadius: 6 * scale,

    borderWidth: 1,
    borderColor: '#D9D9D9',

    justifyContent: 'center',
    alignItems: 'center',
  },

  reorderText: {
    fontFamily: 'Inter-Bold',

    fontSize: 14 * scale,
    lineHeight: 21 * scale,

    letterSpacing: -0.32,

    color: '#000000',
  },

});