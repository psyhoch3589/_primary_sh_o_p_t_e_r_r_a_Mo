import * as React from 'react';
import { View , Text , StyleSheet, SafeAreaView, ScrollView, TouchableOpacity,Image } from 'react-native';
import GoldBtn from '../Components/GoldBtn';
import ProductsReview from '../Components/ProductsReview';
import { Images } from '../dataForTest';
import { styles } from '../Style/PaymentSuccessfulCSS';

export default App=(props)=>{
    return(
        <>
        <SafeAreaView style={styles.navigator}>
            <Text style={styles.page_title}>Order Complete</Text>
        </SafeAreaView>
        <View style={styles.Body}>
            <View style={styles.Sucess_Icon}>
                <Image source={require("../assets/payementSuccess.png")}/>
                <Text style={{fontWeight:'bold',fontSize:20,marginBottom:20}}>Payment Successful!</Text>
                <Text style={{fontSize:15,marginBottom:30}}>Orders will arrive in 3 days!</Text>
            </View>
            <View style={styles.ListOfProducts}>
                {/* <Text style={styles.ListOfProducts_Title}>Products</Text> */}
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
        </View>
        <GoldBtn  width={'90%'} title='See order details' onPress={()=>props.navigation.navigate('Checkout')} />
        </>
    )
}