import React from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';

import RatingBadge from '../common/RatingBadge';
import FoodTypeBadge from '../common/FoodTypeBadge';
import AddButton from '../buttons/AddButton';

interface Props {
  item: any;
}

export default function FlashFoodCard({
  item,
}: Props) {
    const navigation = useNavigation<any>();
  return (
    <View style={styles.card}>

      {/* HEADER */}

      <View style={styles.header}>

        <View>

          <Text style={styles.hotelName}>
            {item.hotelName}
          </Text>

          <View style={styles.infoRow}>

            <RatingBadge
              rating={item.rating}
            />

            <Text style={styles.infoText}>
              (1.4k+) • {item.deliveryTime} • {item.distance}
            </Text>

          </View>

        </View>

        <TouchableOpacity style={styles.seeAllRow}>

          <Text style={styles.seeAllText}>
            See all
          </Text>

          <Ionicons
            name="chevron-forward"
            size={14}
            color="#999"
          />

        </TouchableOpacity>

      </View>

      {/* FOOD ITEMS */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}>

        {item.foods.map((food: any) => (
<TouchableOpacity
  key={food.id}
  style={styles.foodCard}
  activeOpacity={0.95}
  onPress={() =>
    navigation.navigate('ProductDetailScreen', {
      item: food,
    })
  }>

            <View>

              <Image
                source={{ uri: food.image }}
                style={styles.foodImage}
              />

              <TouchableOpacity style={styles.heartButton}>

                <Ionicons
                  name="heart-outline"
                  size={22}
                  color="#fff"
                />

              </TouchableOpacity>

            </View>

            <View style={styles.foodContent}>

              <FoodTypeBadge
                veg={food.veg}
                title="Best Seller"
              />

              <Text
                numberOfLines={1}
                style={styles.foodName}>

                {food.name}

              </Text>

              <View style={styles.bottomRow}>

                <Text style={styles.price}>
                  {food.price}
                </Text>

                <AddButton />

              </View>

            </View>

          </TouchableOpacity>

        ))}

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    width: '92%',
    height: 299,
    borderRadius: 12,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 16,
    padding: 14,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 7,
    elevation: 3,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

hotelName: {
  fontSize: 18,
  fontWeight: '700',
  color: '#111',
},

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

infoText: {
  fontSize: 11,
  color: '#111',
  fontWeight: '700',
  marginLeft: 4,
},

  seeAllRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  seeAllText: {
    color: '#999',
    fontSize: 13,
  },

foodCard: {
  width: 132,
  marginTop: 18,
  marginRight: 12,
},

foodImage: {
  width: '100%',
  height: 120,
  borderRadius: 12,
},

  heartButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },

  foodContent: {
    marginTop: 8,
  },

foodName: {
  fontSize: 14,
  color: '#333',
  marginTop: 4,
},


bottomRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 8,
},

price: {
  fontSize: 15,
  fontWeight: '700',
  color: '#111',
},
});