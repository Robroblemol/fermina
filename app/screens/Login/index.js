import React, {useState} from 'react';
import { View, 
        Text, 
        StyleSheet, 
        TouchableOpacity, 
        TextInput,
        Alert,
        Dimensions,
        AsyncStorage
      } from 'react-native';
import  Icon  from 'react-native-vector-icons/dist/FontAwesome';
import { Actions } from 'react-native-router-flux'
import {useDispatch} from 'react-redux';
import {authenticateUser} from '../../services/auth'
import {user, authenticateAction} from '../../redux/actions';


const {width: WIDTH } = Dimensions.get('window');
const Login = () => {
  
  

  const [ showPass, setShowPass ] = useState(true);
  const [ password, setPass ] = useState('');
  const [ name, setUser ] = useState('');
  const dispatch = useDispatch();

  const saveItem = async(item, selectedValue) =>{
    try {
       await AsyncStorage.setItem(item,selectedValue);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }
  const hadleLogin = async () => {
   if(!password || !name) return;
    const auth = await authenticateUser(
      Object.assign(
        {},
        {name,password} 
      )
    );
    if(auth.ok){
      console.log(auth.data);
      dispatch(user(auth.data.id_user));
      dispatch(authenticateAction(auth.data.token));
      saveItem('id_user',String(auth.data.id_user));
      saveItem('token',auth.data.token);
      Actions.home();
    } else {
      console.log(auth);
      Alert.alert('Error',auth.problem,[{text: 'ok'}])
    }
  }


  
    return( 
      <View style= {styles.container}>
        <View style= {styles.logoContainer}>
          <Text style={styles.bigText}>F</Text>
          <Text style= {styles.text}>Bienvenido</Text>

        </View>
        <View style= {styles.inputContainer}>
          <TextInput 
            id = "userName"
            style= {styles.input}
            placeholder = 'Usuario'
            placeholderTextColor = 'chocolate'
            underlineColorAndroid = 'transparent'
            onChangeText = {(textVale) => setUser(textVale)}/>
          <Icon 
            name= {'user'} 
            size= {28} 
            color={'chocolate'}
            style={styles.inputIcon}
            />
        </View>
        <View style= {styles.inputContainer}>
          <TextInput 
            id = "pass"
            style= {styles.input}
            placeholder = 'Contraseña'
            placeholderTextColor = 'chocolate'
            underlineColorAndroid = 'transparent'
            secureTextEntry= {showPass}
            onChangeText = {(textVale) => setPass(textVale)}/>
          <Icon 
            name= {'lock'} 
            size= {28} 
            color={'chocolate'}
            style={styles.inputIcon}
            />
          <TouchableOpacity 
            style={styles.btnEye}
            onPress = {()=>setShowPass(!showPass)}>
            <Icon 
              name= {!showPass ? 'eye-slash':'eye'} 
              size= {24} 
              color={'chocolate'} 
              />
          </TouchableOpacity>

        </View>
        <TouchableOpacity 
          style={styles.btnLogin}
          onPress={hadleLogin}>
           <Text style= {styles.text}>Ingresar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btnRegister}
          onPress={() => Actions.register()}>
           <Text style= {styles.text}>Registrate</Text>
        </TouchableOpacity>
       
      </View>
    );
  } 
  const styles = StyleSheet.create({
    input: {
      width: WIDTH-55,
      height: 45,
      borderRadius: 45,
      fontSize: 16,
      paddingLeft: 45,
      backgroundColor: '#F4DFB8',
      color: 'chocolate',
      marginHorizontal: 25
    },
    bigText:{
      color:'chocolate',
      fontSize: 80,
      textAlign: 'center',
      },
    text:{
      color:'chocolate',
      fontSize: 20,
      textAlign: 'center',
    },
    logoContainer:{
      alignItems:'center',
      marginBottom: 50,
    },
    container:{
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputIcon:{
      position: 'absolute',
      top: 10,
      left: 37,

    },
    inputContainer:{
      marginTop: 10,
    },
    btnEye:{
      position: 'absolute',
      top: 10,
      right: 37,
    },
    btnLogin:{
      width: WIDTH - 55,
      height: 45,
      borderRadius: 45,
      backgroundColor:'#FCAC17',
      justifyContent: 'center',
      marginTop: 20,
    },
    btnRegister:{
      width: WIDTH - 55,
      height: 45,
      borderRadius: 45,
      borderColor: '#FCAC17',
      borderWidth: 1,
      backgroundColor:'rgba(0,0,0,0)',
      justifyContent: 'center',
      marginTop: 20,
    }

}) ; 
  export default Login;