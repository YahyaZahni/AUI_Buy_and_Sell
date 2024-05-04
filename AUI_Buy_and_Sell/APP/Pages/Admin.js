import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import {Image, Dimensions} from  'react-native';
import { firebase_auth } from '../../firebase';


const { width, height } = Dimensions.get('window')

const Admin = () => {
    const [email, setEmail] = useState('');

    const handleSearch = () => {
        Alert.alert("Search Functionality", "Search functionality to find user by email is not implemented yet.");
    };

    const handleDelete = () => {
        Alert.alert("Delete Functionality", "Delete functionality to remove user by email is not implemented yet.");
    };

    return (
        <View style={styles.container}>
        <Image
            source={require('./../Assets/Image/admin.png')}
            style={styles.logo}
          />
        <Text style={styles.headerText}>Welcome to the Admin Interface</Text>
            <TextInput
                placeholder="Enter user's email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                placeholderTextColor="#a9a9a9"
            />
            <TouchableOpacity style={styles.button} onPress={handleSearch}>
                <Text style={styles.buttonText}>Search User</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDelete} onPress={handleDelete}>
                <Text style={styles.buttonText}>Delete User</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#146434', // Dark green background
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    headerText: {
      fontSize: 20,
      color: '#ffffff', // White color for header text
      marginBottom: 50,
      fontWeight: 'bold',
  },
  logo: {
    width: width * 0.8,
    height: height * 0.2,
    resizeMode: 'contain',
    marginBottom: 20,
  },
    input: {
        width: '90%',
        height: 50,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 25,
        backgroundColor: '#fff', // White background for input
        color: '#333', // Dark text color for better visibility
    },
    button: {
        width: '70%',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        backgroundColor: '#fff', // White button
        marginBottom: 10,
    },
    buttonDelete: {
        width: '70%',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        backgroundColor: '#d9534f', // Red button for delete
    },
    buttonText: {
        color: '#146434', // Dark green text color
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export default Admin;