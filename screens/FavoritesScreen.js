import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class FavoritesScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Favorites SCREEN</Text>
            </View>
        )
    }
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});