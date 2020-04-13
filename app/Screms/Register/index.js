import React, {useState} from 'react';
import { View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput,
  Dimensions,
  AsyncStorage,
  Alert} from 'react-native';
import { Actions } from 'react-native-router-flux'
import  validator  from 'validator';
import {useDispatch} from 'react-redux';
import 'react-native-get-random-values';
import  Icon  from 'react-native-vector-icons/dist/FontAwesome';
import {registerUser} from '../../services/auth'
import {authenticateUser} from '../../services/auth'
import { authenticateAction } from '../../redux/actions';

const {width: WIDTH } = Dimensions.get('window');


const Register = () => {
  const [ showPass, setShowPass ] = useState(true);
  const [ passCheck, setPassCheck ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ lastName, setLastName ] = useState('');
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

  const handleRegister = async () => {
    if(!password || !name || !passCheck || !email || !lastName) return;
    if(password == passCheck ){
      if(!validator.isEmail(email)) {
        Alert.alert('Error', 'ingrese una correo valido',[{text:'ok'}])
        return
      }
      const auth = await registerUser(
        Object.assign(
          {},
          {
            name,
            lastname: lastName,
            email,
            password,
            status: 1,
          }
        )
        
      );
      console.log(auth.data);
      if (auth.ok) {
        console.log(auth.data);
        dispatch(authenticateAction(auth.data.token));
        saveItem('token',String(auth.data.token));
        Actions.letters();
      }else {
        console.log(auth);
        Alert.alert('Error',auth.problem,[{text: 'ok'}])
      }
      

    }
    else{
      Alert.alert('Error', 'Las contraseñas no coinciden',[{text:'ok'}])
      return
    }
  }

  
    return(
      <View style= {styles.container}>
          {/* <View style= {styles.logoContainer}>
            <Text style={styles.bigText}>F</Text>
            <Text style= {styles.text}>Registro</Text>
          </View> */}
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
                id = "lastName"
                style= {styles.input}
                placeholder = 'Apellido'
                placeholderTextColor = 'chocolate'
                underlineColorAndroid = 'transparent'
                onChangeText = {(textVale) => setLastName(textVale)}/>
                <Icon 
                  name= {'user'} 
                  size= {28} 
                  color={'chocolate'}
                  style={styles.inputIcon}
                  />
            </View>
            <View style= {styles.inputContainer}>
              <TextInput 
                id = "email"
                style= {styles.input}
                placeholder = 'Correo'
                placeholderTextColor = 'chocolate'
                underlineColorAndroid = 'transparent'
                onChangeText = {(textVale) => setEmail(textVale)}/>
                <Icon 
                  name= {'at'} 
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
            <View style= {styles.inputContainer}>
              <TextInput 
                id = "passCheck"
                style= {styles.input}
                placeholder = 'Contraseña'
                placeholderTextColor = 'chocolate'
                underlineColorAndroid = 'transparent'
                secureTextEntry= {showPass}
                onChangeText = {(textVale) => setPassCheck(textVale)}/>
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
                onPress={handleRegister}>
                <Text style= {styles.text}>Registar</Text>
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
      marginTop: 8,
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
  export default Register;