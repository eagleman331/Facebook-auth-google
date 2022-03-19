import React from 'react'
import { View, Text, Button } from 'react-native'
import socialMediaAuth from '../firehook/auth';
import { facebookProvider, googleProvider } from '../firehook/authMethod';
import firebase from "../firebase";


const LoginScreen = ({navigation}) => {   
    const handleOnClick = async (provider) => {
        await socialMediaAuth(provider);
        navigation.push("Home")
      
    }
    const logOut = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
        <View>

     
        <View>
            <Text>Login</Text>
            <Button title="Facebook" onPress={() =>handleOnClick(facebookProvider) } >Facebook</Button>
            <Button title="Log IN" onPress={() =>handleOnClick(googleProvider) } >Google</Button>
            <Button title="Sign Out" onPress={logOut} >LogOut</Button>

        

        </View>
        <View>
          <Button title="Chat Screen" onPress={() => navigation.push("Chat")} />   
        </View>
        </View>
    )
}   

export default LoginScreen
