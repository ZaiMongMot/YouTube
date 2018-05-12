import React  from 'react';
import  { View, StyleSheet,Platform, Image, Text } from 'react-native';

export default class Main extends React.Component{
    state = { currentUser: null}

    render(){
        const{currentUser} = this.state;
        
        return(
            <View>
                <Text> Hi, {currentUser && currentUser.email}!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});