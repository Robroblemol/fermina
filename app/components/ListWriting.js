import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity
} from 'react-native';
import  Icon  from 'react-native-vector-icons/dist/FontAwesome';

const ListWriting = ({id,title, open, like, setLike}) =>{
   return(
    <TouchableOpacity
        onPress = {() => open(id)}
        style = {styles.listWriting}
    >
        <View style = {styles.listWritingView}>
            <Text style = {styles.listWritingText}>{title}</Text>
            <Icon
                name= {!like ?'heart-o':'heart'} 
                size= {24} 
                color={'chocolate'}
                onPress={()=>setLike(id)}  
            />
        </View>

    </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
    listWriting: {
        padding: 15,
        backgroundColor: '#F4DFB8',
        borderBottomWidth: 1,
        borderColor: 'chocolate',
    },
    listWritingView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    listWritingText: {
        fontSize:18,
        color: 'chocolate',
        fontWeight: 'bold',
    }
   })

export default ListWriting;