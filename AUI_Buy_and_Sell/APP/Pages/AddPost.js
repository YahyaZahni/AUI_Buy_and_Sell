import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Modal, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FAB } from 'react-native-paper';
import { style as tw } from 'twrnc';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import {Lato_400Regular, useFonts
} from '@expo-google-fonts/lato'


const AddPost = ({ onAddPost }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Lato_400Regular
,
  });

  if (!fontsLoaded) {
    return null;
  }


  const handleAddPost = async () => {
    if (!title || !price || !image) {
      alert('Please fill in all fields');
      return;
    }

    // Pass data to the parent component
    onAddPost(title, price, image);
    // Close the modal after adding the post
    setModalVisible(false);
    // Reset the state
    setTitle('');
    setPrice('');
    setImage('');
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => setModalVisible(true)}
      />
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={[tw('text-black mb-5 text-base'), {fontFamily: 'Lato_400Regular'  }]} >Add a post to our catalogue.</Text>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Price"
              value={price}
              onChangeText={setPrice}
            />
            {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
            <TouchableOpacity onPress={pickImage} style={styles.imageButton}>
              <Text style={styles.buttonText}>Select Image</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAddPost} style={styles.addButton}>
              <Text style={styles.buttonText}>Add Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    borderRadius: 100,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: '#fefefe',
  },
  fab2: {
    position: 'absolute',
    margin: 16,
    marginBottom: 80,
    borderRadius: 100,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: '#fefefe',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CED4DA',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    width: '80%',
    fontFamily: 'Lato_400Regular',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  imageButton: {
    backgroundColor: '#146434',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#146434',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Lato_400Regular'
  },
});

export default AddPost;
