import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      height:'100%',
      marginTop: Platform.OS === 'ios' ? 0 : 14 //to verifie if it's IOS or android device
      // backgroundColor:'#E5E5E5'
    },
    header: {
      height:50,
      width:'90%',
    //   marginLeft:'5%',
      flexDirection:'row',
      // backgroundColor:'red',
      justifyContent:'space-between',
      alignItems:'center'
    },
    logo: {
        fontSize:28,
        fontWeight:'bold',
        paddingLeft:'5%',
    },
    menuIcon: {
        height:25,
        width:25,
        marginTop:12,
        right:-18
    },
    findYourStyle: {
      fontWeight:'bold',
      fontSize:25,
      marginLeft:'2%',
      marginTop:20
    },
    category: {
      height:60,
      marginTop:20,
      marginLeft:'2%',
      flexDirection:'row'
    },
    filterIcon: {
      height:20,
      width:20,
      },
    item: {
      height:40,
      borderRadius:10,
      padding:10,
      marginLeft:10,
      backgroundColor:'#fff'
    },
    itemTitle: {
        fontWeight:'bold',
        fontSize:16,
        paddingLeft:2
    },
    itemPrice: {
        fontWeight:'bold',
        fontSize:16,
        paddingRight:2
    },
    ArticleSection: {
      flexDirection:'row',
      marginTop:20
    },
    ArticleRecentSection: {
      // flexDirection:'row',
      marginTop:10,
      paddingBottom:20,
      marginLeft:'2%'
    },
    Article: {
      marginRight:10,
    },
    itemDescription: {
      position:'relative',
      width:180,
      height:48,
      color:'gray',
      fontSize:13,
      marginTop:5
    },
    ArticlePhoto: {
      height:190,
      width:180,
      borderRadius:12
    },
    RecentArticlePhoto: {
      height:190,
      width:180,
      borderRadius:12
    },
    RecentitemDescription: {
      position:'relative',
      width:180,
      height:48,
      color:'gray',
      fontSize:13,
      marginTop:5
    },
    RecentitemTitle: {
      fontWeight:'bold',
      fontSize:16,
      paddingLeft:2
    },
    RecentitemPrice: {
        fontWeight:'bold',
        fontSize:16
    },
    AddItemBtn: {
      // borderWidth:1,
      // borderColor:'#FF369427',
      marginLeft:'27%',
      backgroundColor:'green',
      borderRadius:4
    },
    AddItemIcon: {
      height:20,
      width:20
    },
    RightSection: {
      marginTop:40
    },
    ShowMoreBtn: {
      marginRight:10
    }
  });