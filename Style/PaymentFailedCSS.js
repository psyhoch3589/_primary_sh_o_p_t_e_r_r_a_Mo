import * as React from 'react';
import { StyleSheet } from 'react-native';


export const styles=StyleSheet.create({
    navigator: {
        flexDirection:'row',
        justifyContent:'space-around',
        height:'12%',
        marginBottom:10,
        alignItems:'center'
    },
    page_title: {
        fontWeight:'bold',
        fontSize:20
    },
    Body: {
        height:'80%',
        // backgroundColor:'red'
    },
    Failed_icon: {
        alignItems:'center',
        // width:'90%',
        height:'70%',
        borderBottomWidth:1,
        borderColor:'#cecece'
    },
    icon: {
        alignItems:'center',
        width:'60%',
        height:'55%',
    },
    Detail: {
        marginTop:30,
        paddingLeft:20,
        paddingBottom:20,
        alignItems:'center'
    },
    ListOfProducts_Title: {
        fontWeight:'bold',
        fontSize:18,
        marginBottom:12
    },
    important_icon: {
        height:30,
        width:30
    }
})