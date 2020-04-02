import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList,  Alert} from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import SplashScreen from 'react-native-splash-screen';
import Header from './Header';
import ListItem from './ListLetters';
import AddItem from './AddItem';

const Letters = () => {

    
    SplashScreen.hide();
    const [items, setItems] = useState([
      {id:  uuidv4(), text: "letter 1"},
      {id:  uuidv4(), text: "letter 2"},
      {id:  uuidv4(), text: "letter 3"},
      {id:  uuidv4(), text: "letter 4"},
    ]);
  
    const deleteItem = (id) =>{
      setItems (prevItems => {
        return prevItems.filter(item => item.id != id);
      });
    }
  
    const addItem = (text) =>{
      if (!text) {
        Alert.alert('Error','Por Favor escribe algo',[{text: 'bueno'}])
      } else {
        setItems(prevItems => {
          return[{id: uuidv4(), text }, ...prevItems ]
        })
        
      }
    }
  
    return(
      <View style= {style.container}>
        <Header/>
          <FlatList 
            data = {items}
            renderItem = {({item}) => (
              <ListItem 
              item = {item}
              deleteItem= {deleteItem}/>
  
            )}
          />
          <AddItem addItem = {addItem} />
      </View>
    );
  }
  const style = StyleSheet.create({
    container: {
      flex: 1, 
     
    },
  })
  export default Letters;