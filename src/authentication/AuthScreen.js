/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    Button,
    Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'react-native-firebase';
import { Input } from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export class AuthScreen extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            // eslint-disable-next-line react-native/no-inline-styles
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Auth Screen blah</Text>
                <Input
                    placeholder='Email'
                    shake={true}
                    containerStyle={{margin:7}}
                    errorStyle={{ color: 'red' }}
                    errorMessage=''
                    inputContainerStyle={{borderWidth:1,borderColor:Colors.black,borderRadius:20,paddingLeft:5}}
                    onChangeText={(text) => this.setState({ email: text })}
                />
                
                <Input
                    placeholder='Password'
                    shake={false}
                    containerStyle={{margin:7}}
                    secureTextEntry={true}
                    errorStyle={{ color: 'red' }}
                    errorMessage=''
                    inputContainerStyle={{borderWidth:1,borderColor:Colors.black,borderRadius:20,paddingLeft:5}}
                    onChangeText={(text) => this.setState({  password: text  })}
                />

                <Button
                    title="SignIn"
                    onPress ={()=>this._onSignIn(navigate)}
                    //onPress={() => this.props.navigation.navigate('Profile')}
                />
                <Button
                    title="ForgotPW"
                    onPress ={this._onPressForgotPw}
                    //onPress={() => this.props.navigation.navigate('Profile')}
                />
                <Button
                    title="SignUp"
                    onPress ={this._onPressSignUp}
                    //onPress={() => this.props.navigation.navigate('Profile')}
                />

            </View>
        );
    }   
    
    

    _onPressSignIn=async ()=>{
        await AsyncStorage.setItem('userToken','abc');
        this.props.navigation.navigate('App');
    }
    _onSignIn(navigate){
        const email = this.state.email;
        const password = this.state.password;
        firebase.auth().signInWithEmailAndPassword(email, password).then((credential)=>{
                if(credential.user.emailVerified){
                    navigate('App')
                }else{
                    alert('verify email')
                }
        }).catch((e)=>{
            console.log(e);
        })
    } 

    _onPressSignUp=()=>{    
        this.props.navigation.navigate('SignUp');
    }

    _onPressForgotPw=()=>{
        this.props.navigation.navigate('ForgotPassword');
    }

    static navigationOptions = {
        // headerTitle instead of title
        title:'Auth Screen',
    }
}