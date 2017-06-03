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
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import VideoPlayer from 'react-native-video-controls';


import MediaMeta from 'react-native-media-meta'


// const savePath = fs.DocumentDirectoryPath + '/example.mp4';
const videoURL = 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4';


const path = '<your file path here>';

export default class Home extends Component {

    constructor(props){
        super(props);
        MediaMeta.get(videoURL)
            .then(metadata => {
                debugger;
                console.log(metadata);
            })
            .catch(err => {
                debugger;
                console.log(err);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>sdvxfdg</Text>
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