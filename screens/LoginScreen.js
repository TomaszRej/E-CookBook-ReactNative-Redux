import React from 'react';
import {View, Text,Button, StyleSheet, ActivityIndicator, AsyncStorage} from 'react-native';

class LoginScreen extends React.Component{

    login = async () => {
        AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading');
    };

    render(){
        return(
            <View style={styles.container}>
                <Button title='login'
                        onPress={this.login}
                />
            </View>
        )
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});