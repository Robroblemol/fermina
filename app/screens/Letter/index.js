import React, {useState, useEffect} from 'react';
import { 
    Text, 
    FlatList, 
    View, 
    TouchableOpacity, 
    StyleSheet, 
    Alert,
    ActivityIndicator,
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import  Icon  from 'react-native-vector-icons/dist/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import { map, concat } from 'ramda'
import { actionCreateWritings, actionGetWriting } from '../../redux/actions';
import ListWriting from '../../components/ListWriting'
import ModalCreateWriting from '../../components/ModalCreateWriting'

const Letter = (letter) => {
    const [ showModal, setShowModal ] = useState(false);
    const [ dataLetter, setDataLetter ] = useState([]);
    const reducer = useSelector(state => state);
    const dispatch = useDispatch();
    const [showSpinner, setShowSpinner]=useState(false);
    const token = reducer.authReducer.token ;
    // const [ letterId, setLetterId ] = useState('')
    //  console.log('Letter!!!!!!!!!!!!!!!11');
    
    // // console.log(letters);
    // console.log('reducer!!!!!!!!!!!!!!!11');
    // console.log(reducer.writingReducer);

    useEffect(() =>{
        console.log('algo paso!');
        console.log(letter);
        setDataLetter([]);
        setShowSpinner(reducer.writingReducer.isLoading)
        map((w)=>{
            // console.log(w.letterId);
            
            if(w.letterId == letter.letterId){
                console.log('chiga!');
                
                setDataLetter(dataLetter =>{
                    console.log(dataLetter);
                    
                    return concat(dataLetter,[w]);
                })
            }
        },reducer.writingReducer.writings);
        console.log(dataLetter);
        
    },reducer.writingReducer.writings)

    const createWriting = (dataWriting) =>{
        const newWriting = {
            userId:reducer.authReducer.user,
            letterId:letter.letterId,
            ...dataWriting,
        }
        actionCreateWritings(
            token,
            dispatch,
            newWriting
            );
        
        
        if(reducer.writingReducer.refresh == true){
            actionGetWriting(
                token,
                dispatch,
                {letterId:letter.letterId}
              )
            setShowModal(false);

        }else{
            Alert.alert('Error','No se pudo crear escrito :(',[{text: 'ok'}])
        }

        
    }

    const openWriting = (id) =>{
        console.log(id);
        map((w) =>{
            if(w.id == id){
                Actions.writing(w);
            }     
          },dataLetter)
        
    }
    const setLike = (id) =>{
        console.log(id);
    }
    
    return (
        <View style={styles.container}>
            <FlatList
                data = {dataLetter}
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
            setNewWriting={createWriting}
        />
        {
           showSpinner==true? <ActivityIndicator size="large" color="#chocolate" />:null
        }
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