import React from 'react';
import {View, Text,Button, StyleSheet, ActivityIndicator, AsyncStorage} from 'react-native';

class LogoutScreen extends React.Component{

    logout = async () => {
        AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading');
    };

    render(){
        return(
            <View style={styles.container}>
                <Button title='Logout'
                onPress={this.logout}
                />
            </View>
        )
    }
}

export default LogoutScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});