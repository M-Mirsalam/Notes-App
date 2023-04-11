import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

const Screen1 = () => {
     const[name,setName]=useState('');
     const handleOnchanceText = text=>setName(text);  
    const handleSubmit = async () => {
        const user = {name:name};
    
     await AsyncStorage.setItem('user', JSON.stringify(user));
   
     };
    
    return (
        <View >
            <View style={styles.View}>
            <TextInput placeholder='Enter your name'
             style={styles.textInput}
             value={name}
             onChangeText={handleOnchanceText}
              />
            </View>
            <View style={styles.View}>
                <TouchableOpacity style={styles.button}
                onPress={()=> handleSubmit()}
                ><Text style={styles.text}>Next</Text></TouchableOpacity>
            </View>

        </View>
    )
}

export default Screen1

const styles = StyleSheet.create({
    View: {
        justifyContent: 'center',
        backgroundColor: '#FFF',
        alignItems:'center',
        paddingTop:20
    },
    textInput: {
        borderWidth: 1,
        height: 50,
        width: windowWidth-30,
        borderColor: 'black',
        borderRadius: 10
    },
    text: {
        paddingLeft: 25,
        fontSize: 20,
        opacity: 0.5,
       justifyContent:'center'
    },
    button: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 110,
        height: 50,
        borderRadius:10,
        
    }
})