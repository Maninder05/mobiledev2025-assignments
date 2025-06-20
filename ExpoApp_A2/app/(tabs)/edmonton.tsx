import { View, Text, Image, StyleSheet } from 'react-native';
import CityLink from '../../components/CityLink';
import CityInfo from '../../components/CityInfo';

export default function Edmonton() {
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
