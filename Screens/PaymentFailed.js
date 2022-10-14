import * as React from 'react';
import { View , Text , StyleSheet, SafeAreaView, ScrollView, TouchableOpacity,Image } from 'react-native';
import GoldBtn from '../Components/GoldBtn';
import ProductsReview from '../Components/ProductsReview';
import { styles } from '../Style/PaymentFailedCSS';

export default App=(props)=>{
    return(
        <>
        <SafeAreaView style={styles.navigator}>
            <Text style={styles.page_title}>Order Complete</Text>
        </SafeAreaView>
        <View style={styles.Body}>
            <View style={styles.Failed_icon}>
                <Image source={require("../assets/PayementFailed.png")} style={styles.icon}/>
                <Text style={{fontWeight:'bold',fontSize:20,marginBottom:20}}>Order Failed</Text>
                <Text style={{fontSize:15,marginBottom:30}}>Your payment occurred an error.</Text>
            </View>
            <View style={styles.Detail}>
                <Image source={require("../assets/important.png")} style={styles.important_icon}/>
                <Text>Not worry</Text>
                <Text>Keep calm, sometimes it happens</Text>
                <Text>Please go back and check your payment method </Text>
                <Text>or contact us</Text>
            </View>
        </View>
        <GoldBtn  width={'90%'} title='Review Payment Method' onPress={()=>props.navigation.navigate('Checkout')} />
        </>
    )
}