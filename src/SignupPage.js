import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, validatePassword } from 'firebase/auth';
import { auth } from '../config/Firebase';

const SignupPage = () => {
    const { navigate } = useNavigation();
    const keyboardVerticalOffset = Platform.OS === 'android' ? 100 : 0;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        if (email && password) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
            } catch (err) {
                console.log('got error: ', err.message);
            }
        }
    }





    return (
        < KeyboardAvoidingView style={styles.container}
            behavior='position'
            keyboardVerticalOffset={keyboardVerticalOffset} >
            <StatusBar style="light" />
            <View>
                <Text style={styles.welcome}>WELCOME</Text>
            </View>
            <View >
                <View style={styles.namebox}>
                    <Text style={styles.nametext}>Name</Text>
                    <TextInput />
                </View>
                <View style={styles.namebox}>
                    <Text style={styles.nametext}>Email</Text>
                    <TextInput
                        value={email}
                        onChangeText={value => setEmail(value)}
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.namebox}>
                    <Text style={styles.nametext}>Password</Text>
                    <TextInput
                        value={password}
                        onChangeText={value => setPassword(value)}
                        secureTextEntry />
                </View>
            </View>
            <View style={styles.signupbox2}>
                <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.signuptext1}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lastbox}>
                <View>
                    <Text style={styles.lastbox1}>Already have account?</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigate('LoginPage')}>
                        <Text style={styles.lastbox2}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignupPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    topview: {
        display: "flex",
        flexDirection: "row",
        marginTop: 90,
        justifyContent: "center",
        gap: 20
    },
    line1: {
        marginTop: "8%"
    },
    welcome: {
        marginLeft: 30,
        // fontFamily: "MerriweatherBold",
        fontSize: 30,
        marginTop: 30
    },
    namebox: {
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
        width: "80%",
        marginLeft: 30,
        marginTop: "8%",
    },
    nametext: {
        marginBottom: 20,
        fontSize: 20,
        // fontFamily: "NunitoSansRegular",
        color: "#909090"
    },
    signupbox2: {
        height: 50,
        width: 200,
        backgroundColor: "black",
        borderRadius: 10,
        marginLeft: "25%",
        marginTop: 30
    },
    signuptext1: {
        textAlign: "center",
        color: "white",
        // fontStyle: "NunitoSansSemiBold",
        fontSize: 18,
        marginTop: 10
    },
    lastbox: {
        flexDirection: "row",
        gap: 5,
        justifyContent: "center",
        marginTop: 30
    },
    lastbox1: {
        fontSize: 18,
        // fontFamily: "NunitoSansRegular"
    },
    lastbox2: {
        fontSize: 18,
        // fontFamily: "NunitoSansSemiBold"
    }
})