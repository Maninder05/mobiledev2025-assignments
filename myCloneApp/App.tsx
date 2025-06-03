import React from 'react';
import {View, Text, StyleSheet, Image, Pressable, ScrollView} from 'react-native';

export default function App() {
  const handleBtnClick = () => {             //event will be triggered when the user presses "Result" button
    alert('Assignment 1 Completed!!');
  };

  return (
    <ScrollView style={styles.container}>           
      <View style={styles.flexbox}>
        <Image
          // '.' is used to get outside of the current folder
          source={require('./assets/floral-profile.jpg')}
          style={styles.profileImg}
        />
        <View style={{flex: 1}}>
          <Text style={styles.grpName}>The Wingers</Text>
          <Text style={styles.grpUsername}>wingers@mobile-dev</Text>
          <Text style={styles.grpBio}>Everyone takes time to bloom. So do We!⭐</Text>
        </View>
      </View>

      {/* Nav 1 */}
      <View style={styles.nav1}>
        <View style={styles.nav1Box}>
          <Text style={styles.navNum}>6</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.nav1Box}>
          <Text style={styles.navNum}>450</Text>
          <Text>Collections</Text>
        </View>
        <View style={styles.nav1Box}>
          <Text style={styles.navNum}>25</Text>
          <Text>Varieties</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
});
