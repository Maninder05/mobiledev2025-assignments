import React, { useEffect, useState } from 'react';
import {useRouter} from 'expo-router';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity} from 'react-native';
import RNPickerSelect from 'react-native-picker-select'; //used for dynamic prop drilling 
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios'; // its a popular HTTP client for making requests to APIs
import { API_HOST, API_KEY } from '../constants/ApiCall';

// Dropdown Menu for the months
const months = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '10', value: '10' },
  { label: '11', value: '11' },
  { label: '12', value: '12' },
];

// Method to convert month val to name
const getMonthName = (monthNum: string) => {
  const names = [
    '', 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return names[parseInt(monthNum, 10)];
};

export default function Facts() {

  const router= useRouter();

  const [month, setMonth] = useState('');    //state will be updated whenever the value of month will change wrt setMonth()
  const [day, setDay] = useState('');
  const [fact, setFact] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {   //automat initiate when component is rendered i.e. val of month and date changes
    if (month && day && Number(day) >= 1 && Number(day) <= 31) {
      fetchFact(month, day);
    } else {
      setFact('');
      if (day !== '') {
        setError('Please enter a valid day.');
      }
    }
  }, [month, day]); 

  const fetchFact = async (month: string, day: string) => {
    try {
      const response = await axios.get(
        `https://${API_HOST}/${month}/${day}/date`,
        {
          headers: {
            'X-RapidAPI-Key': API_KEY,   //fact will be fetched once the api key is validated by the server
            'X-RapidAPI-Host': API_HOST,
          },
          params: {
            fragment: 'true',
            json: 'true',
          },
        }
      );

      const data = response.data;  //i.e. in JSON format
      if (data && data.text && data.year) {  //if the parsed obj contains data, text and year then only output is shown
        const monthName = getMonthName(month); 
        setFact(`${monthName} ${Number(day)}th is the day in ${data.year} that ${data.text}.`);
        setError('');
      } else {
        setFact('');
        setError('Oops, no fact found for this date!');
      }
    } catch (err) {
      console.error(err);
      setFact('');
      setError('Invalid API key or input. Try again!');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
 
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Assignment Sample</Text>
         <View style={{ width: 24 }} />
      </View>
     
      <Text style={styles.label}>Select Month:</Text>
      <RNPickerSelect
        placeholder={{ label: 'Select', value: '' }}
        items={months}
        onValueChange={(value) => setMonth(value)}
        style={pickerStyles}
        value={month}
      />
 
      <Text style={styles.label}>Enter Day:</Text>
      <TextInput
        placeholder="e.g. 12"
        keyboardType="numeric"
        style={styles.input}
        value={day}
        onChangeText={setDay}
      />
 
      {fact !== '' && <Text style={styles.factText}>{fact}</Text>}
      {error !== '' && <Text style={styles.errorText}>{error}</Text>}
    </KeyboardAvoidingView>
  );
}
 
// Inline Styling
const styles = StyleSheet.create({
   container: {
    padding: 10,
  },
   header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginTop: 20,
    marginBottom: 30,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  backButton: {
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  factText: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  errorText: {
    marginTop: 15,
    color: 'red',
    fontSize: 14,
  },
  backButtonContainer: {
    marginBottom: 16,
    alignItems: 'flex-start',
  },
});
 
const pickerStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    color: 'black',
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    color: 'black',
    marginBottom: 10,
  },
};

  
