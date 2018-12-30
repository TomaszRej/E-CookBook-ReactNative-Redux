import React from 'react';
import {View, StyleSheet} from 'react-native';
import DefaultInput from './UI/DefaultInput';
import {connect} from 'react-redux';
import DefaultButton from "./UI/DefaultButton";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            controls: {
                userLogin: '',
                password: '',
                confirmedPassword: ''
            }
        }
    }

    checkIfUserExist = userName => {
        const exist = this.props.users.find((user) => {
            return user.name === userName
        });

        // if(exist){
        //     return true
        // }
        //
        // return false
        return exist ? exist : false

    };
    checkIfPasswordIsCorrect = (user, password) => {
        return user.password === password;
    };

    handleChangeText = (text, key) => {
        console.log(text);
        console.log('------------');


        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    [key]: text
                }
            }
        }, () => {
            const user = this.checkIfUserExist(this.state.controls.userLogin);
            const password = this.state.controls.password;
            if (user) {
                console.log('przed cos');
                console.log(this.checkIfPasswordIsCorrect(user, password));
                if (this.checkIfPasswordIsCorrect(user, password)) {

                    // do reduxa
                    this.props.setCurrentUserName(this.state.controls.userLogin);
                    this.props.setValidUserData(true);
                }
            }
        });

    };
    handleSubmit = () => {
        this.props.setCurrentUserName(this.state.controls.userLogin);
    };
    render() {
        return (
            <View>
                <DefaultInput
                    style={styles.input}
                    placeholder='enter your login'
                    value={this.state.controls.userLogin}
                    onChangeText={(text) => this.handleChangeText(text, 'userLogin')}
                />
                <DefaultInput
                    style={styles.input}
                    placeholder='enter your password'
                    value={this.state.controls.password}
                    onChangeText={(text) => this.handleChangeText(text, 'password')}
                    secureTextEntry={true}
                />
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
        users: state.users.users,
        validUserData: state.users.validUserData
    }
};
const mapDispatchToProps = dispatch => {
    return {
        setCurrentUserName: (name) => dispatch({type: 'SET_CURRENT_USER_NAME', name}),
        setValidUserData: (valid) => dispatch({type: 'SET_VALID_USER_DATA', valid})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

const styles = StyleSheet.create({
    input: {
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