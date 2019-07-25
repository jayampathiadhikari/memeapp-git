/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class AuthLoadingScreen extends React.Component {
    constructor(props) {
      super(props);
      // setTimeout(this._bootstrapAsync, 100);
      this._bootstrapAsync();
    }
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
  
      const userToken = await AsyncStorage.getItem('userToken');
      
      if (userToken !== null) {
        this.props.navigation.navigate('Auth');
        // this.props.navigation.navigate('App');
        // value previously stored
      } else {
        this.props.navigation.navigate('Auth');
      }
      //this.props.navigation.navigate(userToken ? 'App' : 'Auth');
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
  
  
    }
    render() {
      return (
        <View>
          <Text>This is Alpha</Text>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  }