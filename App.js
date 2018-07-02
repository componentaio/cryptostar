import React, { Component } from 'react';
import {
  View,
  Alert
} from 'react-native';

import Swiper from './swiper.js';

import GetStarted from './screens/GetStarted.js'
import Signup from './screens/Signup.js'
import Signin from './screens/Signin.js'
import SetPin from './screens/SetPin.js'
import Home from './screens/Home.js'
import Charts from './screens/Charts.js'
import Trades from './screens/Trades.js'

export default class App extends Component {
  componentDidMount() {
    Alert.alert('Swipe to navigate between screens')
  }

  render(){
    return (
      <Swiper showsButtons={false}>
        <GetStarted />
        <Signup />
        <Signin />
        <SetPin />
        <Home />
        <Charts />
        <Trades />
      </Swiper>
    );
  }
}
