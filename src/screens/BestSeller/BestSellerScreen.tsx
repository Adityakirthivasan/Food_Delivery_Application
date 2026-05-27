import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import {
  SafeAreaView,
} from 'react-native-safe-area-context';

import Ionicons from '@react-native-vector-icons/ionicons';

import BestSellerCard from '../../components/cards/BestSellerCard';

//import { bestSellerData } from '../../data/bestSellerData';

const { width } = Dimensions.get('window');

const guidelineWidth = 393;

const scale = width / guidelineWidth;

export default function BestSellerScreen({
  navigation,
}: any) {
  const [bestSellerData, setbestSellerData] = useState<any[]>([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
axios.get(
'https://dinedash-backend-1.onrender.com/api/user/get-dishes',
)
    .then(response => {
      setbestSellerData(
  (response.data.result || []).filter(
    (dish: any) =>
      dish.bestSeller === true &&
      dish.available !== false,
  ),
);

      setLoading(false);
    })
    .catch(error => {
      console.error('Network Error:', error);

      setLoading(false);
    });
}, []);
if (loading) {
  return <ActivityIndicator size="large" />;
}
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
  size={16 * scale}
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
        keyExtractor={(item) =>
  item.dishId.toString()
}
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
  width: 126 * scale,

  height: 32 * scale,

  marginTop: 12 * scale,
  marginLeft: 13 * scale,

  flexDirection: 'row',
  alignItems: 'center',
},

headerTitle: {
  marginLeft: 12 * scale,

  fontFamily: 'Montserrat-Medium',

  fontSize: 16 * scale,
  lineHeight: 20 * scale,

  letterSpacing: -0.24,

  color: '#040404',
},

listContent: {
  paddingHorizontal: 16 * scale,

  paddingTop: 16 * scale,

  paddingBottom: 40 * scale,
},

row: {
  justifyContent: 'flex-start',

  gap: 13 * scale,
},
});