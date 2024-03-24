import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const PersonalScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require('../img/user_avatar.png')} style={styles.avatar} />
        <Text style={styles.username}>John Doe</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.linkContainer}>
        <Image source={require('../img/infor.png')} style={styles.icon} />
        <Text style={styles.link}>Account Information</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.linkContainer}>
        <Image source={require('../img/iconTag.png')} style={styles.icon} />
        <Text style={styles.link}>Order</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.linkContainer}>
        <Image source={require('../img/iconTag.png')} style={styles.icon} />
        <Text style={styles.link}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.linkContainer}>
        <Image source={require('../img/iconTag.png')} style={styles.icon} />
        <Text style={styles.link}>Address</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.linkContainer}>
        <Image source={require('../img/iconTag.png')} style={styles.icon} />
        <Text style={styles.link}>Wishlist</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Favourite')} style={styles.linkContainer}>
        <Image source={require('../img/Setting.png')} style={styles.icon} />
        <Text style={styles.link}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Favourite')} style={[styles.linkContainer,{position:'absolute',top:450}]}>
        <Image source={require('../img/Logout.png')} style={styles.icon} />
        <Text style={[styles.link,{color:'red'}]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop:20
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  linkContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
  icon: {
    
    marginRight: 10,
  },
  link: {
    fontSize: 18,
    color: 'black',
  },
});

export default PersonalScreen;
