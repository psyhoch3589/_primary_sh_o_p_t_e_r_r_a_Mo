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
    Sucess_Icon: {
        alignItems:'center',
        width:'100%',
        borderBottomWidth:1,
        borderColor:'#cecece'
    },
    ListOfProducts: {
        marginTop:30,
        paddingLeft:20,
        paddingBottom:20,
    },
    ListOfProducts_Title: {
        fontWeight:'bold',
        fontSize:18,
        marginBottom:12
    }
})