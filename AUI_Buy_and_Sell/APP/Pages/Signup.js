import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet,
    Dimensions, Image, KeyboardAvoidingView, Platform
} from 'react-native';
import { firebase_auth } from '../../firebase'; // Ensure this import points to your actual Firebase config file
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { Lato_400Regular, useFonts } from '@expo-google-fonts/lato';

const { width, height } = Dimensions.get('window');

const App = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = firebase_auth;
    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Lato_400Regular,
    });

    if (!fontsLoaded) {
        return null; // Render nothing if fonts are not loaded
    }

    const signUp = async () => {
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }
        setLoading(true);
        setErrorMessage('');
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, {
                displayName: `${firstName} ${lastName}`
            });
            console.log(userCredential);
            await sendEmailVerification(userCredential.user);
            alert('Registration successful! Please check your email to verify your account.');
            navigation.navigate('Login'); // Optionally navigate to login after successful registration
        } catch (error) {
            console.error(error);
            alert('Sign up failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView 
            style={{ flex: 1 }} 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
            <View style={styles.container}>
                <Image
                    source={require('./../Assets/Image/Al_Akhawayn_University_Logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.welcome}>Welcome.</Text>
                <Text style={styles.register}>Join us.</Text>
                <TextInput
                    value={firstName}
                    style={styles.input}
                    placeholder="First Name"
                    placeholderTextColor="#ccc"
                    onChangeText={setFirstName}
                />
                <TextInput
                    value={lastName}
                    style={styles.input}
                    placeholder="Last Name"
                    placeholderTextColor="#ccc"
                    onChangeText={setLastName}
                />
                <TextInput
                    value={email}
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#ccc"
                    onChangeText={setEmail}
                />
                <TextInput 
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor="#ccc"
                    onChangeText={setPassword}
                />
                <TextInput 
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Confirm Password"
                    placeholderTextColor="#ccc"
                    onChangeText={setConfirmPassword}
                />
                {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
                <TouchableOpacity style={styles.button} onPress={signUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginText}>Have an account? <Text style={styles.loginButton}>Log In.</Text></Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: width * 0.8,
        height: height * 0.2,
        resizeMode: 'contain',
        marginBottom: 20,
        marginTop: -70
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    welcome: {
        fontSize: 50,
        fontFamily: 'Lato_400Regular',
        color: '#146434',
        marginBottom: 20,
    },
    register: {
        fontSize: 25,
        color: '#146434',
        marginBottom: 25,
        fontFamily: 'Lato_400Regular',
    },
    input: {
        width: '90%',
        backgroundColor: '#ffffff',
        color: '#146434',
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontFamily: 'Lato_400Regular',
        borderRadius: 4,
        marginBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#146434',
    },
    button: {
        backgroundColor: '#146434',
        padding: 10,
        borderRadius: 20,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20,
        fontFamily: 'Lato_400Regular',
    },
    loginText: {
        color: '#146434',
        fontFamily: 'Lato_400Regular',
        fontSize: 16,
    },
    loginButton: {
        fontWeight: 'bold',
    },
    error: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
    },
});

export default App;
