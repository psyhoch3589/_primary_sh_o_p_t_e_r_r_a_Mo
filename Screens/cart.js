import * as React from 'react';
import { View , Text , StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import ItemOnCart from '../Components/ItemOnCart';
import GoldBtn from '../Components/GoldBtn';
import {Images} from '../dataForTest';

export default App=(props)=>{
    React.useEffect(()=>{
        // alert(Images.img1);
    },[])
    return(
        <>
            <SafeAreaView style={styles.navigator}>
                <Text style={styles.page_title}>My cart</Text>
            </SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Items}>
                        <ItemOnCart Image={Images.img1}/>
                        <ItemOnCart Image={Images.img2}/>
                        <ItemOnCart Image={Images.img1}/>
                        <ItemOnCart Image={Images.img2}/>
                        <ItemOnCart Image={Images.img1}/>
                        <ItemOnCart Image={Images.img2}/>
                        <ItemOnCart Image={Images.img1}/>
                        <ItemOnCart Image={Images.img2}/>
                        <ItemOnCart Image={Images.img1}/>
                        <ItemOnCart Image={Images.img2}/>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.TotalSection}>
                    <Text style={styles.TotalSectionText}>Total</Text>
                    <Text style={styles.TotalSectionText}>$9,800</Text>
                </View>
                <GoldBtn title="CHECKOUT" onPress={()=>props.navigation.navigate("Checkout")} />
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
        justifyContent: 'flex-end',
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