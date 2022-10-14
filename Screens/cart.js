import * as React from 'react';
import { View , Text , StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import ItemOnCart from '../Components/ItemOnCart';
import GoldBtn from '../Components/GoldBtn';
import {Images} from '../dataForTest';
// import axios from 'axios';

export default App=(props)=>{
    const [url,setUrl]=React.useState("10.72.101.145");
    const [DataCart,setDataCart] = React.useState();
    const [test,setTest] = React.useState(0);
    React.useEffect(()=>{
        fetchCartData()
    },[])
    const fetchCartData=()=>{
        const data={
            key:0
        }
        fetch('http://'+url+'/shopterra/ApiMobile.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((data) => {
            setDataCart(data)
            setTest(1)
            // console.log("ok")
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }
    const testt=()=>{
        const data={
            key:0
        }
        fetch('http://'+url+'/Shopterra/ApiMobile.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data[0].review)
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }
    return(
        <>
            <SafeAreaView style={styles.navigator}>
            {/* <TouchableOpacity onPress={()=>testt()}>
                <Text>ok</Text>
            </TouchableOpacity> */}
                <Text style={styles.page_title}>My cart</Text>
            </SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Items}>
                    {test==1 ? DataCart.map((item,index)=>{
                        return (<ItemOnCart Image={Images.img3} title={item.title} key={index}/>)
                    }):false}
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.subTotal}>
                    <Text style={styles.SubTotalSectionText}>Sub Total</Text>
                    <Text style={styles.Cost}><Text style={{color:'orange',fontSize:17}}>$</Text>9,800</Text>
                </View>
                <View style={styles.ShippingTotal}>
                    <Text style={styles.ShippingTotalSectionText}>Sub Total</Text>
                    <Text style={styles.Cost}><Text style={{color:'orange',fontSize:17}}>$</Text>9,800</Text>
                </View>
                <View style={styles.TotalSection}>
                    <Text style={styles.TotalSectionText}>Total</Text>
                    <Text style={styles.Cost}><Text style={{color:'orange',fontSize:17}}>$</Text>9,800</Text>
                </View>
                <GoldBtn title="CHECKOUT" onPress={()=>props.navigation.navigate("Checkout")} width={'90%'} />
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
        fontSize:22
    },
    Items: {
        // height:'88%'
    },
    footer: {
        textAlign:'center'
        // justifyContent: 'flex-end',
        // borderTopWidth:1,
        // borderColor:'#8c8989'
    },
    SubTotalSectionText: {
        marginTop:10,
        fontSize:17
    },
    subTotal: { 
        flexDirection:'row',
        justifyContent:'space-around',
        // marginBottom:'8%',
    },
    TotalSection: {
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:'6%'
    },
    ShippingTotal: {
        flexDirection:'row',
        justifyContent:'space-around',
        borderBottomWidth:1,
        borderBottomColor:'#8c8989',
        marginBottom:5
    },
    ShippingTotalSectionText: {
        marginTop:10,
        fontSize:17
    },
    TotalSectionText: {
        marginTop:10,
        fontSize:17,
        marginLeft:18
    },
    Cost: {
        marginTop:10,
        fontWeight:'bold',
        fontSize:18
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