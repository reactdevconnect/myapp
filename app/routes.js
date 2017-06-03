/**
 * Created by Dev on 5/7/17.
 */
import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import Home from './home';
import Tmp from './speechRecognize';
// import Tmp from './voiceIos';
const SHVLApp = StackNavigator({
    HomePage: { screen: Tmp},

}, {mode: 'modal',headerMode: 'none' });

module.exports = SHVLApp;