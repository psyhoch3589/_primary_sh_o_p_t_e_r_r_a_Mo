import * as React from 'react';
import { View , Text , StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';


export default App=(props)=>{
    return(
        <TouchableOpacity style={styles.Btn} onPress={props.onPress}>
            <Text style={styles.Btn_Title}>{props.title}</Text>
        </TouchableOpacity>
    );
}
const styles=StyleSheet.create({
    Btn: {
        height:44,
        width:'90%',
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