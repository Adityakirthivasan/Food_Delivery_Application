import React from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';
import Feather from '@react-native-vector-icons/feather';

import LocationHeader from '../../components/headers/LocationHeader';
import SearchBar from '../../components/inputs/SearchBar';

export default function ReorderScreen() {
  return (
    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}>

        {/* TOP SECTION */}

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

          {/* MAP */}

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1524661135-423995f22d0b',
            }}
            style={styles.mapImage}
          />

          {/* DELIVERY CONTENT */}

          <View style={styles.deliveryContent}>

            <View style={styles.deliveryTopRow}>

              <View>

                <Text style={styles.deliveryTitle}>
                  Order out for delivery
                </Text>

                <Text style={styles.deliverySub}>
                  Rama is on the way to delivery your order
                </Text>

              </View>

              <View style={styles.timeBox}>

                <Text style={styles.timeText}>
                  4{"\n"}min
                </Text>

              </View>

            </View>

            {/* ACTION BUTTONS */}

            <View style={styles.actionRow}>

              <TouchableOpacity style={styles.instructionButton}>

                <Ionicons
                  name="add-circle"
                  size={18}
                  color="#000"
                />

                <Text style={styles.instructionText}>
                  Add Delivery Instructions
                </Text>

              </TouchableOpacity>

              <TouchableOpacity style={styles.iconButton}>

                <Feather
                  name="phone"
                  size={18}
                  color="#000"
                />

              </TouchableOpacity>

              <TouchableOpacity style={styles.iconButton}>

                <Ionicons
                  name="ellipsis-horizontal"
                  size={18}
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

          {/* TEMP EMPTY STATE */}

          <View style={styles.emptyCard}>

            <Text style={styles.emptyText}>
              No recent orders yet
            </Text>

          </View>

        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  topSection: {
    width: '100%',
    minHeight: 170,
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 24,
    backgroundColor: '#fff',
  },

  deliveryCard: {
    width: '94%',
    borderRadius: 18,
    backgroundColor: '#fff',
    alignSelf: 'center',
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 3,
  },

  mapImage: {
    width: '100%',
    height: 150,
  },

  deliveryContent: {
    padding: 14,
  },

  deliveryTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  deliveryTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
  },

  deliverySub: {
    marginTop: 6,
    color: '#666',
    fontSize: 13,
    width: 210,
    lineHeight: 18,
  },

  timeBox: {
    width: 42,
    height: 52,
    borderRadius: 10,
    backgroundColor: '#32CD32',
    justifyContent: 'center',
    alignItems: 'center',
  },

  timeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 18,
  },

  actionRow: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
  },

  instructionButton: {
    flex: 1,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },

  instructionText: {
    marginLeft: 8,
    fontSize: 13,
    color: '#111',
    fontWeight: '500',
  },

  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  historySection: {
    marginTop: 28,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },

  historyTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111',
  },

  emptyCard: {
    width: '100%',
    height: 140,
    borderRadius: 16,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },

  emptyText: {
    fontSize: 15,
    color: '#777',
  },
});