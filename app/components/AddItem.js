import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import  Icon  from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [ text, setText] = useState();
  const onChange = (textValue) => setText(textValue);
  return(
    
    <View style= {styles.listItemView}>
       <TextInput 
        placeholder = {"Add item..."}
        style = {styles.input}
        onChangeText = {onChange}
        />
        <TouchableOpacity 
          style= {styles.btn}
          onPress = {()=>addItem(text)}>
          <Text style = {styles.btnText}>
              <Icon name = "plus" size={20}/>
               Crear una carta
          </Text>
        </TouchableOpacity>

      </View>
    
  );

}
const styles = StyleSheet.create({
    input:{
      height:60,
      padding: 8,
      fontSize:16,
    },
    btn:{
      backgroundColor: '#FCAC17',
      padding: 9,
      margin: 5,
    },
    btnText:{
      color:'#463310',
      fontSize: 20,
      textAlign: 'center',
    },
   
  })

export default AddItem;