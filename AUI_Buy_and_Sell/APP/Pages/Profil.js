import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions, Image } from 'react-native';
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';

const { width, height } = Dimensions.get('window');
const ProfileScreen = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  useEffect(() => {
    if (!user) {
      // Redirect or handle the user not logged in
    }
  }, [user]);

  const handlePasswordChange = async () => {
    if (!newPassword || !currentPassword) {
      Alert.alert('Error', 'Please enter all fields');
      return;
    }

    const credential = EmailAuthProvider.credential(user.email, currentPassword);

    try {
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
      Alert.alert('Success', 'Password updated successfully');
      setNewPassword('');
      setCurrentPassword('');
    } catch (error) {
      console.error('Password update error:', error);
      Alert.alert('Error', 'Failed to update password. Check your current password.');
    }
  };

  return (
    <View style={styles.container}>
    <Image
            source={require('./../Assets/Image/user.png')}
            style={styles.logo}
          />
      <Text style={styles.header}>My Profile</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Full Name:</Text>
        <Text style={styles.info}>{user ? user.displayName : 'N/A'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>{user ? user.email : 'N/A'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Change Password</Text>
        <TextInput
          style={styles.input}
          value={currentPassword}
          onChangeText={setCurrentPassword}
          placeholder="Current Password"
          secureTextEntry
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          value={newPassword}
          onChangeText={setNewPassword}
          placeholder="New Password"
          secureTextEntry
          placeholderTextColor="#666"
        />
        <TouchableOpacity style={styles.button} onPress={handlePasswordChange}>
          <Text style={styles.buttonText}>Update Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
  },
  logo: {
    width: width * 0.8,
    height: height * 0.2,
    resizeMode: 'contain',
    marginBottom: 30,
    alignItems: 'center',
    marginTop: -10
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    color: '#333',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  }
});

export default ProfileScreen;
