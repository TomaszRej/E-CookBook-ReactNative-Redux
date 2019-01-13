import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DefaultInput from '../components/UI/DefaultInput';
import DefaultButton from '../components/UI/DefaultButton';
import {connect} from 'react-redux';
import {createStackNavigator} from "react-navigation";
import DetailsScreen from "./DetailsScreen";
import {deleteRecipe, updateLikes} from "../store/actions/recipes";
import * as Animatable from 'react-native-animatable'


class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            searchBarFocused: false
        };
    }
    componentDidMount() {
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
        this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
        this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)

    }

    keyboardDidShow = () => {
        // check if android OS
        this.setState({ searchBarFocused: true })
    };

    keyboardWillShow = () => {
        this.setState({ searchBarFocused: true })
    };

    keyboardWillHide = () => {
        this.setState({ searchBarFocused: false })
    };
    handlePressOnImage = (id) => {
        this.props.navigation.navigate('Details', {
            id: id
        });
    };
    handleHeartClick = (id) => {
        //check if user already like the recipe
        this.props.updateLikes(id);
    };
    handleDeletePress = (id) => {
        this.props.deleteRecipe(id);
    };


    renderRecipes = () => {
        const filteredRecipes = this.props.recipes.filter((el) => el.title.includes(this.state.searchText));
        const recipes = filteredRecipes.map((recipe, index) => {
            let deleteButton = <Text>{}</Text>;
            if(this.props.userName === recipe.author){
                deleteButton=<DefaultButton
                    error={true}
                onPress={(id) =>this.handleDeletePress(recipe.id)}
                >Delete</DefaultButton>;
            }

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
                        <View>
                            {deleteButton}
                        </View>
                    </View>
                </View>
            )

        });

        return recipes;
    };

    render() {
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
                    <Animatable.View  animation={this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"} duration={400} style={styles.searchInputIcon}>
                        <Icon
                            name={this.state.searchBarFocused ? 'md-arrow-back':'ios-search'}
                            size={30}/>
                    </Animatable.View>
                </View>
                <ScrollView style={styles.recipes}>
                    {this.renderRecipes()}
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
    return {
        updateLikes: (id) => dispatch(updateLikes(id)),
        deleteRecipe: (id) => dispatch(deleteRecipe(id))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
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

    },
    recipes: {
        width: '100%'
    },
    recipe: {
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
    },
    deleteButton: {
        borderColor: 'red',
        borderWidth: 4,
        color:'red'
    }

});