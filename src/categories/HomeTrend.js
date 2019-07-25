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

export class HomeTrend extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Trend</Text>
                
            </View>
        );
    }
    static navigationOptions = {
        title: 'Home screen',
        tabBarLabel: 'Trending',
    }

}
export const HomeTrendStack = createStackNavigator(
    {HomeTrend:HomeTrend}
);