import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
class FavoritesScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Favorites SCREEN</Text>
                <Text>{this.props.userName}</Text>
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