import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.hinhTron1} />
        <View style={styles.hinhTron2} />
        <Text style={{ fontSize: 25 }}>WELCOME</Text>
        <Text style={{ fontSize: 40, marginBottom: 10 }}>Bee Studio</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor={"#8391A1"}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor={"#8391A1"}
            secureTextEntry
          />
          <TouchableOpacity style={styles.loginButton} onPress={() => {
            navigation.navigate("HomeTabs")
          }}>
            <Text style={styles.loginButtonText}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={styles.orLoginWithContainer}>
            <View style={styles.line} />
            <Text style={styles.orLoginWithText}>Or Login with</Text>
          </View>
          <View style={styles.methodLogin}>
            <TouchableOpacity style={styles.loginMethodButton}>
              <Image source={require('../img/facebook.png')} style={styles.iconLogin} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginMethodButton}>
              <Image source={require('../img/google.png')} style={styles.iconLogin} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginMethodButton}>
              <Image source={require('../img/apple.png')} style={styles.iconLogin} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text>Don’t have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
          <Text style={{ color: '#F7B2B7' }}> Register Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7B2B7',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '85%',
  },
  input: {
    borderColor: '#E8ECF4',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 15,
    borderRadius: 8,
    padding: 15
  },
  loginButton: {
    backgroundColor: '#F7B2B7',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  forgetPasswordText: {
    color: '#6A707C',
    textAlign: 'right',
    marginTop: 10,
    fontSize: 14
  },
  orLoginWithContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center'
  },
  line: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#E8ECF4',
  },
  orLoginWithText: {
    color: '#6A707C',
    fontSize: 14,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10
  },
  hinhTron1: {
    height: 543,
    width: 543,
    borderRadius: 543,
    backgroundColor: '#FDF0F1',
    position: 'absolute',
    top: -400,
    alignSelf: 'flex-end',
  },
  hinhTron2: {
    height: 392,
    width: 392,
    borderRadius: 392,
    backgroundColor: '#FDF0F1',
    position: 'absolute',
    top: -190,
    right: -200,
  },
  methodLogin: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    width: '100%'
  },
  loginMethodButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
    width: '32%',
    borderColor: '#E8ECF4',
    borderWidth: 1
  },
  iconLogin: {
    height: 30,
    width: 30,
    alignSelf: 'center'
  },
  footer: {
    flexDirection: 'row',
    padding: 15,
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center'
  }
});
