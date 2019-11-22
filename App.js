/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Platform, StyleSheet, Text, View} from 'react-native';

import parser from "fast-xml-parser";
import bruhMoment from "./gb.js";

import HomeScreen from "./pages/home.js"
import ClassPage from "./pages/classPage.js"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu b@utton for dev menu -> dfdfsef',
});

type Props = {};

const MainNavigator = createStackNavigator({
  Home: {screen: ClassPage}
})

const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    fontFamily: "monospace",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontFamily: "Inter.var",
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
