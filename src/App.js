import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {

  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyB53Io8P2oqGhC0vO86uoA3pn9ZaUqRr8E',
      authDomain: 'authentication-16aef.firebaseapp.com',
      databaseURL: 'https://authentication-16aef.firebaseio.com',
      projectId: 'authentication-16aef',
      storageBucket: 'authentication-16aef.appspot.com',
      messagingSenderId: '553647110242'
    })
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <Text>HI</Text>
      </View>
    );
  }
}

export default App;

