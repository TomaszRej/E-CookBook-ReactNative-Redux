import React from 'react';
import {View, Text, Button, StyleSheet } from 'react-native';


class SettingsScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Settings screen</Text>
            </View>
        )
    }
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});