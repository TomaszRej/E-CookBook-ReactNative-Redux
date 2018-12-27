import React from 'react';
import {View, Text, Button, StyleSheet } from 'react-native';
import {connect} from 'react-redux';

class SettingsScreen extends React.Component {
    handleSubmit = () => {
      const name  ='na sztywno TOMEK';
      this.props.setCurrentUserName(name);
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Settings screen</Text>
                <Button title='test'
                onPress={this.handleSubmit}>
                </Button>
            </View>
        )
    }
}
const mapDispatchToProps = dispatch => {
  return{
    setCurrentUserName: (name) => dispatch({type: 'SET_CURRENT_USER_NAME',name})
  }
};

export default connect(null,mapDispatchToProps)(SettingsScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});