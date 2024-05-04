import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Alert
} from 'react-native';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const { width, height } = Dimensions.get('window');

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const auth = getAuth(); // Ensure Firebase is properly initialized before using getAuth

  const handleSendPasswordResetEmail = () => {
    if (email.trim() === '') {
      Alert.alert('Input required', 'Please enter your email address.');
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert('Check your email', 'A password reset link has been sent to your email.');
        navigation.navigate('Login'); // Optionally navigate back to login after sending the email
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Error', errorMessage);
      });
  };

  return (
    <View style={styles.fullScreen}>
      <StatusBar backgroundColor="#004d40" barStyle="light-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingView}>
          <Image source={require('./../Assets/Image/forgot-password.png')}
            style={styles.logo}/>
          <Text style={styles.forgotPasswordText}>Oopps!</Text>
          <Text style={styles.forgotPasswordText}>I forgot</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#ccc"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSendPasswordResetEmail}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: '#146434',
    alignItems: 'center',
    justifyContent: 'center'
  },
  safeAreaView: {
    flex: 1,
    width: width
  },
  keyboardAvoidingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  forgotPasswordText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '90%',
    backgroundColor: 'white',
    color: 'black',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
    marginBottom: 20,
    fontSize: 16,
  },
  sendButton: {
    width: '90%',
    backgroundColor: '#2e7d32',
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 15,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    color: 'white',
    fontSize: 16,
    marginTop: 20,
  },
  logo: {
    width: width * 0.8,
    height: height * 0.2,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
