<<<<<<< HEAD
import { View, Text, Button,StyleSheet,Pressable } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function Home() {
  const router = useRouter();
 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:18, fontWeight:"bold" }}>Home Page</Text>
      <Pressable style={styles.btn} onPress={() => router.push('/Facts')}>
        <Text style={styles.btnText}>Go to Assignment 3!</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: "purple",
    marginBottom: 20,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: 'beige',
    margin: 20,
    height: 50,
    width: 200,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  btnText: {
    fontWeight: 'bold',
  },
});
=======
import { View, Text, Button,StyleSheet,Pressable } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function Home() {
  const router = useRouter();
 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:18, fontWeight:"bold" }}>Home Page</Text>
      <Pressable style={styles.btn} onPress={() => router.push('/Facts')}>
        <Text style={styles.btnText}>Go to Assignment 3!</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: "purple",
    marginBottom: 20,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: 'beige',
    margin: 20,
    height: 50,
    width: 200,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  btnText: {
    fontWeight: 'bold',
  },
});
>>>>>>> d756ad3eabe595aacc14eb54bf07051cb295474e
