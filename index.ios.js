/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './app/routes'
console.disableYellowBox = true;

AppRegistry.registerComponent('learnApp', () => App);
