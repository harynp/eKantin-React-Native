/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';

import Home from './screens/Home'
import About from './screens/About'

var MainScreenNavigator = TabNavigator({
  Home: {screen: Home},
  About: {screen: About}
},{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: 'darkblue',
    inactiveTintColor: 'black',
    inactiveBackgroundColor: 'blue',
    showIcon: true,
    labelStyle: {
      fontSize: 10
    }
  }
})

MainScreenNavigator.navigationOptions = {
  title: "Tab Example"
}

export default MainScreenNavigator
