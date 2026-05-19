import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

interface Props {
  title: string;
  subtitle: string;
  buttonText: string;
  image: string;
  showIcon?: boolean;

  titleStyle?: any;
  subtitleStyle?: any;
  imageStyle?: any;
  containerStyle?: any;
  contentStyle?: any;
}

export default function HeroHeader({
  title,
  subtitle,
  buttonText,
  image,
  showIcon,

  titleStyle,
  subtitleStyle,
  imageStyle,
  containerStyle,
  contentStyle,
}: Props) {
  return (
    <View style={[styles.topSection, containerStyle]}>

      <View style={[styles.offerContainer, contentStyle]}>

        <View>

          <Text style={[styles.offerTitle, titleStyle]}>
            {title}
          </Text>

          <Text style={[styles.offerSub, subtitleStyle]}>
            {subtitle}
          </Text>

          <TouchableOpacity style={styles.orderButton}>

            {showIcon && (
              <Ionicons
                name="flash-outline"
                size={16}
                color="#fff"
                style={{ marginRight: 6 }}
              />
            )}

            <Text style={styles.orderButtonText}>
              {buttonText}
            </Text>

          </TouchableOpacity>

        </View>

        <Image
          source={{ uri: image }}
          style={[styles.offerImage, imageStyle]}
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  topSection: {
    width: '100%',
    minHeight: 355,
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 28,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#F97316',
  },

  offerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 24,
  },

  offerTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '800',
    width: 220,
  },

  offerSub: {
    color: '#fff',
    fontSize: 15,
    width: 170,
    marginTop: 8,
    lineHeight: 20,
  },

  orderButton: {
    height: 44,
    borderRadius: 14,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
  },

  orderButtonText: {
    color: '#fff',
    fontWeight: '600',
  },

  offerImage: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
});