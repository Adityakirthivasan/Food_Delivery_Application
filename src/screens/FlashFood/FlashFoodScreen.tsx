import React from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
  SafeAreaView,
} from 'react-native-safe-area-context';

import Feather from '@react-native-vector-icons/feather';
import Ionicons from '@react-native-vector-icons/ionicons';

import HeroHeader from '../../components/headers/HeroHeader';

import CategoryCard from '../../components/cards/CategoryCard';
import FlashFoodCard from '../../components/cards/FlashFoodCard';

import FilterChip from '../../components/buttons/FilterChip';

import {
  categoryData,
} from '../../data/homeData';

import {
  flashFoodData,
} from '../../data/flashFoodData';

const { width } = Dimensions.get('window');

const guidelineBaseWidth = 393;

const scale = width / guidelineBaseWidth;

export default function FlashFoodScreen() {

  return (

    <SafeAreaView
      edges={['top']}
      style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>

        {/* HERO */}

        <HeroHeader
          title="Flash Foods"
          subtitle="Food in 10 mins"
          buttonText="Order now"

          image="https://cdn-icons-png.flaticon.com/512/706/706164.png"

          showIcon

          titleStyle={styles.heroTitle}
          subtitleStyle={styles.heroSubtitle}
          imageStyle={styles.heroImage}
          contentStyle={styles.heroContent}
          containerStyle={styles.heroContainer}
        />

        {/* CATEGORY */}

        <View style={styles.categorySection}>

          <Text style={styles.sectionTitle}>
            What you like to have?
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryScroll}>

            {categoryData.map((item) => (

              <CategoryCard
                key={item.id}
                title={item.title}
                image={item.image}
              />

            ))}

          </ScrollView>

        </View>

        {/* FILTER */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterContainer}>

          <FilterChip
            title="Filter"
            icon={
              <Feather
                name="sliders"
                size={14 * scale}
                color="#040404"
              />
            }
          />

          <FilterChip
            title="Sort By"
            icon={
              <Ionicons
                name="chevron-down"
                size={14 * scale}
                color="#040404"
              />
            }
          />

        </ScrollView>

        {/* CARDS */}

        <View style={styles.flashFoodContainer}>

          {flashFoodData.map((item) => (

            <FlashFoodCard
              key={item.id}
              item={item}
            />

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

  scrollContent: {
    paddingBottom: 120 * scale,
  },

  heroContainer: {
    width: width,
    height: 205 * scale,

    borderBottomLeftRadius: 30 * scale,
    borderBottomRightRadius: 30 * scale,

    overflow: 'hidden',
  },

  heroContent: {
    paddingTop: 28 * scale,
    paddingLeft: 16 * scale,

    alignItems: 'flex-start',
  },

  heroTitle: {
    width: 180 * scale,

    fontFamily: 'Montserrat-Bold',

    fontSize: 28 * scale,
    lineHeight: 34 * scale,

    letterSpacing: -0.24,

    color: '#FFFFFF',
  },

  heroSubtitle: {
    marginTop: 2 * scale,

    fontFamily: 'Montserrat-SemiBold',

    fontSize: 14 * scale,
    lineHeight: 18 * scale,

    letterSpacing: -0.24,

    color: '#FFFFFF',
  },

  heroImage: {
    width: 170 * scale,
    height: 170 * scale,

    position: 'absolute',

    right: -4 * scale,
    bottom: -18 * scale,

    resizeMode: 'contain',
  },

  categorySection: {
    marginTop: 12 * scale,
  },

  sectionTitle: {
    marginLeft: 16 * scale,

    fontFamily: 'Montserrat-SemiBold',

    fontSize: 20 * scale,
    lineHeight: 24 * scale,

    color: '#040404',
  },

  categoryScroll: {
    paddingLeft: 12 * scale,
    paddingRight: 8 * scale,

    paddingTop: 14 * scale,
  },

  filterContainer: {
    paddingLeft: 12 * scale,
    paddingRight: 12 * scale,

    marginTop: 16 * scale,
  },

  flashFoodContainer: {
    marginTop: 6 * scale,
  },

});