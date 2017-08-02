import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: '',
      authDomain: 'auth-dbf1b.firebaseapp.com',
      databaseURL: 'https://auth-dbf1b.firebaseio.com',
      projectId: 'auth-dbf1b',
      storageBucket: 'auth-dbf1b.appspot.com',
      messagingSenderId: ''
    });
  }

  render() {
    return (
      <View>
        <Header headerText='authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
