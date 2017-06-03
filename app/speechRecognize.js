/**
 * Created by Dev on 6/1/17.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    ToastAndroid
} from 'react-native';
import SpeechAndroid from 'react-native-android-voice';


export default class Temp extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={ this._buttonClick }>
                    <Text>sdvxfdg</Text>
                </TouchableHighlight>
            </View>
        );
    }

    async _buttonClick(){
        try{
            //More Locales will be available upon release.
            var spokenText = await SpeechAndroid.startSpeech("Speak yo", SpeechAndroid.ENGLISH);
            ToastAndroid.show(spokenText , ToastAndroid.LONG);
        }catch(error){
            switch(error){
                case SpeechAndroid.E_VOICE_CANCELLED:
                    ToastAndroid.show("Voice Recognizer cancelled" , ToastAndroid.LONG);
                    break;
                case SpeechAndroid.E_NO_MATCH:
                    ToastAndroid.show("No match for what you said" , ToastAndroid.LONG);
                    break;
                case SpeechAndroid.E_SERVER_ERROR:
                    ToastAndroid.show("Google Server Error" , ToastAndroid.LONG);
                    break;
                /*And more errors that will be documented on Docs upon release*/
            }
        }
    }
}

const styles = StyleSheet.create({
    container: {
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
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});