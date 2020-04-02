import React, {Component} from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from './components/Routes.js'


class App extends Component {
  render() {
    
    return (
        <Routes />
     )
  }
}
export default App
AppRegistry.registerComponent('app', () => App)
