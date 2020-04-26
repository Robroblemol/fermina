import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import  Icon  from 'react-native-vector-icons/dist/FontAwesome';

const HomeTab = (props) => {
    let textColor = props.focused ? 'chocolate' : '#fff'
    let borderColor = props.focused ? '#FCAC17' : '#F4DFB8'
    return (
        <View style={{flex: 1, flexDirection:'column', alignItems:'center', justifyContent:'center', borderTopColor: borderColor, borderTopWidth:4, padding:20}}>
        <Icon style = {props.focused ? styles.iconFocused : styles.icon}
                name = "home"
                size = {30}
                color = "#fff"       
            />
        <Text style={{color: textColor}}>Inicio</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        color: '#fff'
    },
    iconFocused:{
        color: 'chocolate'
    }
     ,
    });
 
export default HomeTab 