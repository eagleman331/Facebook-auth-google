import React from 'react'
import { View, Text, Button } from 'react-native'
import firebase from "../firebase";
import { facebookProvider, googleProvider } from '../firehook/authMethod';

const ChatScreen = () => {

    const logOut = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    const handleChangeUsers =() => {

        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        return 
        firebase.auth().signInWithRedirect(googleProvider).then((res) => {
            if (res) {
                return res.user;
                
            }else {
              alert("Invalid user")  
            }       
           
        })
        .catch((er) => {
            return er
        })
    }
    return (
        <View>
            <Text>Chat Screen</Text>
            <Button title="Change user" onPress={handleChangeUsers} />
        </View>
    )
}

export default ChatScreen
