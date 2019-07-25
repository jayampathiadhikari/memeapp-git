/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    Button,
    Image,
} from 'react-native';
import {createStackNavigator} from 'react-navigation';

export class ForgotPasswordScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>ForgotPW Screen</Text>             
            </View>
        );
    }

    static navigationOptions = {
        // headerTitle instead of title
        title:'Forgot Password',
    }
}
export const ForgotPasswordStack = createStackNavigator(
    {ForgotPassword:ForgotPasswordScreen}
);