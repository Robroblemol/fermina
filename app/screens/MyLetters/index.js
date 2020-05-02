import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet, FlatList,  Alert} from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux'
import ListItem from '../../components/ListLetters';
import AddItem from '../../components/AddItem';
import { getWriting } from '../../redux/actions'


const Letters = () => {

    const reducer = useSelector(state => state);
    console.log(reducer);
    const dispatch = useDispatch();

    // const token = reducer.authReducer.token;
    // const id = reducer.authReducer.user;
    
    
    
    const [items, setItems] = useState([]);

  useEffect(() => {
     console.log(reducer.writingReducer.writings);
      setItems(reducer.writingReducer.writings)
  },reducer.writingReducer.writings)
  
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