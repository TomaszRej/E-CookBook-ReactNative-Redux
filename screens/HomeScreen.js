import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DefaultInput from '../components/UI/DefaultInput';
import DefaultButton from '../components/UI/DefaultButton';
import {connect} from 'react-redux';
import {createStackNavigator} from "react-navigation";
import DetailsScreen from "./DetailsScreen";


class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }

    handlePressOnImage = (id) => {
        this.props.navigation.navigate('Details', {
            id: id
        });
    };
    handleHeartClick = (id) => {
        //sprawdzic czy juz lubi

        this.props.updateLikes(id);
    };

    render() {
        console.log(this.props.recipes, 'thispropsrecipes');
        const filteredRecipes = this.props.recipes.filter((el) => el.title.includes(this.state.searchText));
        const recipes = filteredRecipes.map((recipe, index) => {
            return (
                <View
                    style={styles.recipe}
                    key={index}>

                    <Text
                        style={styles.title}>{recipe.title}</Text>
                    <TouchableOpacity onPress={() => this.handlePressOnImage(recipe.id)}>
                        <Image
                            source={{uri: recipe.link}}
                            style={styles.recipeImage}
                        />
                    </TouchableOpacity>
                    <View style={styles.icons}>
                        <Icon name='ios-leaf' size={30}
                              style={{color: recipe.isVegetarian ? 'green' : 'grey', paddingHorizontal: 5}}/>
                        <View style={styles.flames}>
                            <Icon name='ios-flame' size={30}
                                  style={{color: recipe.hotLvl !== 0 ? 'red' : 'gray'}}/>
                            <Icon name='ios-flame' size={30}
                                  style={{
                                      paddingHorizontal: 5,
                                      color: (recipe.hotLvl !== 0) && (recipe.hotLvl !== 1) ? 'red' : 'gray'
                                  }}/>
                            <Icon name='ios-flame' size={30}
                                  style={{color: recipe.hotLvl === 3 ? 'red' : 'gray'}}
                            />


                        </View>
                        <View style={styles.iconGroup}>
                            <Icon name='ios-timer' size={30}/>
                            <Text style={styles.textInIconGroup}>{recipe.timeToPrepare}</Text>
                        </View>
                        <View style={styles.iconGroup}>
                            <TouchableOpacity onPress={() => this.handleHeartClick(recipe.id)}>
                                <Icon name='ios-heart' size={30}
                                      style={{color: recipe.likes > 0 ? 'red' : 'grey'}}/>
                            </TouchableOpacity>

                            <Text style={styles.textInIconGroup}>{recipe.likes}</Text>
                        </View>
                    </View>
                </View>
            )
        });
        return (
            <View style={styles.container}>
                <View style={styles.searchInput}>
                    <DefaultInput
                        value={this.state.searchText}
                        onChangeText={(val) => {
                            this.setState({searchText: val})
                        }}

                        style={styles.searchInputText}
                        placeholder='Szukaj'/>
                    <View style={styles.searchInputIcon}>
                        <Icon
                            name='ios-search'
                            size={30}/>
                    </View>
                </View>
                <ScrollView style={styles.recipes}>
                    {recipes}
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        userName: state.users.userName,
        users: state.users.users,
        recipes: state.recipes.recipes
    }
};

const mapDispatchToProps = dispatch => {
    return{
        updateLikes: (id) => dispatch({type: 'UPDATE_LIKES',id})
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        // paddingHorizontal: 10,
        // paddingBottom: 10,
        padding: 10,
        fontSize: 24,
        height: 50
    },
    searchInput: {
        width: '60%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    searchInputText: {
        marginRight: 5,
        flex: 5
    },
    searchInputIcon: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    recipes: {
        width: '100%'
    },
    recipe: {
        //height: 4000,
        //height: '100%',
        marginTop: 10,
        width: '100%',
        borderWidth: 1,
        borderColor: 'grey'
    },
    recipeImage: {
        height: 300,
        width: '100%'
    },
    icons: {
        width: '50%',
        height: 60,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconGroup: {
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textInIconGroup: {
        paddingHorizontal: 8,
        fontSize: 28,
        paddingBottom: 3
    },
    flames: {
        flexDirection: 'row',
        paddingHorizontal: 10,
    }

});