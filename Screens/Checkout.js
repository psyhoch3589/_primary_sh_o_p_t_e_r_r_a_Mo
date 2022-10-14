import * as React from 'react';
import { View , Text , StyleSheet, SafeAreaView, ScrollView, TouchableOpacity , Image } from 'react-native';
import GoldBtn from '../Components/GoldBtn';
import ProductsReview from '../Components/ProductsReview';
import { Images } from '../dataForTest';


export default App=(props)=>{
    return(
        <>
        <SafeAreaView style={styles.navigator}>
            <Text style={styles.page_title}>ORDER REVIEW</Text>
        </SafeAreaView>
        <View style={styles.ListOfProducts}>
            <Text style={styles.ListOfProducts_Title}>Products</Text>
            <ScrollView horizontal={true} style={{}} showsHorizontalScrollIndicator={false}>
                <ProductsReview title="Warm Zipper" img={Images.img1} />
                <ProductsReview title="Warm Zipper2" img={Images.img2} />
                <ProductsReview title="Warm Zipper" img={Images.img1} />
                <ProductsReview title="Warm Zipper2" img={Images.img2} />
                <ProductsReview title="Warm Zipper" img={Images.img1} />
                <ProductsReview title="Warm Zipper2" img={Images.img2} />
                <ProductsReview title="Warm Zipper" img={Images.img1} />
                <ProductsReview title="Warm Zipper2" img={Images.img2} />
            </ScrollView>
        </View>
        <View style={styles.ShippingAndPayement}>
            <Text style={styles.Shipping_Title}>SHIPPING</Text>
            <View style={styles.Adress}>
                <Image source={require("../assets/adress.png")} style={styles.localisation} />
                <Text>139 Haystreet,Perth</Text>
                <GoldBtn width={100} title='change' />
            </View>
            <View style={styles.Shipping_Plan}>
                <Image source={require("../assets/shop.png")} style={styles.Shopping_icon}/>
                <View style={{width:'70%',paddingLeft:20}}>
                    <Text style={styles.plan_Title}>Standard</Text>
                    <Text>2-3 days</Text>
                </View>
                <Image source={require("../assets/arrow.png")} style={styles.Shopping_icon}/>
            </View>
            <Text style={styles.Shipping_Title}>PAYEMENT</Text>
            <View style={styles.BankCard}>
                <Image source={require("../assets/mastercard.png")} style={styles.mastercards_icon}/>
                <Text style={styles.BankDetail}>****</Text>
                <Text style={styles.BankDetail}>9000</Text>
                <GoldBtn width={100} title='change'/>
            </View>
        </View>
        <View style={styles.footer}>
            <View style={styles.keyDetailPayement}>
                <Text style={{fontSize:20}}>Shipping</Text>
                <Text style={{fontWeight:'bold',fontSize:20}}>Total</Text>
            </View>
            <View style={styles.ValuesDetailPayement}>
                <Text style={{fontSize:20}}>Free</Text>
                <Text style={{fontWeight:'bold',fontSize:20}}>$9,800</Text>
            </View>
        </View>
        <GoldBtn title="PLACE ORDER" width={'90%'} onPress={()=>props.navigation.navigate('PayementSuccessful')}/>
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
        fontSize:20
    },
    ListOfProducts: {
        paddingLeft:20,
        paddingBottom:20,
        borderBottomWidth:1,
        borderBottomColor:'#cecece'
    },
    ListOfProducts_Title: {
        fontWeight:'bold',
        fontSize:18,
        marginBottom:12
    },
    ShippingAndPayement: {
        paddingLeft:20,
        paddingBottom:20,
        paddingTop:20,
        borderBottomWidth:1,
        borderBottomColor:'#cecece'
    },
    Shipping_Title: {
        fontWeight:'bold',
        fontSize:14,
        marginBottom:12,
        color:'#8c8989'
    },
    Adress: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginBottom:15
    },
    localisation: {
        height:35,
        width:35
    },
    Shipping_Plan: {
        height:94,
        width:'95%',
        marginLeft:'2.5%',
        borderColor:'#c2c1c1',
        borderWidth:1,
        borderRadius:24,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:20,
        marginBottom:20
    },
    Shopping_icon: {
        height:45,
        width:'15%',
        // backgroundColor:'red'
    },
    mastercards_icon: {
        height:45,
        width:'15%',
        // backgroundColor:'red'
    },
    plan_Title: {
        fontWeight:'bold',
        fontSize:20,
        textAlign:'left'
    },
    BankCard: {
        height:50,
        width:'97%',
        // marginLeft:'1%',
        borderWidth:1,
        borderColor:'black',
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'black',
        padding:2
    },
    BankDetail: {
        fontSize:20,
        fontWeight:'600',
        color:'#fff'
    },
    footer: {
        flexDirection:'row',
        justifyContent:'space-around',
        padding:20
    },
});