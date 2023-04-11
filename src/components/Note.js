import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const Note = ({item, onPress}) => {
    const {title, desc} = item;
    
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
      <Text style={styles.desc} numberOfLines={3}>{desc}</Text>
      
    </TouchableOpacity>
  );
};

const windowWidth = Dimensions.get('window').width-40

export default Note

const styles = StyleSheet.create({
    container:{
       backgroundColor:'#dbb2ff',
       width:windowWidth/2-10,
       padding:5,
      
       borderRadius:10
    },
    title:{
      fontWeight:'bold',
      fontSize:20,
      fontStyle:'normal',
      color:'white',
      opacity:0.7
    },
    desc:{
      fontSize:18
    }
})