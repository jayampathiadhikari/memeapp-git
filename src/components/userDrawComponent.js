/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    // StyleSheet,
    // Button,
    // Image,
    Text

} from 'react-native';

import { Avatar, colors } from 'react-native-elements';
import { bold } from 'ansi-colors';

export class UserDrawComponent extends React.Component{
    //image is hardcoded right now
    render(){
        return(
            <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <Avatar rounded
                        size="large"
                        title={this.props.title} 
                        containerStyle={{marginRight:20}}    
                />
                <View>
                    <Text style={{fontSize:14,fontWeight:'bold',color:'#FFF',textAlign:'left'}}>{this.props.username}</Text>
                    <Text style={{fontSize:12,fontWeight:'bold',color:'#ff6721',textAlign:'left'}}>Rank: {this.props.rank}</Text>
                </View>
            </View>
        );
    }
    
}