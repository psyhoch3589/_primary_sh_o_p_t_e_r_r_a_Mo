import * as React from 'react';
import { View , Text , StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

let width=0;
export default App=(props)=>{
    const styles=StyleSheet.create({
        Btn: {
            height:44,
            width:props.width,
            marginLeft:'5%',
            backgroundColor:'#C6AB59',
            borderRadius:6,
            justifyContent:'center',
            alignItems:'center'
        },
        Btn_Title: {
            color:'#fff'
        }
    });
    return(
        <TouchableOpacity style={styles.Btn} onPress={props.onPress}>
            <Text style={styles.Btn_Title}>{props.title}</Text>
        </TouchableOpacity>
    );
}
