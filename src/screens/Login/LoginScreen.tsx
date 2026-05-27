import React, { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Logo from '../../assets/images/login/Logo.svg';
import Google from '../../assets/images/login/google.svg';

import { RootStackParamList } from '../../navigation/types';

const { width, height } = Dimensions.get('window');

type NavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export default function LoginScreen() {
  const navigation =
    useNavigation<NavigationProp>();

const [mobile, setMobile] =
  useState('');

  const [password, setPassword] =
    useState('');

  const [showPassword, setShowPassword] =
    useState(false);

  const [rememberMe, setRememberMe] =
    useState(false);

const handleLogin = async () => {
  try {


    console.log(
      'INSIDE LOGIN',
    );

    console.log(
      'SENDING LOGIN',
      {
        mobile,
        password,
      },
    );

    const response =
      await axios.post(
        'https://dinedash-backend-1.onrender.com/api/login/user-login',
        {
mobile:
  mobile.startsWith('+91')
    ? mobile.trim()
    : `+91${mobile.trim()}`,
          password:
            password.trim(),
        },
      );



    console.log(
      'LOGIN SUCCESS',
      response.data,
    );

  const user =
  response.data.result
    ?.user;

await AsyncStorage.setItem(
  'userId',
  user.userId,
);

await AsyncStorage.setItem(
  'user',
  JSON.stringify(user),
);

navigation.replace(
  'BottomTabs',
);
  } catch (error: any) {
    console.log(
      'LOGIN ERROR',
      error?.response
        ?.data,
    );

  Alert.alert(
  'Login Failed',
  'Invalid mobile number or password',
);
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />

      {/* Orange Blur */}
      <View style={styles.blurCircle} />

      <View style={styles.content}>

        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Logo
              width="100%"
              height="100%"
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.heading}>
              Sign in to your{'\n'}
              Account
            </Text>

            <Text style={styles.subHeading}>
Enter your mobile number and password to log in
            </Text>
          </View>
        </View>

        {/* Inputs */}
        <View style={styles.inputSection}>

<View style={styles.mobileContainer}>

  <Text style={styles.countryCode}>
    +91
  </Text>

  <TextInput
    placeholder="Mobile Number"
    placeholderTextColor="#8F959E"
    style={styles.mobileInput}
    value={mobile}
    onChangeText={text =>
      setMobile(
        text
          .replace(/\D/g, '')
          .slice(0, 10),
      )
    }
    keyboardType="phone-pad"
    maxLength={10}
  />

</View>

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#8F959E"
              secureTextEntry={!showPassword}
              style={styles.passwordInput}
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity
              onPress={() =>
                setShowPassword(
                  !showPassword
                )
              }>
              <Ionicons
                name={
                  showPassword
                    ? 'eye-outline'
                    : 'eye-off-outline'
                }
                size={20}
                color="#ACB5BB"
              />
            </TouchableOpacity>
          </View>

          {/* Remember + Forgot */}
          <View style={styles.linkRow}>
            <TouchableOpacity
              style={styles.rememberContainer}
              onPress={() =>
                setRememberMe(
                  !rememberMe
                )
              }>

              <Ionicons
                name={
                  rememberMe
                    ? 'checkbox'
                    : 'square-outline'
                }
                size={20}
                color="#6C7278"
              />

              <Text
                style={
                  styles.rememberText
                }>
                Remember me
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                style={
                  styles.forgotText
                }>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonSection}>

          {/* Login */}
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={handleLogin}>

            <LinearGradient
              colors={[
                '#FF8340',
                '#C64500',
              ]}
              style={
                styles.loginButton
              }>

              <Text
                style={
                  styles.loginText
                }>
                Log In
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* OR */}
          <View style={styles.orRow}>
            <View
              style={styles.line}
            />

            <Text style={styles.or}>
              Or
            </Text>

            <View
              style={styles.line}
            />
          </View>

          {/* Google Button */}
          <TouchableOpacity
            style={
              styles.googleButton
            }>
            <Google
              width={18}
              height={18}
            />

            <Text
              style={
                styles.googleText
              }>
              Continue with Google
            </Text>
          </TouchableOpacity>

          {/* Sign Up */}
          <View
            style={
              styles.signupRow
            }>
            <Text
              style={
                styles.signupText
              }>
              Don’t have an account?
            </Text>

           <TouchableOpacity
  onPress={() =>
    navigation.navigate(
      'RegisterScreen',
    )
  }>
              <Text
                style={
                  styles.signupLink
                }>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        '#FFFFFF',
    },

  blurCircle: {
  position: 'absolute',

  width: width * 1.75,
  height: width * 1.75,

  borderRadius:
    width * 0.9,

  backgroundColor:
    '#F6E7DE',

  top: -height * 0.56,
  left: -width * 0.37,
},

content: {
  flex: 1,

  paddingHorizontal: 24,
  paddingTop: 68,
  paddingBottom: 16,
},

headerContainer: {
  alignItems: 'center',
  gap: 32,
},

logoContainer: {
  width: 120,
  height: 120,
},

textContainer: {
  width: '100%',
  marginTop: 28,
},

heading: {
  fontSize: 32,
  fontWeight: '700',

  lineHeight: 42,

  letterSpacing: -0.64,

  color: '#1A1C1E',
},

subHeading: {
  fontSize: 12,
  fontWeight: '500',

  lineHeight: 17,

  letterSpacing: -0.12,

  color: '#6C7278',
},

inputSection: {
  marginTop: 34,
  gap: 16,
},

   input: {
  height: 46,

  borderWidth: 1,
  borderColor: '#EDF1F3',

  borderRadius: 10,

  paddingHorizontal: 14,

  backgroundColor: '#FFFFFF',

  fontSize: 14,
  fontWeight: '500',

  color: '#1A1C1E',
},
passwordContainer: {
  height: 46,

  borderWidth: 1,
  borderColor: '#EDF1F3',

  borderRadius: 10,

  backgroundColor: '#FFFFFF',

  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  paddingHorizontal: 14,
},

    passwordInput: {
      flex: 1,
      fontSize: 14,
      color: '#1A1C1E',
    },

linkRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  marginTop: 2,
},

    rememberContainer: {
      flexDirection:
        'row',
      alignItems: 'center',
      gap: 6,
    },

    rememberText: {
      fontSize: 12,
      color: '#6C7278',
    },

    forgotText: {
      fontSize: 12,
      fontWeight: '600',
      color: '#FF8D28',
    },

buttonSection: {
  marginTop: 36,
  gap: 16,
},

loginButton: {
  height: 48,
  borderRadius: 10,

  justifyContent: 'center',
  alignItems: 'center',
},

    loginText: {
      color: '#FFFFFF',
      fontSize: 15,
      fontWeight: '600',
    },

    orRow: {
      flexDirection:
        'row',
      alignItems: 'center',
    },

    line: {
      flex: 1,
      height: 1,
      backgroundColor:
        '#D9DDDF',
    },

    or: {
      marginHorizontal:
        12,
      color: '#6C7278',
      fontSize: 12,
    },

googleButton: {
  height: 48,

  borderRadius: 10,

  borderWidth: 1,
  borderColor: '#EFF0F6',

  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  gap: 10,

  backgroundColor: '#FFFFFF',
},

    googleText: {
      fontSize: 14,
      fontWeight: '600',
      color: '#1A1C1E',
    },

signupRow: {
  marginTop: 8,

  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  gap: 6,
},

    signupText: {
      fontSize: 12,
      color: '#6C7278',
    },

    signupLink: {
      fontSize: 12,
      fontWeight: '600',
      color: '#FF8D28',
    },
    mobileContainer: {
  height: 46,

  borderWidth: 1,
  borderColor: '#EDF1F3',

  borderRadius: 10,

  flexDirection: 'row',
  alignItems: 'center',

  paddingHorizontal: 14,

  backgroundColor: '#FFFFFF',
},

countryCode: {
  fontSize: 14,
  fontWeight: '600',

  color: '#1A1C1E',

  marginRight: 8,
},

mobileInput: {
  flex: 1,

  fontSize: 14,

  color: '#1A1C1E',
},
  });