import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import  Icon  from 'react-native-vector-icons/dist/FontAwesome';
const Header = ({title, onPressButton}) => {
  return(
    <View style= {styles.header}>
      <Text style = {styles.text}>{title}</Text>
      <TouchableOpacity >
        <View>
          <Icon style = {styles.icon}
            name = "bars"
            size = {30}
            color = "#fff"
            onPress = {() => onPressButton(true)}
          />
        </View>
      </TouchableOpacity>
    
    </View>
  );
}
Header.defaultProps = {
    title: "Fermina"
};
const styles = StyleSheet.create({
 header:{
      // position: 'absolute',
     height: 65,
     padding: 0,
     backgroundColor: 'chocolate',

 },
 icon:{
      top: -15,
      left: 10,
 },
 text:{
    color: '#fff',
    fontSize: 23,
    top: 15,
    textAlign: 'center',
 }
})
export default Header;