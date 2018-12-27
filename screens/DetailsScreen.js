import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

class DetailsScreen extends React.Component {
    handlePressOnBack = () => {
      this.props.navigation.navigate('Home');
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Details SCREEN</Text>
                <Button title='Back' onPress={this.handlePressOnBack}/>
            </View>
        )
    }
}

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});