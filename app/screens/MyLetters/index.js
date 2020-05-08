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
  actionGetWriting,
  createLetterAction,
  getLetterAction,


} from '../../redux/actions'



const MyLetters = () => {

    const reducer = useSelector(state => state);
    console.log('letters!!!!!!!1');
    
    console.log(reducer);
    const dispatch = useDispatch();

    const token = reducer.authReducer.token;
    const userId = reducer.authReducer.user;
    
    
    
    // const [letters, setLetters] = useState([]);
    

  useEffect(() => {
    console.log('my letters>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<');
    if(reducer.letterReducer.refresh && 
      !reducer.letterReducer.isLoading){
        console.log('dentro');
        
        getLetterAction(token,dispatch,{userId})
        actionGetWriting(token,dispatch,{userId});
    }
   // setLetters(reducer.letterReducer.letters);
  },[reducer.letterReducer])
  
    const deleteItem = (id) =>{
      setLetters (prevItems => {
        return prevItems.filter(item => item.id != id);
      });
    }

    const openLetter = (id) =>{
      Actions.letter({letterId:id});       
    }
  
    const addItem = (data) =>{
      console.log(data);
      
      if (!data.addresse) {
        Alert.alert('Error','Por Favor escribe algo',[{text: 'bueno'}])
      } else {
        createLetterAction(token,dispatch,data);
        
      }
    }
  
    return(
      <View style= {style.container}>
        
          <FlatList 
            data = {reducer.letterReducer.letters}
            renderItem = {({item}) => (
              <ListItem 
              id={item.id}
              item = {item}
              openLetter = {openLetter}
              deleteItem= {deleteItem}/>
  
            )}
          />
          <AddItem 
            addItem = {addItem}
            userId = {userId} />
      </View>
    );
  }
  const style = StyleSheet.create({
    container: {
      flex: 1, 
     
    },
  })
  export default MyLetters;