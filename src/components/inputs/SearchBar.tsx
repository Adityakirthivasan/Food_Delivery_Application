import React from 'react';

import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

import Feather from '@react-native-vector-icons/feather';
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons';

const { width } = Dimensions.get('window');

const scale = width / 393;

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

      <View
        style={[
          styles.searchBar,
          {
            backgroundColor: dark ? '#F3F3F3' : '#FFFFFF',
          },
        ]}>

        <Feather
          name="search"
          size={18 * scale}
          color="#111111"
        />

        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#696969"
          style={styles.input}
        />

        {showMic && (
          <>
            <View style={styles.divider} />

            <View style={styles.micContainer}>

              <MaterialCommunityIcons
                name="microphone"
                size={20 * scale}
                color="#E95322"
              />

            </View>
          </>
        )}

      </View>

      {showVegToggle && (

        <TouchableOpacity style={styles.vegButton}>

          <View style={styles.vegInnerContainer}>

            <Text style={styles.vegText}>
              Veg
            </Text>

            <View style={styles.toggleTrack}>

              <View style={styles.vegToggleOuter}>

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

  searchRow: {
    flexDirection: 'row',
    marginTop: 18 * scale,
    alignItems: 'center',
  },

  searchBar: {
    flex: 1,

    height: 50 * scale,

    borderRadius: 12 * scale,

    paddingHorizontal: 18 * scale,

    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,

    marginLeft: 12 * scale,

    fontFamily: 'Montserrat-Regular',

    fontSize: 14 * scale,

    color: '#111',
  },

  divider: {
    width: 1,
    height: 20 * scale,

    backgroundColor: '#D9D9D9',

    marginHorizontal: 14 * scale,
  },

  micContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  vegButton: {
    width: 50 * scale,
    height: 50 * scale,

    marginLeft: 8 * scale,

    borderRadius: 12 * scale,

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  vegInnerContainer: {
    alignItems: 'center',
  },

  vegText: {
    fontFamily: 'Montserrat-Bold',

    fontSize: 10 * scale,

    color: '#696969',
  },

  toggleTrack: {
    width: 17 * scale,
    height: 8 * scale,

    borderRadius: 10,

    backgroundColor: '#D9D9D9',

    marginTop: 4 * scale,

    justifyContent: 'center',

    paddingLeft: 1,
  },

  vegToggleOuter: {
    width: 8 * scale,
    height: 8 * scale,

    borderRadius: 2,

    borderWidth: 1,
    borderColor: '#228B22',

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  vegToggleInner: {
    width: 4.5 * scale,
    height: 4.5 * scale,

    borderRadius: 10,

    backgroundColor: '#228B22',
  },

});