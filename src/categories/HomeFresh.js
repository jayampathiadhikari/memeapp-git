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

export class HomeFresh extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                
            </View>
        );
    }
    static navigationOptions = {
        title: 'Home screen',
        tabBarLabel: 'Fresh',
    }

}
export const HomeFreshStack = createStackNavigator(
    {HomeFresh:HomeFresh}
);