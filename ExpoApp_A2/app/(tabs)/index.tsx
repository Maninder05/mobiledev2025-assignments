import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My New App!!</Text>
      <Text style={styles.subtitle}>Created by Group 4</Text>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image
            source={require('../../assets/images/calgary.jpg')}
            style={styles.image}
          />
          <Text style={styles.cityDesc}>
            <b style={styles.bold}>City of Snow!</b>
          </Text>
          <Pressable onPress={() => router.push('./calgary')} >
            <Text style={styles.link}>Let's Explore Calgary!</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Image
            source={require('../../assets/images/edmonton.jpg')}
            style={styles.image}
          />
          <Text style={styles.cityDesc}>
            <b style={styles.bold}>City of Sunshine!</b>
          </Text>
          <Pressable onPress={() => router.push('./edmonton')}>
            <Text style={styles.link}>Let's Explore Edmonton!</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2ff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    width: cardWidth,
    height: 450,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 330,
    borderRadius: 8,
    marginBottom: 20,
  },
  cityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0077cc',
    marginBottom: 6,
  },
  cityDesc: {
    fontSize: 13,
    color: '#444',
    textAlign: 'center',
    marginBottom: 8,
  },
  link: {
    color: '#0066cc',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  bold: {
    fontSize:20
  }
});
