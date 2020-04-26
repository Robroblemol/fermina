import React, {useEffect, useState} from 'react';
import {AsyncStorage,StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import {user,authenticateAction} from '../redux/actions'
import HomeTab from './HomeTab';
import ScannerTab from './ScannerTab';
import CreateTab from './CreateTab';
import Letters from './Letters';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ScannerQR from '../screens/ScannerQR';
import  Writing  from '../screens/Writing'
import Letter from '../screens/Letter';
import Home from '../screens/Home'
import Header from './Header';


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
         <Scene 
            key = "root" 
            hideNavBar={true}
            tabBarStyle={styles.tabBar}
            >
            
            <Scene tabs={true}>
               <Scene key = "home" 
                  component = {Home} 
                  initial = {hasToken}  
                  navBar ={Header}
                  icon ={HomeTab}
                  title = "Inicio" 
                  />
               <Scene key = "scannerQr" 
                  component = {ScannerQR} 
                  title = "Scanner QR"   
                  hideNavBar={true}
                  icon = {ScannerTab}
                  />
               <Scene key = "letters" 
                  component = {Letters} 
                  title = "Letters"  
                  hideNavBar={true}
                  icon = {CreateTab}
                  />

         </Scene>

            
            <Scene key = "writing" 
               component = {Writing} 
               title = "Escritos"  
               hideNavBar={true}
               />
             <Scene key = "letter" 
               component = {Letter} 
               title = "Cartas"  
               hideNavBar={true}
               />
            <Scene key = "login" component = {Login} title = "Login" initial = {!hasToken}/>
            <Scene key = "register" component = {Register} title = "Register"/>
         </Scene>
      </Router>
    );
   
}
const styles = StyleSheet.create({
   tabBar: {
      height: 70,
      borderTopColor: '#FCAC17',
      borderTopWidth: 2,
      backgroundColor: '#F4DFB8',
      opacity: 0.98,
      justifyContent:'space-between'
      }
   });

export default Routes