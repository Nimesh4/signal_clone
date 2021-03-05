import { StatusBar } from 'expo-status-bar';
import React, {useState, useLayoutEffect} from 'react'
import { StyleSheet,  View, KeyboardAvoidingView } from "react-native";
import { Input, Button, Text } from 'react-native-elements';
import { auth } from '../firebase';


const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(() =>{
        navigation.setOptions({
            hederBackTitle: "Login",
        });
    }, [navigation]);

    const register = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: 
                    imageUrl ||
                    "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png", 
                    
            });
        })
        .catch((error) => alert(error.message));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom:40 }}>
                Create a Signal Account
            </Text>

            <View style={styles.inputContainer}>
                <Input 
                 placeholder="Full Name"
                 leftIcon={{ type:'font-awesome', name:'user' }}
                 type="text"
                 value={name}
                 onChangeText={(text) => setName(text)}
                 />
                <Input 
                 placeholder="Email Id"
                 leftIcon={{ type:'font-awesome', name:'envelope' }}
                 type="email"
                 value={email}
                 onChangeText={(text) => setEmail(text)}
                 />
                <Input 
                 placeholder="Password"
                 leftIcon={{ type:'font-awesome', name:'lock' }}
                 type="password"
                 secureTextEntry
                 value={password}
                 onChangeText={(text) => setpassword(text)}
                 />
                <Input 
                 placeholder="Provide Profile Picture URL (Optional)"
                 leftIcon={{ type:'font-awesome', name:'image' }}
                 type="text"
                 value={imageUrl}
                 onChangeText={(text) => setImageUrl(text)}
                 onSubmitEditing={register}
                 />
           </View>

           <Button
             containerStyle={styles.button}
             raised
             onPress={register}
             title="Register"
           />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:"center",
        
        backgroundColor:"white",
    },
    button:{
        width:200,
        marginTop:10,
    },
    inputContainer:{
        paddingTop:1,
        width:320,
    }
})