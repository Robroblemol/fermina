import React, {useState}from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  StatusBar
} from 'react-native';
import  Icon  from 'react-native-vector-icons/dist/FontAwesome';
import ModalConfig from './ModalConfig'
const Header = ({title}) => {
  const [showModal, setShowModal]= useState(false);
  return(
    <View style= {styles.header}>
      <StatusBar backgroundColor={'chocolate'}/>
      <Text style = {styles.text}>{title}</Text>
      <TouchableOpacity 
        onPress = {() => setShowModal(true)}
      >
        <View>
          <Icon style = {styles.icon}
            name = "bars"
            size = {30}
            color = "#fff"
            
          />
        </View>
      </TouchableOpacity>
      <ModalConfig
        isVisible={showModal}
        setIsVisible={setShowModal}
      />
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