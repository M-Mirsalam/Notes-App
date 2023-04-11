import { StatusBar, StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainScreen from './MainScreen';
import SearchBar from '../components/SearchBar';
import NoteInput from '../components/NoteInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Note from '../components/Note';
const NoteScreen = ({ user, navigation }) => {
    const [greate, setGreate] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [notes, setNotes] = useState([]);

    const findGreate = () => {
        const hours = new Date().getHours()
        if (hours === 0 || hours < 12) return (setGreate('morning'))
        if (hours > 12 || hours < 17) return (setGreate('afternoon'))
        if (hours > 17 || hours <= 23) return (setGreate('evening'))
    }
    const findNotes = async () => {
        const result = await AsyncStorage.getItem('notes');
        if (result !== null) setNotes(JSON.parse(result));
    }
    useEffect(() => {
        findNotes()
         //AsyncStorage.clear();
        findGreate();
    }, [])

    const handleOnSubmit = async (title, desc) => {
        const note = { id: Date.now(), title, desc, time: Date.now() };
        const updatedNotes = [...notes, note];
        setNotes(updatedNotes)
        await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes))
    };

    return (

        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.View}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>{`Hello  ${user.name} good ${greate} `}</Text>
                            <SearchBar containerStyle={{ marginVertical: 15 }} />
                    </View>
                    
                    <FlatList
                        data={notes}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 10 }}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => ( <Note onPress={() => console.log("hello")} item={item} />)}
                    />
                    {!notes.length ? (
                        <View style={[ styles.NoteView]}>
                          
                        </View>
                    ) : null}
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.PlusButton} >
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={{ fontSize: 43, fontWeight: '300' }} >+</Text>
                </TouchableOpacity>
            </View>
            
            <NoteInput visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSubmit={handleOnSubmit}
            />
        </View>

    );
};

export default NoteScreen

const styles = StyleSheet.create({
    container: {
        
        height:'100%',
    },
    header: {
        height: '20%',
       
    },
    View: {
        paddingHorizontal: 20,
        zIndex:1,
        height: '80%'
    },
    headerText: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'black',
    paddingTop:5
    },
    NoteView: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10
    },
    NoteText: {
        fontSize: 24,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        opacity: 0.5
    },
    PlusButton: {
        height: 60,
        width: 60,
        borderRadius: 30,
        position: 'absolute',
        bottom: 30,
        right: 30,
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: 16,
        backgroundColor: '#dbb2ff'
    }

})