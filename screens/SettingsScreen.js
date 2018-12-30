import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import DefaultButton from "../components/UI/DefaultButton";
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

class SettingsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
            activeLabel: 'SignIn',
        }
    }

    handleChoice = (label) => {
        this.setState({
            activeLabel: label
        })
    };

    handleLogin = () => {
      this.setState({
          logged: !this.state.logged
      })
    };
    handleLogout = () =>{
        this.props.setCurrentUserName('');
        this.setState({
         logged: !this.state.logged
        })
    };

    render() {
        let form;
        if (this.state.activeLabel === 'SignIn') {
            form = <SignIn handleLogin={this.handleLogin}/>
        } else if (this.state.activeLabel === 'SignUp') {
            form = <SignUp/>
        }

        if(this.state.logged){
            return(
                <View style={[styles.container,{flex:1}]}>
                    <DefaultButton
                    onPress={this.handleLogout}
                    >Logout</DefaultButton>
                </View>
            )
        }else {
            return (
                <View style={styles.container}>
                    <View>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={[styles.button, {
                                borderColor: this.state.activeLabel === 'SignIn' ? 'blue' : 'transparent',
                                borderBottomWidth: 2
                            }]}
                                              onPress={() => this.handleChoice('SignIn')}>
                                <Text style={styles.buttonText}>Sign in</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, {
                                borderColor: this.state.activeLabel === 'SignUp' ? 'blue' : 'transparent',
                                borderBottomWidth: 2
                            }]}
                                              onPress={() => this.handleChoice('SignUp')}>
                                <Text style={styles.buttonText}>Sign up </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.form}>
                            {form}
                        </View>

                    </View>
                </View>
            )
        }



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
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: '70%'
    },
    form: {
        padding: 20
    },
    buttons: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    buttonText: {
        color: 'blue',
        fontSize: 24,
        padding: 3
    },



});