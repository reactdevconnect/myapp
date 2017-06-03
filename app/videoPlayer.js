/**
 * Created by Dev on 5/31/17.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import VideoPlayer from 'react-native-video-controls';

export default class Home extends Component {
    render() {
        return (
            <VideoPlayer
                source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
                navigator={ this.props.navigator }
                repeat={ true }
            />
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