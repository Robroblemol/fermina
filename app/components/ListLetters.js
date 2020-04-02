import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import  Icon  from 'react-native-vector-icons/dist/FontAwesome';

const ListLetters = ({item, deleteItem}) => {

  return(
    <TouchableOpacity style= {styles.listItem}>
    
      <View style= {styles.listItemView}>
        <Text style = {styles.listItemText}>{item.text}</Text>
        <Icon 
            name="trash" 
            size= {20} 
            color="firebrick"
            onPress={() => deleteItem(item.id)}/>
      </View>
    
    </TouchableOpacity>
  );

}
const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#F4DFB8',
        borderBottomWidth: 1,
        borderColor: 'chocolate',
    },
    listItemView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    listItemText: {
        fontSize:18,
        color: '#463310'
    }
   })

export default ListLetters;