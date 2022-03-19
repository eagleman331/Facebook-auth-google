import React from 'react'
import { View, Text, Button } from 'react-native'
import useAuth from '../firehook/useAuth'

const HomeScreen = ({navigation}) => {
    const {user} = useAuth();
 

    const navChat = ({navigation}) => {
        navigation.push("Login")  
    }
    return (
        <View>
            <Text>warren ching</Text>
            <Button title="warren" onPress={() => navigation.push("Chat")} />
        </View>
    )
}

export default HomeScreen
