import React from 'react';
import {View, Text,Button, StyleSheet, ActivityIndicator, AsyncStorage} from 'react-native';

class AuthLoadingScreen extends React.Component{
    constructor(props) {
        super(props);
        this.loadApp();
    }


    loadApp = async () => {
      //const userToken = await AsyncStorage.getItem('userToken');
        //const userToken = false;
      //this.props.navigation.navigate(userToken ? 'App' : 'Auth')
        this.props.navigation.navigate('App');
    };

    logout = async () => {
        const userToken =   await AsyncStorage.setItem('userToken','');
    };

    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator/>
            </View>
        )
    }
}

export default AuthLoadingScreen;

const styles = StyleSheet.create({
   container: {
       flex:1,
       justifyContent: 'center',
       alignItems: 'center'
   }
});