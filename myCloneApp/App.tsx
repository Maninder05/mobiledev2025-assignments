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
      
        {/* Buy Button */}
      {/* Here onPress {handleBtnClick} fxn will be called which in response alerts the output */}
       <Pressable style={styles.buyBtn} onPress={handleBtnClick}>
        <Text style={styles.buyBtnText}>Purchase Now</Text>
      </Pressable>

      {/* Image Grid */}
      <View style={styles.grid}>
        <Image source={require('./assets/lily.jpg')} style={styles.gridImage} />
        <Image source={require('./assets/mogra.jpg')} style={styles.gridImage} />
        <Image source={require('./assets/red-rose.jpg')} style={styles.gridImage} />
        <Image source={require('./assets/multi-shaded.jpg')} style={styles.gridImage} />
        <Image source={require('./assets/blue.jpg')} style={styles.gridImage} />
        <Image source={require('./assets/violet.jpg')} style={styles.gridImage} />
    </View>

      {/* Nav 2 */}
      <View style={styles.nav2}>
        {['🏠', '🔍', '➕', '🛒', '👤'].map((icon, index) => (
          <Text key={index} style={styles.nav2Icon}>
            {icon}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

{/* Styles used for styling various components */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'white'
  },
  flexbox: {
    display:'flex',  //this makes it child component of main container
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  profileImg: {
    width: 92,
    height: 92,
    borderRadius: 50,
    marginRight: 10,
  },
  grpName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  grpUsername: {
    color: 'purple',
  },
  grpBio: {
    marginTop: 4,
  },
  nav1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  nav1Box: {
    alignItems: 'center',
  },
  navNum: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  buyBtn: {
    backgroundColor: 'beige',
    margin: 20,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center', // to align text within btn in center
  },
  buyBtnText: {
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',          // to wrap images inside the grid
    marginHorizontal: 4,
    justifyContent: 'center',
  },
  gridImage: {
    width: 150,
    height: 130,
    margin: 4,
    borderRadius: 8,
  },
  nav2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 3,
    borderColor: 'purple',
    marginTop: 16,
  },
  nav2Icon: {
    fontSize: 18,
  },
});

 {/* Image References
 mogra.jpg- "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fflowers-png&psig=AOvVaw144DUyWGu4eLv9aITsHmjj&ust=1749008437454000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDdtKaq1I0DFQAAAAAdAAAAABAE"
 red-rose- "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpurepng.com%2Fphoto%2F30030%2Fflower&psig=AOvVaw144DUyWGu4eLv9aITsHmjj&ust=1749008437454000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDdtKaq1I0DFQAAAAAdAAAAABAL"
 violet- "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngfile.net%2Fphoto%2F512%2Fbeautiful-purple-flower-png-free-download&psig=AOvVaw144DUyWGu4eLv9aITsHmjj&ust=1749008437454000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDdtKaq1I0DFQAAAAAdAAAAABAV"
 blue- "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3Dwhite%2Bflower&psig=AOvVaw144DUyWGu4eLv9aITsHmjj&ust=1749008437454000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDdtKaq1I0DFQAAAAAdAAAAABAf"
 lily- "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.creativefabrica.com%2Fpng%2Fflower-png-domBxMGtV%2F&psig=AOvVaw144DUyWGu4eLv9aITsHmjj&ust=1749008437454000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDdtKaq1I0DFQAAAAAdAAAAABAp"
 multi-shaded- "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2F231231762102164999%2F&psig=AOvVaw144DUyWGu4eLv9aITsHmjj&ust=1749008437454000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDdtKaq1I0DFQAAAAAdAAAAABAz"
 floral-profile- "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fp%2FGypsy-Blooms-Floral-100063792962920%2F&psig=AOvVaw1q3yySEPsHkQA9S3n0N1oH&ust=1749008781303000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDOus6r1I0DFQAAAAAdAAAAABAE"
 */}
