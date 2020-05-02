import React, {useEffect,useState} from 'react';
import {Provider as StoreProvider,useDispatch } from 'react-redux';
import { AppRegistry,AsyncStorage} from 'react-native';
import Routes from './components/Routes.js';
import store from './redux'



const App = () => {



  return (
    <StoreProvider store= {store}>
      
        <Routes   />
      
    </StoreProvider>
  )
  
}
export default App
AppRegistry.registerComponent('app', () => App)
