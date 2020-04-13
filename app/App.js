import React, {Component, useState} from 'react';
import { AppRegistry,AsyncStorage} from 'react-native';
import Routes from './components/Routes.js';
import {Provider as StoreProvider } from 'react-redux';
import store from './redux'


class App extends Component {
  
  render() {
    return (
      <StoreProvider store= {store}>
        
          <Routes   />
        
      </StoreProvider>

     )
  }
}
export default App
AppRegistry.registerComponent('app', () => App)
