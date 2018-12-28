import React from 'react';
import {View,StyleSheet} from 'react-native';
import DefaultInput from './UI/DefaultInput';
import { connect } from 'react-redux';
import DefaultButton from "./UI/DefaultButton";

class SignUp extends React.Component {
    handleSubmit = () => {
        this.props.setCurrentUserName(name);
    };
    render() {
        return (
            <View>
                <DefaultInput style={styles.input} placeholder='enter your login'/>
                <DefaultInput  style={styles.input} placeholder='enter your password'/>
                <DefaultInput  style={styles.input} placeholder='confirm password'/>
                <View style={styles.submitArea}>
                    <DefaultButton
                        style={styles.submitButton}
                        onPress={this.handleSubmit}
                        disabled={!this.props.validUserData}
                    >
                        Submit
                    </DefaultButton>
                </View>
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        users: state.users.users
    }
};
const mapDispatchToProps = dispatch => {
    return {
        setCurrentUserName: (name) => dispatch({type: 'SET_CURRENT_USER_NAME', name}),
        setValidUserData: (valid) => dispatch({type: 'SET_VALID_USER_DATA', valid})
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);


const styles = StyleSheet.create({
    input:{
        width: '100%',
        padding: 10,
        marginBottom: 10

    },
    submitArea: {
        alignSelf: 'center',

        //alignItems: 'center',
        width: '105%'
    },
    submitButton: {
        fontSize: 30
    }
});

