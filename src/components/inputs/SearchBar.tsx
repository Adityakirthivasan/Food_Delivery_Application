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

import {
  scale,
} from '../../utils/responsive';

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
            backgroundColor: dark
              ? '#F3F3F3'
              : '#FFFFFF',
          },
        ]}>

        <Feather
          name="search"
          size={scale(18)}
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
                size={scale(20)}
                color="#E95322"
              />

            </View>
          </>
        )}

      </View>

      {showVegToggle && (

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.vegButton}>

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
    width: '100%',

    flexDirection: 'row',

    alignItems: 'center',

    marginTop: scale(24),
  },


searchBar: {
  flex: 1,

  height: scale(50),

  borderRadius: scale(10),

  backgroundColor: '#FFFFFF',

  paddingHorizontal: scale(16),
  

  flexDirection: 'row',
  alignItems: 'center',
},

  input: {
    flex: 1,

    marginLeft: scale(10),

    fontFamily: 'Montserrat-Regular',

    fontSize: scale(14),

    color: '#111111',
  },

  divider: {
    width: 1,
    height: scale(20),

    backgroundColor: '#D9D9D9',

    marginHorizontal: scale(12),
  },

  micContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  vegButton: {
    width: scale(50),
    height: scale(50),

    marginLeft: scale(8),

    borderRadius: scale(10),

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  vegInnerContainer: {
    alignItems: 'center',
  },

  vegText: {
    fontFamily: 'Montserrat',
    fontWeight:'bold',
    fontSize: scale(10),

    color: '#696969',
  },

  toggleTrack: {
    width: scale(17),
    height: scale(8),

    borderRadius: scale(10),

    backgroundColor: '#D9D9D9',

    marginTop: scale(4),

    justifyContent: 'center',

    paddingLeft: 1,
  },

  vegToggleOuter: {
    width: scale(8),
    height: scale(8),

    borderRadius: scale(2),

    borderWidth: 1,
    borderColor: '#228B22',

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  vegToggleInner: {
    width: scale(4.5),
    height: scale(4.5),

    borderRadius: scale(10),

    backgroundColor: '#228B22',
  },

});