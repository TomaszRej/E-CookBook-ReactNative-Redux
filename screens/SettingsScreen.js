import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class SettingsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLabel: 'SignIn'
        }
    }


    handleChoice = (label) => {
        this.setState({
            activeLabel: label
        })
    };

    handleSubmit = () => {
        const name = 'na sztywno TOMEK';
        this.props.setCurrentUserName(name);
    };


    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.buttons}>
                        <Button title='Sign in' onPress={() => this.handleChoice('SignIn')} style={styles.button}/>
                        <Button title='Sign up' onPress={() => this.handleChoice('SignUp')} style={styles.button}/>
                    </View>
                </View>
                <View>
                    <Text>Settings screen</Text>
                    <Button title='test'
                            onPress={this.handleSubmit}>
                    </Button>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentUserName: (name) => dispatch({type: 'SET_CURRENT_USER_NAME', name})
    }
};

export default connect(null, mapDispatchToProps)(SettingsScreen);

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    button: {

        //textAlign: 'center'
    }

});