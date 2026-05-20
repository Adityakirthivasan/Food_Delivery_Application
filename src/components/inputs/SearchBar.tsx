import React from 'react';

import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import Feather from '@react-native-vector-icons/feather';
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons';

interface Props {
  showVegToggle?: boolean;
  dark?: boolean;

  showMic?: boolean;
  placeholder?: string;
}

export default function SearchBar({
  showVegToggle,
  dark,
  showMic = true,
  placeholder = 'Search your food',
}: Props) {

  return (

    <View style={styles.searchRow}>

      {/* SEARCH BOX */}

      <View
        style={[
          styles.searchBar,
          {
            backgroundColor: dark ? '#F3F3F3' : '#FFFFFF',
          },
        ]}>

        {/* SEARCH ICON */}

        <Feather
          name="search"
          size={18}
          color="#111111"
        />

        {/* INPUT */}

        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#696969"
          style={styles.input}
        />

        {/* MIC */}

        {showMic && (
          <>

            <View style={styles.divider} />

            <View style={styles.micContainer}>

              <MaterialCommunityIcons
                name="microphone"
                size={20}
                color="#E95322"
              />

            </View>

          </>
        )}

      </View>

      {/* VEG BUTTON */}

      {showVegToggle && (

        <TouchableOpacity style={styles.vegButton}>

          <View style={styles.vegInnerContainer}>

            {/* VEG TEXT */}

            <Text style={styles.vegText}>
              Veg
            </Text>

            {/* TOGGLE */}

            <View style={styles.toggleTrack}>

              {/* GREEN OUTER BOX */}

              <View style={styles.vegToggleOuter}>

                {/* GREEN INNER CIRCLE */}

                <View style={styles.vegToggleInner} />

              </View>

            </View>

          </View>

        </TouchableOpacity>

      )}

    </View>
  );
}

const styles = StyleSheet.create({

  /* SEARCH ROW */

  searchRow: {
    flexDirection: 'row',
    marginTop: 18,
    alignItems: 'center',
  },

  /* SEARCH BAR */

  searchBar: {
    flex: 1,

    height: 50,

    borderRadius: 10,

    paddingHorizontal: 18,

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',
  },

  /* INPUT */

  input: {
    flex: 1,

    marginLeft: 13,

    fontFamily: 'Inter-Regular',
    fontWeight: '400',

    fontSize: 14,
    lineHeight: 14,

    letterSpacing: -0.24,

    color: '#696969',
  },

  /* DIVIDER */

  divider: {
    width: 1,
    height: 20,

    backgroundColor: '#D9D9D9',

    marginHorizontal: 14,
  },

  /* MIC CONTAINER */

  micContainer: {
    width: 24,
    height: 24,

    justifyContent: 'center',
    alignItems: 'center',
  },

  /* VEG BUTTON */

  vegButton: {
    width: 50,
    height: 50,

    marginLeft: 6,

    borderRadius: 10,

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  /* INNER VEG CONTAINER */

  vegInnerContainer: {
    width: 19,
    height: 24,

    justifyContent: 'space-between',
    alignItems: 'center',
  },

  /* VEG TEXT */

  vegText: {
    fontFamily: 'Inter-Bold',
    fontWeight: '700',

    fontSize: 10,
    lineHeight: 10,

    letterSpacing: -0.24,

    color: '#696969',
  },

  /* TOGGLE TRACK */

  toggleTrack: {
    width: 17,
    height: 8,

    borderRadius: 10,

    backgroundColor: '#D9D9D9',

    justifyContent: 'center',

    paddingLeft: 1,
  },

  /* OUTER GREEN BOX */

  vegToggleOuter: {
    width: 8,
    height: 8,

    borderRadius: 2,

    borderWidth: 1,
    borderColor: '#228B22',

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  /* INNER GREEN CIRCLE */

  vegToggleInner: {
    width: 4.8,
    height: 4.8,

    borderRadius: 10,

    backgroundColor: '#228B22',
  },

});