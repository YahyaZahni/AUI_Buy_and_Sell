import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hi! Welcome</Text>
      <Text style={styles.register}>Please register in below</Text>
      <TextInput style={styles.input} placeholder="Email or Phone Number" />
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" />
      <TextInput style={styles.input} secureTextEntry={true} placeholder="Confirm Password" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>
        Have an account? <Text style={styles.loginButton}>Log In</Text>
      </Text>
      <Text style={styles.footer}>
        We need permission for the service you use{' '}
        <Text style={styles.learnMore}>Learn More</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#255a39',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Added padding here to maintain consistent padding around the container
  },
  welcome: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  register: {
    fontSize: 25,
    color: 'white',
    marginBottom: 25,
  },
  input: {
    width: width - 40, // Adjusted width to maintain consistent padding on the sides
    backgroundColor: 'white',
    color: 'black',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1e4731',
    padding: 20,
    borderRadius: 20,
    width: width - 40, // Adjusted width here as well
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  loginText: {
    color: 'white',
  },
  loginButton: {
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    color: 'white',
  },
  learnMore: {
    textDecorationLine: 'underline',
  },
});

export default App;