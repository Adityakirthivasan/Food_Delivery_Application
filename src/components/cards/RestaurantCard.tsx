// import React, {
//   useRef,
//   useState,
// } from 'react';

// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   ScrollView,
//   NativeSyntheticEvent,
//   NativeScrollEvent,
// } from 'react-native';

// import Ionicons from '@react-native-vector-icons/ionicons';

// import RatingBadge from '../common/RatingBadge';

// import { useNavigation } from '@react-navigation/native';

// const SCREEN_WIDTH =
//   Dimensions.get('window').width;

// interface Props {
//   item: any;
//   onPress?: () => void;
// }

// export default function RestaurantCard({
//   item,
//   onPress,
// }: Props) {

//   const navigation = useNavigation<any>();

//   const [activeIndex, setActiveIndex] =
//     useState(0);

//   const scrollRef =
//     useRef<ScrollView>(null);

//   const onScrollHandler = (
//     event: NativeSyntheticEvent<NativeScrollEvent>,
//   ) => {

//     const slide = Math.round(
//       event.nativeEvent.contentOffset.x /
//         (SCREEN_WIDTH - 32),
//     );

//     setActiveIndex(slide);
//   };

//   return (

//     <TouchableOpacity
//       style={styles.card}
//       activeOpacity={0.95}
//       onPress={
//         onPress
//           ? onPress
//           : () =>
//               navigation.navigate(
//                 'RestaurantScreen',
//                 {
//                   item,
//                 },
//               )
//       }>

//       {/* IMAGE SLIDER */}

//       <View>

//         <ScrollView
//           ref={scrollRef}
//           horizontal
//           pagingEnabled
//           showsHorizontalScrollIndicator={false}
//           onScroll={onScrollHandler}
//           scrollEventThrottle={16}>

//           {item.images.map(
//             (
//               img: any,
//               index: number,
//             ) => (

//               <Image
//                 key={index}
//                 source={img}
//                 style={styles.image}
//               />

//             ),
//           )}

//         </ScrollView>

//         {/* HEART */}

//         <TouchableOpacity
//           style={styles.heart}>

//           <Ionicons
//             name="heart-outline"
//             size={24}
//             color="#FFFFFF"
//           />

//         </TouchableOpacity>

//         {/* DOTS */}

//         <View
//           style={styles.dotsContainer}>

//           {item.images.map(
//             (
//               _: any,
//               index: number,
//             ) => (

//               <View
//                 key={index}
//                 style={[
//                   styles.dot,

//                   activeIndex === index &&
//                     styles.activeDot,
//                 ]}
//               />

//             ),
//           )}

//         </View>

//       </View>

//       {/* CONTENT */}

//       <View style={styles.content}>

//         <Text style={styles.flashText}>
//           Flash food in 10 min
//         </Text>

//         <Text style={styles.name}>
//           {item.name}
//         </Text>

//         <View style={styles.ratingRow}>

//           <RatingBadge
//             rating={item.rating}
//           />

//           <Text style={styles.info}>
//             (1.4k+) • {item.deliveryTime}
//             {' • '}
//             {item.distance}
//           </Text>

//         </View>

//         <Text style={styles.cuisine}>
//           {item.cuisine}
//         </Text>

//         <Text style={styles.location}>
//           {item.location}
//         </Text>

//         {/* TAGS */}

//         <View style={styles.tagRow}>

//           <View style={styles.tag}>

//             <Text style={styles.tagText}>
//               Last 100 orders without
//               complaints
//             </Text>

//           </View>

//           <View style={styles.tag}>

//             <Text style={styles.tagText}>
//               Frequently reordered
//             </Text>

//           </View>

//         </View>

//       </View>

//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({

//   card: {
//     width: SCREEN_WIDTH - 32,

//     borderRadius: 16,

//     borderWidth: 1,
//     borderColor: '#E9E9E9',

//     backgroundColor: '#FFFFFF',

//     marginTop: 18,

//     overflow: 'hidden',

//     alignSelf: 'center',
//   },

//   image: {
//     width: SCREEN_WIDTH - 32,

//     height: 205,

//     resizeMode: 'cover',

//     backgroundColor: '#E7CBC4',
//   },

//   heart: {
//     position: 'absolute',

//     top: 12,
//     right: 12,

//     zIndex: 10,
//   },

//   dotsContainer: {
//     position: 'absolute',

//     bottom: 14,
//     right: 14,

//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   dot: {
//     width: 6,
//     height: 6,

//     borderRadius: 6,

//     backgroundColor: '#FFFFFF80',

//     marginHorizontal: 3,
//   },

//   activeDot: {
//     width: 18,

//     backgroundColor: '#FFFFFF',
//   },

//   content: {
//     paddingHorizontal: 14,
//     paddingTop: 10,
//     paddingBottom: 14,
//   },

//   flashText: {
//     fontFamily: 'Inter-Regular',

//     fontSize: 13,

//     color: '#555555',
//   },

//   name: {
//     fontFamily: 'Montserrat-Bold',

//     fontSize: 22,

//     marginTop: 4,

//     color: '#000000',
//   },

//   ratingRow: {
//     flexDirection: 'row',
//     alignItems: 'center',

//     marginTop: 6,
//   },

//   info: {
//     fontFamily: 'Inter-Bold',

//     fontSize: 13,

//     color: '#111111',

//     marginLeft: 4,
//   },

//   cuisine: {
//     marginTop: 6,

//     color: '#666666',
//   },

//   location: {
//     marginTop: 4,

//     color: '#777777',
//   },

//   tagRow: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',

//     marginTop: 14,
//   },

//   tag: {
//     backgroundColor: '#F1F1F1',

//     paddingHorizontal: 10,
//     paddingVertical: 6,

//     borderRadius: 8,

//     marginRight: 8,
//   },

//   tagText: {
//     fontSize: 11,

//     color: '#444444',

//     fontWeight: '500',
//   },

// });