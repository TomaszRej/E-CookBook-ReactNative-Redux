import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AppContainer from './components/AppContainer';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

class App extends React.Component {
    render() {
        const store = configureStore();
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        )
    }
}

export default App;

