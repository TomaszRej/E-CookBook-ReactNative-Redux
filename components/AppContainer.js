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
import HomeScreen from "../screens/HomeScreen";
import AddScreen from "../screens/AddScreen";
import FavoritesScreen from '../screens/FavoritesScreen';

import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import DetailsScreen from "../screens/DetailsScreen";


const RecipesNavigator = createStackNavigator({
   Home: {
       screen:HomeScreen
   },
   Details: {
       screen: DetailsScreen
   }
},{
    defaultNavigationOptions:{
        header: null
    }
});

const AppTabNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: RecipesNavigator,
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
    navigationOptions: ({navigation}) =>{
        const {routeName} = navigation.state.routes[navigation.state.index];

        if(routeName === 'Home'){
            return{
                headerTitle: 'E-CookBook'
            }
        }else{
            return{
                headerTitle: routeName
            }
        }

    },
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
        })
    },

});

const AppDrawerNavigator = createDrawerNavigator({
    Home: AppStackNavigator,
    Add: AddScreen,
    Favorites: FavoritesScreen,
    Settings: SettingsScreen
});

const SwitchNavigator = createSwitchNavigator({
    //AuthLoading: AuthLoadingScreen,
    //Auth: AuthStackNavigator,
    App: AppDrawerNavigator
});
const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;