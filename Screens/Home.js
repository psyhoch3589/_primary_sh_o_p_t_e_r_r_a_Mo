import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View , Animated , Image , StyleSheet , Text, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, TextInput } from 'react-native';

// import { io } from "socket.io-client";





export default function App() {
  // const socket = io("http://192.168.1.66:3000");
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
    fetch('http://192.168.101.36/ApiMobile.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // if(data[0].id){
        // setDataPost(data)
        // setTest(1)
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
const CategoryItems=(props)=>{
  return(
    <TouchableOpacity>
      <View style={styles.item}>
        <Text style={{color:"black"}}>{props.title}</Text>
      </View>
    </TouchableOpacity>);
}
const Article =(props)=>{
  return(
    <View style={styles.Article} key={props.key}>
      <Image source={require("../assets/cartoon.png")} style={styles.ArticlePhoto} />
      <Text>{props.title}</Text>
      <Text>{props.price}</Text>
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
      {/* <View style={styles.Panel}>
        <Image source={require("../assets/blackfriday.jpg")} style={{height:150,width:'100%',borderRadius:10}}/>
      </View> */}
      <Text style={styles.findYourStyle}>Find your style</Text>
      <View style={styles.category}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <CategoryItems title='All'/>
          <CategoryItems title='Top'/>
          <CategoryItems title='Category'/>
          <CategoryItems title='Recommandation'/>
          <CategoryItems title='Category2'/>
        </ScrollView>
      </View>
        <ScrollView horizontal={true}>
      {/* <View style={styles.ArticleSection}> */}
            <Article title='Jeans' price='$200'/>
            <Article title='Jeans' price='$200'/>
            <Article title='Jeans' price='$200'/>
            <Article title='Jeans' price='$200'/>
      {/* </View> */}
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    // backgroundColor:'#E5E5E5'
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
  findYourStyle: {
    fontWeight:'bold',
    fontSize:25,
    marginLeft:'4%',
    marginTop:20
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
    backgroundColor:'#fff'
  },
  ArticleSection: {
    // height:40,
    marginTop:20,
    // flexDirection:'row'
  },
  Article: {
    width:'20%',
    backgroundColor:'red',
    marginRight:10
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
