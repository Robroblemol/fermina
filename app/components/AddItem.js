import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput,CheckBox} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import  Icon  from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem, userId}) => {
  const [ addresse, setAddresse] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [ type, setType ] =useState('public');
  const onValueChangeCheckBox = value =>{
    console.log(value);
    setSelection(false)
    
  }
  return(
    
    <View style= {styles.listItemView}>
       <TextInput 
        placeholder = {"Add item..."}
        style = {styles.input}
        onChangeText = {(textValue) => setAddresse(textValue)}
        />
        {/* <CheckBox
          value={isSelected}
          onValueChange={onValueChangeCheckBox}
          // style={styles.checkbox}
        /> */}
        <TouchableOpacity 
          style= {styles.btn}
          onPress = {()=>addItem({userId,addresse,type})}>
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