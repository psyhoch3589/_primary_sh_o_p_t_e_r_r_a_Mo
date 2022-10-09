import * as React from 'react';
import { View , Text , StyleSheet, SafeAreaView, ScrollView, TouchableOpacity , Image } from 'react-native';
import GoldBtn from '../Components/GoldBtn';
import ProductsReview from '../Components/ProductsReview';
import { Images } from '../dataForTest';


export default App=()=>{
    
    return(
        <>
        <SafeAreaView style={styles.navigator}>
            <Text style={styles.page_title}>ORDER REVIEW</Text>
        </SafeAreaView>
        <View style={styles.ListOfProducts}>
            <Text style={styles.Section_Title}>Products</Text>
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
        <View style={styles.Shipping}>
            
        </View>
        <GoldBtn title="PLACE ORDER" />
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
        borderBottomColor:'black'
    },
    Section_Title: {
        fontWeight:'bold',
        fontSize:18,
        marginBottom:12
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end'
    }
});