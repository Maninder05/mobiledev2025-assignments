import { Image, StyleSheet, Text, View } from 'react-native';
import CityInfo from '../../components/CityInfo';
import CityLink from '../../components/CityLink';

export default function CalgaryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Calgary</Text>
      <Image source={require('../../assets/images/calgary.jpg')} style={styles.image} />
      <CityLink url="https://www.calgary.ca/home.html" />
      <CityInfo info="Calgary is a dynamic city. It's picturesque prairie landscapes and a vibrant urban centre. It’s entrepreneurial energy and living in the moment. 
      It's cowboy spirit, but also refined and cosmopolitan. It is no wonder Calgary was named the most liveable city in North America by The Economist two years in a row!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
     padding: 20, 
     backgroundColor:"beige",
     alignItems: 'center' },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 10 },
  image: { 
    width: 300, 
    height: 200, 
    marginBottom: 10 },
});
