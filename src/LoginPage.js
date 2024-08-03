import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Firebase';

const LoginPage = () => {
    const { navigate } = useNavigation();
    const keyboardVerticalOffset = Platform.OS === 'android' ? 100 : 0;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async () => {
        if (email && password) {
            try {
                await signInWithEmailAndPassword(auth, email, password);
            } catch (err) {
                console.log('got error: ', err.message);
            }
        }
    }
    return (
        <KeyboardAvoidingView style={styles.container} behavior='position'
            keyboardVerticalOffset={keyboardVerticalOffset} >
            <StatusBar style="dark" />
            <View>
                <Text style={styles.hello}>HELLO !</Text>
            </View>
            <View>
                <Text style={styles.welcomeback}>WELCOME BACK</Text>
            </View>
            <View style={styles.loginbox}>
                <View style={styles.emailbox}>
                    <Text style={styles.emailtext}>Email</Text>

                    <TextInput
                        value={email}
                        onChangeText={value => setEmail(value)}
                        autoCapitalize='none'
                        style={styles.inputbox}

                    />
                </View>
                <View style={styles.passbox}>
                    <Text style={styles.passtext}>Password</Text>
                    <TextInput
                        value={password}
                        onChangeText={value => setPassword(value)}
                        secureTextEntry
                        style={styles.inputbox}

                    />
                </View>
                
                <View style={styles.login}>
                    <TouchableOpacity onPress={handleSubmit}>
                        <Text style={styles.logintext}>Log In</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigate('SingupPage')}>
                        <Text style={styles.signup}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginPage

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
    hello: {
        // fontFamily: "GelasioRegular",
        fontSize: 30,
        color: "#606060",
        marginTop: 30,
        marginLeft: 30
    },
    welcomeback: {
        // fontFamily: "MerriweatherBold",
        fontSize: 30,
        marginLeft: 30
    },
    loginbox: {
        marginRight: 10,
        height: "50%",
    },
    emailbox: {
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
        width: "80%",
        marginLeft: 30,
        marginTop: "10%"
    },
    emailtext: {
        marginBottom: 20,
        fontSize: 20,
        // fontFamily: "GelasioRegular",
        color: "#909090"
    },
    passbox: {
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
        width: "80%",
        marginLeft: 30,
        marginTop: "10%"
    },
    passtext: {
        marginBottom: 20,
        fontSize: 20,
        // fontFamily: "GelasioRegular",
        color: "#909090"
    },
    forgot: {
        fontSize: 18,
        // fontFamily: "NunitoSansSemiBold",
        textAlign: "center",
        marginTop: 30
    },
    login: {
        height: 50,
        width: 200,
        backgroundColor: "black",
        borderRadius: 10,
        marginLeft: "23%",
        marginTop: 30
    },
    logintext: {
        color: "white",
        fontSize: 18,
        // fontFamily: "NunitoSansSemiBold",
        textAlign: "center",
        marginTop: 10
    },
    signup: {
        fontSize: 18,
        // fontFamily: "NunitoSansSemiBold",
        textAlign: "center",
        marginTop: 30
    },
    inputbox:{
        fontSize:20
    }
})