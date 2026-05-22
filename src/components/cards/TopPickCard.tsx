// import React from 'react';

// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
// } from 'react-native';

// import Ionicons from '@react-native-vector-icons/ionicons';
// import Feather from '@react-native-vector-icons/feather';

// import RatingBadge from '../common/RatingBadge';

// import { useNavigation } from '@react-navigation/native';

// const CARD_WIDTH =
//   Dimensions.get('window').width * 0.37;

// interface Props {
//   item: {
//     id: number;
//     title: string;
//     category: string;
//     rating: string;
//     time: string;
//     distance: string;
//     image: any;
//   };
// }

// export default function TopPickCard({
//   item,
// }: Props) {

//   const navigation = useNavigation<any>();

//   return (

//     <TouchableOpacity
//       style={styles.card}
//       activeOpacity={0.9}
//       onPress={() =>
//         navigation.navigate(
//           'ProductDetailScreen',
//           {
//             item,
//           },
//         )
//       }>

//       {/* IMAGE */}

//       <View>

//         <Image
//           source={item.image}
//           style={styles.image}
//         />

//         {/* HEART */}

//         <TouchableOpacity
//           style={styles.heartButton}>

//           <Ionicons
//             name="heart-outline"
//             size={22}
//             color="#FFFFFF"
//           />

//         </TouchableOpacity>

//       </View>

//       {/* CATEGORY + RATING */}

//       <View style={styles.foodTypeRow}>

//         <Text style={styles.foodType}>
//           {item.category}
//         </Text>

//         <RatingBadge
//           rating={item.rating}
//           small
//         />

//       </View>

//       {/* TITLE */}

//       <Text
//         numberOfLines={1}
//         style={styles.restaurantName}>

//         {item.title}

//       </Text>

//       {/* INFO */}

//       <View style={styles.foodInfoRow}>

//         <View style={styles.infoItem}>

//           <Feather
//             name="clock"
//             size={13}
//             color="#8A8A8A"
//           />

//           <Text style={styles.foodInfo}>
//             {item.time}
//           </Text>

//         </View>

//         <View style={styles.infoItem}>

//           <Ionicons
//             name="paper-plane-outline"
//             size={13}
//             color="#8A8A8A"
//           />

//           <Text style={styles.foodInfo}>
//             {item.distance}
//           </Text>

//         </View>

//       </View>

//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({

//   card: {
//     width: CARD_WIDTH,

//     marginTop: 18,
//     marginRight: 14,
//   },

//   image: {
//     width: '100%',
//     height: 170,

//     borderRadius: 16,

//     resizeMode: 'cover',
//   },

//   heartButton: {
//     position: 'absolute',

//     top: 10,
//     right: 10,
//   },

//   foodTypeRow: {
//     flexDirection: 'row',

//     justifyContent: 'space-between',
//     alignItems: 'center',

//     marginTop: 10,
//   },

//   foodType: {
//     fontSize: 14,

//     color: '#444444',
//   },

//   restaurantName: {
//     fontSize: 15,
//     fontWeight: '400',

//     marginTop: 6,

//     color: '#3A3A3A',
//   },

//   foodInfoRow: {
//     flexDirection: 'row',
//     alignItems: 'center',

//     marginTop: 6,
//   },

//   infoItem: {
//     flexDirection: 'row',
//     alignItems: 'center',

//     marginRight: 14,
//   },

//   foodInfo: {
//     color: '#777777',

//     fontSize: 12,

//     marginLeft: 4,
//   },

// });