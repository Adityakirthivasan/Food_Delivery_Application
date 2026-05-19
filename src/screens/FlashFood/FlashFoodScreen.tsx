import React from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

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

export default function FlashFoodScreen() {
  return (
    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}>

        {/* HERO SECTION */}

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

        {/* FILTERS */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterContainer}>

          <FilterChip
            title="Filter"
            icon={
              <Feather
                name="sliders"
                size={16}
                color="#000"
              />
            }
          />

          <FilterChip
            title="Sort By"
            icon={
              <Ionicons
                name="chevron-down"
                size={16}
                color="#000"
              />
            }
          />

        </ScrollView>

        {/* FLASH FOOD CARDS */}

        <View style={styles.flashFoodContainer}>

          {flashFoodData.map((item) => (

            <FlashFoodCard
              key={item.id}
              item={item}
            />

          ))}

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

  heroTitle: {
    fontSize: 38,
    width: 260,
  },

  heroSubtitle: {
    fontSize: 18,
    marginTop: 5,
  },

  heroImage: {
    width: 240,
    height: 240,
    position: 'absolute',
    right: -40,
    bottom: -95,
  },

  heroContent: {
    paddingTop: 38,
    alignItems: 'flex-start',
  },

  categorySection: {
    marginTop: 28,
    paddingLeft: 16,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
  },

  categoryScroll: {
    marginTop: 18,
    paddingRight: 16,
  },

  filterContainer: {
    paddingLeft: 16,
    marginTop: 22,
    paddingRight: 16,
  },

  flashFoodContainer: {
    paddingBottom: 40,
    marginTop: 8,
  },
});