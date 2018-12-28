import React from 'react';
import {View,StyleSheet} from 'react-native';
import DefaultInput from './UI/DefaultInput';

class SignUp extends React.Component {
    render() {
        return (
            <View>
                <DefaultInput style={styles.input} placeholder='enter your login'/>
                <DefaultInput  style={styles.input} placeholder='enter your password'/>
                <DefaultInput  style={styles.input} placeholder='confirm password'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        width: '100%',
        padding: 10,
        marginBottom: 10

    }
});

export default SignUp;