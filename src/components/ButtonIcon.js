import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NoteScreen from '../screens/NoteScreen';

const AddNote = () => {
  return (
    <View></View>
  )
};
const ButtonIcon = () => {
  return (

    <View style={styles.PlusButton} >
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={{ fontSize: 43, fontWeight: '300' }} >+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonIcon

const styles = StyleSheet.create({
  PlusButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: 30,
    right: 10,
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 16,
    backgroundColor: '#dbb2ff'
  }
})