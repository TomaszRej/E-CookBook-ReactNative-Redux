import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {connect} from 'react-redux';
import DefaultButton from '../components/UI/DefaultButton';
import DefaultInput from '../components/UI/DefaultInput';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {addRecipe} from "../store/actions/recipes";

class AddScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            timeToPrepare: 0,
            hotLvl: 0,
            isVegetarian: false,
            ingredients: [],
            instructions: []
        }
    }

    handleTextChange = (text, key) => {
        console.log(text);
        this.setState({
            [key]: text
        })
    };


    handleSubmit = () => {
        const recipe = {
            "author": this.props.userName,
            "title": this.state.title,
            "description": this.state.description,
            "timeToPrepare": this.state.timeToPrepare,
            "hotLvl": this.state.hotLvl,
            "isVegetarian": this.state.isVegetarian,
            "link": "https://via.placeholder.com/150",
            "likes": 0,
            "whoLikes": [],
            "ingredients": this.state.ingredients,
            "instructions": this.state.instructions
        };
        this.props.addRecipe(recipe);
        console.log(this.props.recipes);
    };

    render() {
        const radio_props = [
            {label: 'Soft', value: 1},
            {label: 'Medium', value: 2},
            {label: 'High', value: 3}
        ];
        return (

            <View style={styles.container}>
                <DefaultInput
                    placeholder='enter name'
                    value={this.state.title}
                    onChangeText={(text) => this.handleTextChange(text, 'title')}
                />
                <DefaultInput
                    style={styles.textArea}
                    placeholder='enter description'
                    multiline={true}
                    numberOfLines={8}
                    value={this.state.description}
                    onChangeText={(text) => this.handleTextChange(text, 'description')}

                />
                <DefaultInput

                    placeholder='enter time to prepare'
                    multiline={true}
                    numberOfLines={8}
                    value={this.state.timeToPrepare}
                    onChangeText={(text) => this.handleTextChange(text, 'timeToPrepare')}
                />
                <View>
                    <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        style={{ marginVertical: 20}}
                        // onPress={(value) => {this.setState({value:value})}}
                        onPress={(value) => this.handleTextChange(value, 'hotLvl')}
                        buttonSize={10}
                        buttonColor={'#333'}
                        buttonInnerColor={'#333'}
                        buttonOuterColor={'#333'}
                        buttonOuterSize={25}
                        formHorizontal={true}
                        labelHorizontal={false}



                    />
                </View>
                <View style={styles.vegetarianContainer}>

                    <Switch
                        style={styles.isVegetarian}
                        value={this.state.isVegetarian}
                        onValueChange={(value) => this.handleTextChange(value, 'isVegetarian')}
                    />
                    <Text>suitable for vegetarians</Text>
                </View>

                <DefaultButton onPress={this.handleSubmit}>Add Your Recipe</DefaultButton>
            </View>

        )
    }
}

const mapStateToProps = state => {
    return {
        userName: state.users.userName,
        recipes: state.recipes.recipes
    }
};
const mapDispatchToProps = dispatch => {
    return {
        addRecipe: (recipe) => dispatch(addRecipe(recipe))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddScreen);

const styles = StyleSheet.create({
    container: {
       // flex: 1,
        marginHorizontal: 50,
        marginVertical: 20,
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    vegetarianContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    isVegetarian: {
        marginRight: 10
    },
    textArea: {
        height: 100,
        marginVertical: 20
    }
});