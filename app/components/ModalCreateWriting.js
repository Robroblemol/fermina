import React,{useState} from 'react';
import  Icon  from 'react-native-vector-icons/dist/FontAwesome';
import { Modal, 
        View, 
        Text, 
        StyleSheet, 
        TouchableOpacity,
        Dimensions,
        TextInput,
        SafeAreaView,
        ScrollView,
    } from 'react-native';


const {width: WIDTH } = Dimensions.get('window');
const ModalCreateWriting = ({isVisible, setIsVisible, setNewWriting}) => {
    const [textBody, setTextBody] = useState('');
    const [textMailer,setTextMailer]=useState('');
    const [textTitle, setTextTitle]= useState('');

    const addWriting = () =>{
        setNewWriting({
            title:textTitle,
            mailer:textMailer,
            body:textBody,
        })
    }
   return(
    <View>
                
        <Modal  
        animationType = {"slide"} transparent = {false}
        visible = {isVisible}
        onRequestClose = {() => { console.log("Modal has been closed.") } }>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                <View>
                    <TextInput 
                        id = "titulo"
                        style= {styles.title}
                        placeholder = 'Titulo'
                        placeholderTextColor = 'chocolate'
                        autoFocus ={ true }
                        underlineColorAndroid = 'transparent'
                        onChangeText = {(textVale) => setTextTitle(textVale)}
                    />  
                </View>
                <View style = {styles.textInputBody}>
                    <TextInput 
                        id = "body"
                        style= {styles.body}
                        placeholder = 'Escribe aqui...'
                        placeholderTextColor = 'chocolate'
                        underlineColorAndroid = 'transparent'
                        multiline = {true}
                        // numberOfLines={100}

                        editable
                        onChangeText = {(textVale) => setTextBody(textVale)}
                    />  
                </View>
                <View>
                    <TextInput 
                        id = "firma"
                        style= {styles.firma}
                        placeholder = 'Firma'
                        placeholderTextColor = 'chocolate'
                        autoFocus ={ true }
                        underlineColorAndroid = 'transparent'
                        onChangeText = {(textVale) => setTextMailer(textVale)}
                    />  
                </View>

                <TouchableOpacity 
                    style={styles.btnAdd}
                    onPress = {() => addWriting()}
                    >
                        <Text style={styles.btnText}>
                            Agregar
                        </Text>
                    </TouchableOpacity>  
                    <TouchableOpacity 
                    style={styles.btnCancel}
                    onPress = {() => setIsVisible(false)}>
                        <Text style={styles.btnText}>
                            Cancelar
                        </Text>
                </TouchableOpacity>    
                
                </ScrollView>
            </SafeAreaView>    
        </Modal>
    </View>
);
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: null,
      backgroundColor: '#F4DFB8',
    },
    btnCancel: {
        width: WIDTH - 40,
        height: 45,
        alignItems: 'center',
        borderRadius: 45,
        backgroundColor:'#F4DFB8',
        borderColor:'chocolate',
        borderWidth: 2,
        justifyContent: 'center',
        left: 15,
        top: 2,
        marginTop: 10,
        marginBottom:10,
      },
    textInputBody:{
        // flex: 1,
        // alignItems:'flex-start'
    },
    btnAdd: {
        width: WIDTH - 40,
        height: 45,
        alignItems: 'center',
        borderRadius: 45,
        backgroundColor:'#FCAC17',
        borderColor:'chocolate',
        borderWidth: 2,
        justifyContent: 'center',
        left: 15,
        top: 2,
      },
      btnText:{
        color:'chocolate',
        fontSize: 20,
        textAlign: 'center',
      },
      title:{
        color:'chocolate',
        fontSize: 20,
        fontWeight: 'bold',
        // fontStyle: 'italic',
        textAlign: 'left', 
        paddingLeft: 10,
      },
      firma:{
        color:'chocolate',
        fontSize: 20,
        fontStyle: 'italic',
        // fontWeight: 'bold',
        textAlign: 'left', 
        paddingLeft: 10,
      },
      body:{
        height: WIDTH,
        margin:5,
        paddingLeft: 10,
        color: 'chocolate',
        borderColor: 'chocolate',
        borderWidth: 1,
        borderRadius: 15,
      }
  })

export default ModalCreateWriting;