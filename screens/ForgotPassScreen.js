import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';

const ForgotPassScreen = () => {
    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Forgot Password</Text>
            <View style={{justifyContent:'space-evenly',alignItems:'center',flex:1}}>
                <Image source={require('../img/Object.png')} />
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCompleteType="email"
                />
                <Text style={styles.description}>
                    Please write your email to receive a confirmation code to set a new password.
                </Text>
            </View>
            <TouchableOpacity style={{ width: windowWidth, backgroundColor: '#9775FA', position: 'absolute', bottom: 0, height: '8%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 17, color: 'white' }}>
                Confirm Mail
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ForgotPassScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: "center"
    },

    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    description: {
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'center',
    },

});
