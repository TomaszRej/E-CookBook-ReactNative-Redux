import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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

    deleteFromFavorite = (id) => {
        this.props.deleteFromFavorites(id);
    };

    render() {
        let usersFavoriteRecipes = [];
        for (const el in this.props.users) {
            if (this.props.userName === this.props.users[el].name) {
                usersFavoriteRecipes = this.props.users[el].favorites;
            }
        }

        if (!this.props.userName) {
            return (
                <View style={styles.container}>
                    <Text style={styles.header}>Sign in to see yours favorites!</Text>
                </View>
            )
        }

        if (usersFavoriteRecipes.length === 0) {
            return (
                <View style={styles.container}>
                    <Text style={styles.header}>You don't have any favorite recipe!</Text>
                </View>
            )
        }


        const favorites = usersFavoriteRecipes.map((el, index) => {
            return (
                <View key={index}>
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
                        onPress={() => {
                            this.setModalVisible(true)
                        }}
                    >

                        <View style={styles.itemContainer}>
                            <Image source={{uri: el.link}} style={styles.recipeImage}/>

                            <View style={styles.itemText}>
                                <Text style={styles.favoriteItem}>{el.title}</Text>
                                <Text style={styles.favoriteItemAuthor}>Author:
                                    <Text>{el.author}</Text>
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => this.deleteFromFavorite(index)}>
                                <Icon name='ios-trash' style={styles.trash} size={50}/>
                            </TouchableOpacity>

                        </View>

                    </TouchableOpacity>
                </View>)

        });

        return (
            <ScrollView style={styles.container}>
                <View>
                    {favorites}
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {
        userName: state.users.userName,
        users: state.users.users
    }
};

const mapDispatchToProps = dispatch => {
  return{
      deleteFromFavorites: (id) => dispatch({type: 'DELETE_FROM_FAVORITES' ,id})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(FavoritesScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'flex-start',
        //paddingTop: 100
    },
    header: {
        width: '70%',
        fontSize: 30,
        textAlign: 'center'
    },
    favoriteItem: {
        fontSize: 24
    },
    favoriteItemAuthor: {
        fontSize: 20
    },
    itemContainer: {
        width: '100%',
        borderColor: '#eee',
        borderWidth: 1,
        // paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemText: {
        textAlign: 'left'
    },
    recipeImage: {
        marginRight: 15,
        height: 80,
        width: '30%'
    },
    trash: {
        padding: 10,
        color: 'red',
    }
});