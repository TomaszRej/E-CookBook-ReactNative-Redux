import React from 'react';
import {View, Text, StyleSheet, Button, ScrollView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import DefaultButton from '../components/UI/DefaultButton';

class DetailsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.loadDetails();
    }

    loadDetails = () => {
        const selectedRecipeId = this.props.navigation.state.params.id;
        this.props.showRecipeDetails(selectedRecipeId);
    };


    handlePressOnBack = () => {
        this.props.navigation.navigate('Home');
    };
    handlePressOnAddToFav = () => {
        alert('dodawanie');
    };

    render() {
        const {selectedRecipe} = this.props;
        let ingredients;
        if (selectedRecipe.ingredients) {
            ingredients = selectedRecipe.ingredients.map((ingredient,index) => {
                return (
                    <Text key={index}>{ingredient}</Text>
                )
            });
        }
        let instructions;
        if (selectedRecipe.instructions) {
            instructions = selectedRecipe.instructions.map((instruction,index) => {
                return (
                    <Text key={index}>{instruction}</Text>
                )
            });
        }

        return (
            <ScrollView>
                <View>

                    <TouchableOpacity onPress={this.handlePressOnBack} style={styles.goBackButton}>
                        <Icon name='ios-arrow-back' size={20} style={styles.goBackIcon}/>
                        <Text style={styles.goBackText}>Back</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.recipeDetails}>
                    <Text style={styles.title}>{selectedRecipe.title} </Text>
                    <View style={styles.paragraph}>
                        <Text style={{fontWeight: 'bold'}}>Author:{' '}</Text><Text>{selectedRecipe.author}</Text>
                    </View>
                    <View style={styles.description}>
                        <Text>
                            <Text
                                style={{fontWeight: 'bold'}}>Description:{' '}</Text>{selectedRecipe.description}</Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={{fontWeight: 'bold'}}>Ingredients:</Text>
                        {ingredients}
                    </View>
                    <View style={styles.list}>
                        <Text style={{fontWeight: 'bold'}}>Instructions:</Text>
                        {instructions}
                    </View>
                    {/*<TouchableOpacity onPress={this.handlePressOnAddToFav}>*/}
                    {/*<Text style={styles.addToFavoritesBtn}>Add to Favorites</Text>*/}
                    {/*</TouchableOpacity>*/}
                    <View style={styles.addToFavorites}>
                        <DefaultButton

                            onPress={this.handlePressOnAddToFav}
                            disabled={false}
                        >
                            Add To Favorites
                        </DefaultButton>
                    </View>


                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedRecipe: state.recipes.selectedRecipe
    }
};
const mapDispatchToProps = dispatch => {
    return {
        showRecipeDetails: id => dispatch({type: 'SHOW_RECIPE_DETAILS', id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    recipeDetails: {
        paddingTop: 10,


    },
    goBackButton: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 10,
        paddingTop: 5,

    },
    goBackIcon: {
        paddingTop: 2,
        paddingHorizontal: 5,
        color: 'blue',
        fontSize: 30
    },
    goBackText: {
        color: 'blue',
        fontSize: 24
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    },
    paragraph: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    description: {
        width: '80%',
        alignSelf: 'center',

    },
    list: {
        width: '80%',
        alignSelf: 'center',
        paddingTop: 15
    },
    addToFavorites: {
        width: '80%',
        alignSelf: 'center',
        padding:15
    }
});