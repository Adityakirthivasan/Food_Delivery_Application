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

      <View
        style={[
          styles.searchBar,
          {
            backgroundColor: dark ? '#F3F3F3' : '#fff',
          },
        ]}>

        <Feather
          name="search"
          size={20}
          color="#555"
        />

        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#8E8E93"
          style={styles.input}
        />

        {showMic && (
          <>
            <View style={styles.divider} />

            <MaterialCommunityIcons
              name="microphone"
              size={22}
              color="#F97316"
            />
          </>
        )}

      </View>

      {showVegToggle && (

        <TouchableOpacity style={styles.vegButton}>

          <Text style={styles.vegText}>
            Veg
          </Text>

          <View style={styles.toggleTrack}>

            <View style={styles.vegToggleOuter}>

              <View style={styles.vegToggleInner} />

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
    marginTop: 20,
    alignItems: 'center',
  },

  searchBar: {
    flex: 1,
    height: 50,
    borderRadius: 15,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
    color: '#000',
  },

  divider: {
    width: 1,
    height: 22,
    backgroundColor: '#DADADA',
    marginHorizontal: 12,
  },

  vegButton: {
    width: 64,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#fff',
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  vegText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    marginBottom: 3,
  },

  toggleTrack: {
    width: 30,
    height: 14,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    paddingLeft: 2,
  },

  vegToggleOuter: {
    width: 12,
    height: 12,
    borderRadius: 3,
    borderWidth: 1.2,
    borderColor: '#228B22',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  vegToggleInner: {
    width: 6,
    height: 6,
    borderRadius: 10,
    backgroundColor: '#228B22',
  },
});