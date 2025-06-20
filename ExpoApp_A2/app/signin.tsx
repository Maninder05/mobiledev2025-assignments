import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import credentialsData from '../credentials.json';
 
type Credential = {
  username: string;
  password: string;
};
 
export default function SignInScreen() {
  const router = useRouter();
  const users: Credential[] = (credentialsData as { users: Credential[] }).users;
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 
  const validate = () => {
    setError(''); // clear previous error
 
    if (username.trim().length < 5) {
      setError('Username must be at least 5 characters!');
      return false;
    }
 
    const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!pwdRegex.test(password.trim())) {
      setError('Password must be 8+ chars with upper, lower, number & special char!');
      return false;
    }
 
    return true;
  };
 
  const handleSignIn = () => {
    if (!validate()) return;
 
    const match = users.find(
      (u) => u.username === username.trim() && u.password === password.trim()
    );
 
    if (!match) {
      setError('Invalid username or password!');
      return;
    }
 
    // successful login
    router.replace('/(tabs)');
  };
 
  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Sign In Here</Text>
 
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#888"
            onChangeText={setUsername}
            value={username}
            autoCapitalize="none"
          />
 
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
 
          {error ? <Text style={styles.error}>{error}</Text> : null}
 
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
 
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#E0F7FA',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: '90%',
    maxWidth: 400,
    padding: 24,
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#00796B',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 14,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#00796B',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: '#D32F2F',
    marginBottom: 12,
    textAlign: 'center',
    fontSize: 14,
  },
});
