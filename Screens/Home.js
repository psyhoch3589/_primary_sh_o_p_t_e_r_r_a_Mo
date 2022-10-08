import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View , Animated , Image , StyleSheet , Text, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, TextInput } from 'react-native';

import { io } from "socket.io-client";





export default function App() {
  const socket = io("http://192.168.1.66:3000");
  const [k,setK]=React.useState(0);
  const [horizontall , setHorizontal]=React.useState();
  const [item , setItem]=React.useState();
  const [price , setPrice]=React.useState();
  const [DataItem,setDataPost]=React.useState();
  const [test,setTest]=React.useState(0);

  // React.useEffect(()=>{
  //   socket.on('item', ([arg1,arg2]) => {
  //     setItem(arg1);
  //     setPrice(arg2);
  //   });
  //   return () => {
  //     socket.off("Scroll Direction");
  //   };
  // },[]);
  React.useEffect(()=>{
    fetchDataItem()
  },[])

  const fetchDataItem = ()=>{
    const data={
      key:0
    }
    fetch('http://192.168.1.7/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // if(data[0].id){
        setDataPost(data)
        setTest(1)
        // else setTest(0);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const Artist=()=>{
    return(
        <View style={styles.ArtisteSection}>
            <TouchableOpacity >
                <Image style={styles.ArtisteSectionImage} source={require("../assets/cartoon.png")} />
            </TouchableOpacity>
            <Text style={styles.ArtisteSectionText}>cartoon</Text>
            <Text style={styles.ArtisteSectionTextStatus}>Artist</Text>
        </View>
    );
}
const CategoryItems=(item)=>{
  return(
  <View style={styles.item}>
    <Text style={{color:"#fff"}}>{item}</Text>
  </View>);
}
const Article =(title,price,key)=>{
  return(
    <View style={styles.Article} key={key}>
      <Image source={require("../assets/cartoon.png")} style={styles.ArticlePhoto} />
      <Text>{title}</Text>
      <Text>{price}</Text>
    </View>
  );
}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextInput placeholder='search an item ...' style={styles.search} />
        <View style={styles.share}>
            <TouchableOpacity>
                <Image source={require("../assets/share.png")} style={styles.shareIcon}/>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Panel}>
        <Image source={require("../assets/blackfriday.jpg")} style={{height:150,width:'100%',borderRadius:10}}/>
      </View>
      <View style={styles.category}>
        <ScrollView horizontal={true}>
        {CategoryItems("All")}
        {CategoryItems("Top")}
        {CategoryItems("Category")}
        {CategoryItems("Category2")}
        {CategoryItems("Recommandation")}
        </ScrollView>
      </View>
      <View style={styles.ArticleSection}>
        <ScrollView>
          <View style={{flexDirection:'row', justifyContent:'space-around',marginBottom:244}}>
            <View style={styles.LeftSection}>
              {
                test==1 ? DataItem.map((item,index)=>{
                  if(index%2==0){
                  return(
                    Article(item.title,item.cost,index)
                  )}
                }):false
              }
            </View>
            <View style={styles.RightSection}>
            {
                test==1 ? DataItem.map((item,index)=>{
                  if(index%2!=0){
                  return(
                    Article(item.title,item.cost,index)
                  )}
                }):false
              }
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor:'#E5E5E5'
  },
  header: {
    height:50,
    width:'90%',
    marginLeft:'5%',
    flexDirection:'row',
    // backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'
  },
  search: {
    width:'85%',
    height:'100%',
    backgroundColor:'#fff',
    borderRadius:10,
    paddingLeft:10
  },
  share: {
    backgroundColor:'#D9D9D9',
    borderRadius:10,
    marginLeft:5,
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
  },
  shareIcon: {
    height:'80%'
  },
  Panel: {
    height:150,
    width:'92%',
    marginLeft:'4%',
    borderRadius:10,
    marginTop:15,
    backgroundColor:'#D9D9D9'
  },
  category: {
    height:40,
    marginTop:20,
    marginLeft:'2%',
    flexDirection:'row'
    // backgroundColor:'red'
  },
  item: {
    height:40,
    borderRadius:10,
    padding:10,
    marginLeft:10,
    backgroundColor:'#D9D9D9'
  },
  ArticleSection: {
    width:'100%',
    marginTop:10,
    // flexDirection:'row',
    // justifyContent:'space-around'
  },
  Article: {
    // flexDirection:'row',
  },
  ArticlePhoto: {
    height:228,
    width:162,
    borderRadius:28
  },
  RightSection: {
    marginTop:40
  }
});
