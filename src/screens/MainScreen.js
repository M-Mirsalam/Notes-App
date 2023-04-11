import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const MainScreen = ({onFinish}) => {
     const[name,setName]=useState('');
     const handleOnchanceText = text=>setName(text);  
    const handleSubmit = async () => {
        const user = {name:name};
    
     await AsyncStorage.setItem('user', JSON.stringify(user));
   if(onFinish) onFinish ();
     };
    
    return (
       <View style={styles.View}>
         <StatusBar barStyle='light-content' />
       <View style={styles.container}>
       <TextInput placeholder='Enter your name'
             style={styles.textInput}
             value={name}
             onChangeText={handleOnchanceText}
              />
              <TouchableOpacity style={styles.button}
                onPress={()=> handleSubmit()}
                ><Text style={styles.text}>Next</Text></TouchableOpacity>
       </View>
       </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    View: {
        justifyContent: 'center',
        backgroundColor: '#FFF',
        alignItems:'center',
        height:'100%'
    },
    container:{
        alignItems: 'center'
    },
    textInput: {
        borderWidth: 1,
        height: 50,
        width: windowWidth-30,
        borderColor: 'black',
        borderRadius: 10,
        fontSize: 20,
        paddingLeft:10,
        marginBottom: 15
    },
    text: {
        paddingLeft: 25,
        fontSize: 20,
        opacity: 1,
       justifyContent:'center'
    },
    button: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 110,
        height: 50,
        borderRadius:10,
        marginTop: 10
        
    }
})