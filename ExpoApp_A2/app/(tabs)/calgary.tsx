import { View, Text, Image, StyleSheet } from 'react-native';
import CityLink from '../../components/CityLink';
import CityInfo from '../../components/CityInfo';

export default function Calgary() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Calgary</Text>
      <Image source={require('../../assets/images/calgary.jpg')} style={styles.image} />
      <CityLink url="https://www.calgary.ca/home.html" />
      <CityInfo info="Calgary is a major city in the Canadian province of Alberta. As of 2021, the city proper had a population of 1,306,784 and a metropolitan population of 1,481,806 making it the third-largest city and fifth-largest metropolitan area in Canada. It's a city with a unique blend of modern amenities and a strong connection to its Cowtown roots." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#fff' },
  title: { 
    fontSize: 22, 
    marginBottom: 10, 
    fontWeight: 'bold' },
  image: { 
    width: 300, 
    height: 180, 
    marginBottom: 10 },
});
