import React from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    }

    render() {

        const recipes = this.props.recipes.map((recipe) => {
            return (
                recipe.title
            )
        });
        return (
            <View style={styles.container}>
                <View style={styles.searchInput}>
                    <TextInput
                        value={this.state.searchText}
                        onChangeText={(val)=>{this.setState({searchText: val})}}
                        style={styles.searchInputText}
                        placeholder='Szukaj'/>
                    <View style={styles.searchInputIcon}>
                        <Icon
                            name='ios-search'
                            size={30}/>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.recipe}>
                        <Text>{recipes}</Text>

                    </View>


                </ScrollView>
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
export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchInput: {
        width: '80%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center'


    },
    searchInputText: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 5,
        marginRight: 5,
        flex: 8
    },
    searchInputIcon: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    recipe: {
        height: 4000,
        backgroundColor: 'yellow'
    }
});