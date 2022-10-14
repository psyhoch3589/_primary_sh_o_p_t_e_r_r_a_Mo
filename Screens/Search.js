import * as React from 'react';
import { SafeAreaView , TextInput, TouchableOpacity,Image,Text,View, StatusBar } from 'react-native';
import { styles } from '../Style/SearchCSS';

export default App=()=>{
    return(
        <>
        <SafeAreaView style={styles.SearchSection}>
            <TextInput placeholder='search' style={styles.SearchBar}/>
                <TouchableOpacity style={styles.searchIconBtn}>
                    <Image source={require("../assets/search.png")} style={styles.searchIcon}/>
                </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.Recent}>
            <Text style={styles.RecentTitle}>Recent Searches</Text>
            <View style={styles.HistorySection}>
                <Image source={require("../assets/history.png")} style={styles.HistoryIcon}/>
                <Text style={styles.HistoryText}>Bag for women</Text>
                <Image source={require("../assets/close.png")} style={styles.RemoveSearchIcon}/>
            </View>
            <View style={styles.HistorySection}>
                <Image source={require("../assets/history.png")} style={styles.HistoryIcon}/>
                <Text style={styles.HistoryText}>Bag for women</Text>
                <Image source={require("../assets/close.png")} style={styles.RemoveSearchIcon}/>
            </View>
            <View style={styles.HistorySection}>
                <Image source={require("../assets/history.png")} style={styles.HistoryIcon}/>
                <Text style={styles.HistoryText}>Bag for women</Text>
                <Image source={require("../assets/close.png")} style={styles.RemoveSearchIcon}/>
            </View>
            <StatusBar backgroundColor={'black'}/>
        </View>
        </>
    )
}