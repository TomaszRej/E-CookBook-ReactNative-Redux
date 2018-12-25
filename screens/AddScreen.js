import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class AddScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>ADD SCREEN</Text>
            </View>
        )
    }
}

export default AddScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});