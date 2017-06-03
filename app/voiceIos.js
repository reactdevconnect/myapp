/**
 * Created by Dev on 6/2/17.
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
    NativeAppEventEmitter
} from 'react-native';
import SpeechToText from 'react-native-speech-to-text-ios';

export default class Temp extends Component {

    constructor(props){
        super(props);

        this.subscription = NativeAppEventEmitter.addListener(
            'SpeechToText',
            (result) => {
                if (result.error) {
                    debugger;
                    alert(JSON.stringify(result.error));
                } else {
                    debugger;
                    console.log(result.bestTranscription.formattedString);
                }
            }
        );

        SpeechToText.startRecognition("en-US");
    }

    componentWillUnmount() {
        if (this.subscription != null) {
            this.subscription.remove();
            this.subscription = null;
        }
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