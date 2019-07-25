/* eslint-disable prettier/prettier */
import React, { Fragment, Component } from 'react';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
} from 'react-native';
import {createStackNavigator} from 'react-navigation';
export class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Pro Screen</Text>
                
            </View>
        );
    }
    static navigationOptions = {
        title: 'Profile screen',
    }

}
export const ProfileStack = createStackNavigator(
    {Profile:ProfileScreen}
);