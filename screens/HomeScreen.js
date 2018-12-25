import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class HomeScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>HOME SCREEN</Text><Icon name='ios-home'/>
            </View>
        )
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});