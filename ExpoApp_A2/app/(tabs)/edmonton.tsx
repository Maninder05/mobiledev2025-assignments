import { Image, StyleSheet, Text, View } from 'react-native';
import CityInfo from '../../components/CityInfo';
import CityLink from '../../components/CityLink';

export default function CalgaryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Edmonton</Text>
      <Image source={require('../../assets/images/edmonton.jpg')} style={styles.image} />
      <CityLink url="https://www.edmonton.ca/" />
      <CityInfo info="Edmonton ranks as one of Canada's sunniest cities, boasting around 2,300 hours of sunshine per year. 
      This abundance of sunlight contributes to the city's vibrant atmosphere and provides residents and visitors with ample opportunities to enjoy outdoor activities year-round. 
      With such a high number of sunny hours, it's a great environment for exploring its numerous parks, outdoor festivals, and recreational facilities." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "beige",
    padding: 20, 
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
