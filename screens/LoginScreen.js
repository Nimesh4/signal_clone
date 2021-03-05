import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import { Button, Input, Image } from 'react-native-elements' 
import  { StatusBar } from 'expo-status-bar'
import { auth } from '../firebase';
import Icon  from 'react-native-vector-icons/FontAwesome'
import firebase from 'firebase';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    useEffect(() => {
        
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
                //console.log(authUser);
             if(authUser) {
                 navigation.replace("Home");
             }
        });

        return unsubscribe;
        
    }, []);

    const signIn = () =>{
        auth
            .signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={{
                    uri:"https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
                }}
                style={{ width:200, height:200 }}
            />
            <View style={styles.inputContainer}>
                <Input
                 placeholder="Email"
                 leftIcon={{ type:'font-awesome', name:'envelope' }} 
                 autoFocus 
                 type="email" 
                 value={email} 
                 onChangeText={(text) => setEmail(text)}
                 />
                <Input 
                 placeholder="Password"
                 leftIcon={{ type:'font-awesome', name:'lock' }}
                 secureTextEntry 
                 type="password"
                 value={password}
                 onChangeText={(text) => setpassword(text)}
                 onSubmitEditing={signIn}
                 />
            </View>

            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button 
             onPress={() => navigation.navigate("Register")} 
             containerStyle={styles.button} 
             type="outline" 
             title="Register" 
             />
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        backgroundColor:"white",
    },
    inputContainer: {
        width:300,
    },
    button: {
        width:200,
        marginTop:10,
    },

});
