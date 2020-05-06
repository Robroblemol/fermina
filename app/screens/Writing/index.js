import React, {useState, useEffect} from 'react';
import {  
    SafeAreaView,
    ScrollView,
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Alert,

  } from 'react-native';
  import { useSelector, useDispatch } from 'react-redux';
  import  Icon  from 'react-native-vector-icons/dist/FontAwesome';
  import { Actions } from 'react-native-router-flux';
  import { setLikeWriting, deleteLikeWriting } from '../../services/writings';
  import { map } from 'ramda'

  const Writing = (writing) => {
    console.log(writing);
    const reducers = useSelector(state => state);
    const token = reducers.authReducer.token;
    const userId = reducers.authReducer.user;

    const body = writing.body.replace(/<br>/gi,'\n\n')
    const [like, setLike]= useState(false);


    useEffect(() =>{
      map((l) =>{
        l.id == userId ? setLike(true): setLike(false);
  
      },writing.likes)

    },[]);
    

    const hadleLike = async () => { 
      
     const slike = !like ? await setLikeWriting(
        token, 
        {
          userId,
          writingId: writing.id, 
        }
       ):await deleteLikeWriting(
        token, 
        {
          userId,
          writingId: writing.id, 
        }
       )
      if(slike.ok){
        console.log(slike);
        
        setLike(!like); 
        Alert.alert(
          !like ?'Te gusta!!': 'No te gusta.',
          !like ?'Me gusta que te guste!':'Entiendo.',[{text: 'ok'}])
      }else{
        console.log(slike);
        
        Alert.alert('Error',slike.problem,[{text: 'ok'}])
      }
    }
    
    return(
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>
            {writing.title}
            
          </Text>
          <Text style={styles.body}>
          {body}
          </Text>
          <Text style={styles.firma}>
            De: {writing.mailer}
          </Text>
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={hadleLike}
          style={styles.TouchableOpacityStyle}>
             <Icon 
              name= {!like ?'heart-o':'heart'} 
              size= {24} 
              color={'chocolate'} 
              />

          </TouchableOpacity>

      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    scrollView: {
      paddingTop:45,
      backgroundColor: '#F4DFB8',
      marginHorizontal: 20,
      paddingBottom: 30,
    },
    container:{
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'center',
      backgroundColor: '#F4DFB8',
      alignItems: 'center'
    },
    title:{
      color:'chocolate',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 25,
      },
    body:{
      color:'chocolate',
      fontSize: 20,
      textAlign: 'center',
    },
    firma:{
      padding:20,
      color:'chocolate',
      textAlign:'right',
      fontStyle: 'italic',
    },
    TouchableOpacityStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
    },
    FloatingButtonStyle: {
      resizeMode: 'contain',
      width: 50,
      height: 50,
      //backgroundColor:'black'
    },
  })
  export default Writing;