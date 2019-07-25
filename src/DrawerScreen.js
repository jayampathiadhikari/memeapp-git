/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    // StyleSheet,
    //Button,
    // Image,
    Text,
    ScrollView

} from 'react-native';
import { colour } from './Colour';
import { UserDrawComponent } from './components/userDrawComponent';
import { Icon } from 'react-native-elements'
import { Button, ListItem } from 'react-native-elements';
//upload-arrow-up-bold-hexagon-outline - materialcom -upload
//cats- comics dragon /self made - universal-access / social media- users /random - random / favs - gratipay / my gallery - images /Subscriptions - user-check
const list = [
    {
        title: 'Home',
        iconName: 'home',
        type: 'font-awesome',
    },
    {
        title: 'DankMemes',
        iconName: 'leaf',
        type: 'font-awesome',
    },
    {
        title: 'Comics',
        iconName: 'paint-brush',
        type: 'font-awesome',
    },
    {
        title: '  Self-Made',
        iconName: 'child',
        type: 'font-awesome',
    },
    {
        title: 'Random',
        iconName: 'random',
        type: 'font-awesome',
    },
    {
        title: 'Favourites',
        iconName: 'heart',
        type: 'font-awesome',
    },
    {
        title: 'My Gallery',
        iconName: 'image',
        type: 'font-awesome',
    },
    {
        title: 'Subscriptions',
        iconName: 'user-plus',
        type: 'font-awesome',
    },

];
const uploadMeme = [{
    title: 'Upload a Meme',
    iconName: 'upload',
    type: 'font-awesome'
}]

const settings = [{
    title: 'Profile',
    iconName: 'user-circle',
    type: 'font-awesome'
},
{
    title: 'Settings',
    iconName: 'cog',
    type: 'font-awesome'
}]

export class DrawerScreen extends React.Component {

    render() {
        return (

            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 2, backgroundColor: colour.lightgrey2, alignItems: "flex-start", paddingLeft: 10 }}>
                    <UserDrawComponent username="Jayampathi Adhikari" rank="MemeVeteran" title="JA" />
                </View>
                <View style={{ flex: 8, alignItems: 'stretch', backgroundColor: colour.darkgery }}>
                    <View style={{ flex: 2,justifyContent:"center" }}>
                        {uploadMeme.map((item, j) => (
                            <ListItem
                                key={j}
                                title={item.title}
                                leftIcon={{
                                    name: item.iconName,
                                    type: item.type,
                                    color: colour.orange,
                                }}
                                
                                containerStyle={{ backgroundColor: colour.lightgrey, margin:5, borderRadius:10 }}
                                // bottomDivider
                                titleStyle={{ color: colour.orange }}
                            />
                        ))}

                        {/* <Button
                            buttonStyle={{ borderColor: colour.greyblue }}
                            titleStyle={{ color: colour.greyblue }}
                            title="Upload a Meme"
                            type="outline"
                            icon= <Icon
                        name='arrow-up-circle-outline'
                        type='material-community'
                        size={36}
                        color={colour.greyblue}
                        />
                    /> */}
                    </View>
                    <View style={{ flex: 8 }}>

                        <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
                            {
                                list.map((item, i) =>
                                    (
                                        (i == 0 || item.title == 'Subscriptions') ? (i == 0 ? <ListItem
                                            key={i}
                                            title={item.title}
                                            leftIcon={{
                                                name: item.iconName,
                                                type: item.type,
                                                color: colour.white,
                                            }}
                                            chevronColor={colour.white}
                                            chevron
                                            containerStyle={{ backgroundColor: colour.lightgrey, marginLeft: 5, marginRight: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                                            // bottomDivider
                                            titleStyle={{ color: colour.white }}
                                        /> : <ListItem
                                                key={i}
                                                title={item.title}
                                                leftIcon={{
                                                    name: item.iconName,
                                                    type: item.type,
                                                    color: colour.white,
                                                }}
                                                chevronColor={colour.white}
                                                chevron
                                                containerStyle={{ backgroundColor: colour.lightgrey, marginLeft: 5, marginRight: 5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
                                                // bottomDivider
                                                titleStyle={{ color: colour.white }}
                                            />)
                                            : <ListItem
                                                key={i}
                                                title={item.title}
                                                leftIcon={{
                                                    name: item.iconName,
                                                    type: item.type,
                                                    color: colour.white,
                                                }}
                                                chevronColor={colour.white}
                                                chevron
                                                containerStyle={{ backgroundColor: colour.lightgrey, marginLeft: 5, marginRight: 5 }}
                                                // bottomDivider
                                                titleStyle={{ color: colour.white }}
                                            />
                                    )

                                )
                            }
                        </ScrollView>
                    </View>
                    <View style={{ flex: 3.8,paddingTop:5,justifyContent:"center"}}>
                    {settings.map((item, k) => (
                            <ListItem
                                key={k}
                                title={item.title}
                                leftIcon={{
                                    name: item.iconName,
                                    type: item.type,
                                    color: colour.orange,
                                }}
                                
                                containerStyle={{ backgroundColor: colour.lightgrey, marginBottom:5,marginLeft:5,marginRight:5, borderRadius:10 }}
                                // bottomDivider
                                titleStyle={{ color: colour.orange }}
                            />
                        ))}

                    </View>
                    {/* <Button
                        
                        title="Go to Home"
                        onPress={() => {
                            this.props.navigation.navigate('Home');
                            this.props.navigation.closeDrawer();
                        }}
                    //onPress={() => this.props.navigation.navigate('Profile')}
                    />
                    <Button
                        title="Go to Dank"
                        onPress={() => {
                            this.props.navigation.navigate('Dank');
                            this.props.navigation.closeDrawer();
                        }}
                    //onPress={() => this.props.navigation.navigate('Profile')}
                    />
                    <Button
                        title="Go to Profile"
                        onPress={() => this.props.navigation.navigate('Profile')}
                    //onPress={() => this.props.navigation.navigate('Profile')}
                    />
                    <Button
                        title="Settings"
                        onPress={() => this.props.navigation.navigate('Settings')}
                    //onPress={() => this.props.navigation.navigate('Profile')}
                    /> */}





                </View>
            </View>


        );
    }

    // static navigationOptions = {
    //     // headerTitle instead of title
    //     title:'Sign Up',
    // }
}

