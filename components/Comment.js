import { View, Text, StyleSheet, ScrollView, SafeAreaView, NativeModules, Animated, Dimensions, Easing } from 'react-native'
import React, { useEffect, useRef } from 'react';


export default function Comment({setComment}) {


    const heightScreen = Dimensions.get('window').height;
    const animation = useRef(new Animated.Value(0)).current;
    const numRef = useRef(false);
    const checkBottomRef = useRef(false);

    const trans = ({num}) => {
        Animated.timing(animation,{
            toValue:num*heightScreen,
            duration:1000,
            useNativeDriver:false
        }).start();
    }

    const transform = [
        {
            translateY:animation
        }
    ]

    const SPosition = useRef(0);
    const startPosition = useRef(0);
    const handleTouchStart = (e) => {
        startPosition.current = e.nativeEvent.pageY;
    }

    const handleTouchEnd = (e) => {
        if(checkBottomRef.current){
            if(startPosition.current > e.nativeEvent.pageY){
                trans({num:-1});
                setTimeout(() => {
                    setComment(false);
                },1000);
                return;
            }
        }
    }

    const handleMove = (e) => {
        if(SPosition.current === 0 &&startPosition.current < e.nativeEvent.pageY){
            trans({num:1});
            setTimeout(() => {
                setComment(false);
            },1000);
            return;
        }
    }

    const handleScroll = (e) => {
        SPosition.current = e.nativeEvent.contentOffset.y;
        if(isCloseToBottom({...e.nativeEvent})){
            checkBottomRef.current = true;
        }
        else{
            checkBottomRef.current = false;
        }
        if(e.nativeEvent.contentOffset.y === 0){
            numRef.current = true;
        }
    }
    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        return layoutMeasurement.height + contentOffset.y >=
          contentSize.height;
    };

  return (
    <View  style={[styles.commentContainer]}>
        <Animated.View style={[styles.commentWrap,transform]}>
            <ScrollView 
            onTouchMove={(e) => {
                handleMove(e)
            }}
            onTouchStart={(e) => handleTouchStart(e)} onTouchCancel={(e) => handleTouchEnd(e)}
            onScroll={(e) => handleScroll(e)}>
                <Text style={{marginBottom:800}}>Comment</Text>
                <Text style={{marginBottom:1000}}>Comment</Text>
                <Text>Comment</Text>
            </ScrollView>
        </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
    commentContainer:{
        position:'absolute',
        top:0,
        right:0,
        left:0,
        bottom:0,
        backgroundColor:'rgba(0,0,0,0.35)',
    },
    commentWrap:{
        width:'100%',
        backgroundColor:'white',
        marginTop:NativeModules.StatusBarManager.HEIGHT,
        borderRadius:8
    }
});

