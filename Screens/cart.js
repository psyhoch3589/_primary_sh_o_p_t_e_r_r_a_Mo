import * as React from 'react';
import { View , Text , StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import ItemOnCart from '../Components/ItemOnCart';

export default App=()=>{
    // photos for test
    const Images={
        "img1":"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "img2":"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    }
    return(
        <>
            <SafeAreaView style={styles.navigator}>
                <Text style={styles.page_title}>My cart</Text>
            </SafeAreaView>
            <ScrollView>
                <View style={styles.Items}>
                        <ItemOnCart Image={Images.img1} />
                        <ItemOnCart Image={Images.img2}/>
                        {/* <ItemOnCart Image={Images.img1}/>
                        <ItemOnCart Image={Images.img2}/>
                        <ItemOnCart Image={Images.img1}/>
                        <ItemOnCart Image={Images.img2}/>
                        <ItemOnCart Image={Images.img1}/>
                        <ItemOnCart Image={Images.img2}/> */}
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.TotalSection}>
                    <Text style={styles.TotalSectionText}>Total</Text>
                    <Text style={styles.TotalSectionText}>$9,800</Text>
                </View>
                <TouchableOpacity style={styles.CHECKOUT}>
                    <Text style={styles.CHECKOUT_Title}>CHECKOUT</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
const styles=StyleSheet.create({
    navigator: {
        flexDirection:'row',
        justifyContent:'space-around',
        height:'12%',
        marginBottom:10,
        alignItems:'center',
    },
    page_title: {
        fontWeight:'bold',
        fontSize:25
    },
    Items: {
        // height:'88%'
    },
    footer: {
        height:'15%',
        borderTopWidth:1,
        borderColor:'#8F92A1'
    },
    TotalSection: {
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:'8%'
    },
    TotalSectionText: {
        marginTop:10,
        fontSize:20
    },
    CHECKOUT: {
        height:44,
        width:'90%',
        marginLeft:'5%',
        backgroundColor:'#C6AB59',
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center'
    },
    CHECKOUT_Title: {
        color:'#fff'
    }
});