import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import {setCurrentUserName} from '../store/actions/users';
import LoggedView from "../components/LoggedView";

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
        this.props.setCurrentUser('');
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
                    <LoggedView handleLogout={this.handleLogout}/>

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

const mapStateToProps = state => {
    return{
        userName: state.users.userName
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentUser: (name) => dispatch(setCurrentUserName(name))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 50,
        justifyContent: 'space-between',
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