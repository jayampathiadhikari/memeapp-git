/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//E:\Softwares\Programming\Projects\React-native\MemeApp
import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {colour} from './src/Colour';
import { Dimensions } from 'react-native'

import { YellowBox } from 'react-native';
import { AuthLoadingScreen } from './src/authentication/AuthLoadingScreen';
import { AuthScreen } from './src/authentication/AuthScreen';
import { ForgotPasswordScreen } from './src/authentication/ForgotPasswordScreen';
import { SignUpScreen } from './src/authentication/SignUpScreen';


import { DankFreshStack } from './src/categories/DankFresh';
import { DankTrendStack } from './src/categories/DankTrend';
import { DrawerScreen } from './src/DrawerScreen';
import { ProfileStack } from './src/ProfileScreen';
import { SettingsStack } from './src/SettingsScreen';
import { HomeTrendStack } from './src/categories/HomeTrend';
import { HomeFreshStack } from './src/categories/HomeFresh';

import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import { colors } from 'react-native-elements';

const AuthStack = createStackNavigator({
  Auth: AuthScreen,
  SignUp: SignUpScreen,
  ForgotPassword: ForgotPasswordScreen,
});

const HomeTabs = createBottomTabNavigator({
  Trending: HomeTrendStack,
  Fresh: HomeFreshStack,
}, {
    navigationOptions: {
      title: 'henlo',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
    }
  });

const DankTabs = createBottomTabNavigator({
  Trending: DankTrendStack,
  Fresh: DankFreshStack,
});

const DrawerNav = createDrawerNavigator({
  Profile: ProfileStack,
  Settings: SettingsStack,
  Home: HomeTabs,
  Dank: DankTabs,
},
  {
    initialRouteName: 'Home',
    // navigationOptions:{
    //   // title:'this is thw drawer',
    // },
    contentComponent: props => <DrawerScreen {...props} />,
    edgeWidth: (Dimensions.get('window').width),
    //drawerBackgroundColor: colour.darkgery,
  });

const AppModalStack = createStackNavigator({
  Drawer: DrawerNav,
  // Profile: ProfileScreen,
  // Settings: SettingsScreen,
}, {
    headerMode: 'none',
  });

const SwitchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppModalStack,
  Auth: AuthStack,
}, {
    initialRouteName: 'AuthLoading',
  });

const AppContainer = createAppContainer(SwitchNavigator);

export default class App extends React.Component {
  render() {
    return (<AppContainer />);
  }
}

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);