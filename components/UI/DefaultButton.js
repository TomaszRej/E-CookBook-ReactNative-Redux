import React from 'react';
import {TouchableOpacity, TouchableNativeFeedback, Text, View, StyleSheet, Platform} from 'react-native';

const defaultButton = props => {

    const content = <View style={[styles.button,props.style ,props.disabled ? styles.disabled : null, props.error ? styles.error : null]}>
        <Text style={[styles.text, props.disabled ? styles.disabledText : null, props.error ? styles.errorText : null ]}>
            {props.children}
        </Text>
    </View>;
    if(props.disabled){
        return content;
    }

    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback>
                {content}
            </TouchableNativeFeedback>
        )

    }
    return (
        <TouchableOpacity onPress={props.onPress}>
            {content}
        </TouchableOpacity>
    );


};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'blue'

    },
    text: {
      color: 'blue',
        textAlign: 'center'

    },
    disabled: {
        backgroundColor: '#eee',
        color: '#aaa',
        borderColor: '#aaa'

    },
    disabledText: {
        borderColor: '#aaa',
        color: '#aaa'
    },
    error:{
        borderColor: 'red',
        //backgroundColor: 'red',
    },
    errorText: {
        color: 'red'
    }

});

export default defaultButton;