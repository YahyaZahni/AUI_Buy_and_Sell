import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Platform
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Login() {
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
            style={styles.input}
            placeholder="Email or Phone Number"
            placeholderTextColor="#ccc"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            secureTextEntry
          />
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity>
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
    width: '100%' // Make sure it covers entire screen width
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: '#146434',
    width: '100%' // Make sure it covers entire screen width
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
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
});
