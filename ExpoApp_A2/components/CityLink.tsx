import React from 'react';
import { Text, Linking, StyleSheet, Pressable } from 'react-native';
 
export default function CityLink({ url }: { url: string }) {
  return (
    <Pressable onPress={() => Linking.openURL(url)}>
      <Text style={styles.link}>Go to City Page</Text>
    </Pressable>
  );
}
 
const styles = StyleSheet.create({
  link: {
    color: '#1e90ff',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginBottom: 8,
  },
});
