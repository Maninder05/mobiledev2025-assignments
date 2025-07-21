import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import {View,Text,TextInput,StyleSheet,KeyboardAvoidingView,Platform,TouchableOpacity} from 'react-native';
import RNPickerSelect from 'react-native-picker-select'; //used for dynamic prop drilling 
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';  // its a popular HTTP client for making requests to APIs
import { API_HOST, API_KEY } from '../constants/ApiCall';

// Dropdown Menu for the months
const months = Array.from({ length: 12 }, (_, i) => ({
  label: `${i + 1}`,
  value: `${i + 1}`,
}));

 // Method to convert month val to name
const getMonthName = (monthNum: string) => {
  const names = ['','January','February','March','April','May','June','July',
    'August','September','October','November','December',];
  return names[parseInt(monthNum, 10)];
};

export default function Facts() {
  const router = useRouter();

  const [month, setMonth] = useState('');  //state will be updated whenever the value of month will change wrt setMonth()
  const [day, setDay] = useState('');
  const [fact, setFact] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {           //automat initiate when component is rendered i.e. val of month and date changes
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
            'X-RapidAPI-Key': API_KEY, //fact will be fetched once the api key is validated by the server
            'X-RapidAPI-Host': API_HOST,
          },
          params: {
            fragment: 'true',
            json: 'true',
          },
        }
      );

      const data = response.data;
      if (data && data.text && data.year) {        //if the parsed obj contains data, text and year then only output is shown
        const monthName = getMonthName(month);
        setFact(
          `${monthName} ${Number(day)}th is the day in ${data.year} that ${data.text}.`
        );
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
<<<<<<< HEAD
  
 return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Assignment Sample</Text>
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.label}>Select Month:</Text>
      <View style={styles.pickerWrapper}>
        <RNPickerSelect
          placeholder={{ label: 'Select a month', value: '' }}
          items={months}
          onValueChange={setMonth}
          value={month}
          useNativeAndroidPickerStyle={false}
          style={pickerStyles}
          Icon={() => <Ionicons name="chevron-down" size={24} color="gray" />}
        />
      </View>

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

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
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
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    marginBottom: 10,
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
});

const pickerStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: 'black',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: 'black',
    backgroundColor: '#fff',
  },
  iconContainer: {
    top: 12,
    right: 12,
  },
};

  
=======
  
 return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Assignment Sample</Text>
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.label}>Select Month:</Text>
      <View style={styles.pickerWrapper}>
        <RNPickerSelect
          placeholder={{ label: 'Select a month', value: '' }}
          items={months}
          onValueChange={setMonth}
          value={month}
          useNativeAndroidPickerStyle={false}
          style={pickerStyles}
          Icon={() => <Ionicons name="chevron-down" size={24} color="gray" />}
        />
      </View>

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

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
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
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    marginBottom: 10,
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
});

const pickerStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: 'black',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: 'black',
    backgroundColor: '#fff',
  },
  iconContainer: {
    top: 12,
    right: 12,
  },
};

  











>>>>>>> d756ad3eabe595aacc14eb54bf07051cb295474e
