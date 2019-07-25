/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
} from 'react-native';
import firebase from 'react-native-firebase';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Input } from 'react-native-elements';


export class SignUpScreen extends React.Component {
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>SignUp Screen therr should be some</Text>
                <Input
                    placeholder='Username'
                    shake={true}
                    errorStyle={{ color: 'red' }}
                    errorMessage=''
                    inputContainerStyle={{borderWidth:1,borderColor:Colors.black,borderRadius:20,paddingLeft:5}}
                    containerStyle={{margin:7}}
                    onChangeText={(text) => this.setState({ username: text })}
                />

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
                <Input
                    placeholder='Confirm Password'
                    shake={false}
                    containerStyle={{margin:7}}
                    secureTextEntry={true}
                    errorStyle={{ color: 'red' }}
                    errorMessage='ENTER A VALID ERROR HERE'
                    inputContainerStyle={{borderWidth:1,borderColor:Colors.black,borderRadius:20,paddingLeft:5}}
                    onChangeText={(text) => this.setState({  confirm: text  })}
                />

                {/* <TextInput
                    style={{ height: 40 }}
                    placeholder="PASSWORD"
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({ password: text })}
                /> */}

                <Button
                    title="SignUp"
                    onPress={()=>this._onPress(navigate)}
                //onPress={() => this.props.navigation.navigate('Profile')}
                />
                <Button
                    title="Nav"
                    onPress={()=> navigate('ForgotPassword')}
                //onPress={() => this.props.navigation.navigate('Profile')}
                />
            </View>
        );
    }
    
    _onPress(navigate) {
        const email = this.state.email;
        const password = this.state.password;
        const username = this.state.username;
        
        firebase.auth().createUserWithEmailAndPassword(email,password).then(function (credential) {
            console.log(email);
            credential.user.updateProfile({displayName:username}).then(()=>{
                firebase.auth().currentUser.sendEmailVerification();
                firebase.auth().signOut();
                navigate('Auth');
                
            }).catch(function(e){});

            console.log(firebase.auth().currentUser);
            
        }).catch(function (error) {
            console.log(error);
        })
    };
    static navigationOptions = {
        // headerTitle instead of title
        title: 'Sign Up',
    }
};

