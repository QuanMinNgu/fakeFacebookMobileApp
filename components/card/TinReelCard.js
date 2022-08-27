import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { useRef } from 'react'
import { Video } from 'expo-av';

export default function TinReelCard() {

    const video = useRef(null);
    const [status, setStatus] = React.useState({});

    const url = useRef('https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4');

  return (
        <TouchableWithoutFeedback onPress={() => {
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
        }}>
            <View style={styles.TinReelCardWrap}>
                <Video 
                    ref={video}
                    source={{
                        uri:url.current  
                    }}
                    resizeMode='cover'
                    style={styles.video}
                    isLooping={true}
                    shouldPlay={false}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    TinReelCardWrap:{
        width:112,
        height:'100%',
        marginLeft:8,
        borderRadius:10,
        overflow:'hidden',
        zIndex:1
    },
    video:{
        width:'100%',
        height:'100%',
        zIndex: 10
    }
});