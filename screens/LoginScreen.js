import React from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView, ActivityIndicator, AsyncStorage} from 'react-native';
import {createMaterialTopTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import HomeScreen from './HomeScreen';

class LoginScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Test Login screen</Text>
            </View>
        )
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});