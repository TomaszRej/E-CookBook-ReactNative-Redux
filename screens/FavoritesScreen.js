import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
class FavoritesScreen extends React.Component {



    render() {
        let usersFavoriteRecipes= [];
        for(const el in this.props.users){
            if(this.props.userName === this.props.users[el].name){
                usersFavoriteRecipes = this.props.users[el].favorites;
            }
        }

        const favorites = usersFavoriteRecipes.map((el)=>{
            return <Text>{el.title}</Text>

        });

        return (
            <View style={styles.container}>

                <Text>{this.props.userName}</Text>
                <View>
                    {favorites}
                </View>
            </View>
        )
    }
}
const mapStateToProps = state => {
  return{
      userName: state.users.userName,
      users: state.users.users
  }
};
export default connect(mapStateToProps)(FavoritesScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});