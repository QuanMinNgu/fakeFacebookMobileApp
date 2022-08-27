import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native'
import React from 'react'

export default function Auth({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor:"white",width:"100%",height:"100%"}}>
        <View style={styles.authBrandContainer}>
            <Image source={{
                width:'100%',
                height:'100%',
                uri:'https://static.kinhtedothi.vn/images/upload/2022/05/25/f1.jpg'
            }}/>
        </View>
        <View style={styles.authContainer}>
            <TextInput style={styles.authInput} placeholder='Số điện thoại hoặc email' />
            <TextInput style={styles.authInput} secureTextEntry={true} placeholder='Mật khẩu'/>
            <TouchableNativeFeedback onPress={() => {
                navigation.navigate('Home');
            }}>
                <View style={styles.authButton}>
                    <Text style={{color:'white',fontWeight:'700',fontSize:20}}>Đăng Nhập</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={styles.forgotPasswordContainer}>
                    <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
        <View style={styles.orContainer}>
            <View style={styles.orDetail}>
                <View style={styles.orText}>
                    <Text style={styles.orTextDetail}>Hoặc</Text>
                </View>
            </View>
        </View>
        <View style={styles.createNewAccountContainer}>
            <TouchableNativeFeedback>
                <View style={styles.createNewAccountButton}>
                    <Text style={styles.createNewAccountText}>Tạo tài khoản Facebook mới</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    authBrandContainer:{
        width:'100%',
        height:200,
    },
    authContainer:{
        width:'100%',
        height:320,
        alignItems:'center',
        justifyContent:'center'
    },
    authInput:{
        width:'80%',
        height:50,
        marginBottom:10,
        borderBottomColor:'rgba(0,0,0,0.3)',
        borderBottomWidth:1,
        fontSize:18
    },
    authButton:{
        width:'80%',
        height:40,
        backgroundColor:"#038AFF",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:3,
        marginTop:5
    },
    forgotPasswordContainer:{
        marginTop:25
    },
    forgotPassword:{
        color:'#038AFF',
        fontSize:18,
        fontWeight:'500'
    },
    orContainer:{
        flexDirection:"row",
        justifyContent:'center'
    },
    orDetail:{
        position:'relative',
        borderBottomColor:'rgba(0,0,0,0.2)',
        borderBottomWidth:1,
        width:'90%'
    },
    orText:{
        position:'absolute',
        top:-10,
        left:'42%',
        width:'auto',
        height:'auto',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:5,
        paddingRight:5
    },
    orTextDetail:{
        fontSize:17,
        fontWeight:'400',
        textTransform:'uppercase',
        color:'rgba(0,0,0,0.4)'
    },
    createNewAccountContainer:{
        width:'100%',
        marginTop:50,
        justifyContent:'center',
        alignItems:'center'
    },
    createNewAccountButton:{
        width:"auto",
        height:40,
        backgroundColor:'#26A65B',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        paddingLeft:10,
        paddingRight:10
    },
    createNewAccountText:{
        color:'white',
        fontSize:18,
        fontWeight:'600'
    }
})