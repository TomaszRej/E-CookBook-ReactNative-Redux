import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {connect} from 'react-redux';

class FavoritesScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
    }


    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        let usersFavoriteRecipes = [];
        for (const el in this.props.users) {
            if (this.props.userName === this.props.users[el].name) {
                usersFavoriteRecipes = this.props.users[el].favorites;
            }
        }

        const favorites = usersFavoriteRecipes.map((el, index) => {
            return (
                <View>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{marginTop: 22}}>
                            <View>
                                <Text>{el.title}</Text>

                                <TouchableOpacity
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text>Hide Modal</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <TouchableOpacity
                        key={index}
                        onPress={() => {this.setModalVisible(true)}}>
                        <Text>{el.title}</Text>
                    </TouchableOpacity>
                </View>)

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
    return {
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