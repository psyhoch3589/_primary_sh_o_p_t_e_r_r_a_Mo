import * as React from 'react';
import { View , Text , StyleSheet, SafeAreaView, ScrollView, TouchableOpacity , Image } from 'react-native';
import { Images } from '../dataForTest';

export default App=(props)=>{// photos for test
    return(
        <>
        <View>
            <Image source={{uri:props.img}} style={styles.products} />
            <Text style={styles.title}>{props.title}</Text>
        </View>
        </>
    );
}
const styles=StyleSheet.create({
    products: {
        height:90,
        width:90,
        borderRadius:16,
        margin:8,
    },
    title: {
        fontWeight:'bold',
        fontSize:14
    }
});