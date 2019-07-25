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
export class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Settings Screen</Text>
                
            </View>
        );
    }
    static navigationOptions = {
        title: 'Set screen',
    }

}
export const SettingsStack = createStackNavigator(
    {Settings:SettingsScreen}
);