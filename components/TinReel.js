import { View, Text, StyleSheet, TouchableWithoutFeedback ,Animated,Dimensions} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import TinReelCard from './card/TinReelCard';
export default function TinReel() {

    const [tinReel,setTinReel] = useState(false);
    const touchStartRef = useRef(0);
    const getWidthRef = useRef(0);

    const getRef = useRef(null);
    const windowWidth = Dimensions.get('window').width;

    const [location,setLocation] = useState(0);

    const transX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(transX,{
            toValue:location,
            duration:400,
            useNativeDriver:true
        }).start();
    },[location]);

    const handleTouchStart = (e) => {
        touchStartRef.current = e.nativeEvent.pageX;
    }  
    const transform = [
        {
            translateX:transX
        }
    ]
    const handleTouchEnd = (e) => {
        getWidthRef.current = getRef.current._children?.length * 120;
        if(touchStartRef.current < e.nativeEvent.pageX){
            if(location < 0){
                if(e.nativeEvent.pageX - touchStartRef.current + location > 0){
                    setLocation(0);
                }
                else{
                    setLocation(e.nativeEvent.pageX - touchStartRef.current + location);
                }
            }
            else{
                setLocation(0);
            }
        }
        else{
            if( -1 * (e.nativeEvent.pageX - touchStartRef.current + location) < getWidthRef.current - windowWidth + 10){
                setLocation(e.nativeEvent.pageX - touchStartRef.current + location);
            }
            else{
                setLocation(-1 * (getWidthRef.current - windowWidth + 10));
            }
        }
    }

     
  return (
    <View>
        <View style={styles.tinReelsContainer}>
            <TouchableWithoutFeedback 
            onPress={() => {
                setTinReel(false);
            }}
            >
                <View style={tinReel === false ? [styles.tinReelsWrap,styles.tinReelWrapActive] :
                styles.tinReelsWrap}>
                    <Text style={tinReel === false ? [styles.tinReelText,styles.tinReelsActive] :
                    styles.tinReelText}>Tin</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback 
            onPress={() => {
                setTinReel(true);
            }}
            >
                <View style={tinReel === true ? [styles.tinReelsWrap,styles.tinReelWrapActive] :
                styles.tinReelsWrap}>
                    <Text style={tinReel === true ? [styles.tinReelText,styles.tinReelsActive] :
                    styles.tinReelText}>Reels</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
        <Animated.View ref={getRef} onTouchStart={(e) => handleTouchStart(e)} onTouchEnd={(e) => {handleTouchEnd(e)}} style={[styles.tinReelsCardContainer,{
            transform
        }]}>
            <TinReelCard />
            <TinReelCard />
            <TinReelCard />
            <TinReelCard />
            <TinReelCard />
            <TinReelCard />
        </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
    tinReelsContainer:{
        flexDirection:'row',
        width:'100%',
        height:50,
        paddingLeft:10,
        paddingRight:10,
        borderBottomColor:'rgba(0,0,0,0.2)',
        borderBottomWidth:1.2,
    },
    tinReelsWrap:{
        flex:1,
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    tinReelWrapActive:{
        borderBottomColor:'#2D55FF',
        borderBottomWidth:2
    },
    tinReelText:{
        fontSize:16,
        fontWeight:'600'
    },
    tinReelsActive:{
        color:'#2D55FF'
    },
    tinReelsCardContainer:{
        minWidth:'100%',
        height:200,
        paddingTop:10,
        paddingBottom:10,
        flexDirection:'row',
    }
})