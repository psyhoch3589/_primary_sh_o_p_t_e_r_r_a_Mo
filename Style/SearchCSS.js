import { StyleSheet } from "react-native"


export const styles=StyleSheet.create({
    SearchSection: {
        flexDirection:'row',
        alignItems:'center',
        marginBottom:15,
        marginTop:10
    },
    SearchBar: {
        width:'90%',
        height:50,
        borderWidth:2,
        borderColor:'black',
        borderRadius:12,
        marginLeft:'5%',
        paddingLeft:10,
        paddingRight:40
    },
    searchIconBtn: {
        position:'relative',
        right:'80%'
    },
    searchIcon: {
        height:30,
        width:30,
    },
    Recent: {
        width:'88%',
        marginLeft:'6%'
    },
    RecentTitle: {
        color:'gray',
        fontSize:16,
        marginBottom:10
    },
    HistorySection: {
        flexDirection:'row',
        alignItems:'center',
        marginBottom:15,
        borderBottomWidth:1,
        paddingBottom:10,
        borderBottomColor:'gray'
    },
    HistoryIcon: {
        height:30,
        width: 30,
        top:2,
        marginRight:10
    },
    HistoryText: {
        // backgroundColor:'red'
    },
    RemoveSearchIcon: {
        height:20,
        width:20,
        marginLeft: '50%',
    }
})