import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet, FlatList,  Alert} from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux'
import { map } from 'ramda';
import { Actions } from 'react-native-router-flux'
import ListItem from '../../components/ListLetters';
import AddItem from '../../components/AddItem';
import { 
  createLetterAction,
  updateLetterAction,
  deleteLetterAction, 
  createWritingsAction,
  updateWritingsAction,
  deleteWritingsAction,


} from '../../redux/actions'



const Letters = () => {

    const reducer = useSelector(state => state);
    console.log(reducer);
    const dispatch = useDispatch();

    // const token = reducer.authReducer.token;
    // const id = reducer.authReducer.user;
    
    
    
    const [letters, setLetters] = useState([]);
    const [writings, setWritings] = useState([]);
    const [ dataLetter, setDataLetter ] = useState([]);

  useEffect(() => {
    setLetters(reducer.letterReducer.letters);
    setWritings(reducer.writingReducer.writings)
  },reducer.letterReducer.letters)
  
    const deleteItem = (id) =>{
      setLetters (prevItems => {
        return prevItems.filter(item => item.id != id);
      });
    }

    const openLetter = (id) =>{
      // console.log(letters);
      // console.log(writings);
      // console.log(id);
      
      map((w)=>{
        if(w.letterId == id){
          setDataLetter(w)
          console.log('si hay cartas');
          console.log(w);
          
          
        }else{
          console.log('no hay cartas');
        }
      },writings)
      Actions.letter({data:dataLetter});
      
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
            data = {letters}
            renderItem = {({item}) => (
              <ListItem 
              item = {item}
              openLetter = {openLetter}
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