import { Button, StyleSheet, View, Modal, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text } from 'react-native'
import { useState } from 'react';

const NoteInput = ({ visible, onClose, onSubmit }) => {

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const modalClose = () => {
    Keyboard.dismiss();


  };
  const handleOnchanceText = (text, valueFor) => {
    if (valueFor === 'title') setTitle(text);
    if (valueFor === 'desc') setDesc(text);
  };

  const handleSubmit = () => {
    if (!title.trim() && !desc.trim()) return onClose();
    onSubmit(title, desc)
    setTitle('')
    setDesc('')
    onClose();
  };
const closeModal = () =>{
  setTitle('')
  setDesc('')
  onClose();
};

  return (
    <View >
      <StatusBar barStyle='light-content' />
      <Modal visible={visible} animationType='fade'>
        <View style={styles.container}>
          <TextInput value={title} onChangeText={(text) => handleOnchanceText(text, 'title')} placeholder='Title' style={[styles.input, styles.title]} />
          <TextInput value={desc} onChangeText={(text) => handleOnchanceText(text, 'desc')} multiline placeholder='Note' style={[styles.input, styles.description]} />
        </View>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={[styles.Modal, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>

        <View style={styles.ButtonView}>
          <View style={styles.submitButton}>
            <TouchableOpacity onPress={handleSubmit}><Text style={{ fontSize: 20, fontWeight: 'bold', opacity: 0.8 }}>Add</Text></TouchableOpacity>
          </View>

          { title.trim() ||desc.trim() ?(
            <View style={styles.submitButton}>
              <TouchableOpacity onPress={onClose}><Text style={{ fontSize: 20, fontWeight: 'bold', opacity: 0.8 }}>Close</Text></TouchableOpacity>
            </View>
          ):null}
        </View>

      </Modal>
    </View>
  );
};

export default NoteInput

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  Modal: {
    flex: 1,
    zIndex: -1
  },
  input: {
    borderBottomWidth: 2,
    borderColor: '#dbb2ff',
    fontSize: 20,
    color: 'Black'
  },
  title: {
    height: 50,
    marginBottom: 15,
    fontWeight: 'bold',
    fontWeight:'bold'
  },
  description: {
    height: 100,
   
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dbb2ff',
    height: 40,
    width: 100,
    borderRadius: 15,
    marginHorizontal:10
  },
  ButtonView: {
    flexDirection: 'row',
    justifyContent: 'center',
  }

})