import * as React from 'react';
import { View , Text , StyleSheet, SafeAreaView, ScrollView, TouchableOpacity,Image } from 'react-native';
import ItemOnCart from '../Components/ItemOnCart';
import { Images } from '../dataForTest';



export default App=()=>{
    const [DataCart,setDataCart] = React.useState();
    const [test,setTest] = React.useState(0);
    React.useEffect(()=>{
        fetchCartData()
    },[])
    const fetchCartData=()=>{
        const data={
            key:0
        }
        fetch('http://192.168.101.36/shopterra/ApiMobile.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
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
    return(
        <>
        <SafeAreaView>
            <View>
                {test==1 ? DataCart.map((item,index)=>{
                    return (<ItemOnCart Image={Images.img3} title={item.title} key={index}/>)
                }):false}
                {/* <ItemOnCart Image={Images.img3} title={'title'} key={2}/> */}
            </View>
        </SafeAreaView>
        </>
    )
}