import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchBar = ({containerStyle}) => {
  return (
    <View style={[styles.container, {...containerStyle}]}>
      <TextInput placeholder='Search here' style={styles.searchbar}/>
    </View>
  );
};

export default SearchBar

const styles = StyleSheet.create({
    searchbar:{
        borderWidth:1,
        borderColor:'black',
        height:45,
        borderRadius:22,
        fontSize:20,
        paddingLeft:10
    },
    container:{
     
    },
});