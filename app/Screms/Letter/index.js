import React, {useState} from 'react';
import { Text, FlatList, View, TouchableHighlight, StyleSheet, Alert} from 'react-native';
import { Actions } from 'react-native-router-flux'
import { map } from 'ramda'
import ListWriting from '../../components/ListWriting'

const Letter = (letters) => {
    console.log('Letter!!!!!!!!!!!!!!!11');
    
    console.log(letters);

    const openWriting = (id) =>{
        console.log(id);
        map((w) =>{
            if(w.id == id){
                Actions.writing(w);
            }     
          },letters.data)
        
    }
    const setLike = (id) =>{
        console.log(id);
    }
    
    return (
        <View style={style.container}>
            <FlatList
                data = {letters.data}
                renderItem = {({item}) => (
                    <ListWriting 
                        id = {item.id}
                        title = {item.title}
                        open = {openWriting}
                        setLike ={setLike}
                        like = {false}
                        // deleteItem= {deleteItem}/>
                    />
                  )}
            />

        </View>
    )
}

const style = StyleSheet.create({
    container: {
      flex: 1, 
        
    },
  })

export default Letter;