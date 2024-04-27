import React, { useState } from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableOpacity, Image,
  KeyboardAvoidingView, SafeAreaView, StatusBar, Dimensions, Platform
} from 'react-native';
import { firebase_auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const { width, height } = Dimensions.get('window');

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');
  const auth = firebase_auth;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log(error);
      alert('Sign in failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.fullScreen}>
      <StatusBar backgroundColor="#004d40" barStyle="light-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardAvoidingView}>
          <Image
            source={require('./../Assets/Image/Login.png')}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.loginText}>To AUI Buy & Sell</Text>
          <TextInput
            value={email}
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ccc"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            value={password}
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Passewordforgot')}>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={() => signIn()}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: '#146434',
    width: '100%'
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: '#146434',
    width: '100%'
  },
  keyboardAvoidingView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: width * 0.8,
    height: height * 0.2,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  loginText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    backgroundColor: '#00695c',
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
    marginBottom: 10,
  },
  forgotPassword: {
    color: '#bdbdbd',
    marginBottom: 15,
  },
  loginButton: {
    width: '90%',
    backgroundColor: '#2e7d32',
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 15,
  },
  signUpText: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
});

