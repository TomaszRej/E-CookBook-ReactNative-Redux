import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
    createSwitchNavigator,
    createAppContainer,
    createStackNavigator,
    createDrawerNavigator,
    createBottomTabNavigator,

} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import HomeScreen from "./screens/HomeScreen";
import AddScreen from "./screens/AddScreen";
import FavoritesScreen from './screens/FavoritesScreen';
import LogoutScreen from './screens/LogoutScreen';
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const AppTabNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            tabBarLabel: 'Home',
            tabBarIcon: <Icon name='ios-home' size={24} />,
        })
    },
    Add: {
//zmienic na wartosc z redux
        screen: false ? AddScreen : SettingsScreen,
        navigationOptions: {
            tabBarLabel: 'Add',
            tabBarIcon: (<Icon name='ios-add-circle' size={24}/>),
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: (<Icon name='ios-heart' size={24}/>),
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel: 'Settings',
            //zmienic na wartosc z redux user
            tabBarIcon: (<Icon name={false ? 'md-person':'md-log-in'} size={24}/>),
        }

    }
}, {
    initialRouteName: 'Home',
    shifting: true,
    //labeled: false,
    barStyle: { backgroundColor: 'white' },
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
    },

});

const AppStackNavigator = createStackNavigator({
    AppTabNavigator: {
        screen: AppTabNavigator,
        navigationOptions: ({navigation}) => ({
            title: 'E-CookBook',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <View style={{paddingHorizontal: 10}}>
                        <Icon name='md-menu' size={24}/>
                    </View>
                </TouchableOpacity>
            ),
            headerRight: (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <View style={{paddingHorizontal: 10}}>
                        <Icon name='ios-search' size={24}/>
                    </View>
                </TouchableOpacity>
            ),

        })
    }
});

const AppDrawerNavigator = createDrawerNavigator({
    Home: AppStackNavigator,
    Add: AddScreen,
    Favorites: FavoritesScreen,
    Settings: SettingsScreen
});

 const SwitchNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    //Auth: AuthStackNavigator,
    App: AppDrawerNavigator
});
const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
