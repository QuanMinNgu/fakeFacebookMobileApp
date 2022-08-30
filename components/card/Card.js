import { View, Text, StyleSheet, Image, TouchableNativeFeedback } from 'react-native'
import React, { useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function Card({comment,setComment}) {

    const video = React.useRef(null);

    const [like,setLike] = useState(false);

  return (
    <View>
        <View style={styles.cardContainer}>
            <View style={styles.cardHeadContainer}>
                <View style={styles.cardHeadHeader}>
                    <View style={styles.cardHeadHeaderImage}>
                        <Image style={styles.cardHeadHeaderImageDetail} source={{
                            width:40,
                            height:40,
                            uri:'https://cdn.tgdd.vn/hoi-dap/1353781/cach-khac-phuc-man-hinh-may-tinh-bi-nhieu-800x450.jpg'
                        }}/>
                        <View style={styles.cardHeadHeaderInforContainer}>
                            <Text style={styles.cardHeadHeaderInforName}>Troll bóng đá</Text>
                            <Text style={styles.cardHeadHeaderInforTimes}>Gợi ý cho bạn 23 giờ <Ionicons style={styles.earthContainer} name="earth" size={24} color="black" /></Text>
                        </View>
                    </View>
                    <View style={styles.cardHeadHeaderImage}>
                        <Entypo style={styles.cardThreeDots} name="dots-three-horizontal" size={24} color="black" />
                        <FontAwesome style={styles.cardTimes} name="times" size={24} color="black" />
                    </View>
                </View>
                <Text style={styles.cardHeadBody}>Sala có vẻ hơi thọt</Text>
            </View>
            <View style={styles.cardBodyContainer}>
                {/* <Image resizeMode='cover' style={styles.imageContainer} source={{
                    uri:'https://i.pinimg.com/originals/59/c7/a5/59c7a5522ba6d0a37a9b72bb5fbe6c05.jpg'
                }} /> */}
                <Video
                ref={video}
                style={styles.video}
                source={{
                uri: 'https://res.cloudinary.com/sttruyen/video/upload/v1661478760/Sttruyen/videoTestOne_m7xbpd.mp4',
                }}
                useNativeControls
                resizeMode="cover"
                isLooping
                />
            </View>
            <View style={styles.cardFooterContainer}>
                <View style={styles.cardFooterHeader}>
                    <View style={styles.cardFooterHeaderIcons}>
                        <AntDesign style={[styles.facebookIcons,{
                            color:'blue'
                        }]} name="like2" size={24} color="black" />
                        <FontAwesome5 style={styles.facebookIcons} name="surprise" size={24} color="black" />
                        <FontAwesome5 style={styles.facebookIcons} name="smile-beam" size={24} color="black" />
                        <Text>19</Text>
                    </View>
                    <View>
                        <Text>15 bình luận</Text>
                    </View>
                </View>
                <View style={styles.cardFooterButtonContainer}>
                    <TouchableNativeFeedback onPress={() => {
                        setLike(!like);
                    }}>
                        <View style={styles.cardFooterButton}>
                            <Text style={like ? [styles.cardFooterButtonWrap,styles.activeButton] : styles.cardFooterButtonWrap}>
                                <AntDesign style={like ? [styles.facebookButtonIcons,styles.activeButton] : styles.facebookButtonIcons} name="like2" size={24} color="black" /> Thích</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => {
                        setComment(!comment);
                    }}>
                        <View style={styles.cardFooterButton}>
                            <Text style={styles.cardFooterButtonWrap}>
                            <EvilIcons style={styles.facebookButtonIcons} name="comment" size={24} color="black" /> Bình luận</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <View style={styles.cardFooterButton}>
                            <Text style={styles.cardFooterButtonWrap}><FontAwesome style={styles.facebookButtonIcons} name="paper-plane-o" size={24} color="black" /> Chia sẻ</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
        <View style={styles.bottomDistance}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer:{
        width:'100%',
        minHeight:500,
    },
    bottomDistance:{
        width:'100%',
        height:10,
        backgroundColor:'rgba(0,0,0,0.2)'
    },
    cardHeadContainer:{
        minHeight:130,
        padding:10
    },
    cardBodyContainer:{
        width:'100%',
        minHeight:400,
    },
    imageContainer:{
        flex:1,
        width:'100%',
        resizeMode:'cover'
    },
    cardFooterContainer:{
        paddingLeft:10,
        paddingRight:10,
        marginTop:10
    },
    cardHeadHeader:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10
    },
    cardHeadHeaderImage:{
        flexDirection:'row'
    },
    cardHeadHeaderImageDetail:{
        width:45,
        height:45,
        borderRadius:500
    },
    cardHeadHeaderInforContainer:{
        marginLeft:8,
    },
    cardHeadHeaderInforName:{
        fontSize:18,
        fontWeight:'800',
    },
    cardHeadHeaderInforTimes:{
        fontSize:13,
        color:'rgba(0,0,0,0.6)'
    },
    earthContainer:{
        fontSize:13,
        marginLeft:5,
        color:'rgba(0,0,0,0.6)'
    },
    cardThreeDots:{
        marginRight:30,
        color:'rgba(0,0,0,0.6)',
        marginTop:4
    },
    cardTimes:{
        color:'rgba(0,0,0,0.6)',
        fontSize:29,
    },
    cardHeadBody:{
        fontSize:15,
        fontWeight:'450'
    },
    video:{
        flex:1
    },
    cardFooterHeader:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    cardFooterHeaderIcons:{
        flexDirection:'row',
        justifyContent:'center'
    },
    facebookIcons:{
        marginRight:2,
        fontSize:19
    },
    cardFooterButtonContainer:{
        flexDirection:'row',
        marginTop:10,
        borderTopColor:'rgba(0,0,0,0.2)',
        borderTopWidth:1
    },
    cardFooterButton:{
        flex:1,
        height:50,
        justifyContent:'center',
        alignItems:'center',
    },
    facebookButtonIcons:{
        fontSize:24,
        color:'rgba(0,0,0,0.6)'
    },
    cardFooterButtonWrap:{
        fontSize:18,
        color:'rgba(0,0,0,0.6)'
    },
    activeButton:{
        color:'blue',
    }
})