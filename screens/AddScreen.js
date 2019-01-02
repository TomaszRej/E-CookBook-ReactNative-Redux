import React from 'react';
import {View, StyleSheet} from 'react-native';
import AddComponent from '../components/AddComponent';
import SettingsScreen from './SettingsScreen';
import {connect} from 'react-redux';

class AddScreen extends React.Component{
    render(){
        let content = <SettingsScreen/>;
        if(this.props.userName){
            content = <AddComponent/>
        }
        return(
            <View>
            {content}
            </View>
        )
    }
}

const mapStateToProps = state => {
  return{
      userName: state.users.userName
  }
};

export default connect(mapStateToProps)(AddScreen);
