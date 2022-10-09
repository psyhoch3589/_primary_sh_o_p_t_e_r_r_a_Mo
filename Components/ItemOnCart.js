import * as React from 'react';
import { StyleSheet,Text,View,Image, TouchableOpacity } from 'react-native';

export default App=(props)=>{
    const [Quantity, setQuantity]=React.useState(0);
    return(
        <View style={styles.container}>
            <View style={styles.ProductImgSection}>
                <Image source={{uri:props.Image}} style={styles.ProductImg}/>
            </View>
            <View style={styles.productDetails}>
                <Text style={styles.productTitle}>Beosound 1</Text>
                <View style={styles.specifications}>
                    <Text>Color</Text>
                    <View style={{
                        width:20,
                        backgroundColor:'black',
                        borderRadius:3,
                        marginLeft:5,
                        marginRight:15
                        }}></View>
                    <Text>Size</Text>
                    <View style={{
                        width:20,
                        backgroundColor:'#fff',
                        borderRadius:3,
                        marginLeft:5,
                        marginRight:15
                        }}>
                        <Text style={{textAlign:'center'}}>S</Text>
                    </View>
                </View>
                <Text style={styles.cost}>$1,600</Text>
                <View style={styles.Quantity}>
                    <TouchableOpacity onPress={()=>{
                        setQuantity(Quantity+1);
                    }}>
                        <Image source={require("../assets/add.png")} style={styles.AddRemoveItem}/>
                    </TouchableOpacity>
                    <View style={{
                        width:30,
                        backgroundColor:'#fff',
                        borderRadius:3,
                        marginLeft:5,
                        marginRight:5,
                        justifyContent:'center',
                        alignItems:'center'
                        }}>
                            <Text style={styles.QuantityNum}>{Quantity}</Text>
                        </View>
                        <TouchableOpacity onPress={()=>{
                        setQuantity(Quantity-1);
                    }}>
                            <Image source={require("../assets/minus.png")} style={styles.AddRemoveItem}/>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:150,
        width:'90%',
        marginLeft:'5%',
        borderRadius:24,
        backgroundColor:'#D3D3D3',
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:10
    },
    ProductImgSection: {
        justifyContent:'center',
        alignItems:'center',
        width:'40%',
        // backgroundColor:'blue'
    },
    ProductImg: {
        height:100,
        width:'90%',
        borderRadius:20
    },
    productDetails: {
        // backgroundColor:'green',
        width:'60%',
        paddingTop:15,
        paddingLeft:4
    },
    productTitle: {
        fontWeight:'bold',
        fontSize:20,
        marginBottom:10
        // textAlign:'center'
    },
    specifications: {
        marginBottom:10,
        flexDirection:'row'
    },
    cost: {
        marginBottom:10,
    },
    Quantity: {
        marginBottom:10,
        flexDirection:'row'
    },
    AddRemoveItem: {
        height:25,
        width:25
    },
    QuantityNum: {
        fontSize:20
    }
})