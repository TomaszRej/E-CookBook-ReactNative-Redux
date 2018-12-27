import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

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

    render() {
        const {selectedRecipe} = this.props;
        return (
            <View>
                <View style={styles.goBackButton}>
                    <Icon name='ios-arrow-back' size={20} style={styles.goBackIcon}/>
                    <Button title='Back' onPress={this.handlePressOnBack}/>
                </View>
                <View>
                    <Text style={styles.title}>{selectedRecipe.title} </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold'}}>Author:{' '}</Text><Text>{selectedRecipe.author}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>
                        <Text
                            style={{fontWeight: 'bold'}}>Description:{' '}</Text>{selectedRecipe.description}</Text>
                    </View>


                </View>
            </View>
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
    goBackButton: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 10
    },
    goBackIcon: {
        paddingTop: 3,
        color: 'blue'
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    }
});