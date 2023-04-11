import { StyleSheet, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Screen1 from './src/screens/screen1'
import AsyncStorage from '@react-native-async-storage/async-storage'
import NoteScreen from './src/screens/NoteScreen'
import MainScreen from './src/screens/MainScreen'
import ButtonIcon from './src/components/ButtonIcon'
import NoteDetail from './src/components/NoteDetail'

const App = () => {
  const [user, setUser] = useState({});
  const findUser = async () =>{
    const result = await AsyncStorage.getItem('user')
    if(result!==null){
        setUser(JSON.parse(result))
    }

  };

  useEffect (() =>{
   findUser();
  //AsyncStorage.clear();
  },[]);

const renderNoteScreen = (props) => <NoteScreen{...props} user={user}/>



  if(!user.name) return <MainScreen onFinish={findUser}/>;
  return (
    <NoteScreen user={user}/>
    
  );
};

export default App

const styles = StyleSheet.create({})