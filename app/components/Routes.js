import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import Letters from './Letters';
import Login from './Login';
import Register from './Register';


const Routes = () => {
   SplashScreen.hide();
    return(
      <Router>
         <Scene key = "root">
            <Scene key = "letters" component = {Letters} title = "Letters" />
            <Scene key = "login" component = {Login} title = "Login" initial = {true}/>
            <Scene key = "register" component = {Register} title = "Register"/>
         </Scene>
      </Router>
    );
   
}
export default Routes