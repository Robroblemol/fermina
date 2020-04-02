import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Letters from './Letters.js'
// import About from './About.js'

const Routes = () => {
    return(
      <Router>
      <Scene key = "root">
         <Scene key = "letters" component = {Letters} title = "Letters" initial = {true} />
         {/* <Scene key = "about" component = {About} title = "About" /> */}
      </Scene>
      </Router>
    );
   
}
export default Routes