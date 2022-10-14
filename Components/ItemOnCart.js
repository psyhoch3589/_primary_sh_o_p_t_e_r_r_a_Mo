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
                <Text style={styles.productTitle}>{props.title}</Text>
                <View style={styles.specifications}>
                    <Text>Size:</Text>
                    <View style={{
                        width:20,
                        borderRadius:3,
                        marginRight:15
                        }}>
                        <Text style={{textAlign:'center'}}>S</Text>
                    </View>
                </View>
                <Text style={styles.cost}><Text style={{color:'orange',fontSize:17}}>$</Text>1,600</Text>
                <View style={styles.Quantity}>
                    <TouchableOpacity style={styles.test} onPress={()=>{
                        setQuantity(Quantity+1);
                    }}>
                        <Image source={require("../assets/add.png")} style={styles.AddRemoveItem}/>
                    </TouchableOpacity>
                    <View style={{
                        width:30,
                        // backgroundColor:'#fff',
                        borderRadius:3,
                        marginLeft:5,
                        marginRight:5,
                        justifyContent:'center',
                        alignItems:'center'
                        }}>
                            <Text style={styles.QuantityNum}>{Quantity}</Text>
                        </View>
                        <TouchableOpacity style={styles.test} onPress={()=>{
                        setQuantity(Quantity-1);
                    }}>
                            <Image source={require("../assets/minus.png")} style={styles.AddRemoveItem}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../assets/close.png")} style={styles.CloseItem}/>
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
        // backgroundColor:'#D3D3D3',
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:15
    },
    ProductImgSection: {
        justifyContent:'center',
        alignItems:'center',
        width:'40%',
        // backgroundColor:'blue'
    },
    ProductImg: {
        height:'100%',
        width:'100%',
        borderRadius:20
    },
    productDetails: {
        // backgroundColor:'green',
        width:'60%',
        paddingTop:10,
        paddingLeft:10
    },
    productTitle: {
        fontWeight:'bold',
        fontSize:20,
        marginBottom:14
        // textAlign:'center'
    },
    specifications: {
        marginBottom:14,
        flexDirection:'row'
    },
    cost: {
        // marginBottom:10,
        fontWeight:'bold',
        fontSize:17,
        letterSpacing:1
    },
    Quantity: {
        marginTop:20,
        flexDirection:'row'
    },
    AddRemoveItem: {
        height:25,
        width:25,
    },
    test: {

        // padding:10,
        borderRadius:6,
        borderColor:'black',
        borderWidth:1
    },
    CloseItem: {
        height:22,
        width:22,
        marginLeft:'60%'
    },
    QuantityNum: {
        fontSize:16
    }
})