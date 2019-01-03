import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import DefaultButton from "./UI/DefaultButton";
import {connect} from 'react-redux';

class LoggedView extends React.Component {

    // calculateAddedRecipes = () => {
    //     let counter = 0;
    //
    //     console.log(this.props.recipes, 'recipes')
    //
    //     this.props.recipes.map((el) => {
    //         console.log(el.author, this.props.userName);
    //         if (el.author === this.props.userName) {
    //             counter++;
    //         }
    //     });
    //
    //     this.setState({
    //         addedRecipes: counter
    //     })
    // };

    // componentDidMount(){
    //     this.calculateAddedRecipes();
    // }

    render() {
        let added = 0;
        let favorites = 0;
        this.props.recipes.map((el) => {
            if (el.author === this.props.userName) {
                added++;
            }
        });

        this.props.users.map((el) => {
            if(el.name === this.props.userName){
                favorites = el.favorites.length;
            }

        });



        return (
            <View>
                <View style={[styles.container]}>
                    <Text style={{fontSize: 20}}>Hello <Text
                        style={{fontWeight: 'bold'}}>{this.props.userName}</Text></Text>
                    <DefaultButton
                        onPress={this.props.handleLogout}
                    >Logout</DefaultButton>
                </View>

                <View>
                    <Text style={styles.info}>You have added <Text style={{fontWeight: 'bold',color:'green'}}>{added}</Text> recipe.</Text>
                    <Text style={styles.info}>You have <Text style={{fontWeight: 'bold',color:'green'}}>{favorites}</Text> favorite recipes.</Text>
                </View>

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

export default connect(mapStateToProps)(LoggedView);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    info: {
        fontSize: 24,
        marginHorizontal: 50,
        marginVertical: 10
    }
});