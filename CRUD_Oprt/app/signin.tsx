import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { supabase } from '../lib/supabase';
 
export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
 
  // Simple email format validation regex
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };
 
  const handleSignIn = async () => {
    setError('');
 
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
 
    if (!trimmedEmail) {
      setError('Please enter your email');
      return;
    }
    if (!validateEmail(trimmedEmail)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!trimmedPassword) {
      setError('Please enter your password');
      return;
    }
 
    const { error } = await supabase.auth.signInWithPassword({
      email: trimmedEmail,
      password: trimmedPassword,
    });
 
    if (error) {
      setError(error.message);
    } else {
      router.replace('/home');
    }
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Log in to continue planning your study goals 📚</Text>
 
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
 
      {error ? <Text style={styles.error}>{error}</Text> : null}
 
      <View style={styles.button}>
        <Button title="Sign In" onPress={handleSignIn} color="#4F46E5" />
      </View>
 
      <View style={styles.signup}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <Button title="Go to Sign Up" onPress={() => router.push('/signup' as any)} />
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2FF',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#4338CA',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
    borderColor: '#CBD5E0',
    borderWidth: 1,
  },
  button: {
    marginTop: 8,
    marginBottom: 16,
  },
  error: {
    color: '#DC2626',
    textAlign: 'center',
    marginBottom: 8,
  },
  signup: {
    alignItems: 'center',
  },
  signupText: {
    marginBottom: 8,
    color: '#374151',
  },
});
 
 
 
 
 
 
 
signin.tsx
 
import { Slot } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
 
export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <View style={styles.container}>
          <Slot />
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
 
 
