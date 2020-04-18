import React, {useEffect, useState} from 'react';
import {AsyncStorage} from 'react-native';
import {useDispatch} from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import {user,authenticateAction} from '../redux/actions'
import Letters from './Letters';
import Login from '../Screms/Login';
import Register from '../Screms/Register';
import ScannerQR from '../Screms/ScannerQR';
import  Writing  from '../Screms/Writing'


const Routes = () => {
   const dispatch = useDispatch();
   const [hasToken, setHasToken ] = useState(false);
   useEffect(() =>{
      async function getToken() {
        await AsyncStorage.getItem('token')
         .then((token) => {
            setHasToken(token !== null? true : false);
            dispatch(authenticateAction(token))
            SplashScreen.hide();        
            console.log(token); 
         } )
         .catch((error) => {console.log(error.message)})
         const id = await AsyncStorage.getItem('id_user');
         dispatch(user(id));
      }
    getToken()
      
   },[]);
   
    return(
      <Router>
         <Scene key = "root">
            <Scene key = "letters" 
               component = {Letters} 
               title = "Letters" 
               // initial = {hasToken}  
               hideNavBar={true}
               />
            <Scene key = "scannerQr" 
               component = {ScannerQR} 
               title = "Scanner QR" 
               initial = {hasToken}  
               hideNavBar={true}
               />
            <Scene key = "writing" 
               component = {Writing} 
               title = "Escritos"  
               hideNavBar={true}
               />
            <Scene key = "login" component = {Login} title = "Login" initial = {!hasToken}/>
            <Scene key = "register" component = {Register} title = "Register"/>
         </Scene>
      </Router>
    );
   
}
export default Routes