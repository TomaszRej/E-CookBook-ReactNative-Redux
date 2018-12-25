import React from 'react';
import {View, Text, StyleSheet, Button, AsyncStorage} from 'react-native';

class SignInScreen extends React.Component{
    signIn = async () => {
        //await AsyncStorage.setItem('userToken','Tomek');
        this.props.navigation.navigate('App');
    };
    handleCancel = () => {
        this.props.navigation.navigate('HomeScreen');
    };

    render(){
        return(
            <View style={styles.container}>
                <Button title='Cancel'onPress={this.handleCancel}/>
            </View>
        )
    }
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});