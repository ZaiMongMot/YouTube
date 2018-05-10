import React from 'react';
import {View, Text, TextInput, StyleSheet,Button } from 'react-native';

export default class Login extends React.Component{
    state = {email: '', password:'', errorMessage: null}

    handleLogin  = () =>{
        //TODO handle Login function
        console.log('Login function');
    }

    render(){
        return(
            <View style ={styles.container}>
                <Text>Login</Text>
                {this.state.errorMessage && <Text style={{color:'red'}}>{this.state.errorMessage}</Text>}
                <TextInput 
                placeholder="Email"
                style = {styles.textInput}
                autoCapitalize="none"
                onChangeText = {email => this.setState({email})}
                value = {this.state.email}/>
                <TextInput 
                secureTextEntry
                placeholder="Password"
                style = {styles.textInput}
                autoCapitalize="none"
                onChangeText = {password => this.setState({password})}
                value = {this.state.password}/>

                <Button title="Login" onPress={this.handleLogin} />
                <Button
                title="Don't have an account? Sign Up"
                onPress={() => this.props.navigation.navigate('SignUp')}
                />
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput:{
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
        padding: 16,
    }
})