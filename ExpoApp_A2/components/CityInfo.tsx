import React from 'react';
import { Text, StyleSheet } from 'react-native';
 
export default function CityInfo({ info }: { info: string }) {
  return <Text style={styles.info}>{info}</Text>;
}
 
const styles = StyleSheet.create({
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#333',
  },
});
 
