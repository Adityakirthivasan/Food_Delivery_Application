import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

const BASE_WIDTH = 393;

interface Props {
  item: {
    id: number;
    title: string;
    price: string;
    image: any;
    orderId?: string;
    date?: string;
    items?: string;
    status?: string;
  };
}

export default function OrderHistoryCard({ item }: any){
  const { width } = useWindowDimensions();
  const scale = width / BASE_WIDTH;

  const s = (v: number) => v * scale;

  return (
    <View
      style={[
        styles.card,
        {
          width: s(353),
          minHeight: s(108),
          borderRadius: s(10),
          paddingHorizontal: s(10),
          paddingVertical: s(10),
          marginBottom: s(16),
        },
      ]}>
      {/* IMAGE BOX */}
      <View
        style={[
          styles.imageBox,
          {
            width: s(99),
            height: s(76),
            borderRadius: s(5),
          },
        ]}>
<Image
  source={{
    uri: item.items?.[0]?.dishDetails?.image,
  }}
          style={[
            styles.image,
            {
              width: s(60),
              height: s(60),
            },
          ]}
          resizeMode="contain"
        />
      </View>

      {/* BODY */}
      <View
        style={[
          styles.body,
          {
            marginLeft: s(12),
            minHeight: s(88),
          },
        ]}>
        {/* TOP ROW: title + price */}
        <View style={styles.topRow}>
          <Text
            numberOfLines={2}
            style={[
              styles.title,
              {
                fontSize: s(15),
                lineHeight: s(20),
                letterSpacing: -0.24,
                maxWidth: s(148),
              },
            ]}>
            {item.items?.[0]?.dishDetails?.name}
          </Text>
          <Text
            style={[
              styles.price,
              {
                fontSize: s(10),
                lineHeight: s(12),
                letterSpacing: -0.24,
              },
            ]}>
            ${item.total ?? 0}
          </Text>
        </View>

        {/* MIDDLE ROW: date + items */}
        <View style={[styles.middleRow, { marginTop: s(6) }]}>
          <Text
            style={[
              styles.meta,
              {
                fontSize: s(10),
                lineHeight: s(12),
                marginRight: s(10),
              },
            ]}>
            {item.orderTime}
          </Text>
          <Text
            style={[
              styles.meta,
              {
                fontSize: s(10),
                lineHeight: s(12),
              },
            ]}>
            {item.items?.length} Items
          </Text>
        </View>

        {/* BOTTOM ROW: status + orderId */}
        <View style={[styles.bottomRow, { marginTop: s(8) }]}>
          <View style={styles.statusRow}>
            <Text
              style={[
                styles.status,
                {
                  fontSize: s(12),
                  lineHeight: s(15),
                  letterSpacing: -0.24,
                  marginRight: s(4),
                },
              ]}>
              {item.status ?? 'Delivered'}
            </Text>
            {/* Double-check icon using unicode */}
            <View style={styles.doubleCheck}>
              <View
                style={[
                  styles.checkLine,
                  {
                    width: s(7),
                    height: s(5),
                    borderLeftWidth: s(1.2),
                    borderBottomWidth: s(1.2),
                    borderColor: '#696969',
                    marginRight: s(1),
                  },
                ]}
              />
              <View
                style={[
                  styles.checkLine,
                  {
                    width: s(7),
                    height: s(5),
                    borderLeftWidth: s(1.2),
                    borderBottomWidth: s(1.2),
                    borderColor: '#696969',
                  },
                ]}
              />
            </View>
          </View>
          <Text
            style={[
              styles.orderId,
              {
                fontSize: s(10),
                lineHeight: s(12),
                letterSpacing: -0.24,
              },
            ]}>
            {item.orderId ?? 'OrderId:#123215'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  imageBox: {
    backgroundColor: '#F2F2F1',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  image: {},
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontFamily: 'Montserrat-Medium',
    color: '#040404',
    flexShrink: 1,
  },
  price: {
    fontFamily: 'Inter-Regular',
    color: '#696969',
    marginTop: 2,
    flexShrink: 0,
    marginLeft: 4,
  },
  middleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  meta: {
    fontFamily: 'Inter-Regular',
    color: '#696969',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    fontFamily: 'Inter-Regular',
    color: '#696969',
  },
  doubleCheck: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 2,
  },
  checkLine: {
    transform: [{ rotate: '-45deg' }],
  },
  orderId: {
    fontFamily: 'Inter-Regular',
    color: '#696969',
  },
});