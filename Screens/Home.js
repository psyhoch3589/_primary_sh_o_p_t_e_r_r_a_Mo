import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View , Animated , Image , StyleSheet , Text, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, TextInput } from 'react-native';
import {styles} from '../Style/HomeCSS';
import {Images} from '../dataForTest';
// import { io } from "socket.io-client";





export default function App() {
  const [url,setUrl]=React.useState("10.72.103.97");
  // const [imagePath,setImagePath]=React.useState(require(Images.img11));
  // const socket = io("http://192.168.1.66:3000");
  const [k,setK]=React.useState(0);
  const [horizontall , setHorizontal]=React.useState();
  const [item , setItem]=React.useState();
  const [price , setPrice]=React.useState();
  const [DataItem,setDataPost]=React.useState();
  const [test,setTest]=React.useState(0);

  
  // useEffect
  React.useEffect(()=>{
    // console.log(Images.img11);
  },[])

  const fetchDataItem = ()=>{
    const data={
      key:0
    }
    fetch('http://'+url+'/ApiMobile.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
      <Image source={props.source} style={styles.ArticlePhoto} />
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.itemTitle}>{props.title}</Text>
        <Text style={styles.itemPrice}>{props.price}</Text>
      </View>
      <Text style={styles.itemDescription}>{props.description}</Text>
    </View>
  );
}
const ArticleRecentlyViewed = (props) =>{
  return(
    <View style={styles.RecentArticle} key={props.key}>
      <Image source={props.source} style={styles.RecentArticlePhoto} />
        <Text style={styles.RecentitemTitle}>{props.title}</Text>
      <Text style={styles.RecentitemDescription}>{props.description}</Text>
      <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
        <Text style={styles.RecentitemPrice}>{props.price}</Text>
        <TouchableOpacity style={styles.AddItemBtn}>
          <Image source={require("../assets/plus.png")} style={styles.AddItemIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>test<Text style={{fontSize:40,fontWeight:'bold',color:'orange'}}>.</Text></Text>
        <TouchableOpacity>
          <Image source={require("../assets/menu.png")} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
      {/* <Text style={styles.findYourStyle}>Find your style</Text> */}
      <View style={styles.category}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>
          <View style={styles.item}>
              <Image source={require("../assets/filter.png")} style={styles.filterIcon}/>
          </View>
        </TouchableOpacity>
          <CategoryItems title='All'/>
          <CategoryItems title='Top'/>
          <CategoryItems title='Category'/>
          <CategoryItems title='Recommandation'/>
          <CategoryItems title='Category2'/>
        </ScrollView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={{marginLeft:'2%',fontWeight:'bold',fontSize:20}}>Hot Sales</Text>
          <TouchableOpacity style={styles.ShowMoreBtn}>
            <Text>Show more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ArticleSection}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginLeft:10}}>
          <Article title={Images.title1} description={Images.description1} price='$200' source={Images.img11}/>
          <Article title={Images.title2} description={Images.description2} price='$200' source={Images.img12}/>
          <Article title={Images.title3} description={Images.description3} price='$200' source={Images.img13}/>
          </ScrollView>
        </View>
        <Text style={{marginLeft:'2%',fontWeight:'bold',fontSize:20,marginTop:20}}>Recently viewed</Text>
        <View style={styles.ArticleRecentSection}>
            <ArticleRecentlyViewed title={Images.title1} description={Images.description1} price='$200' source={Images.img11}/>
            <ArticleRecentlyViewed title={Images.title1} description={Images.description1} price='$200' source={Images.img11}/>
            <ArticleRecentlyViewed title={Images.title1} description={Images.description1} price='$200' source={Images.img11}/>
            <ArticleRecentlyViewed title={Images.title1} description={Images.description1} price='$200' source={Images.img11}/>
            <ArticleRecentlyViewed title={Images.title1} description={Images.description1} price='$200' source={Images.img11}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


