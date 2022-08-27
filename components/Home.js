import { View, Text, Button, SafeAreaView, StyleSheet, NativeModules, TouchableWithoutFeedback, TextInput, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import TinReel from './TinReel';

export default function Home({navigation}) {

    // useEffect(() => {
    //     navigation.navigate('Auth');
    // },[]);

    const [navbar,setNavbar] = useState('home');

  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <View style={styles.headerBrandContainer}>
                <Text style={styles.headerBrand}>facebook</Text>
            </View>
            <View style={styles.headerIconContainer}>
                <View style={styles.headerIconWrap}>
                    <AntDesign style={{fontSize:19}} name="plus" size={24} color="black" />
                </View>
                <View style={styles.headerIconWrap}>
                    <FontAwesome style={{fontSize:19}} name="search" size={24} color="black" />
                </View>
                <View style={styles.headerIconWrap}>
                    <AntDesign style={{fontSize:19}} name="message1" size={24} color="black" />
                </View>
            </View>
        </View>
        <View style={styles.navbarContainer}>
            <TouchableWithoutFeedback
            onPress={() => {
                setNavbar('home');
            }}
            >
                <View style={navbar === 'home' ? [styles.navbarItemContainer,styles.navbarItemActiveContainer] : styles.navbarItemContainer}>
                    <Entypo style={navbar === 'home' && styles.activeNavbarItems} name="home" size={24} color="black" />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
            onPress={() => {
                setNavbar('user');
            }}
            >
                <View style={navbar === 'user' ? [styles.navbarItemContainer,styles.navbarItemActiveContainer] : styles.navbarItemContainer}>
                    <Feather style={navbar === 'user' && styles.activeNavbarItems} name="users" size={24} color="black" />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
            onPress={() => {
                setNavbar('tv');
            }}
            >
                <View style={navbar === 'tv' ? [styles.navbarItemContainer,styles.navbarItemActiveContainer] : styles.navbarItemContainer}>
                    <MaterialIcons style={navbar === 'tv' && styles.activeNavbarItems} name="live-tv" size={24} color="black" />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
            onPress={() => {
                setNavbar('clock');
            }}
            >
                <View style={navbar === 'clock' ? [styles.navbarItemContainer,styles.navbarItemActiveContainer] : styles.navbarItemContainer}>
                    <MaterialCommunityIcons style={navbar === 'clock' && styles.activeNavbarItems} name="credit-card-clock-outline" size={24} color="black" />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
            onPress={() => {
                setNavbar('bell');
            }}
            >
                <View style={navbar === 'bell' ? [styles.navbarItemContainer,styles.navbarItemActiveContainer] : styles.navbarItemContainer}>
                    <Fontisto style={navbar === 'bell' && styles.activeNavbarItems} name="bell" size={24} color="black" />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
            onPress={() => {
                setNavbar('bar');
            }}
            >
                <View style={navbar === 'bar' ? [styles.navbarItemContainer,styles.navbarItemActiveContainer] : styles.navbarItemContainer}>
                    <FontAwesome style={navbar === 'bar' && styles.activeNavbarItems} name="bars" size={24} color="black" />
                </View>
            </TouchableWithoutFeedback>
        </View>
        <View style={styles.userNavbarDetailContainer}>
            <View style={styles.userNavbarDetailImageContainer}>
                <Image style={{borderRadius:50}} source={{
                    width:40,
                    height:40,
                    uri:'http://i1.taimienphi.vn/tmp/cf/aut/anh-man-hinh-khoa-may-tinh-dien-thoai-sieu-dep-1.jpg'
                }}/>
            </View>
            <TextInput placeholderTextColor={'rgba(0,0,0,0.7)'} style={styles.userNavbarInput} placeholder='Bạn đang nghĩ gì?'/>
            <View style={styles.userNavbarAddPictureContainer}>
                <AntDesign style={{color:'green'}} name="picture" size={24} color="black" />
            </View>
        </View>
        <View style={styles.distance}></View>
        <TinReel />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        minHeight:'100%',
        backgroundColor:'white',
        paddingTop:NativeModules.StatusBarManager.HEIGHT
    },
    headerContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingLeft:10,
        paddingRight:10,
    },
    headerBrand:{
        color:'#2D55FF',
        fontSize:27,
        fontWeight:'700'
    },
    headerIconContainer:{
        flexDirection:'row'
    },
    headerIconWrap:{
        width:35,
        height:35,
        backgroundColor:'rgba(0,0,0,0.12)',
        marginLeft:12,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50
    },
    navbarContainer:{
        flexDirection:'row',
        marginTop:10,
        paddingLeft:5,
        paddingRight:5,
        borderBottomColor:'rgba(0,0,0,0.2)',
        borderBottomWidth:1
    },
    navbarItemContainer:{
        flex:1,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    activeNavbarItems:{
        color:'#2D55FF'
    },
    navbarItemActiveContainer:{
        borderBottomColor:'#2D55FF',
        borderBottomWidth:2
    },
    userNavbarDetailContainer:{
        flexDirection:'row',
        width:'100%',
        height:70,
        paddingLeft:10,
        paddingRight:10,
        alignItems:'center'
    },
    userNavbarDetailImageContainer:{
        flex:1.2,
        alignItems:'center',
    },
    userNavbarInput:{
        flex:5,
        borderColor:"rgba(0,0,0,0.4)",
        borderWidth:1,
        height:40,
        borderRadius:30,
        paddingLeft:15,
        color:'black',
        fontSize:16
    },
    userNavbarAddPictureContainer:{
        flex:1,
        alignItems:'center'
    },
    distance:{
        width:'100%',
        height:10,
        backgroundColor:'#DADFE1'
    }
})