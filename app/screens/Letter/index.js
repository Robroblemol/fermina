import React, {useState} from 'react';
import { Text, FlatList, View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import { Actions } from 'react-native-router-flux'
import  Icon  from 'react-native-vector-icons/dist/FontAwesome';
import { map } from 'ramda'
import ListWriting from '../../components/ListWriting'
import ModalCreateWriting from '../../components/ModalCreateWriting'

const Letter = (letters) => {
    const [ showModal, setShowModal ]=useState(false);
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
        <View style={styles.container}>
            <FlatList
                data = {letters.data}
                renderItem = {({item}) => (
                    <ListWriting 
                        id = {item.id}
                        title = {item.title}
                        open = {openWriting}
                        setLike ={setLike}
                        like = {false}
                    />
                  )}
            />
        <TouchableOpacity 
            style={styles.btnAdd}
            onPress={()=>setShowModal(true)}
        >
            <Icon
            name= {'plus'} 
            size= {24} 
            color={'chocolate'} 
                />
        </TouchableOpacity>
        <ModalCreateWriting
            setIsVisible={setShowModal}
            isVisible={showModal}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
        
    },
    btnAdd: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor:'#FCAC17',
        borderRadius: 45,
      },
  })

export default Letter;