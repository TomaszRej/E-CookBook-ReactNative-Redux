import React from 'react';
import {View, StyleSheet} from 'react-native';
import DefaultInput from './UI/DefaultInput';
import {connect} from 'react-redux';
import DefaultButton from "./UI/DefaultButton";
import {setCurrentUserName} from '../store/actions/users';
import {setValidUserData} from "../store/actions/users";


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

        return exist ? exist : false

    };
    checkIfPasswordIsCorrect = (user, password) => {
        return user.password === password;
    };

    handleChangeText = (text, key) => {
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
                if (this.checkIfPasswordIsCorrect(user, password)) {
                    this.props.setValidUser(true);
                }
            }
        });

    };
    handleSubmit = () => {
        this.props.setCurrentUser(this.state.controls.userLogin);
        this.props.handleLogin();
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
        setCurrentUser: (name) => dispatch(setCurrentUserName(name)),
        setValidUser: (valid) => dispatch(setValidUserData(valid))
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
        width: '105%'
    },
    submitButton: {
        fontSize: 30
    }
});