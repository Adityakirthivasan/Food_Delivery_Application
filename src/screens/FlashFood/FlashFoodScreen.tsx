import React from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import {
  SafeAreaView,
} from 'react-native-safe-area-context';

import Feather from '@react-native-vector-icons/feather';
import Ionicons from '@react-native-vector-icons/ionicons';

import HeroHeader from '../../components/headers/HeroHeader';

import FlashFoodCard from '../../components/cards/FlashFoodCard';

import FilterChip from '../../components/buttons/FilterChip';

import {
  flashFoodData,
  flashFoodCategoryData,
} from '../../data/flashFoodData';

import {
  scale,
  width,
} from '../../utils/responsive';

export default function FlashFoodScreen() {

  return (

    <View style={styles.container}>

      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <SafeAreaView
        edges={['top']}
        style={styles.safeArea}>

        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>

          {/* HERO */}

          <HeroHeader
            title="Flash Foods"
            subtitle="Food in 10 mins"
            buttonText="Order now"

            image={require('../../assets/images/flash/amico.png')}

            showIcon

            titleStyle={styles.heroTitle}
            subtitleStyle={styles.heroSubtitle}
            imageStyle={styles.heroImage}
            containerStyle={styles.heroContainer}
            contentStyle={styles.heroContent}
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

              {flashFoodCategoryData.map((item) => (

                <FlashFoodCard
                  key={item.id}
                  type="category"
                  title={item.title}
                  image={item.image}
                />

              ))}

            </ScrollView>

          </View>

          {/* FILTER */}

          <View style={styles.filterWrapper}>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.filterContainer}>

              <FilterChip
                title="Filter"
                icon={
                  <Feather
                    name="sliders"
                    size={scale(14)}
                    color="#040404"
                  />
                }
              />

              <FilterChip
                title="Sort By"
                icon={
                  <Ionicons
                    name="chevron-down"
                    size={scale(14)}
                    color="#040404"
                  />
                }
              />

            </ScrollView>

          </View>

          {/* FLASH FOOD */}

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

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: '#FFFFFF',
  },

  safeArea: {
    flex: 1,

    backgroundColor: '#FF8340',
  },

  scrollContent: {
    paddingBottom: scale(120),

    backgroundColor: '#FFFFFF',
  },

  heroContainer: {
    width: width,

    height: scale(280),

    marginTop: -1,

    borderBottomLeftRadius: scale(30),
    borderBottomRightRadius: scale(30),

    overflow: 'hidden',
  },

  heroContent: {
    paddingTop: 0,
  },

  heroTitle: {
    width: scale(250),

    fontFamily: 'Montserrat',
    fontWeight:'bold',
    
    fontSize: scale(40),
    lineHeight: scale(44),

    letterSpacing: -0.5,

    marginTop: scale(4),

    color: '#FFFFFF',
  },

  heroSubtitle: {
    marginTop: scale(6),

    fontFamily: 'Montserrat-Bold',
    fontWeight:'bold',

    fontSize: scale(18),
    lineHeight: scale(22),

    letterSpacing: -0.24,

    color: '#FFFFFF',
  },

  heroImage: {
    width: scale(240),
    height: scale(240),

    right: scale(-0),
    bottom: scale(-24),
  },

  categorySection: {
    marginTop: scale(20),

    paddingBottom: scale(8),
  },

  sectionTitle: {
    marginLeft: scale(16),

    fontFamily: 'Montserrat-SemiBold',

    fontSize: scale(20),
    lineHeight: scale(24),

    color: '#040404',
  },

  categoryScroll: {
    paddingLeft: scale(12),
    paddingRight: scale(8),

    paddingTop: scale(14),
  },

  filterWrapper: {
    marginTop: scale(2),

    marginBottom: scale(10),
  },

  filterContainer: {
    paddingLeft: scale(12),
    paddingRight: scale(12),
  },

  flashFoodContainer: {
    paddingTop: scale(2),
  },

});