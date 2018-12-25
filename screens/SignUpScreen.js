import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class SignUpScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text>SignUp SCREEN</Text>
            </View>
        )
    }
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});