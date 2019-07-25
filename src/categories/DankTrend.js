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
export class DankTrend extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Dank Trend</Text>
                
            </View>
        );
    }
    static navigationOptions = {
        title: 'Dank screen',
    }

}

export const DankTrendStack = createStackNavigator(
    {DankTrend:DankTrend}
);